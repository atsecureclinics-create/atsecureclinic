import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Reuses the same SMTP env vars as /api/consult:
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

    const email = String(payload.email ?? "").trim();
    const interest = String(payload.interest ?? "").trim();
    const honeypot = String(payload.website ?? "").trim();

    if (honeypot) {
        return NextResponse.json({ ok: true });
    }

    if (!email) {
        return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    if (!EMAIL_RE.test(email)) {
        return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    if (email.length > 160 || interest.length > 120) {
        return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM ?? user;
    const to = process.env.SMTP_TO ?? "hello@secureclinics.com";

    if (!host || !user || !pass || !from) {
        console.error("Subscribe form: SMTP env vars are not configured.");
        return NextResponse.json(
            { error: "Subscription service is not configured." },
            { status: 500 }
        );
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: process.env.SMTP_SECURE === "true" || port === 465,
        auth: { user, pass },
    });

    const subject = `New newsletter subscriber — ${email}`;

    const textBody = [
        `New subscriber from the footer "Stay In Touch" form.`,
        ``,
        `Email: ${email}`,
        interest ? `Interest: ${interest}` : null,
    ]
        .filter(Boolean)
        .join("\n");

    const htmlBody = `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color: #282d38; max-width: 560px;">
            <h2 style="font-family: Georgia, serif; color: #282d38; margin: 0 0 16px;">New newsletter subscriber</h2>
            <p style="color: #4a5160; margin: 0 0 20px;">Submitted from the footer "Stay In Touch" form on secureclinics.com.</p>
            <table style="border-collapse: collapse; width: 100%; font-size: 15px;">
                <tr><td style="padding: 6px 0; color: #4a5160; width: 140px;">Email</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(email)}</td></tr>
                ${interest ? `<tr><td style="padding: 6px 0; color: #4a5160;">Interest</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(interest)}</td></tr>` : ""}
            </table>
        </div>
    `;

    try {
        await transporter.sendMail({
            from,
            to,
            replyTo: email,
            subject,
            text: textBody,
            html: htmlBody,
        });
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Subscribe form: sendMail failed", err);
        return NextResponse.json(
            { error: "Unable to subscribe right now. Please try again." },
            { status: 500 }
        );
    }
}
