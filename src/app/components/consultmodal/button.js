"use client";

import { useConsult } from "./provider";

export default function ConsultButton({
    children,
    className = "",
    type = "button",
    onClick,
    ...rest
}) {
    const { open } = useConsult();

    function handleClick(event) {
        onClick?.(event);
        if (event.defaultPrevented) return;
        open();
    }

    return (
        <button type={type} onClick={handleClick} className={className} {...rest}>
            {children}
        </button>
    );
}
