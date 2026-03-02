"use client";
import { useState } from "react";
import "./donatesection.css";
import DonateForm from "../donateform/page";
import {
  Heart, Lock, Sparkles, BadgeCheck,
  Utensils, BookOpen, Stethoscope, ChevronRight
} from "lucide-react";

const AMOUNTS = [10, 50, 100, 200];

const IMPACT = [
  { icon: Utensils,     text: "$10 feeds a family for a day" },
  { icon: BookOpen,     text: "$50 educates a child for a month" },
  { icon: Stethoscope, text: "$100 provides medical aid" },
];

export default function Donate() {
  const [selected, setSelected] = useState(100);
  const [custom, setCustom]     = useState("");
  const [showForm, setShowForm] = useState(false);

  const finalAmount = selected === "custom"
    ? (parseFloat(custom) || 0)
    : selected;

  function handleCustomChange(e) {
    const val = e.target.value.replace(/[^0-9.]/g, "");
    setCustom(val);
  }

  return (
    <>
      <section className="donate" id="donate">

        <span className="donate__dot donate__dot--orange" />
        <span className="donate__dot donate__dot--green"  />
        <span className="donate__dot donate__dot--pink"   />

        {["s1","s2","s3","s4","s5","s6","s7","s8","s9","s10"].map(k => (
          <span key={k} className={`donate__star donate__star--${k}`}>
            {["s1","s3","s5","s7","s9"].includes(k) ? "★" : "✦"}
          </span>
        ))}

        <div className="donate__inner">

          {/* Header */}
          <div className="donate__header">
            <p className="donate__tagline">Make Donations</p>
            <h2 className="donate__heading">
              Inspiring acts of <span className="donate__highlight">kindness,</span><br />
              our charity of <span className="donate__highlight">journey</span>
            </h2>
            <div className="donate__divider" />
            <p className="donate__subtitle">
              Every rupee you give transforms a life. Choose your gift below
              and be the reason someone smiles today.
            </p>
          </div>

          {/* Card */}
          <div className="donate__card">

            <p className="donate__card-label">Select Amount</p>

            <div className="donate__amounts">
              {AMOUNTS.map(amt => (
                <button
                  key={amt}
                  className={`donate__amt-btn ${selected === amt ? "donate__amt-btn--active" : ""}`}
                  onClick={() => { setSelected(amt); setCustom(""); }}
                >
                  <span className="donate__amt-currency">$</span>
                  <span className="donate__amt-value">{amt}</span>
                </button>
              ))}
              <button
                className={`donate__amt-btn donate__amt-btn--custom ${selected === "custom" ? "donate__amt-btn--active" : ""}`}
                onClick={() => setSelected("custom")}
              >
                Custom
              </button>
            </div>

            {selected === "custom" && (
              <div className="donate__custom-wrap">
                <span className="donate__custom-prefix">$</span>
                <input
                  className="donate__custom-input"
                  type="text"
                  inputMode="decimal"
                  placeholder="Enter your amount"
                  value={custom}
                  onChange={handleCustomChange}
                  autoFocus
                />
              </div>
            )}

            <div className="donate__preview">
              <span className="donate__preview-label">You&apos;re donating</span>
              <span className="donate__preview-amount">
                {finalAmount > 0 ? `$${finalAmount}` : "—"}
              </span>
            </div>

            {/* ── FIXED BUTTON: single inner span carries all children ── */}
            <button
              className="donate__btn"
              onClick={() => finalAmount > 0 && setShowForm(true)}
              disabled={finalAmount <= 0}
            >
              <span className="donate__btn-inner">
                <Heart size={18} fill="white" stroke="none" className="donate__btn-heart" />
                <span className="donate__btn-text">Donate Now</span>
                <ChevronRight size={18} className="donate__btn-arrow" />
              </span>
            </button>

            <div className="donate__trust">
              <span className="donate__trust-item">
                <Lock size={11} strokeWidth={2.5} />
                Secure Payment
              </span>
              <span className="donate__trust-sep" />
              <span className="donate__trust-item">
                <BadgeCheck size={11} strokeWidth={2.5} />
                100% Goes to Cause
              </span>
              <span className="donate__trust-sep" />
              <span className="donate__trust-item">
                <Sparkles size={11} strokeWidth={2.5} />
                Tax Deductible
              </span>
            </div>
          </div>

          {/* Impact row */}
          {/* <div className="donate__impact">
            {IMPACT.map(({ icon: Icon, text }) => (
              <div className="donate__impact-item" key={text}>
                <div className="donate__impact-icon-wrap">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <span className="donate__impact-text">{text}</span>
              </div>
            ))}
          </div> */}

        </div>
      </section>

      {showForm && (
        <DonateForm
          amount={finalAmount}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}