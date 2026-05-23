import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";

// Social icon SVGs
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

const socials = [
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: TwitterIcon, href: "#", label: "Twitter/X" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: YoutubeIcon, href: "#", label: "YouTube" },
];

const footerLinks = {
  Programs: [
    { label: "AI & Automation", href: "/ai-courses" },
    { label: "Executive Certifications", href: "/programs" },
    { label: "Corporate Training", href: "/programs" },
    { label: "View All Programs", href: "/programs" },
  ],
  Academic: [
    { label: "Doctoral Programs", href: "/doctoral-programs" },
    { label: "Honorary Recognition", href: "/honorary-recognition" },
    { label: "University Network", href: "/universities" },
    { label: "Success Stories", href: "/success-stories" },
  ],
  Company: [
    { label: "About AcdyOn", href: "/about" },
    { label: "Blog & Insights", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
    { label: "Book Consultation", href: "/consultation" },
  ],
};


export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-royal flex items-center justify-center shadow-glow-blue">
                <span className="text-white font-bold text-lg font-heading">A</span>
              </div>
              <span className="text-2xl font-heading font-bold tracking-tight">AcdyOn</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
              A premium global education ecosystem empowering ambitious professionals with AI mastery, executive credentials, doctoral pathways, and international recognition.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>hello@acdyon.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Global · 18+ Countries</span>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-colors"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                    >
                      <span>{label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-white mb-1">Stay in the loop</h4>
              <p className="text-slate-400 text-sm">Get insights on AI, executive education, and global opportunities.</p>
            </div>
            <form className="flex items-center gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} AcdyOn. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
