"use client";
import "./zakat.css";
import { Heart, BookOpen, Stethoscope, Users } from "lucide-react";

const impacts = [
  { icon: BookOpen,    label: "Orphans' Education",  color: "#f07b2f" },
  { icon: Stethoscope, label: "Healthcare Access",   color: "#4caf82" },
  { icon: Users,       label: "Family Upliftment",   color: "#e91e8c" },
  { icon: Heart,       label: "Lasting Change",      color: "#1f325a" },
];

const Zakat = () => {
  return (
    <section className="zakat" id="zakat">

      {/* Decorative dots */}
      <span className="zakat__dot zakat__dot--orange" />
      <span className="zakat__dot zakat__dot--green"  />
      <span className="zakat__dot zakat__dot--pink"   />
      <span className="zakat__dot zakat__dot--navy"   />

      {/* Big faded background text */}
      <span className="zakat__bg-text" aria-hidden="true">ZAKAT</span>

      <div className="zakat__inner">

        {/* ── Top label ── */}
        <p className="zakat__tagline">Make a difference today</p>

        {/* ── Heading ── */}
        <h2 className="zakat__heading">
          A Small Share,{" "}
          <span className="zakat__heading-highlight">A Big Impact</span>
        </h2>

        {/* ── Divider ── */}
        <div className="zakat__divider" />

        {/* ── Percentage badge ── */}
        <div className="zakat__badge">
          <span className="zakat__badge-percent">5–10%</span>
          <span className="zakat__badge-text">of your Zakat for Education &amp; Welfare Services</span>
        </div>

        {/* ── Description ── */}
        <p className="zakat__description">
          Your Zakat can transform lives — supporting orphans' education, providing healthcare,
          and uplifting families in need. A fraction of your obligation creates lasting change.
        </p>

        {/* ── Impact pills ── */}
        <div className="zakat__impacts">
          {impacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="zakat__impact-pill" style={{ "--pill-color": item.color }}>
                <div className="zakat__impact-icon">
                  <Icon size={18} color="#fff" strokeWidth={2} />
                </div>
                <span className="zakat__impact-label">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* ── CTA Button ── */}
        <button className="zakat__btn">
          <Heart size={18} color="#fff" strokeWidth={2.5} />
          Donate Your Zakat
        </button>

        {/* ── Trust note ── */}
        <p className="zakat__trust">
          100% Amanah — Every rupee reaches those who need it most
        </p>

      </div>
    </section>
  );
};

export default Zakat;