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
      <BreadCumb
        title="Get Started"
        subtitle="Launch your automated trading journey in just a few simple steps. Robo FX Trader makes setup fast, intuitive, and hassle-free."
      />
      <GetStarted />
      <Footer />
    </>
  );
}
