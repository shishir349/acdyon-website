"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Zap,
  Target,
  Users,
  Brain,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Global Recognition",
    description:
      "AcdyOn credentials are recognized across 18+ countries, partnered with globally accredited universities and academic institutions.",
    stat: "18+ Countries",
  },
  {
    icon: Brain,
    title: "AI-Powered Future Skills",
    description:
      "Stay ahead with curriculum built around AI, automation, and emerging technologies — the skills that define the next decade.",
    stat: "AI-First Curriculum",
  },
  {
    icon: Target,
    title: "Executive-Focused Education",
    description:
      "Every program is built for professionals who can't pause their career. Flexible, intense, and outcome-driven.",
    stat: "Executive Format",
  },
  {
    icon: Zap,
    title: "Flexible Learning Pathways",
    description:
      "Study at your own pace. Weekend cohorts, async learning, and live mentorship sessions — built for busy professionals.",
    stat: "100% Flexible",
  },
  {
    icon: Users,
    title: "Industry-Relevant Programs",
    description:
      "Curriculum co-designed with industry leaders, ensuring every lesson connects directly to real-world professional outcomes.",
    stat: "Industry-Led",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Academic Support",
    description:
      "Personal academic advisors, live mentors, and a global peer community support your journey from enrollment to graduation.",
    stat: "1:1 Mentorship",
  },
];

export default function WhyAcdyOn() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#B8952A]" />
              <span className="text-[#B8952A] text-xs font-bold tracking-widest uppercase">Why AcdyOn</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading text-[#0F172A] leading-tight">
              The Standard for{" "}
              <span className="text-gradient-blue">Executive</span>{" "}
              Global Learning
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              AcdyOn is a curated academic ecosystem built for professionals who demand the highest standard in education, global credibility, and career impact.
            </p>

            {/* Visual metric stack */}
            <div className="space-y-4 pt-4">
              {[
                { label: "Program Completion Rate", value: 94 },
                { label: "Career Advancement Rate", value: 87 },
                { label: "Learner Satisfaction Score", value: 98 },
              ].map(({ label, value }) => (
                <div key={label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">{label}</span>
                    <span className="text-slate-900 font-bold">{value}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full gradient-royal rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-card-hover hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-royal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#B8952A] mb-1 uppercase tracking-wider">
                        {benefit.stat}
                      </div>
                      <h3 className="font-heading font-bold text-slate-900 text-base mb-1.5">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
