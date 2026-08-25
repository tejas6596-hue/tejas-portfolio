"use client";

import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-gray-900 bg-gray-950 py-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Brand info */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-white font-bold text-lg tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </p>
            <p className="text-xs text-gray-500 font-light">
              Master of Computer Applications (MCA) • Christ University
            </p>
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Tejas K. All rights reserved.
            </p>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all hover:scale-110"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-all hover:scale-110"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-xs font-medium text-gray-300 hover:text-white hover:border-gray-700 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </footer>
  );
}
