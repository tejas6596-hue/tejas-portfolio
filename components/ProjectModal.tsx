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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card border border-gray-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl bg-gray-950/90 text-white space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            {project.category}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {project.title}
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Project Thumbnail / Mockup Container */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-950 to-blue-950/40 border border-gray-800 flex items-center justify-center p-6 text-center">
          <div className="space-y-3 max-w-md">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 mx-auto flex items-center justify-center text-blue-400">
              <Layers className="w-6 h-6" />
            </div>
            <p className="text-lg font-bold text-white">{project.title}</p>
            <p className="text-xs text-gray-400 font-mono">
              Screenshot Asset Path: /public{project.image}
            </p>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-2">
          <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>Problem Statement</span>
          </div>
          <p className="text-gray-300 text-sm font-light leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Architecture Solution */}
        <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/20 space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
            <Lightbulb className="w-4 h-4" />
            <span>Engineered Solution</span>
          </div>
          <p className="text-gray-300 text-sm font-light leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-white">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-gray-300 p-3 rounded-xl bg-gray-900/60 border border-gray-800/60">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="space-y-3">
          <h3 className="text-sm uppercase tracking-wider text-gray-400 font-semibold">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-gray-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 border border-gray-700 text-white text-xs font-semibold hover:bg-gray-800 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            Source Code
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-800 text-gray-500 text-xs font-semibold cursor-not-allowed border border-gray-700/50"
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
