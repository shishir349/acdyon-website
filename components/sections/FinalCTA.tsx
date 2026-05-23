"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-28 bg-[#0F172A] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/8 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800/20 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Your Next Chapter Starts Now</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-6xl font-heading text-white leading-tight">
            Build Your Future With{" "}
            <span className="text-gradient-gold">Global Learning</span>
            {" & Recognition"}
          </h2>

          {/* Subtext */}
          <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            This is where ambitious professionals go to elevate their career, authority, and future. Join 5,000+ global learners who chose AcdyOn.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/30 hover:shadow-xl text-base group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 text-base"
            >
              Explore Programs
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
            {[
              "No upfront commitment",
              "Free first consultation",
              "18+ countries",
              "5,000+ learners",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
