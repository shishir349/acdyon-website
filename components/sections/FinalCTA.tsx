"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-28 bg-[#0F172A] overflow-hidden">
      {/* Institutional background — subtle diagonal lines only, no glows */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            #ffffff,
            #ffffff 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Gold accent rule at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-[#B8952A]" />

      <div className="relative z-10 container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-0.5 bg-[#B8952A]" />
            <span className="text-[#B8952A] text-xs font-bold tracking-widest uppercase">
              Your Next Chapter
            </span>
            <div className="w-8 h-0.5 bg-[#B8952A]" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading text-white leading-tight">
            Build Your Future With{" "}
            <span className="text-gradient-gold">Global Learning</span>
            {" "}& Recognition
          </h2>

          {/* Subtext */}
          <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            This is where ambitious professionals come to elevate their career, authority, and global credibility. Join 5,000+ learners across 18+ countries.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-card hover:shadow-card-hover text-base group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold border border-white/20 hover:border-white/40 rounded-lg transition-all duration-200 text-base hover:bg-white/5"
            >
              Explore Programs
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-6 border-t border-white/10">
            {[
              { value: "Free", label: "First consultation" },
              { value: "18+", label: "Countries" },
              { value: "5,000+", label: "Learners" },
              { value: "4.9★", label: "Avg. rating" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-white font-heading font-bold text-lg">{value}</div>
                <div className="text-slate-500 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
