"use client";
import { useState } from "react";
import { Quote } from "lucide-react";

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Mahmudul Hasan",
      role: "Forex Trader",
      image: "/placeholder.svg?height=60&width=60",
      quote:
        "Beyond Expectations!! - I was skeptical at first, but this robot has surpassed all my expectations. The energy efficiency and sleek design have made trading both cost-effective and enjoyable. A big thumbs up!",
      icon: "💰",
    },
    {
      name: "Vikram Singh",
      role: "Professional Trader",
      image: "/placeholder.svg?height=60&width=60",
      quote:
        "Trading Made Simple and Rewarding! - As someone who's constantly on the move, I needed a trading solution that was compact and easy to manage. This robot delivered that and more. It's like having a reliable trading companion wherever I go.",
      icon: "🌐",
    },
    {
      name: "Neha Patel",
      role: "Investment Analyst",
      image: "/placeholder.svg?height=60&width=60",
      quote:
        "Security and Performance in One! - The advanced security features give me peace of mind, knowing my trading activities are safe. Coupled with its high performance, this robot is truly a stellar investment.",
      icon: "🔒",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-slate-700/50 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 font-medium">
              Customer Review
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Glimpse into Happy{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Clients' Experiences
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto">
            ⭐ Join the Journey of Joy and Triumph: As you explore the
            remarkable experiences of our valued clients, immerse yourself in
            their stories of delight and achievement. Each testimonial is a
            testament to the transformative power of our product, showcasing
            real-world impacts and the joy it brings to users.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transition-all duration-300 ${
                  index === currentSlide ? "ring-2 ring-emerald-500/30" : ""
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-emerald-400" />
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-slate-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-emerald-400" : "bg-slate-600"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-slate-300 mb-4">
              <strong>Your Story Awaits:</strong> These are just a few of the
              countless happy stories we've received. Every client's journey
              with our product is unique, but the outcome is consistently joyous
              and successful. We invite you to become part of this thriving
              community and create your own success story!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
