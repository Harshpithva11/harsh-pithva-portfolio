import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { profileConfig } from '../data/profile';

interface HeroProps {
  onRequestResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestResume }) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'profile' | 'postpro' | 'stack' | 'code'>('profile');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Aurora Ambient Background Glows */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-violet-600/20 via-fuchsia-600/15 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-fuchsia-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* TOP CENTER PHOTO CONTAINER */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative group">
            {/* Ambient Pulsing Glow Halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-slow" />
            
            {/* Multi-stop Gradient Ring */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 shadow-glow-aurora">
              <img
                src={profileConfig.avatarUrl || "/harsh-pithva.jpg"}
                alt={profileConfig.fullName}
                className="w-full h-full rounded-full object-cover object-top bg-slate-900 border-2 border-navy-950"
              />
            </div>

            {/* Small Monogram Badge */}
            <div className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 border-2 border-navy-950 flex items-center justify-center shadow-md">
              <span className="font-mono text-xs font-bold text-white tracking-wider">
                {profileConfig.monogram}
              </span>
            </div>
          </div>

          {/* Floating Availability Status Badge */}
          <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-violet-500/30 text-xs font-mono text-violet-300 shadow-md backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Opportunities • MCA @ RVCE</span>
          </div>
        </div>

        {/* Introductory Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
          <span className="text-xs font-mono font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 uppercase">
            HELLO, I'M HARSH PITHVA
          </span>
        </div>

        {/* Main Heading with Aurora Gradient */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Building practical solutions through <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">code, creativity</span>, and continuous learning.
        </h1>

        {/* Supporting Paragraph */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {profileConfig.supportingParagraph}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-600 hover:from-violet-500 hover:via-indigo-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/30 hover:shadow-fuchsia-600/40 border border-violet-400/30 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <span>Explore My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onRequestResume}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700 hover:border-violet-500/50 shadow-md transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <FileDown className="w-4 h-4 text-fuchsia-400" />
            <span>Download Resume</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>Let's Connect</span>
          </button>
        </div>

        {/* Fast Credential Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            RVCE MCA Candidate
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400" />
            Android Intern Experience
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
            Creator of PostPro
          </span>
        </div>

        {/* Interactive Aurora Developer Showcase (Vibrant Gradient Redesign) */}
        <div className="mt-12 max-w-4xl mx-auto text-left">
          <div className="relative group">
            {/* Ambient Aurora Backlight Halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 rounded-3xl blur-xl opacity-35 group-hover:opacity-60 transition-all duration-700 pointer-events-none" />

            {/* Main Glassmorphic Container with Aurora Gradient Border */}
            <div className="relative rounded-3xl bg-slate-950/90 backdrop-blur-2xl border border-violet-500/30 shadow-2xl shadow-violet-950/60 overflow-hidden">
              
              {/* Window Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-slate-900/90 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                  </div>
                  <div className="flex items-center gap-2 pl-2 border-l border-slate-800 text-xs font-mono">
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-300">
                      HP • HARSH PITHVA
                    </span>
                    <span className="text-slate-600 hidden sm:inline">|</span>
                    <span className="text-[11px] text-emerald-400 hidden sm:flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      RVCE MCA
                    </span>
                  </div>
                </div>

                {/* Interactive Tabs with Gradient Styling */}
                <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800/80 text-xs font-mono overflow-x-auto max-w-full">
                  <button
                    onClick={() => setActiveHeroTab('profile')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
                      activeHeroTab === 'profile'
                        ? 'text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>🌌</span>
                    <span className="hidden sm:inline">Developer</span> Profile
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('postpro')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
                      activeHeroTab === 'postpro'
                        ? 'text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>🚀</span>
                    <span>PostPro</span>
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('stack')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
                      activeHeroTab === 'stack'
                        ? 'text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>⚡</span>
                    <span className="hidden sm:inline">Tech</span> Arsenal
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('code')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
                      activeHeroTab === 'code'
                        ? 'text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>💻</span>
                    <span>Code</span>
                  </button>
                </div>
              </div>

              {/* Tab Content Area */}
              <div className="p-5 sm:p-7">
                
                {/* TAB 1: DEVELOPER PROFILE (VISUAL AURORA BENTO CARDS) */}
                {activeHeroTab === 'profile' && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      
                      {/* Card 1: Education (Royal Violet Glow) */}
                      <div className="relative group/card p-5 rounded-2xl bg-gradient-to-b from-violet-950/40 via-slate-900/80 to-slate-950 border border-violet-500/30 hover:border-violet-400/60 shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">🎓</span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/40">
                            MCA @ RVCE
                          </span>
                        </div>
                        <h3 className="text-white font-bold text-sm sm:text-base leading-snug mb-1">
                          Master of Computer Applications
                        </h3>
                        <p className="text-xs text-violet-300 font-mono mb-3">
                          RV College of Engineering, Bengaluru
                        </p>
                        <div className="pt-3 border-t border-violet-500/20 text-xs text-slate-400 space-y-1.5">
                          <p className="flex items-center gap-1.5 text-slate-200">
                            <span className="text-violet-400">🏛️</span> Undergrad: BCA Graduate
                          </p>
                          <p className="text-[11px] text-slate-400 pl-5">
                            Bhavan's Shree H.J. Doshi College, Jamnagar
                          </p>
                        </div>
                      </div>

                      {/* Card 2: Industry Internship (Cosmic Fuchsia Glow) */}
                      <div className="relative group/card p-5 rounded-2xl bg-gradient-to-b from-fuchsia-950/40 via-slate-900/80 to-slate-950 border border-fuchsia-500/30 hover:border-fuchsia-400/60 shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">💼</span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40">
                            PRACTICAL INTERN
                          </span>
                        </div>
                        <h3 className="text-white font-bold text-sm sm:text-base leading-snug mb-1">
                          Android Developer Intern
                        </h3>
                        <p className="text-xs text-fuchsia-300 font-mono mb-3">
                          Alpha Automation Company
                        </p>
                        <div className="pt-3 border-t border-fuchsia-500/20 text-xs text-slate-400 space-y-1.5">
                          <p className="flex items-center gap-1.5 text-slate-200">
                            <span className="text-fuchsia-400">⚡</span> Hands-on mobile development
                          </p>
                          <p className="text-[11px] text-slate-400 pl-5">
                            Automation tools &amp; practical software delivery
                          </p>
                        </div>
                      </div>

                      {/* Card 3: Flagship Innovation (Electric Cyan Glow) */}
                      <div className="relative group/card p-5 rounded-2xl bg-gradient-to-b from-cyan-950/40 via-slate-900/80 to-slate-950 border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">🌟</span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                            FLAGSHIP APP
                          </span>
                        </div>
                        <h3 className="text-white font-bold text-sm sm:text-base leading-snug mb-1">
                          PostPro Content Assistant
                        </h3>
                        <p className="text-xs text-cyan-300 font-mono mb-3">
                          AI-Simulated Generator
                        </p>
                        <div className="pt-3 border-t border-cyan-500/20 text-xs text-slate-400 space-y-1.5">
                          <p className="flex items-center gap-1.5 text-slate-200">
                            <span className="text-cyan-400">🎯</span> Mood-based Captions, Tags &amp; Songs
                          </p>
                          <p className="text-[11px] text-slate-400 pl-5">
                            PHP, MySQL relational database &amp; JS
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Aurora Strip: Professional Mindset & Values */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-950/40 via-slate-900 to-cyan-950/40 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                        <span className="text-fuchsia-400">✦</span>
                        <span className="font-bold text-white">Core Focus:</span>
                        <span className="text-slate-300">Practical engineering, genuine curiosity &amp; continuous learning</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                        <span className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-300">💡 Problem Solver</span>
                        <span className="px-2.5 py-1 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300">⚡ Rapid Learner</span>
                        <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">🤝 Team Collaboration</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: POSTPRO SPOTLIGHT */}
                {activeHeroTab === 'postpro' && (
                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-950/40 via-slate-900 to-violet-950/40 border border-fuchsia-500/30">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
                            MAIN PROJECT HIGHLIGHT
                          </span>
                          <h3 className="text-xl font-bold text-white mt-2">PostPro — AI-Simulated Content Companion</h3>
                          <p className="text-xs text-slate-400 mt-1">Smart social media workflow simplifying caption generation, hashtag discovery, and soundtrack matching.</p>
                        </div>
                        <button 
                          onClick={() => scrollToSection('projects')}
                          className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-md"
                        >
                          Interactive Simulator &darr;
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                          <span className="text-violet-400 font-mono block text-[10px]">01 / TAXONOMY</span>
                          <strong className="text-white block mt-1">Mood-Based Logic</strong>
                          <span className="text-slate-400 text-[11px]">Structured database mappings across 5 moods with curated content.</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                          <span className="text-fuchsia-400 font-mono block text-[10px]">02 / BACKEND</span>
                          <strong className="text-white block mt-1">Relational MySQL Schema</strong>
                          <span className="text-slate-400 text-[11px]">Normalized tables for tags, tracks, and secure PHP sessions.</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                          <span className="text-cyan-400 font-mono block text-[10px]">03 / EXPERIENCE</span>
                          <strong className="text-white block mt-1">One-Click Copy &amp; Export</strong>
                          <span className="text-slate-400 text-[11px]">Instant clipboard actions for fast social sharing.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: TECHNICAL ARSENAL */}
                {activeHeroTab === 'stack' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-violet-500/20">
                        <span className="text-[10px] font-mono text-violet-400 block mb-2 font-bold tracking-wider uppercase">Programming Languages</span>
                        <div className="flex flex-wrap gap-1.5">
                          {['C', 'C++', 'PHP', 'Python', 'Java (Foundations)'].map(skill => (
                            <span key={skill} className="px-2.5 py-1 rounded-md text-xs font-mono bg-violet-950/50 text-violet-300 border border-violet-500/30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-cyan-500/20">
                        <span className="text-[10px] font-mono text-cyan-400 block mb-2 font-bold tracking-wider uppercase">Web &amp; Databases</span>
                        <div className="flex flex-wrap gap-1.5">
                          {['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'SQL Server'].map(skill => (
                            <span key={skill} className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-fuchsia-500/20">
                        <span className="text-[10px] font-mono text-fuchsia-400 block mb-2 font-bold tracking-wider uppercase">Certifications &amp; Experience</span>
                        <div className="flex flex-wrap gap-1.5">
                          {['Android Internship', 'Modern AI', 'CCC Certified', 'Tally Prime', 'Cyber Drill'].map(skill => (
                            <span key={skill} className="px-2.5 py-1 rounded-md text-xs font-mono bg-fuchsia-950/50 text-fuchsia-300 border border-fuchsia-500/30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: ENHANCED CODE VIEW */}
                {activeHeroTab === 'code' && (
                  <div className="space-y-2 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 p-5 rounded-2xl bg-slate-950/90 border border-slate-800 overflow-x-auto">
                    <div className="text-slate-500">// Personal Identity &amp; Academics</div>
                    <div><span className="text-purple-400 font-semibold">const</span> <span className="text-blue-300">developer</span> = &#123;</div>
                    <div className="pl-4">name: <span className="text-emerald-300">"{profileConfig.fullName}"</span>,</div>
                    <div className="pl-4">degree: <span className="text-emerald-300">"MCA @ RV College of Engineering, Bengaluru"</span>,</div>
                    <div className="pl-4">undergrad: <span className="text-emerald-300">"BCA @ Bhavan's Shree H.J. Doshi College"</span>,</div>
                    <div className="pl-4">internship: <span className="text-emerald-300">"Android Dev @ Alpha Automation Company"</span>,</div>
                    <div className="pl-4">flagshipProject: <span className="text-fuchsia-300">"PostPro (Mood-Based AI Content Sim)"</span>,</div>
                    <div className="pl-4">traits: [<span className="text-amber-300">"Practical Problem-Solving"</span>, <span className="text-amber-300">"Continuous Learning"</span>]</div>
                    <div>&#125;;</div>
                    <div className="pt-2 text-cyan-400 font-semibold">developer.buildUsefulProducts();</div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
