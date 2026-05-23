"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, GraduationCap, Award, Briefcase, Building2, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Master agentic AI, no-code automation, and intelligent workflows. Build real projects and stay ahead in the AI economy.",
    href: "/ai-courses",
    badge: "Trending",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    iconBg: "bg-blue-600",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: GraduationCap,
    title: "Doctoral Programs",
    description: "Flexible doctoral pathways designed for working professionals. Research-driven, globally recognized, and career-accelerating.",
    href: "/doctoral-programs",
    badge: "Premium",
    color: "bg-slate-50 text-slate-700 border-slate-100",
    iconBg: "bg-slate-800",
    glow: "group-hover:shadow-slate-500/20",
  },
  {
    icon: Award,
    title: "Honorary Recognition",
    description: "International honorary doctorate and recognition programs for leaders who have made extraordinary contributions to their fields.",
    href: "/honorary-recognition",
    badge: "Exclusive",
    color: "bg-yellow-50 text-yellow-700 border-yellow-100",
    iconBg: "bg-[#D4AF37]",
    glow: "group-hover:shadow-yellow-500/20",
  },
  {
    icon: Briefcase,
    title: "Executive Certifications",
    description: "High-impact certifications for leaders, managers, and executives across strategy, leadership, finance, and innovation.",
    href: "/programs",
    badge: "Executive",
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    iconBg: "bg-indigo-600",
    glow: "group-hover:shadow-indigo-500/20",
  },
  {
    icon: Building2,
    title: "Corporate Training",
    description: "Tailored learning solutions for organizations. Upskill teams with AI, leadership, and future-focused skills at scale.",
    href: "/programs",
    badge: "Enterprise",
    color: "bg-cyan-50 text-cyan-700 border-cyan-100",
    iconBg: "bg-cyan-600",
    glow: "group-hover:shadow-cyan-500/20",
  },
];

export default function ProgramCategories() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4 border border-blue-100">
            Our Programs
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading text-slate-900 mb-4 leading-tight">
            World-Class Learning,{" "}
            <span className="text-gradient-blue">Globally Recognized</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Five distinct pathways designed for ambitious professionals seeking credibility, capability, and career elevation.
          </p>
        </motion.div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative bg-white border border-slate-200 rounded-2xl p-7 hover:border-slate-300 transition-all duration-300 hover:shadow-xl ${program.glow} cursor-pointer ${i === 2 ? "lg:col-span-1" : ""}`}
              >
                {/* Badge */}
                <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-5 border ${program.color}`}>
                  {program.badge}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${program.iconBg} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* CTA */}
                <Link
                  href={program.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 group/link"
                >
                  Explore Program
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.03) 0%, transparent 100%)"
                  }}
                />
              </motion.div>
            );
          })}

          {/* View All Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Link
              href="/programs"
              className="group flex flex-col items-center justify-center h-full min-h-[200px] border-2 border-dashed border-slate-200 rounded-2xl p-7 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center mb-4 transition-colors">
                <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-slate-700 group-hover:text-blue-700 text-lg mb-2 transition-colors">
                View All Programs
              </h3>
              <p className="text-slate-400 text-sm">
                Explore the full AcdyOn curriculum
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
