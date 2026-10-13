import React from 'react';
import { Puzzle, Sparkles, MessageSquare, Users, Shield } from 'lucide-react';
import { professionalStrengths } from '../data/profile';

export const Strengths: React.FC = () => {
  const getStrengthIcon = (name: string) => {
    switch (name) {
      case 'puzzle':
        return <Puzzle className="w-6 h-6 text-indigo-400" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'message-square':
        return <MessageSquare className="w-6 h-6 text-amber-400" />;
      case 'users':
        return <Users className="w-6 h-6 text-blue-400" />;
      default:
        return <Shield className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono font-medium text-violet-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            CORE ATTRIBUTES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Bring to a Team
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Professional qualities, mindset, and interpersonal strengths.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionalStrengths.map((strength) => (
            <div
              key={strength.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 w-fit mb-5 group-hover:scale-105 transition-transform">
                  {getStrengthIcon(strength.iconName)}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                  {strength.title}
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed">
                  "{strength.description}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Attribute #{strength.id.slice(0, 4)}</span>
                <span className="text-indigo-400">Grounded Mindset</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
