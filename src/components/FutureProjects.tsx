import React from 'react';
import { Compass, PlusCircle, ArrowUpRight, Code2 } from 'lucide-react';
import { projectsData } from '../data/profile';
import { Project } from '../types';

interface FutureProjectsProps {
  onOpenDetails: (project: Project) => void;
}

export const FutureProjects: React.FC<FutureProjectsProps> = ({ onOpenDetails }) => {
  const additionalProjects = projectsData.filter(p => !p.isFeatured);

  return (
    <section className="py-12 bg-navy-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Mini Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Project Pipeline</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Additional &amp; Upcoming Projects
            </h3>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Future project cards can be configured easily in <code className="text-indigo-300 font-mono">src/data/profile.ts</code>.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header / Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-amber-300 border border-amber-800/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {project.status}
                  </span>
                  <Code2 className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-indigo-400 font-mono mt-0.5">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Concept / Coursework
                </span>
                <button
                  onClick={() => onOpenDetails(project)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Read details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Add Project Placeholder Card */}
          <div className="p-6 rounded-2xl border-2 border-dashed border-slate-800 hover:border-slate-700/80 bg-slate-950/20 flex flex-col items-center justify-center text-center p-8 transition-colors">
            <div className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-500 mb-3">
              <PlusCircle className="w-6 h-6 text-indigo-400/60" />
            </div>
            <h4 className="text-sm font-semibold text-slate-300">
              Future Project Slot
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-xs">
              As new projects and MCA coursework modules are completed, they can be appended to the central project data registry.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
