import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Required env vars (see .env.local.example):
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO
//   SMTP_SECURE (optional: "true" for 465, else STARTTLS on 587)

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s = "") {
    return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(request) {
    let payload;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const name = String(payload.name ?? "").trim();
    const phone = String(payload.phone ?? "").trim();
    const email = String(payload.email ?? "").trim();
    const concern = String(payload.concern ?? "").trim();
    const message = String(payload.message ?? "").trim();
    const honeypot = String(payload.website ?? "").trim();

    if (honeypot) {
        return NextResponse.json({ ok: true });
    }

    if (!name || !phone) {
        return NextResponse.json(
            { error: "Name and phone are required." },
            { status: 400 }
        );
    }

    if (email && !EMAIL_RE.test(email)) {
        return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    if (name.length > 120 || phone.length > 40 || email.length > 160 || message.length > 2000) {
        return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM ?? user;
    const to = process.env.SMTP_TO ?? "hello@secureclinics.com";

    if (!host || !user || !pass || !from) {
        console.error("Consult form: SMTP env vars are not configured.");
        return NextResponse.json(
            { error: "Email service is not configured. Please call us directly." },
            { status: 500 }
        );
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: process.env.SMTP_SECURE === "true" || port === 465,
        auth: { user, pass },
    });

    const subject = `New consultation request — ${name}`;

    const textBody = [
        `New consultation request from the website.`,
        ``,
        `Name: ${name}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : null,
        concern ? `Area of concern: ${concern}` : null,
        message ? `\nMessage:\n${message}` : null,
    ]
        .filter(Boolean)
        .join("\n");

    const htmlBody = `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color: #282d38; max-width: 560px;">
            <h2 style="font-family: Georgia, serif; color: #282d38; margin: 0 0 16px;">New consultation request</h2>
            <p style="color: #4a5160; margin: 0 0 20px;">The following enquiry was submitted on secureclinics.com.</p>
            <table style="border-collapse: collapse; width: 100%; font-size: 15px;">
                <tr><td style="padding: 6px 0; color: #4a5160; width: 140px;">Name</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(name)}</td></tr>
                <tr><td style="padding: 6px 0; color: #4a5160;">Phone</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(phone)}</td></tr>
                ${email ? `<tr><td style="padding: 6px 0; color: #4a5160;">Email</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(email)}</td></tr>` : ""}
                ${concern ? `<tr><td style="padding: 6px 0; color: #4a5160;">Concern</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(concern)}</td></tr>` : ""}
            </table>
            ${message ? `<div style="margin-top: 20px;"><p style="color: #4a5160; margin: 0 0 6px;">Message</p><p style="white-space: pre-wrap; margin: 0; line-height: 1.55;">${escapeHtml(message)}</p></div>` : ""}
        </div>
    `;

    try {
        await transporter.sendMail({
            from,
            to,
            ...(email ? { replyTo: email } : {}),
            subject,
            text: textBody,
            html: htmlBody,
        });
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Consult form: sendMail failed", err);
        return NextResponse.json(
            { error: "Unable to send your request right now. Please try again or call us directly." },
            { status: 500 }
        );
    }
}
