import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Expert insights on AI, executive education, global credentials, and professional development from the AcdyOn team.",
};

const posts = [
  {
    category: "AI & Technology",
    title: "The Rise of Agentic AI: What Every Executive Needs to Know",
    excerpt: "AI agents are no longer science fiction. In this deep dive, we explore how agentic AI systems are transforming industries and what professionals can do to stay ahead.",
    readTime: "8 min read",
    date: "May 15, 2025",
    featured: true,
  },
  {
    category: "Executive Education",
    title: "Why Honorary Doctorates Are the New Currency of Authority",
    excerpt: "For senior leaders and accomplished professionals, honorary recognition offers something traditional education cannot — validated authority built on real-world achievement.",
    readTime: "5 min read",
    date: "May 8, 2025",
    featured: false,
  },
  {
    category: "Doctoral Programs",
    title: "DBA vs PhD: Which Doctoral Pathway Is Right for You?",
    excerpt: "Both degrees carry significant weight, but they serve different purposes. We break down the key differences to help you make the right decision for your career.",
    readTime: "6 min read",
    date: "April 28, 2025",
    featured: false,
  },
  {
    category: "AI & Technology",
    title: "No-Code AI: How Professionals Are Building Automation Without Coding",
    excerpt: "The no-code AI revolution is here. We explore the top tools, platforms, and strategies that are empowering non-technical professionals to build real automation workflows.",
    readTime: "7 min read",
    date: "April 20, 2025",
    featured: false,
  },
  {
    category: "Career Development",
    title: "Global Credentials: Why Where You Study Still Matters in 2025",
    excerpt: "In an increasingly connected world, the origin and accreditation of your credentials remain critically important. Here's how to choose programs that carry true global weight.",
    readTime: "5 min read",
    date: "April 12, 2025",
    featured: false,
  },
  {
    category: "Executive Education",
    title: "How C-Suite Executives Are Integrating AI Into Strategic Planning",
    excerpt: "AI is no longer just an IT initiative. We explore case studies of executive teams embedding AI into their core strategy and the credentials they're building to lead it.",
    readTime: "9 min read",
    date: "April 5, 2025",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "AI & Technology": "bg-blue-50 text-blue-700",
  "Executive Education": "bg-indigo-50 text-indigo-700",
  "Doctoral Programs": "bg-slate-100 text-slate-700",
  "Career Development": "bg-cyan-50 text-cyan-700",
};

export default function BlogsPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="container-wide relative z-10 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            Blog & Insights
          </span>
          <h1 className="text-5xl lg:text-6xl font-heading text-white leading-tight mb-6">
            Insights for the{" "}
            <span className="text-gradient-blue">Ambitious Professional</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Expert perspective on AI, executive education, global credentials, and the future of professional development.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          {/* Featured Post */}
          {featured && (
            <div className="bg-[#0F172A] rounded-3xl p-8 md:p-12 mb-10 group cursor-pointer hover:bg-[#1E293B] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  Featured
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-500 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featured.readTime}
                  </div>
                  <span>{featured.date}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          )}

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div
                key={post.title}
                className="border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all group cursor-pointer flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || "bg-slate-100 text-slate-600"}`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-xl mb-3 leading-tight group-hover:text-blue-700 transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between text-slate-400 text-xs pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
