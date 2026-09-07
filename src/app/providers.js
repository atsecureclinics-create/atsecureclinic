"use client";

import { ConsultModalProvider } from "./(main)/components/consultmodal/provider";

export default function Providers({ children }) {
    return <ConsultModalProvider>{children}</ConsultModalProvider>;
}
