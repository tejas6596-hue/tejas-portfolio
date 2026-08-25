"use client";

import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Download, FileText, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { soundFx } from './SoundEffects';

export default function ResumeCTA() {

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    soundFx.playClick();
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="resume" className="py-16 sm:py-20 relative z-10 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative theme-card rounded-3xl p-6 sm:p-14 overflow-hidden text-center space-y-6 sm:space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-pill text-xs font-mono font-bold uppercase tracking-wider max-w-full">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Ready for the Next Challenge</span>
          </div>

          {/* Headline */}
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Let&apos;s Build Something <span className="theme-heading">Impactful Together</span>
            </h2>
            <p className="text-zinc-300 font-light text-sm sm:text-lg leading-relaxed">
              Open to Software Engineering internships and full-stack development roles. Review my resume or get in touch directly.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              download="Tejas_K_Resume.pdf"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-xl hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>

            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold text-xs sm:text-sm hover:bg-zinc-800 hover:text-white transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              View PDF Directly
            </a>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 font-medium text-xs sm:text-sm hover:bg-zinc-900 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
