"use client";

import { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolio';
import ProjectModal from './ProjectModal';
import { FolderGit2, Eye, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { soundFx } from './SoundEffects';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterCategories = ['All', 'Full Stack', 'Web App', 'Java', 'Python'];

  const handleFilterClick = (cat: string) => {
    soundFx.playClick();
    setSelectedFilter(cat);
  };

  const handleOpenModal = (project: Project) => {
    soundFx.playClick();
    setActiveModalProject(project);
  };

  const filteredProjects = selectedFilter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-pill text-xs font-mono font-bold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Selected Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Featured Software <span className="theme-heading">Projects</span>
          </h2>
          <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed">
            Real full-stack engineering work, relational database implementations, and web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                selectedFilter === cat
                  ? 'bg-zinc-100 text-zinc-950 font-bold shadow-md'
                  : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="theme-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold text-zinc-300">
                    {project.category}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    #{project.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

              </div>

              {/* Tech stack & Action Buttons */}
              <div className="space-y-6 pt-4 border-t border-zinc-800">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 text-xs font-bold transition-all shadow-md hover:bg-white hover:scale-105"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
