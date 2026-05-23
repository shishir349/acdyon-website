"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  BookOpen,
  Users,
  Clock,
  BarChart2,
} from "lucide-react";

const highlights = [
  "4-Month Executive Program",
  "Live Faculty Mentorship",
  "Applied Business Projects",
  "AI Leadership Framework",
  "Workflow Design & Automation",
  "Executive Career Outcomes",
];

const modules = [
  {
    icon: BookOpen,
    title: "AI for Executives",
    desc: "Strategic frameworks for leading AI transformation",
  },
  {
    icon: BarChart2,
    title: "Business Automation",
    desc: "Design intelligent workflows that scale",
  },
  {
    icon: Users,
    title: "Leadership & AI",
    desc: "Lead teams and organizations in the AI era",
  },
  {
    icon: Clock,
    title: "Applied Projects",
    desc: "Deploy real automation in your organization",
  },
];

export default function FeaturedAIProgram() {
  return (
    <section className="section-padding bg-[#FAFAF8] border-y border-slate-200">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT — Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#B8952A]" />
                <span className="text-[#B8952A] text-xs font-bold tracking-widest uppercase">
                  Flagship Program
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading text-[#0F172A] leading-tight mb-5">
                AI Leadership &{" "}
                <span className="text-gradient-blue">Automation</span>{" "}
                for Executives
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                An executive education program that equips leaders with the strategic knowledge and practical skills to drive AI-powered transformation within their organizations.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4", label: "Months" },
                { value: "Live", label: "Mentorship" },
                { value: "100%", label: "Applied" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-heading font-bold text-[#0F172A] mb-0.5">{value}</div>
                  <div className="text-slate-400 text-xs font-medium">{label}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4.5 h-4.5 text-blue-700 shrink-0" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-5 pt-2">
              <Link
                href="/ai-courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-card hover:shadow-card-hover group"
              >
                View Program
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="text-slate-500 hover:text-blue-700 text-sm font-semibold transition-colors"
              >
                Speak with an advisor →
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT — Institutional program card ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="bg-white border border-slate-200 rounded-2xl shadow-card overflow-hidden">
              {/* Card header — navy */}
              <div className="bg-[#0F172A] p-7">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white/50 text-xs uppercase tracking-widest">AcdyOn Executive</div>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                    Enrolling
                  </span>
                </div>
                <h3 className="text-white font-heading text-2xl font-bold">
                  AI Leadership Program
                </h3>
                <p className="text-white/50 text-sm mt-1">
                  Executive cohort · Live + Async delivery
                </p>
              </div>

              {/* Module grid */}
              <div className="p-6">
                <div className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-4">
                  Core Modules
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {modules.map((mod, i) => {
                    const Icon = mod.icon;
                    return (
                      <motion.div
                        key={mod.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
                        className="bg-slate-50 border border-slate-100 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
                      >
                        <Icon className="w-4.5 h-4.5 text-blue-700 mb-2" />
                        <div className="text-slate-900 text-sm font-semibold mb-0.5">{mod.title}</div>
                        <div className="text-slate-400 text-xs leading-relaxed">{mod.desc}</div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Timeline */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-4">
                    Program Timeline
                  </div>
                  <div className="relative">
                    <div className="absolute left-3.5 top-2 bottom-2 w-px bg-slate-200" />
                    {[
                      { phase: "Foundation", detail: "Weeks 1–3 · AI Strategy & Frameworks" },
                      { phase: "Development", detail: "Weeks 4–10 · Automation & Agent Design" },
                      { phase: "Leadership", detail: "Weeks 11–14 · Team & Org Transformation" },
                      { phase: "Capstone", detail: "Week 15–16 · Live Project & Certification" },
                    ].map(({ phase, detail }, i) => (
                      <div key={phase} className="flex items-start gap-4 mb-4 last:mb-0">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 z-10 ${i === 0 ? "bg-blue-700" : "bg-slate-300"}`}>
                          {i + 1}
                        </div>
                        <div>
                          <div className="text-slate-900 text-sm font-semibold">{phase}</div>
                          <div className="text-slate-400 text-xs">{detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating outcome badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-[#B8952A] text-white rounded-xl px-5 py-3 shadow-card-hover"
            >
              <div className="text-white/80 text-xs font-semibold uppercase tracking-wider">Outcome</div>
              <div className="text-white font-heading font-bold text-base">Industry Ready</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
