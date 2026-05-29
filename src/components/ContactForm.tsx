"use client";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const MESSAGE_MIN = 10;
const MESSAGE_MAX = 1000;
const NAME_MAX = 100;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
    name?: string;
    email?: string;
    message?: string;
    token?: string;
}

const fieldClass =
    "w-full rounded-md border border-fg/15 bg-bg px-3 py-2 text-sm text-fg outline-none transition-colors placeholder:text-muted/50 focus:border-accent/60";
const labelClass = "mb-1 block font-mono text-xs text-muted";
const errorClass = "mt-1 font-mono text-xs text-red-400";

export default function ContactForm() {
    const [values, setValues] = useState({ name: "", email: "", message: "" });
    const [honeypot, setHoneypot] = useState("");
    const [token, setToken] = useState("");
    const [errors, setErrors] = useState<FieldErrors>({});
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const validate = (): boolean => {
        const next: FieldErrors = {};
        if (!values.name.trim()) next.name = "Name is required.";
        if (!values.email.trim()) next.email = "Email is required.";
        else if (!EMAIL_RE.test(values.email)) next.email = "Enter a valid email address.";
        const msg = values.message.trim();
        if (!msg) next.message = "Message is required.";
        else if (msg.length < MESSAGE_MIN) next.message = `Please write at least ${MESSAGE_MIN} characters.`;
        else if (msg.length > MESSAGE_MAX) next.message = `Please keep it under ${MESSAGE_MAX} characters.`;
        if (!token) next.token = "Please complete the verification.";
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === "submitting") return;
        if (!validate()) return;

        setStatus("submitting");
        setErrorMsg("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, honeypot, token }),
            });
            if (!res.ok) {
                const data = (await res.json().catch(() => ({}))) as { error?: string };
                throw new Error(data.error ?? "Something went wrong. Please try again.");
            }
            setStatus("success");
            setValues({ name: "", email: "", message: "" });
            setToken("");
        } catch (err: unknown) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
        }
    };

    if (status === "success") {
        return (
            <div
                role="status"
                aria-live="polite"
                className="rounded-lg border border-accent/30 bg-surface p-6 font-mono text-sm"
            >
                <p className="text-accent">› message sent ✓</p>
                <p className="mt-2 text-muted">Thanks for reaching out — I&apos;ll get back to you soon.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            {/* Honeypot: hidden from users, bots tend to fill it */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>
                    Company
                    <input
                        type="text"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label htmlFor="name" className={labelClass}>name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    maxLength={NAME_MAX}
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    className={fieldClass}
                    aria-invalid={!!errors.name}
                />
                {errors.name && <p className={errorClass}>{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="email" className={labelClass}>email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    className={fieldClass}
                    aria-invalid={!!errors.email}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="message" className={labelClass}>message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={MESSAGE_MAX}
                    value={values.message}
                    onChange={handleChange}
                    className={`${fieldClass} resize-y`}
                    aria-invalid={!!errors.message}
                />
                {errors.message && <p className={errorClass}>{errors.message}</p>}
            </div>

            {siteKey ? (
                <div>
                    <Turnstile
                        siteKey={siteKey}
                        onSuccess={setToken}
                        onExpire={() => setToken("")}
                        onError={() => setToken("")}
                        options={{ theme: "dark" }}
                    />
                    {errors.token && <p className={errorClass}>{errors.token}</p>}
                </div>
            ) : (
                <p className={errorClass}>Verification is not configured (missing Turnstile site key).</p>
            )}

            {status === "error" && (
                <p role="alert" aria-live="assertive" className="font-mono text-xs text-red-400">
                    {errorMsg}
                </p>
            )}

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-fit rounded-md border border-accent/50 px-5 py-2 font-mono text-sm text-accent transition-colors hover:cursor-pointer hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {status === "submitting" ? "sending..." : "send_message"}
            </button>
        </form>
    );
}
