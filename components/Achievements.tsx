"use client";

import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Brain, Zap, MessageSquare, Users, Clock, Award, CheckCircle } from 'lucide-react';

export default function Achievements() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return <Brain className="w-6 h-6 text-blue-400" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-cyan-400" />;
      case "MessageSquare":
        return <MessageSquare className="w-6 h-6 text-indigo-400" />;
      case "Users":
        return <Users className="w-6 h-6 text-purple-400" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-emerald-400" />;
      case "Award":
        return <Award className="w-6 h-6 text-amber-400" />;
      default:
        return <CheckCircle className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="strengths" className="py-24 relative z-10 border-t border-gray-900 bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Award className="w-3.5 h-3.5" />
            <span>Core Strengths</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Mindset & <span className="gradient-text">Soft Skills</span>
          </h2>
          <p className="text-gray-400 font-light text-base sm:text-lg leading-relaxed">
            Key professional traits and problem-solving capabilities that drive my work ethic.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.strengths.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-3xl p-8 space-y-4 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-400 font-light text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
