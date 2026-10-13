import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { experienceData, isConfiguredValue } from '../data/profile';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            WORK EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience &amp; Practical Learning
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Applied industry exposure and real-world engineering workflows.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-slate-700 transition-all duration-300"
            >
              {/* Subtle accent bar */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-blue-500" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex-shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.position}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mt-1">
                      <span className="font-medium text-indigo-300 flex items-center gap-1">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        {exp.organization}
                      </span>
                      {exp.location && (
                        <span className="text-slate-500 flex items-center gap-1">
                          • <MapPin className="w-3.5 h-3.5" /> {exp.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>
                    {isConfiguredValue(exp.period)
                      ? exp.period
                      : 'Internship Duration [Editable in profile.ts]'}
                  </span>
                </div>
              </div>

              {/* Main Description */}
              <div className="pt-6 space-y-4">
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>

                {/* Verified Key Responsibilities & Insights */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                      Key Practical Takeaways &amp; Exposure
                    </h4>
                    <div className="space-y-2.5">
                      {exp.responsibilities.map((resp, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
