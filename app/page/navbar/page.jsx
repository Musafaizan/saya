"use client";
import { useState } from "react";
import "./nav.css";
import Image from "next/image";
import sayalogo from "../../../public/assets/sayalogo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "About us", "Programs", "Facilities", "Zakat", "Bank", "Contacts"];

  return (
    <nav className="navbar">
      {/* Logo + Brand */}
      <div className="navbar__logo">
        <Image src={sayalogo} alt="Saya Logo" className="navbar__logo-img" />
        <span className="navbar__brand-name">SAYA</span>
      </div>

      {/* Desktop Links — centered */}
      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {links.map((link) => (
          <li key={link} className="navbar__item">
            <a
              href={
                link === "Home"
                  ? "#hero"
                  : link === "About us"
                  ? "#about"
                  : link === "Programs"
                  ? "#packages"
                  : link === "Facilities"
                  ? "#facilities"
                  : link === "Zakat"
                  ? "#zakat"
                  : link === "Bank"
                  ? "#bank"
                  : link === "Contacts"
                  ? "#contact"
                  : "#"
              }
              className={`navbar__link ${active === link ? "navbar__link--active" : ""}`}
              onClick={(e) => {
                e.preventDefault();

                if (link === "Home") {
                  const heroSection = document.getElementById("hero");
                  if (heroSection) {
                    heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                } else if (link === "About us") {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                } else if (link === "Programs") {
                  const packagesSection = document.getElementById("packages");
                  if (packagesSection) {
                    packagesSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                } else if (link === "Facilities") {
                  const facilitiesSection = document.getElementById("facilities");
                  if (facilitiesSection) {
                    facilitiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                } else if (link === "Zakat") {
                  const zakatSection = document.getElementById("zakat");
                  if (zakatSection) {
                    zakatSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                } else if (link === "Bank") {
                  const bankSection = document.getElementById("bank");
                  if (bankSection) {
                    bankSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                } else if (link === "Contacts") {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }

                setActive(link);
                setMenuOpen(false);
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;