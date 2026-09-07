"use client";

import { useRef, useState } from "react";
import { Loader2, Check } from "lucide-react";

const CONCERN_OPTIONS = [
    "Spine care",
    "Orthopaedics",
    "Physiotherapy",
    "Rehab and Strength",
    "Aqua Therapy",
    "Nutrition",
    "Diagnostics",
    "Not sure yet",
];

const INPUT_CLASS =
    "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 font-opensans text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition";

export default function ContactForm({ idPrefix = "contact", autoFocus = false, onSuccess }) {
    const [status, setStatus] = useState("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const firstFieldRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        if (data.website) return;

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/consult", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                const payload = await res.json().catch(() => ({}));
                throw new Error(payload.error || "Unable to send. Please try again.");
            }
            setStatus("success");
            form.reset();
            onSuccess?.();
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.message || "Something went wrong.");
        }
    }

    if (status === "success") {
        return (
            <div className="text-center py-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-coral/10 text-coral flex items-center justify-center mb-6">
                    <Check className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <h3 className="font-seasons text-2xl md:text-3xl text-navy mb-3">
                    Thanks — we’ll be in touch.
                </h3>
                <p className="font-opensans text-navy/75 leading-relaxed text-sm md:text-base">
                    Our team will contact you to confirm the next steps.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Honeypot */}
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
            />

            <div>
                <label htmlFor={`${idPrefix}-name`} className="block font-opensans text-sm text-navy/70 mb-1.5">
                    Name
                </label>
                <input
                    id={`${idPrefix}-name`}
                    ref={autoFocus ? firstFieldRef : null}
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className={INPUT_CLASS}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor={`${idPrefix}-phone`} className="block font-opensans text-sm text-navy/70 mb-1.5">
                        Phone Number
                    </label>
                    <input
                        id={`${idPrefix}-phone`}
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        className={INPUT_CLASS}
                    />
                </div>
                <div>
                    <label htmlFor={`${idPrefix}-email`} className="block font-opensans text-sm text-navy/70 mb-1.5">
                        Email <span className="text-navy/40">(optional)</span>
                    </label>
                    <input
                        id={`${idPrefix}-email`}
                        type="email"
                        name="email"
                        autoComplete="email"
                        className={INPUT_CLASS}
                    />
                </div>
            </div>

            <div>
                <label htmlFor={`${idPrefix}-concern`} className="block font-opensans text-sm text-navy/70 mb-1.5">
                    What can we help you with?
                </label>
                <select
                    id={`${idPrefix}-concern`}
                    name="concern"
                    required
                    defaultValue=""
                    className={INPUT_CLASS}
                >
                    <option value="" disabled>Select an option...</option>
                    {CONCERN_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor={`${idPrefix}-message`} className="block font-opensans text-sm text-navy/70 mb-1.5">
                    Message
                </label>
                <textarea
                    id={`${idPrefix}-message`}
                    name="message"
                    rows={4}
                    className={`${INPUT_CLASS} resize-none`}
                />
            </div>

            {status === "error" && errorMsg && (
                <p
                    role="alert"
                    className="font-opensans text-sm text-coral bg-coral/5 rounded-lg px-4 py-3"
                >
                    {errorMsg}
                </p>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="theme-button w-full !flex disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Request an Appointment"
                )}
            </button>

            <p className="font-opensans text-xs text-navy/55 text-center leading-relaxed">
                Our team will contact you to confirm the next steps.
            </p>
        </form>
    );
}
