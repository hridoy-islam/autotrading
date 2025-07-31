"use client";
import { Check } from "lucide-react";
import people from "../public/people.jpg";
import Image from "next/image";

export default function HowToWork() {
  const features = [
    {
      title: "Install the Bot",
      description:
        "Our team sets up your trading environment with a VPS for stable performance.",
    },
    {
      title: "Connect Your Account",
      description:
        "We sync your broker account for seamless execution across major forex pairs.",
    },
    {
      title: "Let It Run",
      description:
        "The robot monitors, trades, and adapts—24/7—based on real market conditions and indicators.",
    },
    {
      title: "Track Your Profits",
      description:
        "Check your dashboard anytime. The bot does the work. You keep the gains.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-6">
                <span className="text-emerald-400 font-medium">
                  How It Works
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                From Install to{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Income — Simple
                </span>{" "}
                & Powerful
              </h2>
            </div>

            {/* Features List */}

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
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
