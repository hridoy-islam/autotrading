"use client";
import { TrendingUp, Shield } from "lucide-react";
import { Button } from "./ui/button";

export default function LiveResult() {
  return (
    <section className="py-20 bg-slate-900/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Live Daily Results Of Robofx{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  VERIFIED
                </span>
              </h2>

              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Myfxbook is a automated online trading tool that enables
                  traders to evaluate, analyse, share and compare their trading
                  strategies and trading account performance.
                </p>
                <p>
                  2020 has been a rollercoaster ride for markets, with plenty of
                  crashes, rallies, insolvencies, and stimulus packages. We are
                  proud to announce that Auto Trade FX Software market
                  volatility closed every week in profit.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 group">
                <TrendingUp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Live Result
              </Button>

              <div className="flex items-center space-x-2 text-emerald-400">
                <Shield className="w-5 h-5" />
                <span className="font-medium">ROBOFX Verified Account</span>
              </div>
            </div>

            {/* Stats or Additional Info */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  24/7
                </div>
                <div className="text-slate-300">Trading Active</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  100%
                </div>
                <div className="text-slate-300">Verified Results</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  2020+
                </div>
                <div className="text-slate-300">Profitable Weeks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
