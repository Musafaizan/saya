"use client";
import React, { useState } from 'react';
import Navbar from './page/navbar/page';
import Hero from './page/hero/page';
import About from './page/about/page';
import Facilities from './page/facilities/page';
import Zakat from './page/zakat/page';
import Donate from './page/donatesection/page';
import DonateSection from './page/banks/page';
import Footer from './page/footer/page';
import ModalContent from './page/package/page';

export default function Page() {
  const [showBankModal, setShowBankModal] = useState(false);

  return (
    <>
      <Navbar />
      <Hero onDonateClick={() => setShowBankModal(true)} />
      <About />
      <ModalContent />
      <Facilities />
      <Zakat />
      <Donate />
      <Footer />

      {showBankModal && (
        <div
          className="rm-modal__backdrop"
          onClick={() => setShowBankModal(false)}
        >
          <div
            className="rm-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="rm-modal__close"
              onClick={() => setShowBankModal(false)}
            >
              ✕
            </button>
            {/* Reuse DonateSection content inside modal */}
            <DonateSection />
          </div>
        </div>
      )}
    </>
  );
}
