"use client";

import { motion } from "framer-motion";
import { Globe, Award, BookOpen } from "lucide-react";

const universities = [
  {
    name: "Global Institute of Excellence",
    country: "United Kingdom",
    flag: "🇬🇧",
    type: "Research University",
    programs: ["Doctoral Programs", "Honorary Recognition"],
    accredited: true,
  },
  {
    name: "North American Academy",
    country: "United States",
    flag: "🇺🇸",
    type: "Executive Education",
    programs: ["MBA Programs", "Certifications"],
    accredited: true,
  },
  {
    name: "European School of Management",
    country: "Germany",
    flag: "🇩🇪",
    type: "Business School",
    programs: ["Executive MBA", "Corporate Training"],
    accredited: true,
  },
  {
    name: "Asia Pacific University",
    country: "Singapore",
    flag: "🇸🇬",
    type: "Technology & Innovation",
    programs: ["AI Programs", "Tech Certifications"],
    accredited: true,
  },
  {
    name: "Middle East Excellence Hub",
    country: "UAE",
    flag: "🇦🇪",
    type: "Leadership Academy",
    programs: ["Executive Programs", "Honorary Doctorates"],
    accredited: true,
  },
  {
    name: "South Asian Leadership Institute",
    country: "India",
    flag: "🇮🇳",
    type: "Academic Excellence",
    programs: ["Professional Development", "Research Programs"],
    accredited: true,
  },
];

export default function UniversityNetwork() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4 border border-blue-100">
            University Network
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading text-slate-900 mb-4 leading-tight">
            Globally{" "}
            <span className="text-gradient-blue">Accredited</span>{" "}
            Partners
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            AcdyOn credentials are backed by a global network of accredited universities, research institutions, and academic bodies across 6 continents.
          </p>
        </motion.div>

        {/* University Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {universities.map((uni, i) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{uni.flag}</div>
                {uni.accredited && (
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-semibold">
                    <Award className="w-3 h-3" />
                    Accredited
                  </div>
                )}
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base mb-1 group-hover:text-blue-700 transition-colors">
                {uni.name}
              </h3>
              <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-3">
                <Globe className="w-3.5 h-3.5" />
                <span>{uni.country}</span>
                <span className="text-slate-300">·</span>
                <span>{uni.type}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {uni.programs.map((prog) => (
                  <span
                    key={prog}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium"
                  >
                    <BookOpen className="w-3 h-3" />
                    {prog}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            {[
              { value: "50+", label: "Partner Institutions" },
              { value: "18+", label: "Countries" },
              { value: "6", label: "Continents" },
            ].map(({ value, label }, i) => (
              <div key={label} className={`text-center ${i > 0 ? "border-l border-slate-200 pl-8" : ""}`}>
                <div className="text-2xl font-heading font-bold text-gradient-blue">{value}</div>
                <div className="text-slate-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
