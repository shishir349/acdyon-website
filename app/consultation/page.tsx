import type { Metadata } from "next";
import { Calendar, Clock, Video, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description: "Book a free 30-minute consultation with an AcdyOn academic advisor. Explore the right program for your goals.",
};

const benefits = [
  "Personalized program recommendation",
  "Eligibility review for honorary recognition",
  "Career pathway and outcome discussion",
  "Enrollment process walkthrough",
  "No commitment required",
];

export default function ConsultationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="container-wide relative z-10 text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            Free Consultation
          </span>
          <h1 className="text-5xl lg:text-6xl font-heading text-white leading-tight mb-6">
            Book Your{" "}
            <span className="text-gradient-blue">Free Session</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            A 30-minute 1:1 session with an academic advisor — completely free, no commitment required.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-royal flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-slate-900 text-xl">Schedule Your Session</h2>
                  <p className="text-slate-400 text-sm">Complete the form below</p>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name *</label>
                    <input type="text" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name *</label>
                    <input type="text" placeholder="Last name" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Profession / Current Role *</label>
                  <input type="text" placeholder="e.g. CEO at TechCorp / Medical Doctor / Consultant" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Program Interest *</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm">
                    <option value="">Select your primary interest...</option>
                    <option>AI & Automation Mastery</option>
                    <option>Executive Certification</option>
                    <option>Doctoral Program (DBA)</option>
                    <option>Doctoral Program (PhD)</option>
                    <option>Honorary Recognition</option>
                    <option>Corporate Training</option>
                    <option>Not Sure — Need Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Time (optional)</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm">
                    <option value="">Select preferred time zone...</option>
                    <option>EST (New York)</option>
                    <option>PST (Los Angeles)</option>
                    <option>GMT (London)</option>
                    <option>IST (India)</option>
                    <option>SGT (Singapore)</option>
                    <option>GST (Dubai)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Tell us about your goals</label>
                  <textarea rows={3} placeholder="What are you hoping to achieve? What stage of career are you at?..." className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm resize-none" />
                </div>

                <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg text-base">
                  Book My Free Consultation
                </button>

                <p className="text-slate-400 text-xs text-center">
                  No commitment required · Free 30-minute session · Respond within 24 hours
                </p>
              </form>
            </div>

            {/* Info Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-3">What to Expect</h2>
                <p className="text-slate-500 leading-relaxed">
                  In your free 30-minute session, an AcdyOn academic advisor will work with you to understand your background, goals, and ambitions — and map the ideal pathway forward.
                </p>
              </div>

              {/* Session Info */}
              <div className="space-y-3">
                {[
                  { icon: Clock, label: "Duration", value: "30 Minutes" },
                  { icon: Video, label: "Format", value: "Zoom / Google Meet" },
                  { icon: Calendar, label: "Availability", value: "Mon–Sat, Flexible Hours" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4 p-4 bg-[#F8FAFC] border border-slate-200 rounded-xl">
                    <div className="w-10 h-10 rounded-xl gradient-royal flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-medium">{label}</div>
                      <div className="font-semibold text-slate-900 text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* What You'll Get */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-4">What You&apos;ll Get</h3>
                <div className="space-y-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-slate-700 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social proof */}
              <div className="bg-[#0F172A] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic mb-3">
                  &ldquo;The consultation was incredibly insightful. In 30 minutes, I had a clear path forward that I&apos;d been searching for months.&rdquo;
                </p>
                <div className="text-slate-400 text-xs">
                  — Dr. Sarah Mitchell, CIO · United States
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
