"use client";

import { PORTFOLIO_DATA } from '@/data/portfolio';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 border-t border-gray-900 bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Academic <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-gray-400 font-light text-base sm:text-lg leading-relaxed">
            Formal computer science education and academic background.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -ml-[1px] w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-gray-800" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={edu.degree}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''
                    }`}
                >

                  {/* Timeline Center Dot on Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-950 border-2 border-blue-500 items-center justify-center z-10 shadow-lg shadow-blue-500/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  </div>

                  {/* Card Content Container */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-blue-500/40 transition-all duration-300 group">

                      {/* Period Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>

                        {edu.score && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 font-mono">
                            <Award className="w-3.5 h-3.5" />
                            {edu.score}
                          </span>
                        )}
                      </div>

                      {/* Degree & Institution */}
                      <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-1.5 text-sm text-gray-400 mt-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                          <span>{edu.institution} • {edu.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm font-light leading-relaxed pt-2 border-t border-gray-800/80">
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
