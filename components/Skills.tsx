"use client";

import { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Cpu, Code2, Database, Wrench, Layers, Search } from 'lucide-react';
import { soundFx } from './SoundEffects';

const TECH_MARQUEE = [
  "Java", "Spring Boot", "React.js", "Next.js", "Tailwind CSS", "MySQL", 
  "JavaScript", "TypeScript", "Python", "REST APIs", "Git", "GitHub", 
  "AWS Cloud", "IBM Cloud", "Docker", "VS Code", "Postman", "C++"
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...PORTFOLIO_DATA.skillCategories.map(c => c.name)];

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "Programming Languages":
        return <Code2 className="w-5 h-5 text-zinc-300" />;
      case "Frontend Development":
        return <Layers className="w-5 h-5 text-zinc-300" />;
      case "Backend & Databases":
        return <Database className="w-5 h-5 text-zinc-300" />;
      case "Tools & Cloud":
        return <Wrench className="w-5 h-5 text-zinc-300" />;
      default:
        return <Cpu className="w-5 h-5 text-zinc-300" />;
    }
  };

  const getSkillPercent = (level: string) => {
    switch (level) {
      case 'Advanced': return '90%';
      case 'Intermediate': return '75%';
      case 'Certified': return '95%';
      case 'Basic': return '60%';
      default: return '70%';
    }
  };

  const handleTabClick = (cat: string) => {
    soundFx.playClick();
    setActiveTab(cat);
  };

  const filteredCategories = PORTFOLIO_DATA.skillCategories
    .filter(c => activeTab === 'All' || c.name === activeTab)
    .map(category => ({
      ...category,
      skills: category.skills.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.level.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-pill text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Languages, Frameworks <span className="theme-heading">& Tools</span>
          </h2>
          <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed">
            A comprehensive breakdown of technologies I utilize to architect production-grade software applications.
          </p>
        </div>

        {/* Marquee Technology Strip */}
        <div className="mb-10 overflow-hidden rounded-2xl bg-zinc-950/70 border border-zinc-800 py-3.5 relative">
          <div className="flex w-max gap-8 animate-[marquee_30s_linear_infinite]">
            {[...TECH_MARQUEE, ...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-300 shrink-0">
                <span className="w-2 h-2 rounded-full bg-zinc-400" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Controls & Live Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabClick(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeTab === cat
                    ? 'bg-zinc-100 text-zinc-950 shadow-md font-bold'
                    : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Java, AWS)..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-zinc-950/80 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 font-mono transition-colors"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div
                key={category.name}
                className="theme-card p-8 rounded-3xl space-y-6 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {category.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800/90 hover:border-zinc-600 transition-all flex flex-col justify-between group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white group-hover:text-zinc-200 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Skill Proficiency Bar */}
                      <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-zinc-500 to-zinc-200 transition-all duration-500"
                          style={{
                            width: getSkillPercent(skill.level),
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 theme-card rounded-3xl font-mono text-zinc-500">
              No skills found matching "{searchQuery}"
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
