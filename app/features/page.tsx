"use client";
import BreadCumb from "@/components/BreadCumb";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";

export default function page() {
  return (
    <>
      <HeaderTop />
      <Header />
      <BreadCumb title="Features" />
      <Features />
      <Footer />
    </>
  );
}
