"use client";

import { PORTFOLIO_DATA } from '@/data/portfolio';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 relative z-10 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-pill text-xs font-mono font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Academic <span className="theme-heading">Milestones</span>
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-lg leading-relaxed">
            Formal computer science degrees, foundational coursework, and academic distinction.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line on Mobile (Left) & Desktop (Center) */}
          <div className="block md:hidden absolute left-4 top-2 bottom-2 w-[2px] bg-zinc-800" />
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -ml-[1px] w-[2px] bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-800" />

          <div className="space-y-8 sm:space-y-12">
            {PORTFOLIO_DATA.education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={edu.degree}
                  className={`relative flex flex-col md:flex-row items-stretch md:items-center pl-10 md:pl-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Mobile Timeline Dot */}
                  <div className="flex md:hidden absolute left-2.5 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-400 items-center justify-center z-10" />

                  {/* Desktop Timeline Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-zinc-950 border-2 border-zinc-400 items-center justify-center z-10 shadow-lg shadow-black">
                    <div className="w-3 h-3 rounded-full bg-zinc-200" />
                  </div>

                  {/* Card Content Container */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div className="theme-card p-5 sm:p-8 rounded-3xl space-y-3 sm:space-y-4 transition-all duration-300 group">
                      
                      {/* Period Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] sm:text-xs font-mono font-bold text-zinc-300">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>

                        {edu.score && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] sm:text-xs font-bold text-emerald-300 font-mono">
                            <Award className="w-3.5 h-3.5" />
                            {edu.score}
                          </span>
                        )}
                      </div>

                      {/* Degree & Institution */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 mt-1 font-medium flex-wrap">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                          <span>{edu.institution} • {edu.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed pt-2 border-t border-zinc-800">
                        {edu.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
