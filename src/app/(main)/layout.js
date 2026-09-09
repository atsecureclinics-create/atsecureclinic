import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

import Header from "./components/header";
import Footer from "./components/footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
  display: "swap",
});

const theSeasons = localFont({
  src: [
    {
      path: "../fonts/TheSeasons-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/TheSeasons-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TheSeasons-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/theseasons-it.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/theseasons-bdit.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-the-seasons",
  display: "swap",
  fallback: ["Open Sans", "Georgia", "Times New Roman", "serif"],
  adjustFontFallback: "Times New Roman",
});

export default function MainLayout({ children }) {
  return (
    <div
      className={`${theSeasons.variable} ${openSans.variable} main-layout`}
    >
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}