/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/app/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
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
                navylight: "var(--navylight)",
            },

            fontFamily: {
                seasons: [
                    "var(--font-the-seasons)",
                    "ui-serif",
                    "Georgia",
                    "Times New Roman",
                    "serif",
                ],

                opensans: [
                    "var(--font-open-sans)",
                    "sans-serif",
                ],
            },
        },
    },
};




{/* <span className="text-white inline-block">
                  <AtTheRate size={30} className="block md:hidden" textStyle="inline-block md:hidden" />
                  <AtTheRate size={35} className="hidden md:inline-block" textStyle="hidden md:inline-block" /></span> */}