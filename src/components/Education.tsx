import React from 'react';
import { GraduationCap, MapPin, Calendar, Sparkles } from 'lucide-react';
import { educationData, isConfiguredValue } from '../data/profile';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Formal computer applications foundation and advanced postgraduate studies.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-8 bottom-8 left-8 w-0.5 bg-gradient-to-b from-indigo-500 via-blue-500 to-slate-800" />

          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="md:pl-16 relative"
            >
              {/* Timeline marker node */}
              <div className="hidden md:flex absolute top-6 left-5 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-900 border-2 border-indigo-500 items-center justify-center text-indigo-400 z-10 shadow-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md hover:border-slate-700 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                          edu.status === 'Pursuing'
                            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 font-medium'
                            : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 font-medium'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-indigo-300 font-medium mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Period & Location Badge */}
                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {isConfiguredValue(edu.period)
                        ? edu.period
                        : `${edu.status === 'Pursuing' ? 'Current Program' : 'Completed'}`}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-[11px] mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                {edu.description && (
                  <p className="pt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
