"use client";
import { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Download, CheckCircle, Bot, Sparkles } from "lucide-react";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  message: string;
};

export default function GetStarted() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      await fetch("/api/getstarted", {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [formState]);

  return (
    <section className="py-20 bg-slate-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(6,182,212,0.1),transparent_50%)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse delay-500"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          {formState.isSubmitSuccessful && (
            <div className="mb-8 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                Thank You!
              </h3>
              <p className="text-slate-300">
                Your download will begin shortly. We'll also send you setup
                instructions via email.
              </p>
            </div>
          )}

          {/* Main Form Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                <Bot className="w-5 h-5 text-emerald-400 mr-2" />
                <span className="text-emerald-400 font-medium">
                  Get Started
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automatic{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AI Bot Download
                </span>
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed">
                Get instant access to our powerful trading robot. Fill out the
                form below to download your AI trading assistant.
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Instant Download</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Setup Guide Included</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <span className="text-red-400 text-sm mt-1 block">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Phone and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white font-medium mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your phone number"
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-sm mt-1 block">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-sm mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* City and Country Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-white font-medium mb-2"
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...register("city", { required: "City is required" })}
                    className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your city"
                  />
                  {errors.city && (
                    <span className="text-red-400 text-sm mt-1 block">
                      {errors.city.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-white font-medium mb-2"
                  >
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    {...register("country", {
                      required: "Country is required",
                    })}
                    className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your country"
                  />
                  {errors.country && (
                    <span className="text-red-400 text-sm mt-1 block">
                      {errors.country.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your trading goals and experience..."
                ></textarea>
                {errors.message && (
                  <span className="text-red-400 text-sm mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading || isSubmitSuccessful}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </div>
                  ) : isSubmitSuccessful ? (
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Download Complete
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Download AI Trading Bot
                    </div>
                  )}
                </button>
              </div>

              {/* Security Notice */}
              <div className="text-center pt-4">
                <p className="text-slate-400 text-sm">
                  🔒 Your information is secure and will only be used to provide
                  you with trading support and updates.
                </p>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-slate-400">
              Need help? Contact our support team at{" "}
              <a
                href="mailto:support@autotradefx.net"
                className="text-emerald-400 hover:text-emerald-300"
              >
                support@autotradefx.net
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
