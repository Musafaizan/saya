"use client";
import { useState } from "react";
import "./nav.css";
import Image from "next/image";
import sayalogo from "../../../public/assets/sayalogo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Pages", "Blog", "Donations", "Shop", "Contacts"];

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
              href="#"
              className={`navbar__link ${active === link ? "navbar__link--active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
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