"use client";

import { User, GraduationCap, Code, Cloud, Terminal, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-pill text-xs font-mono font-bold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Driven by Curiosity, <span className="theme-heading">Grounded in Engineering</span>
          </h2>
          <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed">
            A comprehensive snapshot of my academic journey, core focus, and technical aspirations.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Main Story (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 theme-card p-8 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 font-bold shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Academic & Professional Journey
              </h3>
            </div>

            <p className="text-zinc-300 font-light leading-relaxed text-base">
              I am currently pursuing my <strong className="text-white font-bold">Master of Computer Applications (MCA)</strong> at <strong className="text-white font-bold">Christ University, Central Campus, Bengaluru</strong>. Prior to this, I completed my <strong className="text-white font-bold">Bachelor of Computer Applications (BCA)</strong> at Tumkur University, graduating with distinction and an academic score of <span className="text-zinc-100 font-bold font-mono">8.61 CGPA</span>.
            </p>

            <p className="text-zinc-400 font-light leading-relaxed text-sm sm:text-base">
              My engineering philosophy revolves around writing clean, maintainable code and building robust backend services paired with intuitive frontend user interfaces. I am actively seeking a <span className="text-white font-semibold">Software Engineering Internship / Junior Role</span> to deliver value to production web applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-2.5 text-sm text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Full-Stack Web Development</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>REST API & Relational DB Architecture</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Cloud Infrastructure (AWS & IBM Certified)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Object-Oriented Java & Spring Boot</span>
              </div>
            </div>
          </div>

          {/* Card 2: Technical Focus */}
          <div className="theme-card p-8 rounded-3xl flex flex-col justify-between space-y-6">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 font-mono font-bold">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Core Competencies
              </h3>
              <p className="text-zinc-400 text-sm font-light">
                Technologies I engineer with for academic projects and software development.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-zinc-300 font-semibold mb-1 font-mono">
                  <span>Java & Spring Boot</span>
                  <span className="text-zinc-400">90%</span>
                </div>
                <div className="w-full bg-zinc-900 rounded-full h-2 overflow-hidden">
                  <div className="bg-zinc-200 h-2 rounded-full w-[90%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-zinc-300 font-semibold mb-1 font-mono">
                  <span>React.js & Next.js</span>
                  <span className="text-zinc-400">85%</span>
                </div>
                <div className="w-full bg-zinc-900 rounded-full h-2 overflow-hidden">
                  <div className="bg-zinc-300 h-2 rounded-full w-[85%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-zinc-300 font-semibold mb-1 font-mono">
                  <span>MySQL & Relational DBs</span>
                  <span className="text-zinc-400">85%</span>
                </div>
                <div className="w-full bg-zinc-900 rounded-full h-2 overflow-hidden">
                  <div className="bg-zinc-400 h-2 rounded-full w-[85%]" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between font-mono">
              <span>Status: Active Candidate</span>
              <span className="text-emerald-400 font-bold">Available</span>
            </div>
          </div>

          {/* Card 3: Web Engineering */}
          <div className="theme-card p-8 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-2">
              <Code className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Full-Stack Architecture</h4>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Designing responsive web applications with reusable component design systems and secure backend REST endpoints.
            </p>
          </div>

          {/* Card 4: Cloud Infrastructure */}
          <div className="theme-card p-8 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-2">
              <Cloud className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Cloud Fundamentals</h4>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Certified in AWS Cloud Foundations & IBM Cloud Essentials with focus on deployment and infrastructure virtualization.
            </p>
          </div>

          {/* Card 5: Continuous Growth */}
          <div className="theme-card p-8 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-2">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Continuous Evolution</h4>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Consistently sharpening data structures, algorithms, and practical software design patterns.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
