"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "18+", label: "Countries" },
  { value: "5,000+", label: "Global Learners" },
  { value: "50+", label: "University Partners" },
  { value: "100%", label: "Globally Recognized" },
];

const partners = [
  "Harvard-Style", "Wharton-Level", "Oxford Aligned",
  "Global Partners", "AI Leaders", "Fortune Network",
  "UN Recognized", "ISO Certified", "AACSB Partners",
  "EMBA Network",
];

export default function TrustBar() {
  return (
    <section className="py-14 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient-blue mb-1">
                {value}
              </div>
              <div className="text-slate-500 text-sm font-medium">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mb-10" />

        {/* Marquee Label */}
        <p className="text-center text-slate-400 text-sm font-medium uppercase tracking-widest mb-6">
          Trusted by professionals across global institutions
        </p>

        {/* Scrolling Marquee */}
        <div className="marquee-container">
          <div className="flex animate-marquee gap-0">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-8 py-3 mx-3 rounded-xl bg-white border border-slate-200 shadow-sm min-w-max"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-slate-600 text-sm font-semibold whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
