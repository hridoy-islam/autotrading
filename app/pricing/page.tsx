"use client";
import BreadCumb from "@/components/BreadCumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import Pricing from "@/components/Pricing";
import { Button } from "@/components/ui/button";
import { Check, Headset, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const features = [
    "One-time payment",
    "No subscription fees",
    "Unlimited usage",
    "100% ownership of your setup",
    "Free future upgrades",
  ];
  return (
    <>
      <HeaderTop />
      <Header />
      <BreadCumb
        title="Pricing That Works for You"
        subtitle="No hidden fees. No recurring charges. Just one-time setup for lifetime results.
Choose the plan that fits your trading ambitions."
      />
      <Pricing />
      {/* what you pay and get */}

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What You Pay{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Is What You Get
                  </span>{" "}
                </h2>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-slate-300 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="">
                <Image
                  src={"/robogreen.png"}
                  alt="people"
                  width={600}
                  height={300}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl scale-75 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* {CTA } */}

      <div className="text-center my-16">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-4">
            Still Deciding?
          </h3>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Let’s walk you through the best plan for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="getstarted">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 group">
                <Headset className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" />
                Talk to an Expert
              </Button>
            </Link>
            <Link href="getstarted">
              <Button className="border-2 border-slate-600 hover:border-emerald-400 text-white hover:text-emerald-400 bg-transparent hover:bg-emerald-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 group">
                <Shield className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" />
                See Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
