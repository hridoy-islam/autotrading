"use client";
import { Check } from "lucide-react";
import people from "../public/people.png";
import Image from "next/image";

export default function HowToWork() {
  const features = [
    "Fully Automatic , Setup once and the rest on Autopilot",
    "The most popular forex robots are offered via the MetaTrader 4 platform.",
    "Open and Close trade Automatically",
    "Forex robots do not make order entry errors",
    "Eliminates Human Emotions such as fear and greed",
    "Our EA are coming with money management features and risk management",
    "Forex robots do not get tired",
    "3 Years on testing ( recently decided to sale for public)",
    "Analysis of market data with 12 inner indicators",
    "No Risky Strategies - No Martingale",
    "Profit Average Method",
    "Trades the Forex Market 24/5 (day and night)",
    "24 Hours Support with Day & Night Shift",
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-6">
                <span className="text-emerald-400 font-medium">Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How Does{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Robo FX Trading Software
                </span>{" "}
                Robot Work?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                A Forex Robofx Robot that works as a fully Automated Forex
                Trading System that executes both Buy, Sell Trade Automatically
                & Close the Trade in Profit. Robo FX Trader Software is
                programmed to adapt to the current market conditions as it
                executes trades on both sides of the market 24/7.
              </p>
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
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50">
              <Image src={people} alt="people" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl scale-75 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
