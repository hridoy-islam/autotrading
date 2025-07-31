// "use client";
// import BreadCumb from "@/components/BreadCumb";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import HeaderTop from "@/components/HeaderTop";
// import React from "react";

// export default function page() {
//   return (
//     <div>
//       <HeaderTop />
//       <Header />
//       <BreadCumb title="Contact" />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Clock, HeadphoneOff, Headphones } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeaderTop />
      <Header />

      <BreadCumb
        title="Contact"
        subtitle="Get in touch with our expert team for personalized trading solutions and support"
      />

      {/* Contact Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-4">
                  <span className="text-emerald-400 font-medium">
                    Let’s Connect
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Questions? Curious about how automation can boost your
                  trading?
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  We’re here to listen, guide, and help you take the next step.
                  Whether you’re just exploring or ready to get started, reach
                  out and let our team walk you through it.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Address</h3>
                    <p className="text-slate-300">
                      Bayswater Tower, Marasi Drive Business Bay,
                      <br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:support@autotradefx.net"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      support@autotradefx.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Business Hours
                    </h3>
                    <div className="text-slate-300 space-y-1">
                      <p>Mon - Fri: 09:00AM - 06:00PM</p>
                      <p>Saturday: 09:00AM - 05:00PM</p>
                      <p>Sunday : Closed</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Need Help Faster?
                    </h3>
                    <div className="text-slate-300 space-y-1">
                      <p>
                        Skip the queue — email us directly at
                        support@autotradefx.net
                      </p>
                      <p>and we’ll get back to you within a few hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Form
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Have a question? Want to book a live demo? Just fill out the
                form below
              </p>
              <form className="space-y-6">
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
                    placeholder="So we know who you are"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white font-medium mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="So we can reach out quickly"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="So you receive important updates"
                  />
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
                    placeholder="Tell us your goals, challenges, or anything on your mind"
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25">
                  Send Message
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
