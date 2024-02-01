"use client";
import BreadCumb from "@/components/BreadCumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import Support from "@/components/Support";

export default function page() {
  return (
    <>
      <HeaderTop />
      <Header />
      <BreadCumb title="Support" />
      <Support />
      <Footer />
    </>
  );
}
