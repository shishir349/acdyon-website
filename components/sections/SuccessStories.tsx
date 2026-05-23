"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Innovation Officer",
    company: "TechCorp Global",
    country: "🇺🇸 United States",
    program: "Honorary Doctorate",
    quote: "AcdyOn's honorary recognition program opened doors I never thought possible. My credibility as a thought leader has skyrocketed, and I've been invited to speak at global conferences.",
    rating: 5,
  },
  {
    name: "Rajesh Gupta",
    role: "Founder & CEO",
    company: "AI Ventures India",
    country: "🇮🇳 India",
    program: "AI & Automation Mastery",
    quote: "The Agentic AI program is unlike anything I've seen. Within 4 months, I built production-ready automation systems that save my company 40 hours per week. The ROI is extraordinary.",
    rating: 5,
  },
  {
    name: "Dr. Amelia Chen",
    role: "Medical Director",
    company: "HealthFirst Asia",
    country: "🇸🇬 Singapore",
    program: "Doctoral Program",
    quote: "As a working medical professional, I needed a flexible doctoral program that didn't compromise quality. AcdyOn delivered exactly that — rigorous, globally recognized, and executive-friendly.",
    rating: 5,
  },
  {
    name: "Marcus Thompson",
    role: "Executive Director",
    company: "Goldman Group",
    country: "🇬🇧 United Kingdom",
    program: "Executive Certification",
    quote: "The quality of content, the caliber of mentors, and the global recognition AcdyOn provides is second to none. My executive certificate opened conversations with partners I could never have accessed before.",
    rating: 5,
  },
  {
    name: "Fatima Al-Rashid",
    role: "Education Minister Advisor",
    company: "Ministry of Education",
    country: "🇦🇪 UAE",
    program: "Honorary Doctorate",
    quote: "Receiving honorary recognition through AcdyOn validated decades of public service work. The process was dignified, globally credible, and deeply impactful for my career.",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    role: "Strategy Consultant",
    company: "McKinsey Alumni",
    country: "🇧🇷 Brazil",
    program: "Executive MBA",
    quote: "AcdyOn gave me the global executive credentials I needed to transition from corporate to consulting. Worth every investment — clients notice and respect the credentials immediately.",
    rating: 5,
  },
];

export default function SuccessStories() {
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#B8952A]" />
            <span className="text-[#B8952A] text-xs font-bold tracking-widest uppercase">Success Stories</span>
            <div className="w-8 h-0.5 bg-[#B8952A]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading text-[#0F172A] mb-4 leading-tight">
            Professionals Who{" "}
            <span className="text-gradient-blue">Transformed</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Real outcomes from real professionals across industries, countries, and career stages.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group flex flex-col"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
                <span className="text-slate-400 text-xs ml-2 font-medium">{t.program}</span>
              </div>

              {/* Quote */}
              <div className="relative flex-1">
                <Quote className="w-6 h-6 text-blue-200 mb-3" />
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full gradient-royal flex items-center justify-center text-white font-bold text-sm font-heading shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 text-sm truncate">{t.name}</div>
                  <div className="text-slate-400 text-xs truncate">{t.role} · {t.company}</div>
                  <div className="text-slate-400 text-xs">{t.country}</div>
                </div>
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <div className="text-center">
            <div className="text-5xl font-heading font-bold text-slate-900 mb-1">4.9</div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <div className="text-slate-500 text-sm">Average Rating</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-slate-200" />
          <div className="text-center">
            <div className="text-5xl font-heading font-bold text-slate-900 mb-1">5,000+</div>
            <div className="text-slate-500 text-sm">Global Learners</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-slate-200" />
          <div className="text-center">
            <div className="text-5xl font-heading font-bold text-slate-900 mb-1">18+</div>
            <div className="text-slate-500 text-sm">Countries Represented</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
