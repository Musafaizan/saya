"use client";
import "./about.css";

const stats = [
  { number: "2020", label: "Founded" },
  { number: "10K+", label: "Families Helped" },
  { number: "5+",   label: "Sectors Served" },
  { number: "100%", label: "Community Driven" },
];

const About = () => {
  return (
    <section className="about">

      {/* ── Decorative diamond dots ── */}
      <span className="about__dot about__dot--orange" />
      <span className="about__dot about__dot--green"  />
      <span className="about__dot about__dot--pink"   />

      {/* ── Floating animated stars ── */}
      <span className="about__star about__star--s1">★</span>
      <span className="about__star about__star--s2">✦</span>
      <span className="about__star about__star--s3">★</span>
      <span className="about__star about__star--s4">✦</span>
      <span className="about__star about__star--s5">★</span>
      <span className="about__star about__star--s6">★</span>
      <span className="about__star about__star--s7">✦</span>
      <span className="about__star about__star--s8">★</span>
      <span className="about__star about__star--s9">✦</span>
      <span className="about__star about__star--s10">★</span>
      <span className="about__star about__star--s11">★</span>
      <span className="about__star about__star--s12">✦</span>
      <span className="about__star about__star--s13">★</span>
      <span className="about__star about__star--s14">✦</span>
      <span className="about__star about__star--s15">★</span>

      <div className="about__inner" id="about">

        {/* ── Left: Text ── */}
        <div className="about__content">

          <p className="about__tagline">Our Story</p>

          <h2 className="about__heading">
            About{" "}
            <span className="about__heading-highlight">Saya Welfare</span>
          </h2>

          <div className="about__divider" />

          <p className="about__body">
            We started in <strong>2020</strong> when COVID-19 hit Pakistan. What began as a ration
            drive for white-collar families suffering from the lockdown has grown into a comprehensive
            welfare organization.
          </p>

          <p className="about__body">
            Today, we serve communities across multiple sectors — from <strong>education</strong> to{" "}
            <strong>healthcare</strong> — always focused on those who need it most.
          </p>

          <a href="#" className="about__btn">
            <span className="about__btn-icon">♥</span>
            Learn More
          </a>

        </div>

        {/* ── Right: Stats Card ── */}
        <div className="about__right">

          {/* Floating badge */}
          <div className="about__badge">
            <span className="about__badge-year">Est. 2020</span>
            <span className="about__badge-label">Serving Pakistan</span>
          </div>

          {/* Stats grid */}
          <div className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="about__stat">
                <span className="about__stat-number">{s.number}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Quote card */}
          <div className="about__quote">
            <span className="about__quote-mark">"</span>
            <p className="about__quote-text">
              Small acts of kindness, when multiplied, can transform entire communities.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;