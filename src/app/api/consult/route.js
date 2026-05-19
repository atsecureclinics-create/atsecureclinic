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

    const detailRow = (label, value) => `
        <tr>
            <td style="padding:14px 24px;border-bottom:1px solid #eef0f3;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8a8f9c;font-weight:600;width:120px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;">${label}</td>
            <td style="padding:14px 24px;border-bottom:1px solid #eef0f3;font-size:16px;color:#282d38;font-weight:600;vertical-align:top;font-family:Arial,Helvetica,sans-serif;">${value}</td>
        </tr>
    `;

    const submittedAt = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
    });

    const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>New consultation request</title>
</head>
<body style="margin:0;padding:0;background:#f6f2ef;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
    <div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#f6f2ef;">New consultation request from ${escapeHtml(name)} — submitted via secureclinics.com</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f6f2ef;padding:32px 16px;">
        <tr>
            <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(40,45,56,0.08);">
                    <tr>
                        <td style="background:#282d38;padding:32px 32px 28px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                <tr>
                                    <td style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.01em;">
                                        Secure<span style="color:#ff6742;">Clinics</span>
                                    </td>
                                    <td align="right" style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#b0c0cc;font-weight:600;">
                                        New Enquiry
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:36px 32px 8px;">
                            <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#ff6742;font-weight:700;">Consultation request</p>
                            <h1 style="margin:0 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:#282d38;font-weight:700;">${escapeHtml(name)} wants to talk to you.</h1>
                            <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:#4a5160;">A new enquiry was just submitted on secureclinics.com. Reach out soon — they're waiting to hear back.</p>
                            <p style="margin:0 0 28px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#8a8f9c;">Submitted ${escapeHtml(submittedAt)} IST</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0 32px 8px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f6f2ef;border-radius:12px;overflow:hidden;">
                                ${detailRow("Name", escapeHtml(name))}
                                ${detailRow("Phone", `<a href="tel:${escapeHtml(phone)}" style="color:#282d38;text-decoration:none;border-bottom:1px solid #ff6742;">${escapeHtml(phone)}</a>`)}
                                ${email ? detailRow("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#282d38;text-decoration:none;border-bottom:1px solid #ff6742;">${escapeHtml(email)}</a>`) : ""}
                                ${concern ? detailRow("Concern", escapeHtml(concern)) : ""}
                            </table>
                        </td>
                    </tr>
                    ${message ? `
                    <tr>
                        <td style="padding:24px 32px 8px;">
                            <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8a8f9c;font-weight:600;">Message</p>
                            <div style="background:#f6f2ef;border-left:3px solid #ff6742;border-radius:8px;padding:18px 22px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#282d38;white-space:pre-wrap;">${escapeHtml(message)}</div>
                        </td>
                    </tr>
                    ` : ""}
                    ${email ? `
                    <tr>
                        <td style="padding:28px 32px 8px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="background:#ff6742;border-radius:999px;">
                                        <a href="mailto:${escapeHtml(email)}?subject=Re:%20Your%20enquiry%20with%20Secure%20Clinics" style="display:inline-block;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.02em;">Reply to ${escapeHtml(name.split(" ")[0])} →</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    ` : ""}
                    <tr>
                        <td style="padding:32px 32px 36px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #eef0f3;padding-top:24px;">
                                <tr>
                                    <td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#8a8f9c;line-height:1.6;">
                                        Secure Clinics · Marine Drive, Mumbai<br>
                                        Sent automatically from secureclinics.com
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

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
