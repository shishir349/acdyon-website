"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Clock,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Cpu,
  Workflow,
} from "lucide-react";

const highlights = [
  "4-Month Intensive Program",
  "Live Mentorship Sessions",
  "Real Automation Projects",
  "AI Agent Development",
  "No-Code + AI Workflows",
  "Career-Focused Outcomes",
];

const modules = [
  { icon: Bot, title: "AI Agents", desc: "Build autonomous AI agents from scratch" },
  { icon: Workflow, title: "Automation Flows", desc: "No-code + AI workflow automation" },
  { icon: Cpu, title: "LLM Integration", desc: "API integration and model orchestration" },
  { icon: Zap, title: "Real Projects", desc: "Deploy production-ready automations" },
];

export default function FeaturedAIProgram() {
  return (
    <section className="section-padding bg-[#0F172A] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-5">
                <Zap className="w-3.5 h-3.5" />
                Featured Program
              </span>
              <h2 className="text-4xl lg:text-5xl font-heading text-white leading-tight mb-5">
                Agentic AI &{" "}
                <span className="text-gradient-blue">Automation</span>{" "}
                Mastery
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                The most comprehensive hands-on program for building real AI agents, automation workflows, and intelligent systems — without a CS degree.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Clock, value: "4 Months", label: "Duration" },
                { icon: Users, value: "Live", label: "Mentorship" },
                { icon: Bot, value: "Real", label: "Projects" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="glass rounded-xl p-4 text-center">
                  <Icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-bold text-lg font-heading">{value}</div>
                  <div className="text-slate-400 text-xs">{label}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/ai-courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25 group"
              >
                View Program
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                Talk to an advisor →
              </Link>
            </div>
          </motion.div>

          {/* Right — Module Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main program card */}
            <div className="relative bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl gradient-royal flex items-center justify-center shadow-glow-blue">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-heading font-bold text-lg">AI Mastery Program</div>
                  <div className="text-slate-400 text-sm">Cohort-based · Live + Async</div>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
                    ENROLLING
                  </span>
                </div>
              </div>

              {/* Module cards */}
              <div className="grid grid-cols-2 gap-3">
                {modules.map((mod, i) => {
                  const Icon = mod.icon;
                  return (
                    <motion.div
                      key={mod.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="glass rounded-xl p-4 hover:bg-white/10 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-blue-400 mb-2" />
                      <div className="text-white text-sm font-semibold mb-0.5">{mod.title}</div>
                      <div className="text-slate-500 text-xs">{mod.desc}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Timeline preview */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-slate-400 text-xs mb-3 font-medium uppercase tracking-wider">Program Journey</div>
                <div className="flex items-center gap-0">
                  {["Week 1-2", "Month 1", "Month 2-3", "Month 4"].map((phase, i) => (
                    <div key={phase} className="flex items-center gap-0 flex-1">
                      <div className="flex flex-col items-center gap-1 flex-1">
                        <div className={`w-3 h-3 rounded-full ${i < 2 ? "bg-blue-500" : "bg-white/20"} border-2 ${i < 2 ? "border-blue-400" : "border-white/10"}`} />
                        <span className="text-slate-500 text-xs text-center leading-tight">{phase}</span>
                      </div>
                      {i < 3 && <div className={`flex-1 h-0.5 ${i < 1 ? "bg-blue-500" : "bg-white/10"}`} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#D4AF37] text-white rounded-xl px-4 py-2 shadow-lg shadow-yellow-500/20"
            >
              <div className="text-xs font-bold">Industry Ready</div>
              <div className="text-xs opacity-80">in 4 Months</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
