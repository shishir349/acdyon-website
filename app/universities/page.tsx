import type { Metadata } from "next";
import Link from "next/link";
import UniversityNetwork from "@/components/sections/UniversityNetwork";
import { Globe, Award, BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "University Network",
  description: "AcdyOn's global network of accredited university partners across 18+ countries and 6 continents.",
};

export default function UniversitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="container-wide relative z-10 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            Global Network
          </span>
          <h1 className="text-5xl lg:text-6xl font-heading text-white leading-tight mb-6">
            Our{" "}
            <span className="text-gradient-blue">University</span>{" "}
            Partners
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed mb-8">
            AcdyOn credentials are backed by a global network of accredited universities and academic institutions across 6 continents.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "50+", label: "Partner Institutions" },
              { value: "18+", label: "Countries" },
              { value: "6", label: "Continents" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-heading font-bold text-white mb-1">{value}</div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Grid (reuse component) */}
      <UniversityNetwork />

      {/* Why It Matters */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-slate-900 mb-4">
              Why Our Network <span className="text-gradient-blue">Matters</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "International Mobility", desc: "Credentials recognized across borders, enabling global career transitions." },
              { icon: Award, title: "Academic Credibility", desc: "Partner universities with accreditation from leading global bodies." },
              { icon: BookOpen, title: "Research Access", desc: "Library access, research databases, and academic resources from partner institutions." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-slate-200 rounded-2xl p-7 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl gradient-royal flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">{title}</h3>
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
            Want to Know Which <span className="text-gradient-blue">University Fits You?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation and our advisors will match you with the best university partner for your program.
          </p>
          <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all">
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
