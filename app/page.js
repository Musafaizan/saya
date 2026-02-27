"use client";
import React from 'react';
import Navbar from './page/navbar/page';
import Hero from './page/hero/page';
import About from './page/about/page';
import Facilities from './page/facilities/page';
import Zakat from './page/zakat/page';
import DonateSection from "../app/page/banks/page";
import Footer from './page/footer/page';
export default function page() {
  return (
   <>
   
   <Navbar />
    <Hero />
    <About />
    <Facilities />
    <Zakat />
    <DonateSection />
    <Footer />
   
   </>
  )
}
