"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import liveresult from "../public/liveresult.jpg";

export default function RobotAnalyze() {
  const features = [
    "New to Forex? We’ve got you covered.",
    "Don’t have time to trade? Let the robot work for you.",
    "Want consistent performance? We’re backed by years of strategy testing.",
    "Need security? All trades are protected by smart algorithms and monitored 24/7.",
  ];
  const differences = [
    "No emotions, no fatigue — just smart, calculated trading",
    "Backed by 3+ years of live data and performance testing",
    "AI reacts in milliseconds — faster than any manual trading",
    "No martingale. No gimmicks. Just real results.",
    "Full transparency and support — we never leave you in the dark",
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Features List */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for Everyone
              </h2>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-slate-300 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            {/* What Makes Us Different */}
            <div className="pt-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Makes Us Different
              </h2>
              <div className="space-y-4">
                {differences.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-slate-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
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
