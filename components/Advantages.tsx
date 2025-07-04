"use client";
import {
  Settings,
  Monitor,
  GraduationCap,
  Clock,
  Eye,
  Headphones,
} from "lucide-react";

export default function Advantages() {
  const advantages = [
    {
      icon: <Settings className="w-8 h-8 text-emerald-400" />,
      title: "One Time Setup",
      description:
        "(As once you avail our software our team will install the EA software for automated trading in your system or in VPS. as our team will guide and support you till start to get your profit.)",
    },
    {
      icon: <Monitor className="w-8 h-8 text-emerald-400" />,
      title: "Smooth Experience on any Device",
      description:
        "The custom- built trading platform has been adapted for all devices you may choose and switching is mobile, Computer Etc., Easy withdrawal in any time with any Device.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-emerald-400" />,
      title: "Zero Trading Knowledge Required",
      description:
        "The custom- built trading platform has been adapted for all devices you may choose and switching is mobile, Computer Etc., Easy withdrawal in any time with any Device.",
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-400" />,
      title: "Start Trading in 24 Hours",
      description:
        "Once your setup is completed, your trade will start and you can see your daily profits.",
    },
    {
      icon: <Eye className="w-8 h-8 text-emerald-400" />,
      title: "Zero Monitoring",
      description:
        "As our client no need to watch the market, as our EA software will trade by itself with most profitable strategy.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-emerald-400" />,
      title: "Dedicated Expert Support",
      description:
        "24/7 expert analysers monitor your Auto Trade for Entire Period with Day & Night Shift.",
    },
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 font-medium">Advantages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What you are getting from us
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-900/70 transition-all duration-300 hover:border-emerald-500/30 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {advantage.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
