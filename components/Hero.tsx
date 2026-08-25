"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowRight, Download, Sparkles, Terminal, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useTheme } from './ThemeContext';
import { soundFx } from './SoundEffects';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { activeConfig, toggleTerminal } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % PORTFOLIO_DATA.personal.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundFx.playClick();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full theme-pill text-[11px] sm:text-xs font-mono font-semibold backdrop-blur-md max-w-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="truncate">{PORTFOLIO_DATA.personal.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] sm:text-[11px] font-mono text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>{activeConfig.name}</span>
              </div>
            </div>

            {/* Main Title */}
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-zinc-400 font-mono font-bold mb-2">
                MCA Candidate • Christ University, Central Campus
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight sm:leading-none">
                HI, I&apos;M <span className="theme-heading">{PORTFOLIO_DATA.personal.name}</span>
              </h1>
            </div>

            {/* Rotating Role Banner */}
            <div className="min-h-12 sm:h-14 flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2.5 sm:gap-3 text-base sm:text-xl lg:text-2xl font-bold px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl theme-card max-w-full">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300 shrink-0" />
                <span className="text-zinc-100 transition-all duration-500 font-mono text-sm sm:text-xl truncate">
                  {PORTFOLIO_DATA.personal.roles[currentRoleIndex]}
                </span>
              </div>
            </div>

            {/* Professional Headline */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              &ldquo;{PORTFOLIO_DATA.personal.headline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm lg:text-base text-zinc-400 font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Interactive Terminal Command Prompt Box */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800 font-mono text-[10px] sm:text-xs max-w-lg mx-auto lg:mx-0 flex items-center justify-between shadow-lg gap-2 overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-zinc-500 font-bold shrink-0">➜</span>
                <span className="text-zinc-400 font-bold shrink-0">~</span>
                <span className="text-zinc-300 truncate">$ npx tejas-k --contact</span>
              </div>
              <button
                onClick={toggleTerminal}
                className="px-2.5 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-200 text-[10px] font-bold hover:bg-zinc-700 transition-colors shrink-0 flex items-center gap-1"
              >
                <span>Run CLI</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 rounded-full bg-zinc-100 text-zinc-900 font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-lg hover:scale-105"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumePath}
                download="Tejas_K_Resume.pdf"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold text-xs sm:text-sm hover:bg-zinc-800 hover:text-white transition-all hover:scale-105 shadow-md"
              >
                <Download className="w-4 h-4 text-zinc-400" />
                Resume PDF
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-300 font-medium text-xs sm:text-sm hover:bg-zinc-800 hover:text-white transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-2">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Connect:</span>
              <a
                href={PORTFOLIO_DATA.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                onClick={() => soundFx.playClick()}
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all hover:scale-110"
              >
                <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                onClick={() => soundFx.playClick()}
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-all hover:scale-110"
              >
                <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Photo */}
          <div className="lg:col-span-5 flex justify-center pt-4 lg:pt-0">
            <div className="relative group max-w-full">
              {/* Outer Low-Contrast Framing Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-zinc-800/50 blur-lg opacity-40 group-hover:opacity-70 transition duration-700" />

              {/* Photo Frame Container */}
              <div className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-2xl p-2 sm:p-2.5 theme-card shadow-2xl overflow-hidden transition-colors max-w-full">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950">
                  <Image
                    src={PORTFOLIO_DATA.personal.profileImage}
                    alt="Tejas K - Full Stack Developer"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-center">
                    <p className="text-xs font-bold text-white tracking-wide">TEJAS K</p>
                    <p className="text-[10px] sm:text-[11px] text-zinc-400 font-mono mt-0.5">Full-Stack Developer • MCA</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
