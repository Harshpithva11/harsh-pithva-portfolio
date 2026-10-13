import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProject } from './components/FeaturedProject';
import { FutureProjects } from './components/FutureProjects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Strengths } from './components/Strengths';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-navy-950 text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-300`}>
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onRequestResume={() => setIsResumeModalOpen(true)}
      />

      <main id="main-content" className="relative z-10">
        {/* Hero Section */}
        <Hero onRequestResume={() => setIsResumeModalOpen(true)} />

        {/* About Section */}
        <About />

        {/* Skills & Technologies */}
        <Skills />

        {/* Featured Project: PostPro */}
        <FeaturedProject onOpenDetails={(proj) => setSelectedProject(proj)} />

        {/* Future Projects Pipeline */}
        <FutureProjects onOpenDetails={(proj) => setSelectedProject(proj)} />

        {/* Internship & Experience */}
        <Experience />

        {/* Education Timeline */}
        <Education />

        {/* Certifications & Additional Learning */}
        <Certifications />

        {/* Professional Strengths */}
        <Strengths />

        {/* Currently Exploring / Learning Goals */}
        <LearningJourney />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Dialogs */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Floating Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-600 text-white shadow-xl shadow-violet-600/40 hover:shadow-violet-600/60 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-violet-400 group cursor-pointer ${
          showScrollTop
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none translate-y-4'
        }`}
        aria-label="Scroll to top of page"
        title="Back to top"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:-translate-y-1" />
      </button>
    </div>
  );
};

export default App;
