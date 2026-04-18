"use client";

import { useEffect, useRef, useState } from "react";
import { X, Loader2, Check } from "lucide-react";

const CONCERN_OPTIONS = [
    "Spine care",
    "Knee care",
    "Shoulder care",
    "Hip care",
    "Foot & ankle care",
    "Hand & upper limb care",
    "Physiotherapy & rehab",
    "Strength training / Pilates",
    "Aqua therapy",
    "Clinical nutrition",
    "Diagnostics",
    "Osteoporosis & bone health",
    "Other",
];

const INPUT_CLASS =
    "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 font-opensans text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition";

export default function ConsultModal({ isOpen, onClose }) {
    const [status, setStatus] = useState("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const firstFieldRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const t = setTimeout(() => firstFieldRef.current?.focus(), 30);

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
            clearTimeout(t);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!isOpen) {
            setStatus("idle");
            setErrorMsg("");
        }
    }, [isOpen]);

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
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.message || "Something went wrong.");
        }
    }

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="consult-title"
        >
            <div
                className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-vanilla transition z-10 cursor-pointer"
                >
                    <X className="w-5 h-5 text-navy" />
                </button>

                <div className="p-8 md:p-10">
                    {status === "success" ? (
                        <div className="text-center py-6">
                            <div className="mx-auto w-16 h-16 rounded-full bg-coral/10 text-coral flex items-center justify-center mb-6">
                                <Check className="w-8 h-8" strokeWidth={2.5} />
                            </div>
                            <h2 id="consult-title" className="font-seasons text-3xl md:text-4xl text-navy mb-3">
                                Thanks — we’ll be in touch.
                            </h2>
                            <p className="font-opensans text-navy/75 leading-relaxed mb-8">
                                A member of our team will reach out within one working day to confirm your consultation.
                            </p>
                            <button
                                type="button"
                                onClick={onClose}
                                className="theme-button !inline-flex"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <>
                            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-coral font-extrabold font-opensans mb-3">
                                Book a Consultation
                            </p>
                            <h2
                                id="consult-title"
                                className="font-seasons text-2xl md:text-3xl text-navy mb-2 leading-tight"
                            >
                                Tell us a little about you.
                            </h2>
                            <p className="font-opensans text-navy/70 mb-6 leading-relaxed">
                                We’ll reach out within one working day to schedule your visit.
                            </p>

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
                                    <label
                                        htmlFor="consult-name"
                                        className="block font-opensans text-sm text-navy/70 mb-1.5"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="consult-name"
                                        ref={firstFieldRef}
                                        type="text"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        className={INPUT_CLASS}
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="consult-phone"
                                            className="block font-opensans text-sm text-navy/70 mb-1.5"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            id="consult-phone"
                                            type="tel"
                                            name="phone"
                                            required
                                            autoComplete="tel"
                                            className={INPUT_CLASS}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="consult-email"
                                            className="block font-opensans text-sm text-navy/70 mb-1.5"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="consult-email"
                                            type="email"
                                            name="email"
                                            required
                                            autoComplete="email"
                                            className={INPUT_CLASS}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="consult-concern"
                                        className="block font-opensans text-sm text-navy/70 mb-1.5"
                                    >
                                        Area of Concern
                                    </label>
                                    <select
                                        id="consult-concern"
                                        name="concern"
                                        defaultValue=""
                                        className={INPUT_CLASS}
                                    >
                                        <option value="">Select...</option>
                                        {CONCERN_OPTIONS.map((o) => (
                                            <option key={o} value={o}>
                                                {o}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="consult-message"
                                        className="block font-opensans text-sm text-navy/70 mb-1.5"
                                    >
                                        How can we help? <span className="text-navy/40">(optional)</span>
                                    </label>
                                    <textarea
                                        id="consult-message"
                                        name="message"
                                        rows={3}
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
                                        "Submit request"
                                    )}
                                </button>

                                <p className="font-opensans text-xs text-navy/55 text-center leading-relaxed">
                                    By submitting, you agree to be contacted by Secure Clinics about your inquiry.
                                </p>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
