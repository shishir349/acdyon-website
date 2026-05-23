"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !dismissed) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  return (
    <>
      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
        <div className="bg-white border-t border-slate-200 px-4 py-3 flex items-center gap-3">
          <Link
            href="/consultation"
            className="flex-1 py-3 bg-blue-600 text-white text-center text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Free Consultation
          </Link>
          <Link
            href="/programs"
            className="flex-1 py-3 bg-slate-100 text-slate-800 text-center text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors"
          >
            Explore Programs
          </Link>
        </div>
      </div>

      {/* Desktop floating bubble */}
      <AnimatePresence>
        {visible && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-8 right-8 z-40 hidden md:block"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-64">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl gradient-royal flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <button
                  onClick={() => setDismissed(true)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors mt-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-slate-900 font-semibold text-sm mb-1">Free Consultation Available</p>
              <p className="text-slate-500 text-xs mb-3">
                Speak with an academic advisor and explore the right program for your goals.
              </p>
              <Link
                href="/consultation"
                className="block w-full py-2.5 bg-blue-600 text-white text-center text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Now — It&apos;s Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
