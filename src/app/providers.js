"use client";

import { ConsultModalProvider } from "./components/consultmodal/provider";

export default function Providers({ children }) {
    return <ConsultModalProvider>{children}</ConsultModalProvider>;
}
