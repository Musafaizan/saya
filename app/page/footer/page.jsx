"use client";
import {
  BsEnvelope,
  BsTelephone,
  BsHeart,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      {/* Decorative dots */}
      <span className="footer__dot footer__dot--pink1" />
      <span className="footer__dot footer__dot--pink2" />
      <span className="footer__dot footer__dot--green1" />
      <span className="footer__dot footer__dot--green2" />

      <div className="footer__inner">

        {/* Brand */}
        <div className="footer__brand">
          <p className="footer__tagline">Get in Touch</p>
          <h2 className="footer__title">
            Serving communities with<br />
            <span>love and compassion</span>
          </h2>
          <div className="footer__bar" />
          <p className="footer__desc">
            Together we can make a difference. Every act of kindness brings
            us closer to a better world.
          </p>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Contact */}
        <div className="footer__contact">
          <a href="mailto:fuadmufti20@gmail.com" className="footer__contact-item">
            <span className="footer__contact-icon">
              <BsEnvelope />
            </span>
            <span>fuadmufti20@gmail.com</span>
          </a>
          <a href="tel:+923321403309" className="footer__contact-item">
            <span className="footer__contact-icon">
              <BsTelephone />
            </span>
            <span>+92 332 1403309</span>
          </a>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Muhammad Fuad Mufti. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <BsHeart className="footer__heart" /> for humanity
          </p>
        </div>

      </div>
    </footer>
  );
}