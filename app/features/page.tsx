// "use client";
// import BreadCumb from "@/components/BreadCumb";
// import Features from "@/components/Features";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import HeaderTop from "@/components/HeaderTop";

// export default function page() {
//   return (
//     <>
//       <HeaderTop />
//       <Header />
//       <BreadCumb title="Features" />
//       <Features />
//       <Footer />
//     </>
//   );
// }

"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Headphones,
  RefreshCw,
  Zap,
  DollarSign,
  Bot,
  Shield,
  Target,
  BarChart3,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-emerald-400" />,
      title: "Auto Trade FX EA System",
      description:
        "The complete Auto Trade FX Trader EA EA ready for quick-installation. Auto Trade FX EA comes with a quick-install wizard that will walk you through the simple install and configuration process. No additional skills, tools, or downloads are required. Just one-click the wizard, and let it do the rest!",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      title: "Quick Strategy Guide",
      description:
        "We've included a detailed guide that will walk you through the best techniques for setting up and using Auto Trade FX. We'll show you how to maximize the performance of Auto Trade FX with our informative Quick Strategy Guide.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-400" />,
      title: "24/7 Quick Response Support",
      description:
        "Our support desk is open 24/7 to answer your questions. We pride ourselves on rapid follow-up often answering questions within one business day.",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-orange-400" />,
      title: "Lifetime Updates",
      description:
        "As a Auto Trade FX customer you will have access to all future updates to AutoTradeFx EA free of charge. We're giving you all you need to start trading withAuto Trade FX today.",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Precise and Scientific Trading",
      description:
        "Auto Trade FX takes human emotion out of the equation. It will flawlessly execute an optimized strategy every second of every session. This is the best way to trade Forex!",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      title: "Rapid Market Impulse Trading Levels",
      description:
        "Auto Trade FX sets your trades to take advantage of market volatility movement. Each trade can be configured based on your trading strategy.",
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: "Optimal Money-Management",
      description:
        "Auto Trade FX systematically tracks your open trading positions and closes each out at the optimal profit levels.",
      gradient: "from-yellow-500/20 to-orange-500/20",
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
              <span className="text-emerald-400 font-medium">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Features Of{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Auto Trade FX Software
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Experience the power of advanced AI-driven trading with our
              comprehensive suite of features designed to maximize your trading
              success.
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
                Ready to Experience These Features?
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Join thousands of successful traders who are already using Auto
                Trade FX to automate their trading and maximize their profits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 group">
                  Get Started Now
                  <Zap className="w-5 h-5 ml-2 inline group-hover:scale-110 transition-transform" />
                </button>
                <button className="border-2 border-slate-600 hover:border-emerald-400 text-white hover:text-emerald-400 bg-transparent hover:bg-emerald-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 group">
                  <Shield className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" />
                  View Live Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
