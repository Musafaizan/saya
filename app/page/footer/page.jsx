"use client";
import "./footer.css";
import Image from "next/image";  

import sayalogo from "../../../public/assets/sayalogo2.png";


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Two-column main section */}
        <div className="footer__main">
          <h2 className="footer__headline">
            Let's talk about how we can<br />
            transform lives together!
          </h2>

          <div className="footer__contact">
            <p className="footer__label">Get in touch with our team</p>
            <a href="mailto:info@SAYA.com" className="footer__email">
              info@sayawelfare.org
            </a>
          </div>
        </div>

        <div className="footer__line" />

        {/* Bottom bar: logo | copyright | social */}
        <div className="footer__bottom">
          <div className="footer__logo">
            <Image src={sayalogo} alt="Saya Logo" className="footer__logo-img" />
            <span className="footer__logo-icon" aria-hidden="true" />
            SAYA
          </div>

          <p className="footer__copyright">
            SageTheme © {year}. All Rights Reserved.
          </p>

          <div className="footer__social">
            <a href="https://www.facebook.com/sayawelfare" className="footer__social-link" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/saya.welfare?igsh=bjlhdGhpdmJsY21l" className="footer__social-link" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}