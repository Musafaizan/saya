"use client";
import "./hero.css";
import Image from "next/image";
import heroImg from "../../../public/assets/boyimg.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Decorative Dots */}
      <span className="hero__dot hero__dot--pink-top" />
      <span className="hero__dot hero__dot--pink-right" />
      <span className="hero__dot hero__dot--green-mid" />
      <span className="hero__dot hero__dot--green-bottom" />
      {/* ── Paste these stars inside your <section className="hero"> ── */}

{/* Decorative diamond dots */}
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

        <p className="hero__tagline">small act of kindness</p>

        <h1 className="hero__heading">
          SAYA WELLFAIR{" "}
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

        <p className="hero__description">
          Spreading hope and compassion through community service. Together, we uplift lives
          and build a brighter future for those in need.
        </p>

        <button className="hero__btn">
          <span className="hero__btn-icon">♥</span>
          DONATE NOW
        </button>

      </div>

      {/* Right — Full Image, no crop */}
      <div className="hero__image-area">
        <Image
          src={heroImg}
          alt="Hero"
          className="hero__img"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;