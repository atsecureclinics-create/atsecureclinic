import { Fraunces, Inter } from "next/font/google";
import "./landing.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export default function LandingLayout({ children }) {
  return (
    <div
      className={`${fraunces.variable} ${inter.variable} landing-layout`}
    >
      {children}
    </div>
  );
}