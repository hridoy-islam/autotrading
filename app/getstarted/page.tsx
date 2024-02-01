"use client";
import BreadCumb from "@/components/BreadCumb";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";

export default function page() {
  return (
    <>
      <HeaderTop />
      <Header />
      <BreadCumb title="Get Started" />
      <GetStarted />
      <Footer />
    </>
  );
}
