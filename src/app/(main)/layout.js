// src/app/(main)/layout.js

import Header from "./components/header";
import Footer from "./components/footer";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}