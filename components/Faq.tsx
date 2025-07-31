"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Auto Trade FX unique?",
      answer:
        "Unlike generic trading bots, Auto Trade FX is powered by adaptive AI that evolves with the market. It doesn’t just follow preset strategies — it analyzes trends, adjusts in real time, and executes trades with near-instant precision. Our system is built for performance, simplicity and reliability — no fluff, no false promises.",
    },
    {
      question: "Is this robot energy efficient?",
      answer:
        "Yes. Auto Trade FX runs on optimized VPS infrastructure that’s both energy-efficient and low-maintenance. It uses minimal resources while maintaining 24/7 connectivity to the market — ensuring smart trading without draining power.",
    },
    {
      question: "Is it suitable for beginners?",
      answer:
        "Absolutely. We designed Auto Trade FX to be beginner-friendly with zero prior trading experience required. The platform comes with guided setup, easy-to-understand tutorials, and a responsive support team to help you every step of the way.",
    },
    {
      question: "What kind of security features are included?",
      answer:
        "Security is baked into every layer. All transactions are encrypted. Trade executions follow strict logic and risk-control protocols. No trade is placed without protective stop-losses or pre-checked entry validation. Plus, your data and funds stay with your broker — not us.",
    },
    {
      question: "Can it handle high-volume, 24/7 trading?",
      answer:
        "Yes — that’s what it’s built for. Auto Trade FX was stress-tested for high-frequency trading scenarios across multiple pairs. It can handle continuous, day-and-night operations without fatigue, thanks to stable VPS integration and smart automation.",
    },
    {
      question: "What kind of support will I receive?",
      answer:
        "We offer dedicated, human support around the clock. From installation to optimization, our global support team is here to assist you via chat, email, or remote helpdesk. You’re never alone with Auto Trade FX.",
    },
    {
      question: "Does it promote responsible trading?",
      answer:
        "Definitely. Our AI is designed to eliminate emotional trading, prevent overexposure, and follow sustainable trading logic. It promotes consistent, steady performance instead of risky, high-leverage speculation — ideal for long-term growth.",
    },
    {
      question: "Do I need forex knowledge to use this?",
      answer: "Not at all! Our bot is beginner-friendly and fully automated.",
    },
    {
      question: "Can it trade while I’m offline or sleeping?",
      answer: "Yes, it trades 24/7 using cloud-based VPS technology.",
    },
    {
      question: "What if I need help later?",
      answer: "We provide full lifetime support and real-time assistance.",
    },
    {
      question: "Is this safe for my money?",
      answer:
        "Yes. Our bot follows strict risk management protocols with no martingale or high-risk strategies.",
    },
    {
      question: "Can it scale as I grow?",
      answer:
        "Absolutely. Our premium plans support multiple accounts and more advanced configurations.",
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
              Have Questions? Here’s What Most People Ask
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
