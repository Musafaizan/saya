"use client";
import { useState } from "react";
import Image from "next/image";
import "./about.css";
import img4 from "../../../public/assets/saya3.jpg";



const YOUTUBE_ID = "8jSdLOWWiiY"; // Charity/welfare video — replace with your own

export default function AboutStory() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="story" id="about">

      {/* Decorative dots */}
      <span className="story__dot story__dot--orange" />
      <span className="story__dot story__dot--green"  />
      <span className="story__dot story__dot--pink"   />

      {/* Floating stars */}
      <span className="story__star story__star--s1">★</span>
      <span className="story__star story__star--s2">✦</span>
      <span className="story__star story__star--s3">★</span>
      <span className="story__star story__star--s4">✦</span>
      <span className="story__star story__star--s5">★</span>
      <span className="story__star story__star--s6">✦</span>
      <span className="story__star story__star--s7">★</span>
      <span className="story__star story__star--s8">✦</span>

      <div className="story__inner">

        {/* ══════════════════════════════
            LEFT COLUMN
        ══════════════════════════════ */}
        <div className="story__left">

          {/* Text block — top */}
          <div className="story__text">
            <p className="story__tagline">Our Story</p>
            <h2 className="story__heading">
              About{" "}
              <span className="story__heading-highlight">Saya Welfare</span>
            </h2>
            <div className="story__divider" />
          </div>

       
          <div className="story__img-wrap">
            
           {/* <Image
              src={img4}
              alt="Saya Welfare community"
              fill
              className="story__img"
              sizes="(max-width: 768px) 100vw, 45vw"
            />  */}
           

              <Image
               src={img4}
              alt="Saya Welfare community"
              className="story__img"
            />

            {/* Circular rotating badge */}
            <div className="story__badge">
              <svg viewBox="0 0 100 100" className="story__badge-svg">
                <defs>
                  <path
                    id="circle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="11.5" fontWeight="700" fill="#f07b2f" letterSpacing="3">
                  <textPath href="#circle">
                    SAYA WELFARE • SERVING PAKISTAN •
                  </textPath>
                </text>
              </svg>
              <span className="story__badge-heart">♥</span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════
            RIGHT COLUMN
        ══════════════════════════════ */}
        <div className="story__right">

          {/* Video thumbnail with play button */}
          <div
            className={`story__video-wrap ${playing ? "story__video-wrap--playing" : ""}`}
            onClick={() => setPlaying(true)}
          >
            {!playing ? (
              <>
                {/* Thumbnail image shown before play */}
                <img
                  src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                  alt="Watch our story"
                  className="story__video-thumb"
                />
                {/* Dark overlay */}
                <div className="story__video-overlay" />
                {/* Play button */}
                <button className="story__play-btn" aria-label="Play video">
                  <span className="story__play-icon">▶</span>
                </button>
                {/* Label */}
                <span className="story__video-label">Watch Our Story</span>
              </>
            ) : (
              <iframe
                className="story__iframe"
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="Saya Welfare Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Description text below video */}
          <div className="story__desc-block">
            <p className="story__desc">
              We started in <strong>2020</strong> when COVID-19 hit Pakistan.
              What began as a ration drive for white-collar families suffering
              from the lockdown has grown into a comprehensive welfare
              organization.
            </p>
            <p className="story__desc">
              Today, we serve communities across multiple sectors — from{" "}
              <strong>education</strong> to <strong>healthcare</strong> —
              always focused on those who need it most.
            </p>

            {/* Stats row */}
            <div className="story__stats">
              <div className="story__stat">
                <span className="story__stat-num">10K+</span>
                <span className="story__stat-lbl">Families Helped</span>
              </div>
              <div className="story__stat-sep" />
              <div className="story__stat">
                <span className="story__stat-num">5+</span>
                <span className="story__stat-lbl">Sectors Served</span>
              </div>
              <div className="story__stat-sep" />
              <div className="story__stat">
                <span className="story__stat-num">2020</span>
                <span className="story__stat-lbl">Est. Pakistan</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}