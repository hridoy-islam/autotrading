"use client";
import Image from "next/image";
import { ArrowRight, Download, TrendingUp, Zap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(6,182,212,0.1),transparent_50%)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Trading</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Supercharge your{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  trading journey
                </span>{" "}
                with{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Auto Trade FX
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Auto Trade FX Trading Software is programmed to adapt to the
                current market conditions as it executes trades on both sides of
                the market 24/7.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>24/7 Trading</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Market Adaptive</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"getstarted"}>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 group">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={"getstarted"}>
                <Button className="border-2 border-slate-600 hover:border-emerald-400 text-white hover:text-emerald-400 bg-transparent hover:bg-emerald-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 group">
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Download AI Robot
                </Button>
              </Link>
            </div>
          </div>

          {/* Robot Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/robo.png"
                alt="Auto Trade FX"
                width={600}
                height={600}
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
                priority
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl scale-75 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
