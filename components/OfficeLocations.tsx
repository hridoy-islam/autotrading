"use client";
import { MapPin, ArrowRight, Building2, Users, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function OfficeLocations() {
  const locations = [
    {
      name: "Dubai",
      country: "United Arab Emirates",
      softwares: "100+",
      clients: "500+",
      description: "Middle East Trading Hub",
      image: "/dubai.jpg",
      gradient: "from-orange-500/80 to-red-500/80",
      features: ["24/7 Support", "Local Expertise", "Arabic Support"],
    },
    {
      name: "Singapore",
      country: "Singapore",
      softwares: "150+",
      clients: "750+",
      description: "Asia-Pacific Financial Center",
      image: "/singapore.jpg",
      gradient: "from-blue-500/80 to-purple-500/80",
      features: ["Multi-Currency", "Regional Markets", "Expert Analysis"],
    },
    {
      name: "USA",
      country: "United States",
      softwares: "200+",
      clients: "1000+",
      description: "Global Trading Capital",
      image: "/usa.jpg",
      gradient: "from-emerald-500/80 to-teal-500/80",
      features: ["Wall Street Access", "Advanced Tools", "Premium Support"],
    },
  ];

  return (
    <section className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(6,182,212,0.05),transparent_50%)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse delay-500"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-emerald-400 font-medium">
                Our Global Presence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Office{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Locations
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Looking for local setup and support? We’ve got offices and
              partners ready to help you in
            </p>
          </div>

          <div className="flex-shrink-0">
            <button className="group flex items-center space-x-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 hover:border-emerald-500/50 rounded-xl px-6 py-3 transition-all duration-200">
              <span className="text-white group-hover:text-emerald-400 font-medium">
                All Locations
              </span>
              <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Background Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${location.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                ></div>

                {/* City Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <Image
                      src={`${location.image}`}
                      alt=""
                      height={400}
                      width={600}
                    />
                  </div>
                </div>

                {/* Location Badge */}
                {/* <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-medium">
                      {location.description}
                    </span>
                  </div>
                </div> */}

                {/* Stats Badge */}
                {/* <div className="absolute top-4 right-4">
                  <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-3 py-1">
                    <span className="text-emerald-400 text-sm font-medium">
                      Active
                    </span>
                  </div>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Location Info */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {location.name}
                  </h3>
                  {/* <p className="text-slate-400 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {location.country}
                  </p> */}
                </div>

                {/* Stats */}
                {/* <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">
                      {location.softwares}
                    </div>
                    <div className="text-slate-400 text-sm">
                      Software Licenses
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-teal-400 mb-1">
                      {location.clients}
                    </div>
                    <div className="text-slate-400 text-sm">Active Clients</div>
                  </div>
                </div> */}

                {/* Features */}
                {/* <div className="space-y-2 mb-6">
                  {location.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div> */}

                {/* Contact Button */}
                {/* <button className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-3 rounded-xl transition-all duration-200 group-hover:shadow-lg group-hover:shadow-emerald-500/25">
                  Contact {location.name} Office
                </button> */}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Support in Your Region?
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Our global team is ready to assist you with local expertise and
              24/7 support in your timezone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 group">
                <Users className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" />
                Get Support
              </Button>
              <Button className="border-2 border-slate-600 hover:border-emerald-400 text-white hover:text-emerald-400 bg-transparent hover:bg-emerald-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 group">
                <MapPin className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" />
                Locate Office
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
