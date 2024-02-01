"use client";
import BreadCumb from "@/components/BreadCumb";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import React from "react";

export default function page() {
  return (
    <div>
      <HeaderTop />
      <Header />
      <BreadCumb title="Contact" />
      <Contact />
      <Footer />
    </div>
  );
}
