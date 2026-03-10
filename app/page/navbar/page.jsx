"use client";
import { useState, useEffect } from "react";
import "./nav.css";
import Image from "next/image";
import sayalogo from "../../../public/assets/sayalogo2.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "About us", "Facilities", "Donate" , "Programs"];

  // Close menu on resize back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 899) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleScroll = (link) => {
    const idMap = {
      "Home": "hero",
      "About us": "about",
      "Facilities": "facilities",
      "Donate": "donate",
      "Programs": "packages",

    };
    const id = idMap[link];
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, menuOpen ? 350 : 0);
      }
    }
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar__logo">
          <Image src={sayalogo} alt="Saya Logo" className="navbar__logo-img" />
        </div>

        {/* Desktop Links — centered */}
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link} className="navbar__item">
              <a
                href="#"
                className={`navbar__link ${active === link ? "navbar__link--active" : ""}`}
                onClick={(e) => { e.preventDefault(); handleScroll(link); }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`navbar__mobile-menu ${menuOpen ? "navbar__mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__mobile-links">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`navbar__mobile-link ${active === link ? "navbar__mobile-link--active" : ""}`}
                onClick={(e) => { e.preventDefault(); handleScroll(link); }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;