"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import ContactForm from "../contactform";

export default function ConsultModal({ isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen, onClose]);

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
                    className="absolute top-2 md:top-4 right-2 md:right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-vanilla transition z-10 cursor-pointer"
                >
                    <X className="w-5 h-5 text-navy" />
                </button>

                <div className="p-4 md:p-10">
                    <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-coral font-extrabold font-opensans mb-3">
                        Request an Appointment
                    </p>
                    <h2
                        id="consult-title"
                        className="font-seasons text-2xl md:text-3xl text-navy mb-2 leading-tight"
                    >
                        Care that listens starts here.
                    </h2>
                    <p className="font-opensans text-navy/70 mb-6 leading-relaxed text-sm md:text-base">
                        At @SecureClinics, appointments are not rushed. Your concern is reviewed carefully and directed to the right specialist — spine, orthopaedics, physiotherapy, diagnostics, rehabilitation or nutrition.
                    </p>

                    <ContactForm idPrefix="consult" autoFocus />
                </div>
            </div>
        </div>
    );
}
