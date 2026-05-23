"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are AcdyOn programs globally recognized?",
    answer:
      "Yes. All AcdyOn credentials are backed by globally accredited university partners across 18+ countries. Our programs meet international academic standards, and certificates are recognized by professional organizations, corporate entities, and academic institutions worldwide.",
  },
  {
    question: "Can working professionals apply?",
    answer:
      "Absolutely — this is what AcdyOn is built for. Every program is designed with the working professional in mind. Flexible scheduling, async content, weekend cohorts, and live mentorship ensure you can advance your credentials without pausing your career.",
  },
  {
    question: "Are the AI programs beginner-friendly?",
    answer:
      "Yes. Our AI & Automation programs are designed for professionals who may not have a technical background. We start from fundamentals and progressively build to advanced AI agent development, automation workflows, and real-world projects — no coding degree required.",
  },
  {
    question: "Is mentorship included in all programs?",
    answer:
      "Most programs include live mentorship sessions with industry experts and academic advisors. The level of mentorship varies by program — our AI Mastery and Doctoral programs include intensive 1:1 and group mentorship, while certification programs offer advisor support.",
  },
  {
    question: "Are doctoral pathways flexible for busy executives?",
    answer:
      "Yes. Our doctoral programs are built specifically for senior professionals and executives. They feature flexible research tracks, online/hybrid delivery, advisor-guided timelines, and cohort support — enabling you to complete doctoral-level work while maintaining professional commitments.",
  },
  {
    question: "What is the honorary recognition program?",
    answer:
      "The AcdyOn Honorary Recognition program awards honorary doctorate degrees and academic recognition to individuals who have made exceptional contributions in their field — be it business, medicine, law, education, art, or leadership. It is prestigious, internationally credible, and professionally transformative.",
  },
  {
    question: "How long does enrollment take?",
    answer:
      "After your free consultation and eligibility review, most enrollments are completed within 5–10 business days. Our team guides you through the entire process with dedicated support.",
  },
];

export default function FAQSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-[#B8952A]" />
              <span className="text-[#B8952A] text-xs font-bold tracking-widest uppercase">FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading text-[#0F172A] mb-5 leading-tight">
              Frequently Asked{" "}
              <span className="text-gradient-blue">Questions</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Everything you need to know about AcdyOn programs, credentials, and the application process.
            </p>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6">
              <div className="font-heading font-bold text-slate-900 text-base mb-2">
                Have a specific question?
              </div>
              <p className="text-slate-500 text-sm mb-4">
                Our academic advisors are available to answer any questions about programs, eligibility, or credentials.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Talk to an Advisor
              </a>
            </div>
          </motion.div>

          {/* Right — FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion multiple className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={i}
                  className="bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 overflow-hidden transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 text-base py-4 hover:text-blue-700 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 text-sm leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
