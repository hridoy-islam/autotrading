"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Ticket,
  Mail,
  HelpCircle,
  MessageSquare,
  Clock,
  Headset,
  Phone,
} from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeaderTop />
      <Header />

      <BreadCumb
        title="Support"
        subtitle="Whether you need help setting up, optimizing, or resolving a technical issue, our expert support team is here for you — 24/7, no bots, no delays."
      />

      {/* Support Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Support Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-4">
                  <span className="text-emerald-400 font-medium">
                    Real Help. Real People. Real Fast.
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  How We Help
                </h2>
              </div>

              {/* Ticket Information */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Ticket className="w-6 h-6 text-emerald-400 mr-2" />
                  Smart Ticket System
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Every request is logged, prioritized, and sent directly to the
                  right expert. No bouncing around between departments — just
                  efficient support.
                </p>

                <div className="border-t border-slate-700 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Email us anytime
                  </h4>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <a
                      href="mailto:support@autotradefx.net"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      support@autotradefx.net
                    </a>
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Phone
                  </h4>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <a className="text-emerald-400 hover:text-emerald-300 transition-colors">
                      +971 52 840 4824
                    </a>
                  </div>
                </div>
              </div>

              {/* Support Features */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4">
                  <HelpCircle className="w-8 h-8 text-emerald-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">
                    24/7 Global Coverage
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Our round-the-clock support ensures that help is always
                    available, no matter your time zone. From Dubai to New York
                    — we’ve got you covered.
                  </p>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4">
                  <MessageSquare className="w-8 h-8 text-emerald-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">
                    Specialists on Standby
                  </h4>
                  <p className="text-slate-300 text-sm">
                    You're not just talking to a support agent — you're talking
                    to forex-savvy professionals who understand your trading
                    goals.
                  </p>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4">
                  <Clock className="w-8 h-8 text-emerald-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">
                    Typical Response Times
                  </h4>
                  <p className="text-slate-300 text-sm">
                    General Queries: Within 6 hours <br />
                    Technical Support: Within 2–4 hours <br />
                    Emergency Issues: Immediate escalation
                  </p>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4">
                  <Headset className="w-8 h-8 text-emerald-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">
                    Need faster assistance?
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Email us directly: support@autotradefx.net
                    <br /> Visit our Dubai HQ for in-person setup or
                    consultations.
                  </p>
                </div>
              </div>
            </div>

            {/* Support Ticket Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Submit a Support Request
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Use the form to tell us what you need help with. The more detail
                you share, the faster we can get it resolved.
              </p>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="What’s the issue about?"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="So we can greet you properly"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="So we can keep you updated"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="priority"
                    className="block text-white font-medium mb-2"
                  >
                    Priority
                  </label>
                  <select
                    id="priority"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="Share as much detail as possible"
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25">
                  Submit My Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
