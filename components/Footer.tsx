"use client";
import { Clock, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl">Auto</span>
                <div className="text-emerald-400 font-medium text-sm">
                  TRADER FX
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Auto Trade FX Software website is a software provider company for
              forex trading. Offering automatic robot setup with expert managed
              trading accounts.
            </p>

            {/* Business Hours */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">Mon - Fri - 09:00AM - 06:00PM</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">Saturday - 09:00AM - 05:00PM</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Faq
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links & Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Other Links
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Privacy and Policy
                </a>
              </li>
            </ul>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <div className="text-slate-300 text-sm">
                    <div>13thStreet, 47 W 13th St</div>
                    <div>New York, NY 10011</div>
                    <div>USA</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <a
                    href="mailto:support@autotradefx.net"
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    support@autotradefx.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            Copyrights © 2024 All Rights Reserved by Auto Trade FX Software.
          </p>
        </div>
      </div>
    </footer>
  );
}
