import React from 'react';
import { Compass, BookOpen, Target } from 'lucide-react';
import { learningDirections } from '../data/profile';

export const LearningJourney: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            GROWTH TRAJECTORY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Currently Exploring
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Active learning directions and upcoming technical horizons during my MCA.
          </p>
          <p className="mt-2 text-xs font-mono text-slate-500">
            Framed as learning goals and research areas, not claimed proficiencies.
          </p>
        </div>

        {/* Directions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {learningDirections.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                    item.status === 'Currently Exploring'
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 font-medium'
                      : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                  }`}>
                    {item.status}
                  </span>
                  <Target className="w-4 h-4 text-slate-500" />
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.topic}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs font-mono text-slate-500">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>Active Research &amp; Practice</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
