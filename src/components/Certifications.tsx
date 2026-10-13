import React from 'react';
import { Award, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';
import { certificationsData, isConfiguredValue, isValidUrl } from '../data/profile';

export const Certifications: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-medium text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; Additional Learning
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Foundational computing and operational software certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert) => {
            const hasIssuer = isConfiguredValue(cert.issuingOrganization);
            const hasYear = isConfiguredValue(cert.completionYear);
            const hasCredential = isConfiguredValue(cert.credentialId);
            const hasLink = isValidUrl(cert.verificationUrl);

            return (
              <div
                key={cert.id}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/75 border border-slate-800 shadow-lg hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Certified
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Configured Details (Hidden if unknown/placeholder) */}
                  <div className="space-y-1.5 text-xs font-mono text-slate-400">
                    {hasIssuer && (
                      <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                        <span className="text-slate-500">Issuer:</span>
                        <span className="text-slate-200">{cert.issuingOrganization}</span>
                      </div>
                    )}
                    {hasYear && (
                      <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                        <span className="text-slate-500">Year:</span>
                        <span className="text-slate-200">{cert.completionYear}</span>
                      </div>
                    )}
                    {hasCredential && (
                      <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                        <span className="text-slate-500">Credential ID:</span>
                        <span className="text-slate-200">{cert.credentialId}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Verification link only if valid */}
                {hasLink && (
                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
