"use client";

import { motion } from "framer-motion";
import { Calendar, ClipboardCheck, LayoutGrid, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Free Consultation",
    description:
      "Book a 1:1 session with an academic advisor. We listen to your background, goals, and ambitions — and map the right path forward for you.",
    color: "from-blue-600 to-blue-700",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Eligibility Review",
    description:
      "Our team conducts a thorough review of your professional profile and academic background to match you with the ideal program and recognition pathway.",
    color: "from-indigo-600 to-indigo-700",
  },
  {
    number: "03",
    icon: LayoutGrid,
    title: "Program Selection",
    description:
      "Together we select the perfect program — whether it's AI mastery, executive certification, a doctoral program, or honorary recognition.",
    color: "from-blue-700 to-blue-800",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Enrollment & Guidance",
    description:
      "Begin your journey with dedicated onboarding, access to mentors, cohort community, and full academic support through every milestone.",
    color: "from-slate-700 to-slate-800",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4 border border-blue-100">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading text-slate-900 mb-4 leading-tight">
            Your Journey{" "}
            <span className="text-gradient-blue">Starts Here</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Four clear steps from first conversation to global credentials — with full support at every stage.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-slate-500" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  {/* Step icon */}
                  <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5`}>
                    <Icon className="w-7 h-7 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-slate-700">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-slate-900 text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25 text-base"
          >
            Start with a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
