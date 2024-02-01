"use client";
import BreadCumb from "@/components/BreadCumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import Pricing from "@/components/Pricing";

export default function page() {
  return (
    <>
      <HeaderTop />
      <Header />
      <BreadCumb title="Pricing" />
      <Pricing />
      <Footer />
    </>
  );
}
