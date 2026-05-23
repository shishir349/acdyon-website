"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Award, Sparkles, Brain, ChevronRight } from "lucide-react";

const trustPills = [
  { icon: Globe, label: "Global University Network" },
  { icon: Award, label: "Executive-Friendly Programs" },
  { icon: Brain, label: "AI & Leadership Focused" },
];

const floatingCards = [
  {
    title: "AI Automation",
    subtitle: "4-Month Program",
    badge: "New",
    color: "from-blue-600 to-blue-800",
    delay: 0,
  },
  {
    title: "Honorary Doctorate",
    subtitle: "Global Recognition",
    badge: "Featured",
    color: "from-slate-800 to-slate-900",
    delay: 1,
  },
  {
    title: "Executive MBA",
    subtitle: "18+ Countries",
    badge: "Premium",
    color: "from-blue-700 to-indigo-800",
    delay: 2,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0F172A] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Global Education Platform</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-heading text-white leading-[1.1] tracking-tight"
            >
              Future-Focused{" "}
              <span className="text-gradient-blue">Learning</span>
              {" & "}
              <br className="hidden lg:block" />
              Global Academic{" "}
              <span className="text-gradient-gold">Recognition</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-xl"
            >
              Executive education, AI mastery, doctoral pathways, and honorary recognition
              for ambitious professionals and global leaders.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:shadow-xl active:scale-95 group"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group"
              >
                Book Consultation
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {trustPills.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Floating Cards Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Central glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow" />
            </div>

            {/* Main center visual */}
            <div className="relative w-72 h-72">
              {/* Orbit rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-spin" style={{ animationDuration: "30s" }} />
              <div className="absolute inset-4 border border-white/5 rounded-full animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-3xl gradient-royal shadow-glow-blue flex flex-col items-center justify-center gap-2">
                  <span className="text-3xl font-heading text-white font-bold">A</span>
                  <span className="text-white/70 text-xs font-medium tracking-widest">ACDYON</span>
                </div>
              </div>

              {/* Floating metric dots */}
              {[
                { top: "0%", left: "50%", value: "18+", label: "Countries" },
                { top: "50%", left: "100%", value: "5K+", label: "Learners" },
                { top: "100%", left: "50%", value: "Global", label: "Network" },
                { top: "50%", left: "0%", value: "AI", label: "Focused" },
              ].map(({ top, left, value, label }) => (
                <div
                  key={label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top, left }}
                >
                  <div className="glass px-3 py-2 rounded-xl text-center">
                    <div className="text-white font-bold text-sm font-heading">{value}</div>
                    <div className="text-slate-400 text-xs">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Program Cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.title}
                className={`absolute animate-float${i === 1 ? "-slow" : i === 2 ? "-delay" : ""}`}
                style={{
                  top: i === 0 ? "-5%" : i === 1 ? "auto" : "70%",
                  bottom: i === 1 ? "0%" : "auto",
                  right: i === 0 ? "-5%" : i === 2 ? "auto" : "auto",
                  left: i === 2 ? "-10%" : i === 1 ? "-5%" : "auto",
                }}
              >
                <div className={`bg-gradient-to-br ${card.color} rounded-2xl p-4 shadow-xl w-44`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">{card.badge}</span>
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                  <div className="text-white font-heading font-bold text-sm">{card.title}</div>
                  <div className="text-white/60 text-xs mt-0.5">{card.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10"
        >
          {[
            { value: "18+", label: "Countries Reached" },
            { value: "5,000+", label: "Global Learners" },
            { value: "50+", label: "University Partners" },
            { value: "4.9★", label: "Average Rating" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-heading font-bold text-white mb-1">{value}</div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
