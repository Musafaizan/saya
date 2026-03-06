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
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

  return (
    <section className="hero" id="hero">

      {/* Decorative geometric accents */}
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
        <p className="hero__tagline">Make a difference today</p>

        <h1 className="hero__heading">
          Small acts
of kindness with
big impact.{" "}
          <span className="hero__sun" aria-hidden="true">
            <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="10" stroke="#c9a84c" strokeWidth="2.5" fill="none"/>
              <line x1="32" y1="4"  x2="32" y2="10" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="32" y1="54" x2="32" y2="60" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="4"  y1="32" x2="10" y2="32" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="54" y1="32" x2="60" y2="32" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="11" y1="11" x2="16" y2="16" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="48" y1="48" x2="53" y2="53" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="53" y1="11" x2="48" y2="16" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="16" y1="48" x2="11" y2="53" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        <div className="hero__divider" />

        <button className="hero__btn" onClick={onDonateClick}>
          <span className="hero__btn-inner">
            <span className="hero__btn-icon">♥</span>
            DONATE NOW
          </span>
        </button>
      </div>

      {/* Right — Full Image */}
      <div className="hero__image-area">
        <Image
          src={heroImg}
          alt="Hero"
          className="hero__img"
          priority
        />
      </div>

      {/* Sliding Icons Bar */}
      <div className="hero__slider-wrapper">
        <div className="hero__slider-track">
          {icons.map((icon, idx) => (
            <div key={`set1-${idx}`} className="hero__slider-item">
              <Image src={icon} alt={`icon ${idx + 1}`} width={64} height={64} />
            </div>
          ))}
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