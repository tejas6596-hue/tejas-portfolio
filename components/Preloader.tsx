"use client";

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Code2, Sparkles } from 'lucide-react';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoaded(true);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 400);
          return 100;
        }
        // Smooth non-linear progress increments
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (fadeOut) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-8 sm:p-12 bg-[#09090b] text-white select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isLoaded ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-zinc-200" />
          <span className="font-bold tracking-widest text-zinc-200">{PORTFOLIO_DATA.personal.brand}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SYSTEM INITIALIZING</span>
        </div>
      </div>

      {/* Center Signature & Counter */}
      <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-2xl shadow-black">
          <Sparkles className="w-7 h-7 text-zinc-300 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-100 uppercase font-mono">
            {PORTFOLIO_DATA.personal.name}
          </h1>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wider">
            FULL-STACK DEVELOPER • MCA CANDIDATE
          </p>
        </div>

        {/* Large Percentage Digital Ticker */}
        <div className="text-6xl sm:text-7xl font-black font-mono text-zinc-100 tracking-tight">
          {String(progress).padStart(3, '0')}<span className="text-zinc-500 text-4xl">%</span>
        </div>

        {/* Progress Beam */}
        <div className="w-64 sm:w-80 bg-zinc-900 rounded-full h-1.5 overflow-hidden border border-zinc-800/80">
          <div
            className="h-full bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-400 transition-all duration-150 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2 border-t border-zinc-900 pt-4">
        <span>CHRIST UNIVERSITY • BENGALURU</span>
        <span>EXPERIENCE CURATED WITH MODERN CSS</span>
      </div>
    </div>
  );
}
