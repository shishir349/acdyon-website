import type { Metadata } from "next";
import Link from "next/link";
import SuccessStories from "@/components/sections/SuccessStories";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Real outcomes from real professionals across 18+ countries. Discover how AcdyOn transformed careers globally.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-20 overflow-hidden">
        
        <div className="container-wide relative z-10 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            Success Stories
          </span>
          <h1 className="text-5xl lg:text-6xl font-heading text-white leading-tight mb-6">
            Real People.{" "}
            <span className="text-gradient-blue">Real Results.</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            5,000+ professionals across 18+ countries have elevated their careers, credentials, and authority with AcdyOn.
          </p>
        </div>
      </section>

      <SuccessStories />
      <FinalCTA />
    </>
  );
}
