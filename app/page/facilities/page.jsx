"use client";
import "./facilities.css";
import Image from "next/image";
import { ShoppingBasket, GraduationCap, Home, HeartPulse } from "lucide-react";

import img1 from "../../../public/assets/saya1.jpg";
import img2 from "../../../public/assets/saya5.jpg";
import img3 from "../../../public/assets/saya3.jpg";
import img4 from "../../../public/assets/saya6.jpg";

const facilities = [
  {
    icon: ShoppingBasket,
    title: "Ration Drives",
    description:
      "Supporting white-collar families who were suffering from lockdown with essential food supplies and household necessities.",
    color: "#f07b2f",
    image: img1,
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    description:
      "Bearing educational expenses for white-collar families' children and orphans to ensure they continue their studies.",
    color: "#4caf82",
    image: img2,
  },
  {
    icon: Home,
    title: "Monthly Support",
    description:
      "Providing regular ration and helping with household expenses of widows and white-collar families in need.",
    color: "#1f325a",
    image: img3,
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Providing healthcare facilities and arranging medical camps for underprivileged communities across Pakistan.",
    color: "#e91e8c",
    image: img4,
  },
];

const Facilities = () => {
  return (
    <section className="facilities" id="facilities">

      {/* ── Decorative diamond dots ── */}
      <span className="fac__dot fac__dot--orange" />
      <span className="fac__dot fac__dot--green"  />
      <span className="fac__dot fac__dot--pink"   />

      {/* ── Floating animated stars ── */}
      <span className="fac__star fac__star--s1">★</span>
      <span className="fac__star fac__star--s2">✦</span>
      <span className="fac__star fac__star--s3">★</span>
      <span className="fac__star fac__star--s4">✦</span>
      <span className="fac__star fac__star--s5">★</span>
      <span className="fac__star fac__star--s6">★</span>
      <span className="fac__star fac__star--s7">✦</span>
      <span className="fac__star fac__star--s8">★</span>
      <span className="fac__star fac__star--s9">✦</span>
      <span className="fac__star fac__star--s10">★</span>
      <span className="fac__star fac__star--s11">★</span>
      <span className="fac__star fac__star--s12">✦</span>
      <span className="fac__star fac__star--s13">★</span>
      <span className="fac__star fac__star--s14">✦</span>
      <span className="fac__star fac__star--s15">★</span>

      <div className="facilities__inner">

        {/* ── Header ── */}
        <div className="facilities__header">
          <p className="facilities__tagline">What We Do</p>
          <h2 className="facilities__heading">
            Our <span className="facilities__heading-highlight">Facilities</span>
          </h2>
          <div className="facilities__divider" />
          <p className="facilities__subtitle">
            Every initiative we run is built around one goal — reaching those who need help the most.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="facilities__grid">
          {facilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="fac__card"
                style={{ "--card-color": item.color }}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="fac__card-bg-img"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                )}
                <div className="fac__card-overlay" />
                <div className="fac__card-content">
                  <div className="fac__card-icon-wrap">
                    <Icon size={26} color="#fff" strokeWidth={2} />
                  </div>
                  <h3 className="fac__card-title">{item.title}</h3>
                  <p className="fac__card-desc">{item.description}</p>
                  <span className="fac__card-line" />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Quote Banner ── */}
        <div className="facilities__quote-banner">
          <span className="facilities__quote-mark">"</span>
          <p className="facilities__quote-text">
            From a small initiative during a crisis to a growing movement of compassion — we
            continue to expand our reach to serve those who need it most.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Facilities;