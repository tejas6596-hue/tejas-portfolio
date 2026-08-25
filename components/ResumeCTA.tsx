"use client";

import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Download, FileText, Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function ResumeCTA() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="resume" className="py-20 relative z-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-card rounded-3xl p-8 sm:p-14 overflow-hidden border border-blue-500/30 text-center space-y-8 bg-gradient-to-tr from-gray-950 via-gray-900 to-blue-950/40">

          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for the Next Challenge</span>
          </div>

          {/* Headline */}
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something <span className="gradient-text">Impactful Together</span>
            </h2>
            <p className="text-gray-300 font-light text-base sm:text-lg leading-relaxed">
              Open to Software Engineering internships and full-stack development roles. Review my resume or get in touch directly.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              download="Tejas_K_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-600/30 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>

            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gray-900 border border-gray-700 text-gray-200 font-semibold text-sm hover:bg-gray-800 hover:text-white transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              View Resume
            </a>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gray-950 border border-gray-800 text-gray-300 font-medium text-sm hover:bg-gray-900 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4 text-gray-400" />
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
