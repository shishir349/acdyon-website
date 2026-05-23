import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore AcdyOn's full range of executive education, AI, doctoral, and certification programs designed for global professionals.",
};

const programs = [
  {
    category: "AI & Technology",
    badge: "Trending",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Agentic AI & Automation Mastery",
    description: "The most comprehensive hands-on AI program for professionals. Build real agents, automate workflows, and master the tools of the AI economy.",
    features: ["4 Months", "Live Mentorship", "Real Projects", "Certificate"],
    href: "/ai-courses",
    highlight: true,
  },
  {
    category: "Executive Education",
    badge: "Executive",
    badgeColor: "bg-indigo-100 text-indigo-700",
    title: "Executive Leadership Certification",
    description: "A comprehensive executive certification covering strategy, leadership, organizational design, and global business leadership.",
    features: ["3 Months", "Weekly Live Sessions", "Case Studies", "Certificate"],
    href: "/programs",
    highlight: false,
  },
  {
    category: "Doctoral Programs",
    badge: "Premium",
    badgeColor: "bg-slate-100 text-slate-700",
    title: "Professional Doctorate (DBA/PhD)",
    description: "Flexible doctoral pathways for working professionals and executives. Research-driven, globally accredited, and career-accelerating.",
    features: ["2-3 Years", "Research Focused", "Flexible Schedule", "Global Recognition"],
    href: "/doctoral-programs",
    highlight: false,
  },
  {
    category: "Honorary Recognition",
    badge: "Exclusive",
    badgeColor: "bg-yellow-100 text-yellow-700",
    title: "Honorary Doctorate Program",
    description: "International honorary recognition for exceptional leaders who have contributed meaningfully to their field and society.",
    features: ["Application-Based", "Expert Review", "Global Credibility", "Ceremony"],
    href: "/honorary-recognition",
    highlight: false,
  },
  {
    category: "Corporate Training",
    badge: "Enterprise",
    badgeColor: "bg-cyan-100 text-cyan-700",
    title: "Corporate AI & Leadership Training",
    description: "Tailored organizational learning programs that upskill entire teams in AI, leadership, and future-ready capabilities.",
    features: ["Custom Duration", "Team Programs", "On-site/Online", "ROI Focused"],
    href: "/contact",
    highlight: false,
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-20 overflow-hidden">
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
              All Programs
            </span>
            <h1 className="text-5xl lg:text-6xl font-heading text-white leading-tight mb-6">
              Programs Built for{" "}
              <span className="text-gradient-blue">Ambitious</span>{" "}
              Professionals
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              Five distinct learning pathways — all designed to elevate your credentials, capabilities, and career trajectory.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="space-y-6">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`border rounded-2xl p-7 md:p-9 transition-all duration-300 ${
                  program.highlight
                    ? "bg-[#0F172A] border-blue-900 text-white"
                    : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-lg"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${program.badgeColor}`}>
                        {program.badge}
                      </span>
                      <span className={`text-sm font-medium ${program.highlight ? "text-slate-400" : "text-slate-400"}`}>
                        {program.category}
                      </span>
                    </div>
                    <h2 className={`text-2xl font-heading font-bold ${program.highlight ? "text-white" : "text-slate-900"}`}>
                      {program.title}
                    </h2>
                    <p className={`leading-relaxed ${program.highlight ? "text-slate-400" : "text-slate-500"}`}>
                      {program.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {program.features.map((feature) => (
                        <div
                          key={feature}
                          className={`flex items-center gap-1.5 text-sm ${program.highlight ? "text-slate-300" : "text-slate-600"}`}
                        >
                          <CheckCircle className={`w-4 h-4 ${program.highlight ? "text-blue-400" : "text-blue-600"}`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col items-start gap-3 md:min-w-[180px]">
                    <Link
                      href={program.href}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all group whitespace-nowrap ${
                        program.highlight
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <Link
                      href="/consultation"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
                        program.highlight
                          ? "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-heading text-slate-900 mb-4">
            Not sure which program is right for you?
          </h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            Book a free consultation with an academic advisor who will help you identify the ideal program based on your goals, background, and ambitions.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
