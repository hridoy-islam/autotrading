"use client";
import {
  Settings,
  Monitor,
  GraduationCap,
  Clock,
  Eye,
  Headphones,
  Brain,
  BriefcaseBusiness,
  MonitorSmartphone,
  LockKeyholeOpen,
  Globe,
} from "lucide-react";

export default function Advantages() {
  const advantages = [
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />,
      title: "AI That Thinks Like a Pro",
      description:
        "Our system reacts to market changes in real-time, scanning data and placing trades faster than any human ever could.",
    },
    {
      icon: <BriefcaseBusiness className="w-8 h-8 text-emerald-400" />,
      title: "Set It & Forget It",
      description:
        "Once installed, the robot handles everything—entry, exit, stop-loss, and profit taking—with no ongoing work required from you.",
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-emerald-400" />,
      title: "Works Across All Devices",
      description:
        "Whether you prefer your phone, laptop, or tablet, Auto Trade FX fits your lifestyle.",
    },
    {
      icon: <LockKeyholeOpen className="w-8 h-8 text-emerald-400" />,
      title: "Risk Managed by Default",
      description:
        "Every trade is guided by pre-programmed logic and safety nets to protect your capital.",
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      title: "Always On, Always Profiting",
      description:
        "Trade day or night, across global markets, with zero downtime—even while you sleep.",
    },
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 font-medium">
              Why Choose Auto Trade FX?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Handle the Trades — You Watch the Profits
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
