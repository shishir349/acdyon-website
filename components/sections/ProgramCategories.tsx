"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, GraduationCap, Award, Briefcase, Building2, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Bot,
    title: "AI & Automation",
    description: "An executive program equipping leaders with the skills to leverage AI, design intelligent workflows, and drive business transformation.",
    href: "/ai-courses",
    badge: "Flagship",
    color: "bg-blue-50 text-blue-800 border-blue-100",
    iconBg: "bg-blue-700",
    glow: "",
  },
  {
    icon: GraduationCap,
    title: "Doctoral Programs",
    description: "Flexible doctoral pathways designed for working professionals. Research-driven, globally recognized, and career-accelerating.",
    href: "/doctoral-programs",
    badge: "Academic",
    color: "bg-slate-100 text-slate-700 border-slate-200",
    iconBg: "bg-[#0F172A]",
    glow: "",
  },
  {
    icon: Award,
    title: "Honorary Recognition",
    description: "International honorary doctorate programs for leaders who have made extraordinary contributions to their field and society.",
    href: "/honorary-recognition",
    badge: "Distinction",
    color: "bg-amber-50 text-amber-800 border-amber-100",
    iconBg: "bg-[#B8952A]",
    glow: "",
  },
  {
    icon: Briefcase,
    title: "Executive Certifications",
    description: "High-impact certifications for leaders, managers, and executives across strategy, leadership, finance, and innovation.",
    href: "/programs",
    badge: "Executive",
    color: "bg-slate-100 text-slate-700 border-slate-200",
    iconBg: "bg-slate-700",
    glow: "",
  },
  {
    icon: Building2,
    title: "Corporate Training",
    description: "Tailored organizational learning programs that upskill entire teams in AI, leadership, and future-ready capabilities at scale.",
    href: "/programs",
    badge: "Enterprise",
    color: "bg-slate-100 text-slate-700 border-slate-200",
    iconBg: "bg-slate-600",
    glow: "",
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#B8952A]" />
            <span className="text-[#B8952A] text-xs font-bold tracking-widest uppercase">Our Programs</span>
            <div className="w-8 h-0.5 bg-[#B8952A]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading text-[#0F172A] mb-4 leading-tight">
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
                className={`group relative bg-white border border-slate-200 rounded-xl p-7 hover:border-blue-200 transition-all duration-300 hover:shadow-card-hover cursor-pointer ${i === 2 ? "lg:col-span-1" : ""}`}
              >
                {/* Badge */}
                <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-5 border ${program.color}`}>
                  {program.badge}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg ${program.iconBg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200`}>
                  <Icon className="w-5.5 h-5.5 text-white" />
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
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 group/link"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
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
