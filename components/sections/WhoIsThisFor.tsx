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

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-100 group-hover:border-blue-200",
  indigo: "bg-indigo-50 border-indigo-100 group-hover:border-indigo-200",
  slate: "bg-slate-50 border-slate-100 group-hover:border-slate-200",
  violet: "bg-violet-50 border-violet-100 group-hover:border-violet-200",
  cyan: "bg-cyan-50 border-cyan-100 group-hover:border-cyan-200",
  yellow: "bg-yellow-50 border-yellow-100 group-hover:border-yellow-200",
};

const iconColorMap: Record<string, string> = {
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  slate: "text-slate-600",
  violet: "text-violet-600",
  cyan: "text-cyan-600",
  yellow: "text-yellow-600",
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4 border border-blue-100">
            Who Is This For
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading text-slate-900 mb-4 leading-tight">
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
