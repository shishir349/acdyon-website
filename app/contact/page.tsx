import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with AcdyOn. Reach our academic advisors, support team, or book a free consultation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-20 overflow-hidden">
        
        <div className="container-wide relative z-10 max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            Contact Us
          </span>
          <h1 className="text-5xl lg:text-6xl font-heading text-white leading-tight mb-6">
            Let&apos;s Start a{" "}
            <span className="text-gradient-blue">Conversation</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Whether you&apos;re exploring programs, checking eligibility, or have a specific question — we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Send a Message</h2>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Program of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm appearance-none">
                    <option value="">Select a program...</option>
                    <option>AI & Automation Mastery</option>
                    <option>Executive Certification</option>
                    <option>Doctoral Program (DBA/PhD)</option>
                    <option>Honorary Recognition</option>
                    <option>Corporate Training</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals, background, or any specific questions..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Get in Touch</h2>
                <p className="text-slate-500">
                  Our academic advisors respond within 24 hours. For urgent inquiries, call us directly.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "hello@acdyon.com", sub: "For general inquiries" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 000-0000", sub: "Mon–Fri, 9am–6pm" },
                  { icon: MapPin, label: "Global Offices", value: "18+ Countries", sub: "Worldwide presence" },
                  { icon: Clock, label: "Response Time", value: "Within 24 hours", sub: "Business days" },
                ].map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-4 p-5 bg-[#F8FAFC] border border-slate-200 rounded-2xl">
                    <div className="w-11 h-11 rounded-xl gradient-royal flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="font-semibold text-slate-900">{value}</div>
                      <div className="text-slate-400 text-sm">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="bg-[#0F172A] rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-xl mb-2">Prefer a call?</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Book a free 30-minute consultation directly with an academic advisor.
                </p>
                <a
                  href="/consultation"
                  className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold rounded-xl transition-colors text-sm"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
