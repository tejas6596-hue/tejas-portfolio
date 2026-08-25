"use client";

import { useEffect } from 'react';
import { Project } from '@/data/portfolio';
import { X, ExternalLink, CheckCircle2, AlertCircle, Lightbulb, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto theme-card border border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-2xl bg-zinc-950 text-white space-y-6 animate-in zoom-in-95 duration-200 scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors z-20"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Category & Title */}
        <div className="pr-8">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            {project.title}
          </h2>
          <p className="text-zinc-400 font-light text-xs sm:text-base mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Project Thumbnail / Mockup Container */}
        <div className="relative w-full h-44 sm:h-64 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-4 sm:p-6 text-center">
          <div className="space-y-2.5 max-w-md">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-zinc-800 border border-zinc-700 mx-auto flex items-center justify-center text-zinc-200">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <p className="text-base sm:text-lg font-bold text-white">{project.title}</p>
            <p className="text-[10px] sm:text-xs text-zinc-500 font-mono">
              System Architecture & Component Overview
            </p>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
          <div className="flex items-center gap-2 text-zinc-300 font-bold text-xs sm:text-sm font-mono">
            <AlertCircle className="w-4 h-4 text-zinc-400" />
            <span>PROBLEM STATEMENT</span>
          </div>
          <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Architecture Solution */}
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
          <div className="flex items-center gap-2 text-zinc-300 font-bold text-xs sm:text-sm font-mono">
            <Lightbulb className="w-4 h-4 text-zinc-400" />
            <span>ENGINEERED SOLUTION</span>
          </div>
          <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-white">Key System Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="space-y-2.5">
          <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-mono font-bold">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-zinc-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            Source Code
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 text-xs font-bold hover:bg-white transition-colors shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-zinc-600 text-xs font-semibold cursor-not-allowed border border-zinc-800"
            >
              <ExternalLink className="w-4 h-4" />
              Demo Offline
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
