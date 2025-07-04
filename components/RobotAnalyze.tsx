"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import liveresult from "../public/liveresult.jpg";

export default function RobotAnalyze() {
  const features = [
    "Robots can trade far more effectively and efficiently than any human",
    "Monitoring multiple trades, across multiple platforms simultaneously",
    "Consistent trading - robots always adhere to the rules you set for the",
    "Order entry achieved in seconds",
    "Instant reaction to stock market fluctuations",
    "Completely unemotional trading",
    "Trading when you can't be online. You sleep, the robot carries on trading",
    "Using a robot that is pre-programmed with specific trading system rules",
    "Automated robots have more capacity to process data than a human being",
    "Robots are not scared to take the risk that you might not want to make",
    "No instinctive or impulsive trading, everything is calculated",
    "Ability to back test to see the accuracy of the robot trader",
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-6">
                <span className="text-emerald-400 font-medium">
                  Auto Analyze
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Robot Will Analyze The Chart Automatically &{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Take Trade
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Buy using the Auto Trade FX Software automatic Robot Software
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

          {/* Robot Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50">
              <Image
                src={liveresult}
                alt="Robot analyzing charts"
                className="rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl scale-75 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
