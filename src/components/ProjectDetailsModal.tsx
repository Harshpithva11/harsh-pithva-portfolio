import React from 'react';
import { X, Check, ExternalLink, Github, Info } from 'lucide-react';
import { Project } from '../types';
import { isValidUrl } from '../data/profile';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-navy-950 border border-slate-700/80 shadow-2xl z-10 text-left">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Project Architecture &amp; Specification
            </span>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              {project.title}
              <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                {project.status}
              </span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Subtitle & Full Description */}
          <div>
            <h4 className="text-lg font-semibold text-indigo-300 mb-2">
              {project.subtitle}
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Transparency Disclaimer Notice */}
          {project.transparencyNote && (
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-xs sm:text-sm flex items-start gap-3">
              <Info className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white block font-medium">Technical Transparency:</strong>
                {project.transparencyNote}
              </div>
            </div>
          )}

          {/* Problem Statement vs Proposed Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono uppercase text-rose-400 font-semibold block mb-2">
                Problem Statement
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono uppercase text-emerald-400 font-semibold block mb-2">
                Proposed Solution
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.proposedSolution}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-3">
              Technologies &amp; Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 text-slate-200 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Core Implemented Functionality */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-3">
              Core Implemented Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                >
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Learning Outcomes */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-3">
              Key Engineering Learnings
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
              {project.keyLearningOutcomes.map((outcome, idx) => (
                <li key={idx} className="p-2.5 rounded-lg bg-slate-900/30 border border-slate-800/40">
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Links & CTA */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {isValidUrl(project.liveDemoUrl) ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 cursor-not-allowed">
                  Live Demo: Link coming soon
                </span>
              )}

              {isValidUrl(project.sourceCodeUrl) ? (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 cursor-not-allowed">
                  Repository: Link coming soon
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
