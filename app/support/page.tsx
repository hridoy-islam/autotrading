// "use client";
// import BreadCumb from "@/components/BreadCumb";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import HeaderTop from "@/components/HeaderTop";
// import Support from "@/components/Support";

// export default function page() {
//   return (
//     <>
//       <HeaderTop />
//       <Header />
//       <BreadCumb title="Support" />
//       <Support />
//       <Footer />
//     </>
//   );
// }

"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ticket, Mail, HelpCircle, MessageSquare } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeaderTop />
      <Header />

      <BreadCumb
        title="Support"
        subtitle="Get expert assistance with our comprehensive support system and dedicated team"
      />

      {/* Support Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Support Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-4">
                  <span className="text-emerald-400 font-medium">Ticket</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ticket Panel
                </h2>
              </div>

              {/* Ticket Information */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Ticket className="w-6 h-6 text-emerald-400 mr-2" />
                  Ticket ID
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Convert all information into tickets. We prioritize,
                  categorize and assign them to the right Department.
                </p>

                <div className="border-t border-slate-700 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    For Support
                  </h4>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <a
                      href="mailto:support@robofxtrader.com"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      support@robofxtrader.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Support Features */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4">
                  <HelpCircle className="w-8 h-8 text-emerald-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">
                    24/7 Support
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Round-the-clock assistance for all your trading needs
                  </p>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4">
                  <MessageSquare className="w-8 h-8 text-emerald-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">Expert Team</h4>
                  <p className="text-slate-300 text-sm">
                    Dedicated professionals with trading expertise
                  </p>
                </div>
              </div>
            </div>

            {/* Support Ticket Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Create Support Ticket
              </h3>

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
                    placeholder="Brief description of your issue"
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
                    placeholder="Your full name"
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
                    placeholder="your.email@example.com"
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
                    placeholder="Describe your issue in detail..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25">
                  Submit
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
