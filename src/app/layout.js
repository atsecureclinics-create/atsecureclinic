import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Providers from "./providers";

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
      path: "./fonts/TheSeasons-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/TheSeasons-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TheSeasons-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/theseasons-it.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/theseasons-bdit.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-the-seasons",
  display: "swap",
  fallback: ["Open Sans", "Georgia", "Times New Roman", "serif"],
  adjustFontFallback: "Times New Roman",
});

export const metadata = {
  title: "Secure Clinics",
  description: "Secure Clinics — integrated spine and orthopaedic care in Mumbai. Conservative-first, specialist-led, and built around your recovery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KKPXBX86');`
        }} />
      </head>
      <body
        className={`${theSeasons.variable} ${openSans.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKPXBX86"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
