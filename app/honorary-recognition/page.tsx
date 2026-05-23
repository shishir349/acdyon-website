import type { Metadata } from "next";
import Link from "next/link";
import { Award, Globe, Star, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Honorary Recognition",
  description: "International honorary doctorate and recognition programs for exceptional leaders. Globally credible, professionally transformative.",
};

const eligibility = [
  "Minimum 10+ years of professional excellence",
  "Demonstrated leadership and impact in your field",
  "Recognized contributions to industry, society, or academia",
  "Strong professional references and portfolio",
  "Commitment to continued service and leadership",
];

const categories = [
  { title: "Business & Entrepreneurship", icon: "💼" },
  { title: "Medicine & Healthcare", icon: "🏥" },
  { title: "Education & Academia", icon: "📚" },
  { title: "Law & Public Policy", icon: "⚖️" },
  { title: "Technology & Innovation", icon: "💡" },
  { title: "Arts & Humanities", icon: "🎨" },
  { title: "Social Impact & NGO", icon: "🌍" },
  { title: "Government & Leadership", icon: "🏛️" },
];

const process = [
  { step: "01", title: "Initial Application", desc: "Submit your professional profile and supporting documents for initial review." },
  { step: "02", title: "Expert Panel Review", desc: "An academic panel reviews your contributions, achievements, and impact portfolio." },
  { step: "03", title: "University Approval", desc: "Partner university board provides formal endorsement and award recommendation." },
  { step: "04", title: "Conferment Ceremony", desc: "Official honorary degree conferment with certificate, gown, and global documentation." },
];

export default function HonoraryRecognitionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden">
        
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Honorary Recognition
            </span>
            <h1 className="text-5xl lg:text-6xl font-heading text-white leading-tight mb-6">
              International{" "}
              <span className="text-gradient-gold">Honorary</span>{" "}
              Doctorate Programs
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-8">
              For exceptional leaders who have made extraordinary contributions. A dignified, globally credible, and professionally transformative recognition.
            </p>
            <div className="flex gap-4">
              <Link href="/consultation" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-yellow-600 text-white font-semibold rounded-xl transition-all group shadow-lg shadow-yellow-500/20">
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/consultation" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all">
                Check Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-4xl font-heading text-slate-900 leading-tight">
                What Is an Honorary <span className="text-gradient-blue">Doctorate?</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                An honorary doctorate is a formal academic award conferred upon individuals who have demonstrated exceptional achievement, leadership, and contribution to their field — without the requirement of traditional academic study.
              </p>
              <p className="text-slate-500 leading-relaxed">
                AcdyOn's honorary recognition programs are backed by globally accredited university partners, ensuring that your award carries true international credibility and respect.
              </p>
              <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-100 rounded-xl">
                <Shield className="w-6 h-6 text-yellow-600 shrink-0" />
                <p className="text-yellow-800 text-sm font-medium">
                  All honorary awards are issued by globally accredited partner universities.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-bold text-slate-900 text-xl mb-5">Eligibility Criteria</h3>
              {eligibility.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-[#F8FAFC] border border-slate-200 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-slate-900 mb-4">
              Recognition <span className="text-gradient-blue">Categories</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Honorary recognition is available across all major professional disciplines.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(({ title, icon }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5 text-center hover:border-yellow-300 hover:shadow-md transition-all group">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-slate-800 text-sm font-semibold group-hover:text-yellow-700 transition-colors">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-slate-900 mb-4">
              The <span className="text-gradient-blue">Recognition Process</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-2xl gradient-royal flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">{step}</span>
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
            Ready to Be <span className="text-gradient-gold">Recognized?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Apply for your honorary doctorate today. Our advisors will guide you through every step.
          </p>
          <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] hover:bg-yellow-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-yellow-500/20">
            Begin Your Application
          </Link>
        </div>
      </section>
    </>
  );
}
