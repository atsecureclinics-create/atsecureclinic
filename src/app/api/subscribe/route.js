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
    <title>New newsletter subscriber</title>
</head>
<body style="margin:0;padding:0;background:#f6f2ef;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
    <div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#f6f2ef;">New subscriber: ${escapeHtml(email)} — Stay In Touch form on secureclinics.com</div>
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
                                        New Subscriber
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:36px 32px 8px;text-align:center;">
                            <div style="display:inline-block;background:#fff1ec;border-radius:999px;padding:8px 16px;margin-bottom:18px;">
                                <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#ff6742;font-weight:700;">Stay In Touch</span>
                            </div>
                            <h1 style="margin:0 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.25;color:#282d38;font-weight:700;">You have a new subscriber.</h1>
                            <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:#4a5160;">Submitted from the footer form on secureclinics.com.</p>
                            <p style="margin:0 0 28px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#8a8f9c;">${escapeHtml(submittedAt)} IST</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0 32px 8px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f6f2ef;border-radius:12px;overflow:hidden;">
                                <tr>
                                    <td style="padding:14px 24px;border-bottom:${interest ? "1px solid #eef0f3" : "none"};font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8a8f9c;font-weight:600;width:120px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;">Email</td>
                                    <td style="padding:14px 24px;border-bottom:${interest ? "1px solid #eef0f3" : "none"};font-size:16px;color:#282d38;font-weight:600;vertical-align:top;font-family:Arial,Helvetica,sans-serif;"><a href="mailto:${escapeHtml(email)}" style="color:#282d38;text-decoration:none;border-bottom:1px solid #ff6742;">${escapeHtml(email)}</a></td>
                                </tr>
                                ${interest ? `
                                <tr>
                                    <td style="padding:14px 24px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8a8f9c;font-weight:600;width:120px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;">Interest</td>
                                    <td style="padding:14px 24px;font-size:16px;color:#282d38;font-weight:600;vertical-align:top;font-family:Arial,Helvetica,sans-serif;">${escapeHtml(interest)}</td>
                                </tr>
                                ` : ""}
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:28px 32px 8px;text-align:center;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
                                <tr>
                                    <td style="background:#ff6742;border-radius:999px;">
                                        <a href="mailto:${escapeHtml(email)}?subject=Welcome%20to%20Secure%20Clinics" style="display:inline-block;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.02em;">Send a welcome →</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
