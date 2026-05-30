import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const MESSAGE_MIN = 10;
const MESSAGE_MAX = 1000;
const NAME_MAX = 100;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactBody {
    name?: string;
    email?: string;
    message?: string;
    honeypot?: string;
}

export async function POST(req: NextRequest) {
    let body: ContactBody;
    try {
        body = (await req.json()) as ContactBody;
    } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    // Honeypot — bots fill the hidden field. Pretend success so they learn nothing.
    if ((body.honeypot ?? "").trim() !== "") {
        return NextResponse.json({ ok: true });
    }

    // Server-side validation (never trust the client)
    if (!name || name.length > NAME_MAX) {
        return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
        return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
    }
    if (message.length < MESSAGE_MIN || message.length > MESSAGE_MAX) {
        return NextResponse.json({ error: "Message must be 10–1000 characters." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const to = process.env.CONTACT_TO_EMAIL ?? "jason.louie.614@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

    const resend = new Resend(apiKey);
    try {
        const { error } = await resend.emails.send({
            from,
            to,
            replyTo: email,
            subject: `Portfolio contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });
        if (error) {
            return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 502 });
        }
    } catch {
        return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
