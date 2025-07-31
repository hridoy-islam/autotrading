"use client";
import { Check, Headset, Shield, TrendingUp, Zap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      title: "Starter Plan — Get Up and Running",
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      features: [
        "Auto Trade FX Robot Installation",
        "Single Broker Account Configuration",
        "Secure VPS Integration",
        "Dedicated Account Manager",
        "24/7 Trading Monitor Access",
        "Lifetime Updates & Support",
      ],
      description: "Perfect for new traders or single-account users.",
      popular: false,
      btntext: "Book My Setup",
    },
    {
      title: "Pro Plan — Scale with Confidence",
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      features: [
        "Multi-Account Integration",
        "Buy/Sell Signal Tools",
        "Access to Free Trading Signals",
        "Advanced Trade Indicators",
        "Personalized Performance Optimization",
      ],
      description:
        "Ideal for advanced users managing multiple accounts or scaling trades.",
      popular: true,
      btntext: "Upgrade to Pro",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 font-medium">
              Plans & Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            One-Time Setup.{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Lifetime Value.
            </span>{" "}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mx-auto max-w-2xl">
            Let our team take care of the heavy lifting—from installation to
            full automation. You enjoy long-term trading gains without worrying
            about updates, maintenance, or renewals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                plan.popular
                  ? "border-emerald-500/50 ring-2 ring-emerald-500/20"
                  : "border-slate-700/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {plan.icon}
                  <h3 className="text-2xl font-bold text-white">
                    {plan.title}
                  </h3>
                </div>
                <p>{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href="getstarted">
                <Button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-emerald-500/25"
                      : "bg-slate-700 hover:bg-slate-600 text-white"
                  }`}
                >
                  {plan.btntext}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
