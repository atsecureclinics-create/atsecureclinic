"use client";

import { createContext, useCallback, useContext, useState } from "react";
import ConsultModal from "./modal";

const ConsultContext = createContext(null);

export function ConsultModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return (
        <ConsultContext.Provider value={{ isOpen, open, close }}>
            {children}
            <ConsultModal isOpen={isOpen} onClose={close} />
        </ConsultContext.Provider>
    );
}

export function useConsult() {
    const ctx = useContext(ConsultContext);
    if (!ctx) {
        throw new Error("useConsult must be used within ConsultModalProvider");
    }
    return ctx;
}
