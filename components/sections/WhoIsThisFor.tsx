"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Briefcase,
  Clock,
  BookOpen,
  BarChart,
  Stethoscope,
  Lightbulb,
  Bot,
} from "lucide-react";

const audiences = [
  {
    icon: TrendingUp,
    title: "Founders & Entrepreneurs",
    description: "Gain the credentials and knowledge to scale your vision with authority and credibility.",
    color: "blue",
  },
  {
    icon: Briefcase,
    title: "C-Suite Executives",
    description: "Stay sharp on AI, leadership, and strategy while earning globally recognized credentials.",
    color: "indigo",
  },
  {
    icon: Clock,
    title: "Working Professionals",
    description: "Advance your career without pausing it. Flexible, intensive programs built for your schedule.",
    color: "slate",
  },
  {
    icon: BookOpen,
    title: "Academics & Educators",
    description: "Elevate your academic profile with honorary recognition and global research exposure.",
    color: "violet",
  },
  {
    icon: BarChart,
    title: "Consultants & Advisors",
    description: "Add world-class credentials to your portfolio and command premium positioning.",
    color: "blue",
  },
  {
    icon: Stethoscope,
    title: "Medical Professionals",
    description: "Expand your academic recognition with healthcare leadership and honorary programs.",
    color: "cyan",
  },
  {
    icon: Lightbulb,
    title: "Innovators & Leaders",
    description: "Formalize your expertise with honorary doctorates and global recognition.",
    color: "yellow",
  },
  {
    icon: Bot,
    title: "AI Enthusiasts",
    description: "Go beyond theory. Build real AI agents, automations, and no-code workflows that matter.",
    color: "blue",
  },
];

// All cards use a single clean institutional style
const colorMap: Record<string, string> = {
  blue: "bg-white border-slate-200 hover:border-blue-200",
  indigo: "bg-white border-slate-200 hover:border-blue-200",
  slate: "bg-white border-slate-200 hover:border-blue-200",
  violet: "bg-white border-slate-200 hover:border-blue-200",
  cyan: "bg-white border-slate-200 hover:border-blue-200",
  yellow: "bg-white border-slate-200 hover:border-amber-200",
};

const iconColorMap: Record<string, string> = {
  blue: "text-blue-700",
  indigo: "text-blue-700",
  slate: "text-slate-600",
  violet: "text-slate-700",
  cyan: "text-blue-700",
  yellow: "text-[#B8952A]",
};

export default function WhoIsThisFor() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#B8952A]" />
            <span className="text-[#B8952A] text-xs font-bold tracking-widest uppercase">Who Is This For</span>
            <div className="w-8 h-0.5 bg-[#B8952A]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading text-[#0F172A] mb-4 leading-tight">
            Built for the{" "}
            <span className="text-gradient-blue">Most Ambitious</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            AcdyOn is designed for high-performing individuals who understand that education is an investment in their authority, credibility, and future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((audience, i) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-default ${colorMap[audience.color]}`}
              >
                <div className="mb-4">
                  <Icon className={`w-8 h-8 ${iconColorMap[audience.color]} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                  {audience.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
