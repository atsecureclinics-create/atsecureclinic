"use client";

import { useState } from "react";
import aquapool from "../../../public/images/aquapool.jpg";
import Aquatreadmill from "../../../public/images/Aquatreadmill.jpg";
import IceBath from "../../../public/images/IceBath.jpg";
import Sauna from "../../../public/images/Sauna.jpg";
import Startyour from "../../../public/images/Startyour.jpg";
import AishwaryaChorge from "../../../public/doctors/aishwarya-chorge.webp";
import ShrutiKainya from "../../../public/doctors/shruti-kamya.webp";
import HastiGala from "../../../public/doctors/hasti-gala.webp";
import NirmalSolanki from "../../../public/doctors/nirmal-solanki.webp";
import RaenaShah from "../../../public/doctors/raena-shah.webp";

const galleryImages = [
  "/common/1.png",
  "/common/2.png",
  "/common/3.png",
  "/common/4.png",
  "/common/5.png",
  "/common/6.png",
  "/common/7.png",
];

const galleryItems = [
  ["Hydrotherapy pool, wide shot", galleryImages[0]],
  ["Rehab gym", galleryImages[1]],
  ["Reception / waiting area", galleryImages[2]],
  ["Private treatment room", galleryImages[3]],
  ["Chair lift / pool access", galleryImages[4]],
  ["X-ray / diagnostics room", galleryImages[5]],
  ["Aqua treadmill", galleryImages[6]],
];

const teamMembers = [
  {
    name: "Raena Shah",
    position: "Co-Founder and COO",
    image: "/doctors/raena-shah.webp",
  },
  {
    name: "Aishwarya chorge",
    position: "Consultant Physiotherapist",
    image: "/doctors/aishwarya-chorge.webp",
  },
  {
    name: "Shruti Kainya",
    position: "AConsultant Nutritionist",
    image: "/doctors/shruti-kamya.webp",
  },
  {
    name: "Hasti Gala",
    position: "Consultant Nutritionist",
    image: "/doctors/hasti-gala.webp",
  },
  {
    name: "Dinky Shah",
    position: "Consultant Physiotherapist and Co-Founder",
    image: "/doctors/dinky-shah.webp",
  }
];

const faqs = [
  {
    question: "How do I know if I need physiotherapy or aqua therapy?",
    answer:
      "You don't need to figure this out yourself. Tell us your symptoms on the call and we'll recommend the right track, or a combination, based on your pain levels and condition. A clinical assessment confirms the plan.",
  },
  {
    question:
      "Can I start with aqua therapy and move to physiotherapy later?",
    answer:
      "Yes. Many patients start in water when land-based exercise is too painful or too early after surgery, then transition to physiotherapy as strength and tolerance improve. Your therapists coordinate this transition directly.",
  },
  {
    question: "Do I need a doctor's referral to book?",
    answer:
      "No referral needed. You can book directly with our specialists. If you have prior reports or prescriptions, bring them along to your first visit.",
  },
  {
    question: "Do I need to know how to swim for aqua therapy?",
    answer:
      "No. A trained therapist is with you throughout the session. Aqua therapy is designed for rehabilitation, not swimming ability.",
  },
  {
    question: "Is physiotherapy or aqua therapy painful?",
    answer:
      "Some exercises may cause mild discomfort as part of recovery, but treatment intensity is always adjusted to your tolerance. Water-based sessions are typically lower-impact than land-based ones.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This depends on your diagnosis, severity and recovery goals. Your specialist will outline a personalised plan and session count after your assessment.",
  },
  {
    question: "Is the clinic wheelchair or crutches friendly?",
    answer:
      "Yes, completely. Secure Clinics has step-free entry, wide corridors and a chair lift for pool access.",
  },
  {
    question: "Can I get a same-day appointment?",
    answer:
      "We do our best to accommodate urgent cases. Call or WhatsApp us and we'll check same-day availability. For planned visits, booking in advance is recommended.",
  },
  {
    question: "Do you offer home visits?",
    answer:
      "Yes. If you're in pain or unable to travel to the clinic, call or WhatsApp us to arrange a home visit.",
  },
  {
    question: "Is there a female therapist or doctor available?",
    answer:
      "Yes. Female doctors and therapists are part of the team. Let us know when booking if you'd prefer to be seen by a female specialist.",
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    track: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    track: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      phone: "",
      track: "",
    };

    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = "Enter your name";
      valid = false;
    }

    const phoneDigits = form.phone.replace(/\D/g, "");

    if (phoneDigits.length !== 10) {
      newErrors.phone = "Enter a valid 10-digit number";
      valid = false;
    }

    if (!form.track) {
      newErrors.track = "Pick one option";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="landing-page">
      <header className="topbar">
        <div className="wrap">
          <a href="#top" className="brand">
            <span className="dot" aria-hidden="true"></span>
            Secure Clinics
          </a>

          <span className="topline">
            Marine Drive, Mumbai · Mon–Sat, 8am–9pm
          </span>

          <div className="topbar-cta">
            <a
              href="tel:+91XXXXXXXXXX"
              className="btn btn-outline btn-sm"
            >
              Call now
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="btn btn-primary btn-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main id="top">

        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div>
              <span
                className="eyebrow landing-eyebrow"
              >
                Physiotherapy & Aqua Therapy, Marine Drive
              </span>

              <h1>
                One rehab team.
                <br />
                Land <em>and</em> water, whichever gets you moving faster.
              </h1>

              <p className="lede">
                A single clinical assessment decides whether your recovery
                starts on the mat, in the pool, or both — guided by
                physiotherapists and surgeons working from the same plan.
              </p>

              <div className="hero-ctas">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="btn btn-primary"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>

                  Call for a same-day slot
                </a>

                <a href="#book" className="btn btn-outline">
                  Book a clinical assessment
                </a>
              </div>

              <div className="trust-row">
                <span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  Surgeons + physios on one team
                </span>
                <span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  Medical-grade hydrotherapy pool
                </span>
                <span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  Wheelchair & crutch friendly
                </span>
              </div>
            </div>

            <div className="hero-media">
              <Placeholder
                ratio="ph-4-5"
                tag="Video"
                iframe={
                  <iframe
                    className="hero-video"
                    src="https://www.youtube.com/embed/C1wEdta0hOg?si=8dsg6-HDw7NBNcvO&autoplay=1&mute=1"
                    title="Secure Clinics"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                }
              />
            </div>
          </div>
        </section>

        {/* AUTHORITY */}
        <section className="band-white">
          <div className="wrap split-row">
            <div className="col-text">
              <span className="eyebrow">
                Why one programme, two modalities
              </span>

              <h2>
                Recovery works best when it's guided, not guessed
              </h2>

              <p className="muted-text">
                Physiotherapy and aqua therapy are both part of
                non-surgical orthopaedic and spine care at Secure Clinics.
                A single assessment maps your diagnosis, pain levels and
                movement limits onto the right combination — land-based
                rehab, water-based rehab, or a phased mix of both as your
                tolerance improves.
              </p>

              <ul className="authority-list">
                <li>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3E7C8C"
                    strokeWidth="2"
                    style={{ marginTop: "2px" }}
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>

                  <span>
                    Physiotherapists, surgeons and doctors discuss your case internally.
                  </span>
                </li>

                <li>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3E7C8C"
                    strokeWidth="2"
                    style={{ marginTop: "2px" }}
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>

                  <span>
                    Water reduces joint load when land-based exercise feels too painful or
                    too early.
                  </span>
                </li>

                <li>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3E7C8C"
                    strokeWidth="2"
                    style={{ marginTop: "2px" }}
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>

                  <span>
                    As tolerance builds, you transition from pool to mat — no separate
                    bookings, no repeated history-taking.
                  </span>
                </li>
              </ul>

              <div className="stat-grid">
                <div className="stat-card">
                  <b>1</b>
                  <span>assessment decides your plan</span>
                </div>

                <div className="stat-card">
                  <b>2</b>
                  <span>modalities under one roof</span>
                </div>

                <div className="stat-card">
                  <b>0</b>
                  <span>referrals needed to start</span>
                </div>
              </div>
            </div>

            <div className="col-media">
              <Placeholder
                ratio="ph-4-5"
                tag="Photo"
                image={IceBath.src}
                label="Physio + surgeon reviewing a patient's plan together"
              />
            </div>
          </div>
        </section>

        {/* TWO TRACKS */}
        <section className="band-sand">
          <div className="wrap">
            <div className="section-head center">
              <span className="eyebrow">
                How treatment is structured
              </span>

              <h2>Two tracks. One recovery plan.</h2>

              <p>
                Every patient is assessed once, then placed on the track —
                or combination — that fits their diagnosis and pain
                tolerance.
              </p>
            </div>

            <div className="tracks">
              <Track
                type="land"
                title="Land — Physiotherapy"
                subtitle="Rehab gym / manual therapy session"
                image={Startyour.src}
                imageLabel="Rehab gym / manual therapy session"
                items={[
                  [
                    "Advanced physiotherapy rehab",
                    "Manual therapy, therapeutic exercise, posture correction, functional retraining",
                  ],
                  [
                    "Orthopaedic rehabilitation",
                    "Joint rehab, muscle strengthening, movement retraining, balance work",
                  ],
                  [
                    "Post-surgical physiotherapy",
                    "Restoring movement, reducing stiffness, rebuilding strength after procedures",
                  ],
                ]}
              />

              <Track
                type="water"
                title="Water — Aqua Therapy"
                subtitle="Buoyancy-assisted rehab when land feels too much"
                image={aquapool.src}
                imageLabel="Hydrotherapy pool / aqua session in progress"
                items={[
                  [
                    "Bad Ragaz Ring Method",
                    "Therapist-guided technique for strength, mobility and neuromuscular control",
                  ],
                  [
                    "Ai Chi & Watsu",
                    "Flowing, assisted movement for balance, relaxation and pain reduction",
                  ],
                  [
                    "Halliwick & aquatic strength training",
                    "Postural control, movement confidence and resistance work with minimal joint strain",
                  ],
                ]}
              />
            </div>

            <div className="converge">
              <b>Both tracks report into the same treatment plan</b>
              <p>
                Your physiotherapist and aqua therapist coordinate directly
                — you don't repeat your history twice.
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="band-white video-band">
          <div className="wrap">
            <div className="section-head center">
              <span className="eyebrow">
                See it before you visit
              </span>

              <h2>Take a virtual tour of Secure Clinics</h2>
            </div>

            <Placeholder
                ratio="ph-4-5"
                tag="Video"
                iframe={
                  <iframe
                    className="hero-video"
                    src="https://www.youtube.com/embed/C1wEdta0hOg?si=8dsg6-HDw7NBNcvO&autoplay=1&mute=1"
                    title="Full facility tour — pool, gym, treatment rooms, reception"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                }
              />
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section className="band-sand">
          <div className="wrap split-row reverse">
            <div className="col-text">
              <span className="eyebrow">Is this you?</span>

              <h2>Common reasons patients come in</h2>

              <p className="muted-text">
                Not sure which track fits? Tell us your symptoms on the
                call — we'll route you to the right one.
              </p>

              <div className="elig-grid">
                <Eligibility
                  type="both"
                  tag="Either track"
                  title="Persistent joint or spine pain"
                  text="Knee pain, osteoarthritis, back and neck pain, disc-related discomfort."
                />

                <Eligibility
                  type="land"
                  tag="Land"
                  title="Sports injuries"
                  text="Ligament, tendon and muscle strains, overuse injuries."
                />

                <Eligibility
                  type="waterx"
                  tag="Water"
                  title="Post-surgical stiffness"
                  text="Early recovery when land-based load is still too painful."
                />

                <Eligibility
                  type="waterx"
                  tag="Water"
                  title="Arthritis"
                  text="Reduced load lets you move without provoking pain."
                />
              </div>
            </div>

            <div className="col-media">
              <Placeholder
                ratio="ph-4-5"
                tag="Photo"
                image={Aquatreadmill.src}
                label="Patient consultation / assessment in progress"
              />
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="band-white">
          <div className="wrap">
            <div className="section-head center">
              <span className="eyebrow">What you get</span>
              <h2>Benefits across both tracks</h2>
            </div>

            <div className="benefit-grid">
              {[
                {
                  title: "Reduces pain naturally",
                  text: "Without unnecessary dependence on medication.",
                  icon: (
                    <path d="M12 2v20M2 12h20" />
                  ),
                },
                {
                  title: "Improves mobility",
                  text: "Restores range of movement, not just symptom relief.",
                  icon: (
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                  ),
                },
                {
                  title: "Reduces joint stress",
                  text: "Especially where land-based loading is still limited.",
                  icon: (
                    <path d="M2 15c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
                  ),
                },
                {
                  title: "Faster early movement",
                  text: "Water enables earlier, safer motion post-surgery.",
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </>
                  ),
                },
                {
                  title: "Movement confidence",
                  text: "Reduces fear of movement after injury or surgery.",
                  icon: (
                    <path d="M20.84 4.6a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                  ),
                },
                {
                  title: "One-team continuity",
                  text: "Physios and surgeons coordinate on the same case.",
                  icon: (
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m6 0h3a1 1 0 0 0 1-1V10" />
                  ),
                },
                {
                  title: "Prevents recurrence",
                  text: "Builds strength and control, not just short-term relief.",
                  icon: (
                    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                  ),
                },
                {
                  title: "Enhances overall function",
                  text: "Focused on how you move day to day.",
                  icon: (
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  ),
                },
              ].map(({ title, text, icon }) => (
                <div className="benefit" key={title}>
                  <div className="ic">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      {icon}
                    </svg>
                  </div>

                  <b>{title}</b>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="band-sand">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Inside Secure Clinics</span>
              <h2>Everything under one roof, at Marine Drive</h2>
            </div>

            <div className="gallery">
              {galleryItems.map(([label, image]) => (
                <Placeholder
                  key={image}
                  tag="Photo"
                  image={image}
                  label={label}
                />
              ))}
            </div>

            <div className="cred-grid">
              <Credential
                title="Medical-grade hydrotherapy pool"
                text="Continuously filtered, clinically maintained"
                icon={
                  <path d="M2 15c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
                }
              />

              <Credential
                title="Surgeons + physios, one team"
                text="Every case discussed internally"
                icon={
                  <>
                    <circle cx="9" cy="7" r="4" />
                    <path d="M17 11l2 2 4-4" />
                    <path d="M2 21v-2a4 4 0 0 1 4-4h3" />
                  </>
                }
              />

              <Credential
                title="Wheelchair & crutch friendly"
                text="Step-free entry, chair lift for pool access"
                icon={
                  <>
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </>
                }
              />

              <Credential
                title="In-house diagnostics"
                text="Pathology, X-ray and imaging on site"
                icon={
                  <>
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18M3 9v10a2 2 0 0 0 2 2h4" />
                  </>
                }
              />
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="band-white">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Who you'll meet</span>
              <h2>Your care team</h2>
            </div>

            <div className="team-strip">
              {teamMembers.map((member) => (
                <div className="team-card" key={member.image}>
                  <Placeholder
                    ratio="ph-3-4"
                    tag="Photo"
                    image={member.image}
                    label={member.name}
                  />

                  <div className="name">{member.name}</div>
                  <div className="role">{member.position}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="band-sand">
          <div className="wrap split-row">
            <div className="col-media">
              <Placeholder
                ratio="ph-1-1"
                tag="Photo"
                image={Sauna.src}
                label="Patient photo (with consent) or before/after mobility shot"
              />
            </div>

            <div className="col-text">
              <span className="eyebrow">In their words</span>

              <p className="testi-quote">
                "[Add a short patient quote about their recovery —
                land, water, or both.]"
              </p>

              <div className="testi-name">[Patient name]</div>

              <div className="testi-role">
                [Condition treated] · [Track: Physio / Aqua / Both]
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="band-deep" id="book">
          <div className="wrap lead-wrap">
            <div>
              <span
                className="eyebrow landing-eyebrow"
              >
                Book your assessment
              </span>

              <h2>Talk to us before you decide anything</h2>

              <p>
                Call, WhatsApp, or leave your details and our team will call
                you back — usually the same day.
              </p>

              <a
                href="tel:+91XXXXXXXXXX"
                className="call-block"
              >
                <div className="ic">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <div>
                  <b>+91-XXXXX-XXXXX</b>
                  <span>
                    Mon–Sat, 8am–9pm · same-day slots where possible
                  </span>
                </div>
              </a>

             <a
              href="https://wa.me/91XXXXXXXXXX"
              className="btn btn-wa"
              style={{ width: "100%" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.6 6.3A8.8 8.8 0 0012 4a8.9 8.9 0 00-7.7 13.4L3 21l3.7-1.3A8.9 8.9 0 0012 21a8.9 8.9 0 006.3-15.2c-.2-.2-.4-.4-.7-.5zM12 19.3a7.3 7.3 0 01-3.7-1l-.3-.2-2.7 1 1-2.6-.2-.3A7.3 7.3 0 1119.3 12a7.3 7.3 0 01-7.3 7.3zm4-5.5c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.5.1-.5.7-.7.8-.2.2-.5.1a6 6 0 01-1.8-1.1 6.6 6.6 0 01-1.2-1.5c-.1-.2 0-.3.1-.5l.3-.4c.1-.1.1-.2.2-.4a.5.5 0 000-.4c0-.1-.5-1.3-.7-1.7s-.4-.4-.5-.4h-.4a.9.9 0 00-.6.3 2.7 2.7 0 00-.9 2.1c0 1.2.9 2.4 1 2.6.1.1 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5a3.6 3.6 0 001.6.1c.5-.1 1.3-.5 1.5-1s.2-.9.1-1c-.1-.1-.2-.2-.4-.3z" />
              </svg>

              Message us on WhatsApp
            </a>
              <div className="lead-media">
                <Placeholder
                  ratio="ph-3-2"
                  tag="Photo"
                  image={Startyour.src}
                  label="Therapist greeting a patient at reception"
                />
              </div>
            </div>

            <form
              className="lead-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <h3>Request a callback</h3>

              <p className="sub">
                Fill this in and we'll call within business hours.
              </p>

              <label htmlFor="name">Full name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

              {errors.name && (
                <p className="form-error visible">
                  {errors.name}
                </p>
              )}

              <label htmlFor="phone">Phone number</label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="10-digit mobile number"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
              />

              {errors.phone && (
                <p className="form-error visible">
                  {errors.phone}
                </p>
              )}

              <label>What do you need help with?</label>

              <div className="radio-row">
                {[
                  ["physio", "Physiotherapy"],
                  ["aqua", "Aqua therapy"],
                  ["unsure", "Not sure yet"],
                ].map(([id, value]) => (
                  <div className="radio-pill" key={id}>
                    <input
                      type="radio"
                      name="track"
                      id={`t-${id}`}
                      value={value}
                      checked={form.track === value}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          track: e.target.value,
                        })
                      }
                    />

                    <label htmlFor={`t-${id}`}>
                      {value}
                    </label>
                  </div>
                ))}
              </div>

              {errors.track && (
                <p className="form-error visible">
                  {errors.track}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitted}
              >
                {submitted
                  ? "Request sent"
                  : "Request a callback"}
              </button>

              <p className="form-note">
                No spam. Your number is used only to schedule your assessment.
              </p>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="band-white">
          <div className="wrap">
            <div className="section-head center">
              <span className="eyebrow">
                Questions patients ask before booking
              </span>

              <h2>FAQ</h2>
            </div>

            <div className="faq">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`faq-item ${
                      isOpen ? "open" : ""
                    }`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="faq-q"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      {faq.question}
                      <span className="plus" aria-hidden="true"></span>
                    </button>

                    {isOpen && (
                      <div className="faq-a">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">
          <div
            className="ph ph-16-9"
            style={{ position: "absolute", inset: 0 }}
          >
            <span className="ph-tag">Photo</span>
            <svg
              className="ph-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="9" cy="10" r="1.5" />
              <path d="M21 15l-5-4-4 3-3-2-6 5" />
            </svg>
            <span
              className="ph-label"
              style={{ color: "rgba(246,241,231,.55)" }}
            >
              Background: clinic exterior or pool, dark overlay applied
            </span>
          </div>

          <div className="final-cta-inner">
            <h2>Guided recovery starts with one call.</h2>

            <p>
              Book a clinical assessment and we'll tell you, honestly,
              whether land, water, or both is right for you.
            </p>

            <div className="final-ctas">
              <a
                href="tel:+91XXXXXXXXXX"
                className="btn btn-primary"
              >
                Call now
              </a>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="btn btn-wa"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          Secure Clinics · Marine Drive, Mumbai · PAMS SpineSecure LLP <br />
          Replace +91XXXXXXXXXX with your real phone/WhatsApp numbers, and swap every dashed placeholder box with real photos/video before publishing.
        </div>
      </footer>

      <div className="mobile-bar">
        <a
          href="tel:+91XXXXXXXXXX"
          className="btn btn-primary"
        >
          Call now
        </a>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="btn btn-wa"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}



function Placeholder({
  ratio = "",
  tag,
  label,
  play = false,
  iframe = null,
  image = null,
}) {
  return (
    <div className={`ph ${ratio}`}>
      {tag && <span className="ph-tag">{tag}</span>}

      {iframe ? (
        iframe
      ) : image ? (
        <img
          className="placeholder-image"
          src={image}
          alt={label || ""}
        />
      ) : (
        <>
          {play && (
            <div className="ph-play">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}

          <svg
            className="ph-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="10" r="1.5" />
            <path d="M21 15l-5-4-4 3-3-2-6 5" />
          </svg>

          <span className="ph-label">{label}</span>
        </>
      )}
    </div>
  );
}

function Track({
  type,
  title,
  subtitle,
  image,
  imageLabel,
  items,
}) {
  return (
    <div className={`track ${type}`}>
      <div className="track-media">
        <Placeholder
          ratio="ph-3-2"
          tag="Photo"
          image={image}
          label={imageLabel}
        />
      </div>

      <div className="track-body">
        <div className="track-label">
          <div className="badge">
            {type === "land" ? (
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M13 4l3 3-9 9-4 1 1-4 9-9z" />
              </svg>
            ) : (
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M2 15c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0M2 19c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
              </svg>
            )}
          </div>

          <h3>{title}</h3>
        </div>

        <p className="track-sub">{subtitle}</p>

        <ul>
          {items.map(([heading, description], index) => (
            <li key={heading}>
              <span className="n">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <b>{heading}</b>
                <span>{description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Eligibility({
  type,
  tag,
  title,
  text,
}) {
  return (
    <div className={`elig-card ${type}`}>
      <span className="tag">{tag}</span>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

function Credential({ title, text, icon }) {
  return (
    <div className="cred">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        {icon}
      </svg>

      <div>
        <b>{title}</b>
        <span>{text}</span>
      </div>
    </div>
  );
}