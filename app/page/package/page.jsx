"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Heart, Package, Users, Baby } from "lucide-react";
import "./package.css";

import heroBg   from "../../../public/assets/saya2.jpg";
import img4 from "../../../public/assets/saya4.jpg";
import img8 from "../../../public/assets/saya8.jpg";
import img9 from "../../../public/assets/saya9.jpg";

const packages = [
  {
    tag: "Essential Package",
    price: "$20",
    desc: "Provides basic essentials for a family of 4 for one week",
    items: [
      "5kg Premium Rice",
      "2kg Flour (Atta)",
      "1L Cooking Oil",
      "1kg Sugar",
      "500g Tea Leaves",
      "1kg Lentils (Dal)",
      "500g Salt",
      "Dates (1kg)",
    ],
    popular: false,
  },
  {
    tag: "Most Popular – Complete Family Package",
    price: "$30",
    desc: "Comprehensive ration for a family of 5 for two weeks",
    items: [
      "5kg Flour (Atta)",
      "3kg Premium Basmati Rice",
      "2kg Sugar",
      "3L Cooking Oil",
      "½kg Tea Leaves",
      "4kg Mixed Lentils",
      "Salt",
      "Dates (½kg)",
      "Spice Box (Complete)",
      "Vermicelli (Seviyan)",
      "Gram Flour Dumplings (Pakorian) ½kg",
    ],
    popular: true,
  },
];

const cards = [
  {
    id: "ration",
    icon: Package,
    color: "#f07b2f",
    title: "Ramadan Ration Drive",
    summary:
      "Distributing essential food packages to families, ensuring no one goes hungry during the blessed month.",
    bgImage: img8,
    expanded: "ration",
  },
  {
    id: "iftar",
    icon: Users,
    color: "#4caf82",
    title: "Iftar for the Needy",
    summary:
      "Organizing Iftar gatherings for underprivileged families and individuals in our community.",
    bgImage: img4,
    expanded: "iftar",
  },
  {
    id: "orphans",
    icon: Baby,
    color: "#e91e8c",
    title: "Iftar for Orphans",
    summary:
      "Special Iftar programs dedicated to orphaned children, bringing joy and warmth to their hearts.",
    bgImage: img9,
    expanded: "orphans",
  },
];

/* ─── Modal content per card ─────────────────────────────── */
function ModalContent({ id, onClose }) {
  if (id === "ration") {
    return (
      <div className="rm-modal__body">
        <h3 className="rm-modal__title">Ramadan Ration Packages</h3>
        <p className="rm-modal__intro">
          Your generosity ensures families receive complete, nutritious food
          packages during the blessed month of Ramadan.
        </p>
        <div className="rm-pkg-grid">
          {packages.map((pkg, i) => (
            <div key={i} className={`rm-pkg ${pkg.popular ? "rm-pkg--popular" : ""}`}>
              {pkg.popular && <span className="rm-pkg__badge">⭐ Most Popular</span>}
              <div className="rm-pkg__header">
                <div>
                  <p className="rm-pkg__tag">{pkg.tag}</p>
                  <p className="rm-pkg__price">{pkg.price}</p>
                  <p className="rm-pkg__desc">{pkg.desc}</p>
                </div>
              </div>
              <ul className="rm-pkg__list">
                {pkg.items.map((item, j) => (
                  <li key={j}>
                    <span className="rm-pkg__check">✓</span> {item}
                  </li>
                ))}
              </ul>
              <button className="rm-pkg__btn">Sponsor This Package</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === "iftar") {
    return (
      <div className="rm-modal__body">
        <h3 className="rm-modal__title">Ramadan 2026 – Lahore</h3>
        <p className="rm-modal__intro">
          We are arranging Iftar drives in Ramadan 2026 in Lahore for
          underprivileged families and individuals. Come forward and support us
          in spreading the blessings of Ramadan to those who need it most.
        </p>
        <div className="rm-modal__highlight">
          <span className="rm-modal__hand">🤲</span>
          <p>
            Your contribution can help us serve Iftar to hundreds of needy
            people.
          </p>
        </div>
        <button className="rm-modal__cta">Contribute Now</button>
      </div>
    );
  }

  if (id === "orphans") {
    return (
      <div className="rm-modal__body">
        <h3 className="rm-modal__title">Orphanage Iftar Program</h3>
        <p className="rm-modal__intro">
          We are arranging Iftar in orphanages to bring joy and warmth to
          orphaned children during the blessed month of Ramadan. Your support
          helps us create memorable moments for these children.
        </p>
        <div className="rm-modal__highlight">
          <span className="rm-modal__hand">🤲</span>
          <p>Help us bring smiles to orphaned children this Ramadan.</p>
        </div>
        <button className="rm-modal__cta">Support Orphans</button>
      </div>
    );
  }

  return null;
}

/* ─── Main Component ─────────────────────────────────────── */
export default function Ramadan() {
  const [openCard, setOpenCard] = useState(null);

  const toggle = (id) => setOpenCard((prev) => (prev === id ? null : id));
  const closeModal = () => setOpenCard(null);

  return (
    <section className="ramadan" id="packages">

      {/* ── Hero background image slot ── */}
     
      <Image src={heroBg} alt="Ramadan" fill className="ramadan__bg-img" />
     

      {/* Dark gradient overlay */}
      <div className="ramadan__overlay" />

      {/* Decorative dots */}
      <span className="rm__dot rm__dot--orange" />
      <span className="rm__dot rm__dot--green"  />
      <span className="rm__dot rm__dot--pink"   />
      <span className="rm__dot rm__dot--green2" />

      {/* Floating stars */}
      <span className="rm__star rm__star--s1">★</span>
      <span className="rm__star rm__star--s2">✦</span>
      <span className="rm__star rm__star--s3">★</span>
      <span className="rm__star rm__star--s4">✦</span>
      <span className="rm__star rm__star--s5">★</span>
      <span className="rm__star rm__star--s6">★</span>
      <span className="rm__star rm__star--s7">✦</span>
      <span className="rm__star rm__star--s8">★</span>
      <span className="rm__star rm__star--s9">✦</span>
      <span className="rm__star rm__star--s10">★</span>
      <span className="rm__star rm__star--s11">★</span>
      <span className="rm__star rm__star--s12">✦</span>

      <div className="ramadan__inner">

        {/* ── Header ── */}
        <div className="ramadan__header">
          <p className="ramadan__tagline">Blessed Month</p>
          <h2 className="ramadan__heading">Ramadan Programs</h2>
          <div className="ramadan__divider" />
          <p className="ramadan__subtitle">
            <strong>Ramadan Activities</strong> — During the blessed month of
            Ramadan, we intensify our efforts to reach more families and spread
            the spirit of giving.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="ramadan__grid">
          {cards.map((card) => {
            const Icon = card.icon;
            const isOpen = openCard === card.id;

            return (
              <div
                key={card.id}
                className={`rm__card ${isOpen ? "rm__card--active" : ""}`}
                style={{ "--card-accent": card.color }}
              >
                {/* Card background image slot */}
                {card.bgImage && (
                  <Image
                    src={card.bgImage}
                    alt={card.title}
                    fill
                    className="rm__card-bg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}

                {/* Fallback placeholder when no image is set */}
                {!card.bgImage && (
                  <div className="rm__card-placeholder" />
                )}

                {/* Gradient overlay */}
                <div className="rm__card-overlay" />

                {/* Card content */}
                <div className="rm__card-content">
                  <div
                    className="rm__card-icon"
                    style={{ backgroundColor: card.color }}
                  >
                    <Icon size={24} color="#fff" strokeWidth={2} />
                  </div>

                  <h3 className="rm__card-title">{card.title}</h3>
                  <p className="rm__card-summary">{card.summary}</p>

                  <button
                    className="rm__card-btn"
                    onClick={() => toggle(card.id)}
                  >
                    <span>{isOpen ? "Close ✕" : "Click to learn more →"}</span>
                    <ChevronDown
                      size={16}
                      className={`rm__card-chevron ${isOpen ? "rm__card-chevron--up" : ""}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ── Modal / Popup ── */}
      {openCard && (
        <div className="rm-modal__backdrop" onClick={closeModal}>
          <div
            className="rm-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="rm-modal__close" onClick={closeModal}>✕</button>
            <ModalContent id={openCard} onClose={closeModal} />
          </div>
        </div>
      )}

    </section>
  );
}