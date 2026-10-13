import React from 'react';
import { BookOpen, Lightbulb, Users, Cpu, GraduationCap, Briefcase, Sparkles, MapPin } from 'lucide-react';
import { profileConfig } from '../data/profile';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
      title: "Continuous Learning",
      description: "Dedicated to building strong foundational knowledge and staying curious about modern technology trends."
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "Problem-Solving",
      description: "Focusing on creating practical software applications that solve everyday user challenges."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      title: "Creative Thinking",
      description: "Combining technical logic with user-centered design to produce intuitive, engaging digital products."
    },
    {
      icon: <Users className="w-5 h-5 text-blue-400" />,
      title: "Collaboration & Communication",
      description: "Actively developing leadership, presentation, and teamwork skills for cross-functional environments."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            BACKGROUND &amp; VALUES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Little About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Curiosity drives my learning. Building turns it into experience.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Natural Professional Biography */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-[17px]">
            {profileConfig.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-colors">
                {paragraph}
              </p>
            ))}

            {/* Quick Summary Pill Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950/40 border border-indigo-500/20 shadow-md">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-2">
                Career Objective
              </h4>
              <p className="text-sm sm:text-base text-slate-200">
                "{profileConfig.careerObjective}"
              </p>
            </div>
          </div>

          {/* Column 2: Visual Profile Card & Key Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Profile Identity Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-4 pb-5 border-b border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-cyan-400 p-[2px] shadow-lg shadow-violet-600/30 flex-shrink-0">
                  <img
                    src={profileConfig.avatarUrl || "/harsh-pithva.jpg"}
                    alt={profileConfig.fullName}
                    className="w-full h-full rounded-[14px] object-cover object-top bg-slate-900"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {profileConfig.fullName}
                  </h3>
                  <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-mono font-medium">
                    MCA Student @ RVCE Bengaluru
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    Karnataka / Gujarat, India
                  </p>
                </div>
              </div>

              {/* Education & Experience Fast Facts */}
              <div className="pt-4 space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80">
                  <GraduationCap className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium block">RV College of Engineering</span>
                    <span className="text-slate-400 text-xs">Master of Computer Applications (MCA) — Pursuing</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80">
                  <GraduationCap className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium block">Bhavan's Shree H.J. Doshi IT College</span>
                    <span className="text-slate-400 text-xs">Bachelor of Computer Applications (BCA) — Graduated</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80">
                  <Briefcase className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium block">Alpha Automation Company</span>
                    <span className="text-slate-400 text-xs">Android Developer Intern</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Core Attributes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200"
                >
                  <div className="mb-2 p-2 rounded-lg bg-slate-950/60 w-fit border border-slate-800">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
