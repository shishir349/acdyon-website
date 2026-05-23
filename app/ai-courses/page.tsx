import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Bot, Workflow, Cpu, Zap, Users, Clock, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Automation Courses",
  description: "Master agentic AI and automation with AcdyOn's flagship 4-month program. Build real AI agents, automation workflows, and intelligent systems.",
};

const curriculum = [
  {
    phase: "Phase 1",
    title: "AI Foundations & LLM Mastery",
    weeks: "Weeks 1–3",
    topics: ["Intro to AI & Large Language Models", "Prompt Engineering", "AI API Integration", "Model Selection & Fine-tuning"],
  },
  {
    phase: "Phase 2",
    title: "Agentic AI Development",
    weeks: "Weeks 4–8",
    topics: ["Building AI Agents", "Multi-Agent Orchestration", "ReAct & Planning Frameworks", "Tool Use & Function Calling"],
  },
  {
    phase: "Phase 3",
    title: "Automation & Workflow Design",
    weeks: "Weeks 9–13",
    topics: ["No-Code AI Workflows", "Zapier, Make & n8n Automation", "Business Process Automation", "Data Pipeline Design"],
  },
  {
    phase: "Phase 4",
    title: "Real Projects & Career Launch",
    weeks: "Weeks 14–16",
    topics: ["Capstone AI Project", "Portfolio Development", "Career Strategy", "Alumni Network Access"],
  },
];

const outcomes = [
  "Build fully functional AI agents from scratch",
  "Design and deploy business automation workflows",
  "Integrate AI APIs into real applications",
  "Lead AI transformation within organizations",
  "Command premium positioning in the AI job market",
  "Launch your own AI-powered products or services",
];

export default function AICoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-[#B8952A]" />
                  <span className="text-[#B8952A] text-xs font-bold tracking-widest uppercase">Flagship Program</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                  ENROLLING
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading text-white leading-tight">
                Agentic AI &{" "}
                <span className="text-gradient-blue">Automation</span>{" "}
                Mastery
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                The most comprehensive hands-on AI program for professionals. Build real agents, design automation workflows, and master the skills defining the future economy.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Clock, label: "4 Months" },
                  { icon: Users, label: "Live Mentorship" },
                  { icon: Bot, label: "Real Projects" },
                  { icon: Award, label: "Certificate" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm">
                    <Icon className="w-4 h-4 text-blue-400" />
                    {label}
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all group"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all"
                >
                  Talk to Advisor
                </Link>
              </div>
            </div>

            {/* Program Card */}
            <div className="glass rounded-3xl p-8 border border-white/10">
              <h3 className="font-heading text-white text-xl font-bold mb-6">What You Will Build</h3>
              <div className="space-y-4">
                {[
                  { icon: Bot, title: "AI Agent", desc: "Fully autonomous agent that browses, reasons, and acts" },
                  { icon: Workflow, title: "Automation Suite", desc: "End-to-end business workflow automation system" },
                  { icon: Cpu, title: "LLM App", desc: "Production-ready AI-powered application with APIs" },
                  { icon: Zap, title: "Capstone Project", desc: "Real-world AI solution ready for your portfolio" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="w-10 h-10 rounded-xl gradient-royal flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">{title}</div>
                      <div className="text-slate-400 text-xs">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-slate-900 mb-4">
              Program <span className="text-gradient-blue">Curriculum</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              16 weeks of structured, hands-on learning designed to take you from fundamentals to production-ready AI mastery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((phase, i) => (
              <div key={phase.phase} className="border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg gradient-royal flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-blue-600 text-xs font-bold uppercase tracking-wider">{phase.phase}</div>
                      <div className="font-heading font-bold text-slate-900">{phase.title}</div>
                    </div>
                  </div>
                  <span className="text-slate-400 text-xs font-medium bg-slate-100 px-3 py-1 rounded-full">
                    {phase.weeks}
                  </span>
                </div>
                <ul className="space-y-2">
                  {phase.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading text-slate-900 mb-5">
                Career <span className="text-gradient-blue">Outcomes</span>
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Upon completion, you will have the skills, portfolio, and credentials to command premium positioning in the AI economy.
              </p>
              <div className="space-y-3">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-slate-700 font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0F172A] rounded-3xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-6">Ready to Start?</h3>
              <p className="text-slate-400 mb-6">
                Join the next cohort and transform your career with hands-on AI and automation mastery.
              </p>
              <div className="space-y-3 mb-8">
                {["Free consultation with an AI advisor", "Cohort placement within 2 weeks", "Full mentorship from day one"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/consultation"
                className="block w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold rounded-xl transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
