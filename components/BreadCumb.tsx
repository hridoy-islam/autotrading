"use client";
import { ChevronRight, Home } from "lucide-react";

interface BreadCumbProps {
  title: string;
  subtitle?: string;
  showBreadcrumb?: boolean;
}

export default function BreadCumb({
  title,
  subtitle,
  showBreadcrumb = true,
}: BreadCumbProps) {
  return (
    <section className="relative min-h-[400px] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(6,182,212,0.1),transparent_50%)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse delay-500"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation */}
          {showBreadcrumb && (
            <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
              <a
                href="/"
                className="flex items-center space-x-1 hover:text-emerald-400 transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-emerald-400 font-medium">{title}</span>
            </nav>
          )}

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight relative">
              {/* Accent Border */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
              <div className="pl-8">
                {title}
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl scale-110 -z-10"></div>
              </div>
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed pl-8 max-w-3xl">
                {subtitle}
              </p>
            )}

            {/* Decorative Line */}
            <div className="flex items-center space-x-4 pl-8 pt-4">
              <div className="h-px bg-gradient-to-r from-emerald-400 to-transparent w-24"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-emerald-400 to-transparent w-16"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}
