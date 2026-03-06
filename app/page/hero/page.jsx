"use client";
import "./hero.css";
import Image from "next/image";
import heroImg from "../../../public/assets/boyimg.png";
import icon1 from "../../../public/assets/icon1.png";
import icon2 from "../../../public/assets/icon2.png";
import icon3 from "../../../public/assets/icon3.png";
import icon4 from "../../../public/assets/icon4.png";
import icon5 from "../../../public/assets/icon5.png";
import icon6 from "../../../public/assets/icon6.png";   

const Hero = ({ onDonateClick }) => {
  // Icons array – will be duplicated for seamless loop
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

  return (
    <section className="hero" id="hero">
      {/* Decorative Dots */}
      <span className="hero__dot hero__dot--pink-top" />
      <span className="hero__dot hero__dot--pink-right" />
      <span className="hero__dot hero__dot--green-mid" />
      <span className="hero__dot hero__dot--green-bottom" />

      {/* Floating animated stars */}
      <span className="hero__star hero__star--s1">★</span>
      <span className="hero__star hero__star--s2">★</span>
      <span className="hero__star hero__star--s3">★</span>
      <span className="hero__star hero__star--s4">✦</span>
      <span className="hero__star hero__star--s5">★</span>
      <span className="hero__star hero__star--s6">✦</span>
      <span className="hero__star hero__star--s7">★</span>
      <span className="hero__star hero__star--s8">✦</span>
      <span className="hero__star hero__star--s9">★</span>
      <span className="hero__star hero__star--s10">★</span>
      <span className="hero__star hero__star--s11">✦</span>
      <span className="hero__star hero__star--s12">★</span>
      <span className="hero__star hero__star--s13">✦</span>
      <span className="hero__star hero__star--s14">★</span>
      <span className="hero__star hero__star--s15">✦</span>

      {/* Left Content */}
      <div className="hero__content">
        <p className="hero__tagline">Nonprofit Organization</p>
        <h1 className="hero__heading">
          Small acts
of kindness with
big impact.{" "}
          <span className="hero__sun" aria-hidden="true">
            <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="10" stroke="#F5A623" strokeWidth="3" fill="none"/>
              <line x1="32" y1="4" x2="32" y2="10" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="32" y1="54" x2="32" y2="60" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="4" y1="32" x2="10" y2="32" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="54" y1="32" x2="60" y2="32" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="11" y1="11" x2="16" y2="16" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="48" y1="48" x2="53" y2="53" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="53" y1="11" x2="48" y2="16" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="16" y1="48" x2="11" y2="53" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        <div className="hero__divider" />

        {/* <p className="hero__description">
          Spreading hope and compassion through community service. Together, we uplift lives
          and build a brighter future for those in need.
        </p> */}

        <button className="hero__btn" onClick={onDonateClick}>
          <span className="hero__btn-icon">♥</span>
          DONATE NOW
        </button>
      </div>

      {/* Waves */}
      <div className="hero__wave-container">
        <svg className="hero__wave-1" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" />
        </svg>
        <svg className="hero__wave-2" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,30 C200,70 400,10 600,50 C800,90 1000,10 1200,50 C1320,70 1440,30 1440,50 L1440,80 L0,80 Z" />
        </svg>
        <svg className="hero__wave-3" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,50 C150,20 350,70 550,40 C750,10 950,60 1150,35 C1300,20 1440,50 1440,60 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* ── Sliding Icons Bar (bottom) ── */}
      <div className="hero__slider-wrapper">
        <div className="hero__slider-track">
          {/* First set */}
          {icons.map((icon, idx) => (
            <div key={`set1-${idx}`} className="hero__slider-item">
              <Image src={icon} alt={`icon ${idx + 1}`} width={64} height={64} />
            </div>
          ))}
          {/* Second set – for seamless loop */}
          {icons.map((icon, idx) => (
            <div key={`set2-${idx}`} className="hero__slider-item">
              <Image src={icon} alt={`icon ${idx + 1}`} width={64} height={64} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;