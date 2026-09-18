"use client";

import {
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

import "./MobileContactBar.css";

const MobileContactBar = () => {
  const handleCall = () => {
    window.location.href = "tel:+919833165670";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919833165670",
      "_blank"
    );
  };

const handleMap = () => {
    const destination =
      "At Secure Clinics, Ground floor, Tarabai Hall, Netaji Subhash Chandra Bose Rd, Marine Drive, Mumbai, Maharashtra 400002";

    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      destination
    )}&travelmode=driving`;

    window.open(url, "_blank");
  };

  return (
    <div className="mobile-contact-bar">
      <button
        className="mobile-contact-item"
        onClick={handleCall}
      >
        <Phone size={32} strokeWidth={1.8} />
        <span>Call</span>
      </button>

      <button
        className="mobile-contact-item"
        onClick={handleWhatsApp}
      >
        <MessageCircle size={32} strokeWidth={1.8} />
        <span>Whatsapp</span>
      </button>

      <button
        className="mobile-contact-item"
        onClick={handleMap}
      >
        <MapPin size={32} strokeWidth={1.8} />
        <span>Map</span>
      </button>
    </div>
  );
};

export default MobileContactBar;