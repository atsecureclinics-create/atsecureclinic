/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/app/**/*.{js,jsx,ts,tsx}",
    ],
    corePlugins: {
        container: false,
    },
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                white: "var(--white)",
                vanilla: "var(--vanilla)",
                coral: "var(--coral)",
                green: "var(--green)",
                navy: "var(--navy)",
            },
            fontFamily: {
                seasons: ["var(--font-the-seasons)", "sans-serif"],
            },
        },
    },
};
