import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Smartphone, 
  Users, 
  Award, 
  Sparkles, 
  Check, 
  BookOpen, 
  Layers 
} from 'lucide-react';
import { skillCategories } from '../data/profile';
import { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'web':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'experience-skills':
        return <Smartphone className="w-5 h-5 text-violet-400" />;
      case 'professional':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'certifications-knowledge':
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-slate-400" />;
    }
  };

  const filteredCategories: SkillCategory[] = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            COMPETENCIES &amp; TOOLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Technical Toolkit
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Technologies I've explored and skills I'm continuing to develop.
          </p>

          {/* Transparency note */}
          <p className="mt-2 text-xs font-mono text-slate-500">
            Reflects authentic coursework, project implementations, and ongoing MCA studies. No inflated percentages.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Areas ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills in Category */}
                <div className="mt-5 space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 hover:bg-slate-950/90 transition-colors flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5">
                        {skill.isCurrentlyLearning ? (
                          <span className="p-1 rounded-md bg-amber-500/10 text-amber-400" title="Foundational / Ongoing learning">
                            <BookOpen className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-400" title="Verified practical experience">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        )}
                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      {/* Proficiency badge */}
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${
                        skill.isCurrentlyLearning
                          ? 'bg-amber-950/30 text-amber-300 border-amber-800/40'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{category.skills.length} competencies</span>
                <span className="capitalize">{category.id.replace('-', ' ')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-400">
              <Check className="w-3.5 h-3.5" />
            </span>
            <span>Practical Project &amp; Internship Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-amber-500/10 text-amber-400">
              <BookOpen className="w-3.5 h-3.5" />
            </span>
            <span>Core Fundamentals &amp; Ongoing Exploration</span>
          </div>
        </div>

      </div>
    </section>
  );
};
