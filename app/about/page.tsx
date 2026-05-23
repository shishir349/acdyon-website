import type { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Globe, Award, Users, Heart, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About AcdyOn",
  description: "Learn about AcdyOn's mission, vision, and commitment to premium global education and executive learning.",
};

const values = [
  { icon: Target, title: "Excellence", description: "We hold every program, partner, and experience to the highest standard." },
  { icon: Globe, title: "Global Reach", description: "Credentials and connections that transcend borders and open global doors." },
  { icon: Award, title: "Credibility", description: "Academic rigor and institutional partnerships that command real-world respect." },
  { icon: Users, title: "Community", description: "A global alumni network of ambitious professionals across industries." },
  { icon: Heart, title: "Commitment", description: "Dedicated support from enrollment to graduation and beyond." },
  { icon: Lightbulb, title: "Innovation", description: "AI-powered, future-focused curriculum built for the modern world." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-[#0F172A] flex items-center overflow-hidden">
        
        <div className="container-wide relative z-10 pt-28 pb-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
              About AcdyOn
            </span>
            <h1 className="text-5xl lg:text-6xl font-heading text-white leading-tight mb-6">
              Redefining What{" "}
              <span className="text-gradient-blue">Global Education</span>{" "}
              Means
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              AcdyOn is not a typical EdTech company. We are a premium global education ecosystem built for the most ambitious professionals in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                Our Mission
              </span>
              <h2 className="text-4xl font-heading text-slate-900 leading-tight">
                Empowering the Next Generation of{" "}
                <span className="text-gradient-blue">Global Leaders</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                We believe that premium education should not be limited by geography, age, or career stage. AcdyOn was founded on the conviction that the most driven professionals deserve access to world-class academic credentials, global recognition, and transformative learning — wherever they are in the world.
              </p>
              <p className="text-slate-500 leading-relaxed">
                From AI mastery programs to doctoral pathways and honorary recognition, every AcdyOn offering is designed to elevate careers, build authority, and create lasting impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "2019", label: "Founded" },
                { value: "18+", label: "Countries" },
                { value: "5,000+", label: "Learners" },
                { value: "50+", label: "Partners" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-heading font-bold text-gradient-blue mb-2">{value}</div>
                  <div className="text-slate-500 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading text-slate-900 mb-4">
              Our Core <span className="text-gradient-blue">Values</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Everything we build, every partnership we form, and every student we serve is guided by these principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl gradient-royal flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F172A]">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-heading text-white mb-5">
            Join the AcdyOn <span className="text-gradient-blue">Community</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Be part of a global community of ambitious professionals advancing their careers with AcdyOn.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
