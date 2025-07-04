"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "What makes this trading robot different from others in the market?",
      answer:
        "Our Robo FX Trader uses advanced AI algorithms with 12 inner indicators and has been tested for 3 years before public release. It adapts to current market conditions and trades 24/7 with consistent profitability.",
    },
    {
      question: "How energy-efficient is this trading system?",
      answer:
        "Our trading system is highly optimized and energy-efficient, designed to run continuously without consuming excessive resources while maintaining peak performance.",
    },
    {
      question: "Is the trading robot suitable for beginners?",
      answer:
        "Absolutely! Zero trading knowledge is required. Our team provides complete setup and ongoing support, making it perfect for beginners who want to start automated trading.",
    },
    {
      question: "What security features does the system offer?",
      answer:
        "We implement advanced security protocols including encrypted connections, secure API integrations, and dedicated account managers to monitor your trading activities 24/7.",
    },
    {
      question: "Can the robot handle continuous, heavy-duty trading?",
      answer:
        "Yes, our robot is designed for continuous operation and can handle multiple trades across various platforms simultaneously without fatigue or performance degradation.",
    },
    {
      question: "What kind of customer support do you offer?",
      answer:
        "We provide 24/7 dedicated expert support with day and night shifts. Our team monitors your auto-trading activities and provides lifetime maintenance and support.",
    },
    {
      question:
        "How does this system contribute to sustainable trading practices?",
      answer:
        "Our system eliminates emotional trading, reduces human errors, and uses calculated strategies that contribute to more sustainable and consistent trading practices over time.",
    },
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-400 font-medium">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Got Questions? Find Answers Here
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
