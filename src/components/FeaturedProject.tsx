import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  Copy, 
  Check, 
  Music, 
  Hash, 
  MessageSquare, 
  Info,
  Maximize2,
  Sliders
} from 'lucide-react';
import { projectsData, isValidUrl } from '../data/profile';
import { Project } from '../types';

interface FeaturedProjectProps {
  onOpenDetails: (project: Project) => void;
}

interface MoodSample {
  mood: string;
  badgeColor: string;
  caption: string;
  hashtags: string[];
  song: {
    title: string;
    artist: string;
    vibe: string;
  };
}

const MOOD_SAMPLES: Record<string, MoodSample> = {
  energetic: {
    mood: "Energetic / Fitness",
    badgeColor: "from-amber-500 to-rose-500",
    caption: "Pushing limits every single day. Consistent effort beats sporadic motivation. 💪⚡",
    hashtags: ["#FitnessJourney", "#DailyGrind", "#NeverSettle", "#WorkoutMotivation", "#DisciplineOverMotivation"],
    song: {
      title: "Stronger",
      artist: "Kanye West",
      vibe: "High BPM / Adrenaline Rush"
    }
  },
  travel: {
    mood: "Travel & Adventure",
    badgeColor: "from-cyan-500 to-blue-500",
    caption: "Collecting memories, one horizon at a time. The world is too big to stay in one place. 🌍✈️",
    hashtags: ["#Wanderlust", "#TravelDiaries", "#ExploreMore", "#PassportReady", "#ScenicViews"],
    song: {
      title: "Adventure of a Lifetime",
      artist: "Coldplay",
      vibe: "Uplifting / Atmospheric"
    }
  },
  chill: {
    mood: "Chill & Relaxed",
    badgeColor: "from-emerald-500 to-teal-500",
    caption: "Slowing down, recharging, and finding peace in simple moments and quiet spaces. ☕🌿",
    hashtags: ["#ChillVibes", "#WeekendMood", "#SlowLiving", "#PeacefulMind", "#SundayReset"],
    song: {
      title: "Sunflower",
      artist: "Post Malone & Swae Lee",
      vibe: "Mellow / Lo-Fi Beats"
    }
  },
  reflective: {
    mood: "Deep & Reflective",
    badgeColor: "from-indigo-500 to-purple-500",
    caption: "Growth is quiet before it becomes visible. Trust the process and honor the journey. 🌌💭",
    hashtags: ["#MindsetShift", "#GrowthJourney", "#SelfReflection", "#Perspective", "#FocusOnGoals"],
    song: {
      title: "Fix You",
      artist: "Coldplay",
      vibe: "Emotional / Thoughtful"
    }
  },
  celebration: {
    mood: "Celebration & Wins",
    badgeColor: "from-pink-500 to-amber-500",
    caption: "Milestones achieved, new chapters begun. Grateful for everyone who believed in the vision! 🎉🥂",
    hashtags: ["#CelebrateSuccess", "#MilestoneUnlocked", "#GoodTimes", "#WinningTogether", "#CheersToGrowth"],
    song: {
      title: "Can't Stop the Feeling!",
      artist: "Justin Timberlake",
      vibe: "Festive / Dance"
    }
  }
};

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onOpenDetails }) => {
  const postProProject = projectsData.find(p => p.id === 'postpro') || projectsData[0];
  const [selectedMood, setSelectedMood] = useState<string>('travel');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const currentSample = MOOD_SAMPLES[selectedMood];

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            FLAGSHIP APPLICATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Project: PostPro
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            {postProProject.subtitle}
          </p>
        </div>

        {/* PostPro Hero Showcase Card */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden">
          
          {/* Top Banner & Metadata */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-800/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    Primary Development Project
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    PHP • MySQL Full Stack
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  PostPro — AI-Simulated Content Companion
                </h3>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                  {postProProject.fullDescription}
                </p>

                {/* Transparency Note Banner */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                  <Info className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-cyan-300 font-semibold">Honest Architecture: </span>
                    {postProProject.transparencyNote}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Tech Stack:</span>
                  {postProProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950 text-indigo-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end w-full">
                <button
                  onClick={() => onOpenDetails(postProProject)}
                  className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 border border-indigo-400/30 transition-all active:scale-95"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>View Full Details &amp; Schema</span>
                </button>

                {isValidUrl(postProProject.liveDemoUrl) ? (
                  <a
                    href={postProProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-700 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <div className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 bg-slate-950 border border-slate-800 cursor-not-allowed text-center">
                    <span>Live Demo: Link coming soon</span>
                  </div>
                )}

                {isValidUrl(postProProject.sourceCodeUrl) ? (
                  <a
                    href={postProProject.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-700 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Source Code</span>
                  </a>
                ) : (
                  <div className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 bg-slate-950 border border-slate-800 cursor-not-allowed text-center">
                    <span>Source Code: Link coming soon</span>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Interactive Live PostPro Simulator Demonstration */}
          <div className="p-6 sm:p-8 lg:p-10 bg-slate-950/60">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Interactive PostPro Simulation Studio
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Experience how PostPro's mood taxonomy generates relevant captions, hashtags, and music recommendations.
                </p>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Client Simulation
              </span>
            </div>

            {/* Mood Selector Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(MOOD_SAMPLES).map(([key, data]) => {
                const isActive = selectedMood === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedMood(key)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? 'bg-gradient-to-r text-white shadow-md shadow-indigo-600/30 border border-indigo-400/40 ' + data.badgeColor
                        : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span>{data.mood}</span>
                  </button>
                );
              })}
            </div>

            {/* Generated Output Preview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Output Card 1: Caption Suggestion */}
              <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-semibold">
                      <MessageSquare className="w-3.5 h-3.5" />
                      SUGGESTED CAPTION
                    </span>
                    <button
                      onClick={() => handleCopy(currentSample.caption, 'caption')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
                      title="Copy Caption"
                    >
                      {copiedType === 'caption' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-slate-100 text-sm sm:text-base leading-relaxed italic bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
                    "{currentSample.caption}"
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-500 mt-4">
                  Taxonomy: Mood-Matched Text Generator
                </span>
              </div>

              {/* Output Card 2: Hashtag Discovery */}
              <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                    <span className="text-xs font-mono text-indigo-400 flex items-center gap-1.5 font-semibold">
                      <Hash className="w-3.5 h-3.5" />
                      DISCOVERED HASHTAGS
                    </span>
                    <button
                      onClick={() => handleCopy(currentSample.hashtags.join(' '), 'hashtags')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
                      title="Copy Hashtags"
                    >
                      {copiedType === 'hashtags' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied All!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy All</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 min-h-[70px] items-center">
                    {currentSample.hashtags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-indigo-950/40 text-indigo-300 border border-indigo-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-500 mt-4">
                  Taxonomy: Relational Keyword Mapping
                </span>
              </div>

              {/* Output Card 3: Mood Soundtrack Recommendation */}
              <div className="lg:col-span-12 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md">
                      <Music className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-semibold">
                        Recommended Soundtrack Pairing
                      </span>
                      <h5 className="text-base font-bold text-white">
                        {currentSample.song.title} <span className="text-slate-400 font-normal">by {currentSample.song.artist}</span>
                      </h5>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800">
                      Vibe: {currentSample.song.vibe}
                    </span>
                    <button
                      onClick={() => handleCopy(`${currentSample.song.title} - ${currentSample.song.artist}`, 'song')}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      {copiedType === 'song' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy Title</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Implemented Features Checklist Summary */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider block mb-3">
                Key PostPro Implemented Capabilities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs sm:text-sm text-slate-300">
                {postProProject.features.slice(0, 6).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/40">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
