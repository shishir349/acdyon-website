"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Award, ChevronRight, BookOpen } from "lucide-react";

const trustPills = [
  { icon: Globe, label: "18+ Countries" },
  { icon: Award, label: "Globally Accredited" },
  { icon: BookOpen, label: "Executive-Focused" },
];

const stats = [
  { value: "18+", label: "Countries Reached" },
  { value: "5,000+", label: "Global Learners" },
  { value: "50+", label: "University Partners" },
  { value: "4.9", label: "Learner Rating" },
];

const highlights = [
  { label: "AI & Automation", sub: "4-Month Program", accent: "bg-blue-700" },
  { label: "Honorary Doctorate", sub: "Global Recognition", accent: "bg-[#B8952A]" },
  { label: "Executive Education", sub: "Globally Certified", accent: "bg-slate-800" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Very subtle top accent bar */}
      <div className="absolute top-0 inset-x-0 h-1 gradient-royal" />

      {/* Soft background texture — diagonal lines, barely visible */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            #1D4ED8,
            #1D4ED8 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT — Institutional copy ── */}
          <div className="space-y-8 lg:space-y-10">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-0.5 bg-[#B8952A]" />
              <span className="text-[#B8952A] text-sm font-semibold tracking-widest uppercase">
                Premium Global Education
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-[4.5rem] font-heading text-[#0F172A] leading-[1.08] tracking-tight"
            >
              Where Ambition Meets{" "}
              <span className="text-gradient-blue">Academic</span>{" "}
              <span className="italic">Excellence</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 text-lg lg:text-xl leading-relaxed max-w-lg"
            >
              Executive education, doctoral pathways, AI leadership programs, and honorary recognition — for professionals who demand global credibility.
            </motion.p>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3"
            >
              {trustPills.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-700" />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-card hover:shadow-card-hover active:scale-[0.98] group"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[#0F172A] hover:text-blue-700 font-semibold border border-slate-300 hover:border-blue-300 rounded-lg transition-all duration-200 group bg-white"
              >
                Book Consultation
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT — Editorial institutional visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main panel — editorial card stack */}
              <div className="bg-[#0F172A] rounded-2xl p-8 shadow-card-hover">
                {/* Header row */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-widest mb-1">AcdyOn</div>
                    <div className="text-white font-heading text-xl">Academic Portfolio</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/50 text-xs">Academic Year</div>
                    <div className="text-white text-sm font-semibold">2024 — 2025</div>
                  </div>
                </div>

                {/* Program highlight rows */}
                <div className="space-y-3 mb-8">
                  {highlights.map((h, i) => (
                    <motion.div
                      key={h.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/8 rounded-xl border border-white/5 transition-colors group cursor-default"
                    >
                      <div className={`w-1 h-10 rounded-full ${h.accent} shrink-0`} />
                      <div>
                        <div className="text-white font-semibold text-sm">{h.label}</div>
                        <div className="text-white/40 text-xs">{h.sub}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/50 ml-auto transition-colors" />
                    </motion.div>
                  ))}
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-2xl font-heading font-bold text-white mb-0.5">{value}</div>
                      <div className="text-white/40 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating accreditation badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-6 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-card-hover"
              >
                <div className="text-[#B8952A] text-xs font-bold uppercase tracking-widest mb-0.5">Accredited</div>
                <div className="text-slate-800 text-sm font-semibold">Global Recognition</div>
              </motion.div>

              {/* Floating learner badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -top-5 -right-5 bg-blue-700 rounded-xl px-5 py-3 shadow-card-hover"
              >
                <div className="text-white/70 text-xs uppercase tracking-widest mb-0.5">Active Learners</div>
                <div className="text-white font-heading text-lg font-bold">5,000+</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom institutional stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-20 pt-10 border-t border-slate-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }, i) => (
              <div key={label} className={`${i > 0 ? "md:border-l md:border-slate-200 md:pl-8" : ""}`}>
                <div className="text-3xl font-heading font-bold text-[#0F172A] mb-1">{value}</div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
