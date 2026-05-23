"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "18+", label: "Countries Reached" },
  { value: "5,000+", label: "Global Learners" },
  { value: "50+", label: "University Partners" },
  { value: "100%", label: "Globally Recognized" },
];

const partners = [
  "AACSB Aligned", "ISO Certified", "Global Academic Alliance",
  "Executive Education Network", "UN Partner Program", "EMBA Consortium",
  "International Research Council", "APQN Member", "IAO Recognized",
  "World Education Forum",
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-[#FAFAF8] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 mb-12">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`text-center ${i > 0 ? "md:border-l md:border-slate-200" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-1">
                {value}
              </div>
              <div className="text-slate-400 text-sm font-medium">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Divider with label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-slate-200" />
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
            Recognized by leading global institutions
          </p>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Scrolling Marquee */}
        <div className="marquee-container">
          <div className="flex animate-marquee gap-0">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-3 px-7 py-2.5 mx-3 bg-white border border-slate-200 rounded-lg min-w-max shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8952A]" />
                <span className="text-slate-600 text-sm font-medium whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
