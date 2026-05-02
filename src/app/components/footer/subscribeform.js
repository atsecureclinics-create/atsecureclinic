"use client";

import { useState } from "react";
import { ChevronDown, Loader2, Check } from "lucide-react";

const INTERESTS = [
    "Spine and Orthopaedic Care",
    "Physiotherapy and Recovery",
    "Book a Consult",
];

export default function SubscribeForm() {
    const [status, setStatus] = useState("idle");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        if (data.website) return;

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                const payload = await res.json().catch(() => ({}));
                throw new Error(payload.error || "Unable to subscribe right now.");
            }
            setStatus("success");
            form.reset();
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.message || "Something went wrong.");
        }
    }

    if (status === "success") {
        return (
            <div className="flex items-start gap-3 bg-white/60 rounded-2xl px-5 py-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-coral/10 text-coral flex items-center justify-center">
                    <Check className="w-4 h-4" strokeWidth={2.5} />
                </div>
                <p className="font-opensans text-sm leading-relaxed text-navy">
                    Thanks for subscribing — we’ll be in touch with something useful, not noisy.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
            />

            <div className="relative group">
                <select
                    name="interest"
                    defaultValue=""
                    className="w-full appearance-none bg-white/60 border-none rounded-2xl px-5 py-3 md:py-4 text-sm font-semibold focus:ring-2 focus:ring-[#00434b]/20 transition-all cursor-pointer"
                >
                    <option value="" disabled>I’m interested in...</option>
                    {INTERESTS.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                autoComplete="email"
                className="w-full bg-white/60 border-none rounded-2xl px-5 py-3 md:py-4 text-sm font-semibold placeholder:opacity-40 focus:ring-2 focus:ring-[#00434b]/20 transition-all"
            />

            {status === "error" && errorMsg && (
                <p
                    role="alert"
                    className="font-opensans text-xs text-coral bg-coral/5 rounded-lg px-4 py-2"
                >
                    {errorMsg}
                </p>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full theme-button !flex disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Subscribing...
                    </>
                ) : (
                    "Subscribe"
                )}
            </button>
        </form>
    );
}
