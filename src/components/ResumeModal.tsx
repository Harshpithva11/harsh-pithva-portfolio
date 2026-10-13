import React from 'react';
import { X, FileDown, CheckCircle2, FileText } from 'lucide-react';
import { profileConfig } from '../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Create an anchor and trigger download
    const link = document.createElement('a');
    link.href = profileConfig.resumePath;
    link.download = profileConfig.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg rounded-2xl bg-navy-950 border border-slate-700/80 shadow-2xl z-10 text-left p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-lg font-bold text-white">
                Download Resume
              </h3>
              <p className="text-xs font-mono text-slate-400">
                {profileConfig.resumeFileName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 space-y-4 text-sm text-slate-300">
          <p className="leading-relaxed">
            Clicking the download button below will initiate the download of Harsh Pithva's resume.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between font-mono text-slate-400">
              <span>Target File:</span>
              <span className="text-indigo-300 font-semibold">{profileConfig.resumePath}</span>
            </div>
            <div className="flex items-center justify-between font-mono text-slate-400">
              <span>Target Candidate:</span>
              <span className="text-slate-200">Harsh Pithva (MCA @ RVCE)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-300 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Note for Harsh:</strong> To update your resume anytime, drop your latest PDF file into the <code className="font-mono text-white">public/resume.pdf</code> folder or edit <code className="font-mono text-white">profileConfig.resumePath</code> in <code className="font-mono text-white">src/data/profile.ts</code>.
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 transition-colors"
          >
            Cancel
          </button>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
          >
            <FileDown className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
};
