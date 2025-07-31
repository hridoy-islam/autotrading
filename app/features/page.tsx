"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import { Button } from "../../components/ui/button";
import {
  BookOpen,
  RefreshCw,
  Zap,
  DollarSign,
  Bot,
  Shield,
  Target,
  BarChart3,
  TrendingUp,
  Brain,
  Lightbulb,
  RefreshCcw,
  BellRing,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-emerald-400" />,
      title: "One-Click Smart Setup",
      description:
        "Forget complicated installations. Our intelligent setup wizard configures everything with just one click — no coding, no tech headaches.",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      title: "Easy-to-Follow Strategy Guide",
      description:
        "Get instant access to a step-by-step guide that helps you start strong. Whether you’re a beginner or seasoned trader, you’ll learn how to maximize the robot’s full potential.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Emotionless AI Trading",
      description:
        "No fear. No greed. Just logic. Auto Trade FX trades with complete objectivity, making decisions based on live data—not emotions.",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: "Precision-Driven Market Scans",
      description:
        "Every second, the software scans the markets using adaptive algorithms to catch profitable trades based on micro-movements and volatility.",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-400" />,
      title: "Dynamic Trade Execution",
      description:
        "From entry to exit, the system adjusts in real time to market conditions. It adapts strategies on the fly to lock in better profits and reduce losses.",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-indigo-400" />,
      title: "Lifetime Software Updates",
      description:
        "Enjoy free lifetime updates. As our AI evolves, you’ll get every new feature, fix, and optimization — no extra cost, ever.",
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: "Automated Profit Protection",
      description:
        "The system closes your positions at optimal moments. Built-in money management ensures smart scaling and protects your gains from sudden reversals.",
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: <BellRing className="w-8 h-8 text-emerald-400" />,
      title: "24/7 Priority Support",
      description:
        "Our dedicated support team is available day and night. Whether you need setup help or trading advice, we’re here — fast, friendly, and always human.",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeaderTop />
      <Header />

      <BreadCumb
        title="Features"
        subtitle="Discover the powerful features that make Auto Trade FX the ultimate automated trading solution"
      />

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-400 font-medium">
                Key Features of Auto Trade FX
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built to Perform. Designed <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                for Simplicity. Backed by AI.
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Auto Trade FX isn’t just another trading tool — it’s your 24/7
              trading partner that thinks, acts, and profits like a seasoned
              expert. Here’s what sets it apart:
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:bg-slate-600/50 transition-colors">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {feature.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute top-6 right-6 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Trade the Smart Way?
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Join thousands of users who rely on Auto Trade FX to automate
                their success. Whether you’re new to trading or scaling up, the
                future of forex is one click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="getstarted">
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 group">
                    Get Started Now
                    <Zap className="w-5 h-5 ml-2 inline group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
                <Link href="getstarted">
                  <Button className="border-2 border-slate-600 hover:border-emerald-400 text-white hover:text-emerald-400 bg-transparent hover:bg-emerald-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 group">
                    <Shield className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" />
                    View Live Results
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
