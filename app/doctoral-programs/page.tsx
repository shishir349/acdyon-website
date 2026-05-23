import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, GraduationCap, Clock, Globe, BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Doctoral Programs",
  description: "Flexible doctoral programs designed for working professionals and executives. Globally recognized PhD and DBA pathways.",
};

const programs = [
  {
    title: "Doctor of Business Administration (DBA)",
    duration: "2–3 Years",
    focus: "Applied Research & Business Leadership",
    description: "A practitioner-focused doctorate designed for senior executives and business leaders who want to contribute to management knowledge while advancing their careers.",
    features: ["Applied Research", "Executive Format", "Globally Recognized", "Online/Hybrid"],
  },
  {
    title: "PhD in Management Sciences",
    duration: "3 Years",
    focus: "Academic & Applied Research",
    description: "A rigorous research doctorate for professionals seeking deep scholarly expertise in management, strategy, organizational behavior, or related disciplines.",
    features: ["Scholarly Research", "Dissertation Required", "Faculty Mentorship", "International Recognition"],
  },
  {
    title: "PhD in AI & Digital Innovation",
    duration: "2–3 Years",
    focus: "Technology & Innovation Research",
    description: "A cutting-edge doctoral pathway for professionals working at the intersection of AI, digital transformation, and organizational innovation.",
    features: ["AI-Focused", "Industry-Academia Bridge", "Innovation Research", "Tech Sector Recognition"],
  },
];

const features = [
  { icon: Clock, title: "Flexible Timelines", desc: "Study at your pace with structured advisor-guided timelines that work around your career." },
  { icon: Globe, title: "Global Recognition", desc: "Credentials accepted and respected across international academic and corporate institutions." },
  { icon: BookOpen, title: "Research Support", desc: "Full research supervision, library access, and academic mentorship throughout your journey." },
  { icon: GraduationCap, title: "Executive-Friendly", desc: "Designed specifically for working executives who cannot pause their professional commitments." },
];

export default function DoctoralProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="container-wide relative z-10 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            Doctoral Programs
          </span>
          <h1 className="text-5xl lg:text-6xl font-heading text-white leading-tight mb-6">
            Doctoral Education for{" "}
            <span className="text-gradient-blue">Executive Professionals</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed mb-8">
            Globally recognized PhD and DBA programs designed for working professionals. Rigorous, flexible, and career-accelerating.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all group"
          >
            Check Eligibility
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-slate-900 mb-4">
              Doctoral <span className="text-gradient-blue">Pathways</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <div key={prog.title} className="border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{prog.duration}</span>
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-xl mb-2 group-hover:text-blue-700 transition-colors">{prog.title}</h3>
                <div className="text-slate-400 text-xs font-medium mb-3">{prog.focus}</div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{prog.description}</p>
                <div className="space-y-2 mb-6">
                  {prog.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/consultation" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-semibold group/link">
                  Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-wide">
          <h2 className="text-4xl font-heading text-slate-900 text-center mb-12">
            Why Choose AcdyOn <span className="text-gradient-blue">Doctoral Programs</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl gradient-royal flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F172A]">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-heading text-white mb-5">
            Ready to Pursue Your <span className="text-gradient-blue">Doctorate?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Book a consultation to check your eligibility and find the right doctoral pathway for your background and goals.
          </p>
          <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
