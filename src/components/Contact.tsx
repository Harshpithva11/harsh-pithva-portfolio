import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  Phone, 
  Check, 
  Copy, 
  AlertCircle, 
  ExternalLink,
  Sparkles,
  Info
} from 'lucide-react';
import { profileConfig, isConfiguredValue, isValidUrl } from '../data/profile';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<string | null>(null);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const { socialLinks } = profileConfig;
  const targetEmail = isConfiguredValue(socialLinks.email) ? socialLinks.email : 'pithvaharsh006@gmail.com';
  const hasRealEmail = isConfiguredValue(socialLinks.email);
  const hasRealLinkedin = isValidUrl(socialLinks.linkedin);
  const hasRealGithub = isValidUrl(socialLinks.github);
  const hasRealPhone = isConfiguredValue(socialLinks.phone);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message must be at least 5 characters long.';
    }
    return errs;
  };

  const sendViaGmail = () => {
    const sub = formData.subject ? `[Portfolio Contact] ${formData.subject}` : `[Portfolio Contact] Inquiry from ${formData.name || 'Visitor'}`;
    const body = `Hi Harsh,\n\n${formData.message || 'I would like to connect with you regarding an opportunity.'}\n\n------------------------------\nFrom: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'Not provided'}\nSent via Portfolio Contact Form`;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFeedback(`Opened Web Gmail addressed to ${targetEmail}! Click Send in Gmail to deliver.`);
  };

  const sendViaOutlook = () => {
    const sub = formData.subject ? `[Portfolio Contact] ${formData.subject}` : `[Portfolio Contact] Inquiry from ${formData.name || 'Visitor'}`;
    const body = `Hi Harsh,\n\n${formData.message || 'I would like to connect with you regarding an opportunity.'}\n\n------------------------------\nFrom: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'Not provided'}\nSent via Portfolio Contact Form`;
    const url = `https://outlook.live.com/mail/0/deeplink/compose?to=${targetEmail}&subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFeedback(`Opened Web Outlook addressed to ${targetEmail}! Click Send in Outlook to deliver.`);
  };

  const sendViaWhatsApp = () => {
    const text = `*Portfolio Inquiry for Harsh Pithva*\nName: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'N/A'}\nSubject: ${formData.subject || 'Opportunity'}\n\nMessage:\n${formData.message || 'Hi Harsh, I would like to connect with you.'}`;
    const url = `https://wa.me/919408517380?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFeedback('Opened in WhatsApp! You can send your message directly to Harsh (+91 9408517380).');
  };

  const sendViaDefaultMail = () => {
    const sub = formData.subject ? `[Portfolio Contact] ${formData.subject}` : `[Portfolio Contact] Inquiry from ${formData.name || 'Visitor'}`;
    const body = `Hi Harsh,\n\n${formData.message || 'I would like to connect with you.'}\n\n------------------------------\nFrom: ${formData.name || 'Visitor'} (${formData.email || ''})\nSent via Portfolio Contact Form`;
    const mailto = `mailto:${targetEmail}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFeedback('Prompted your default mail client.');
  };

  const copyMessageDraft = () => {
    const draft = `To: ${targetEmail}\nSubject: [Portfolio Contact] ${formData.subject || 'Opportunity'}\n\n${formData.message || 'Hello Harsh,'}\n\nFrom: ${formData.name || 'Visitor'} (${formData.email || ''})`;
    navigator.clipboard.writeText(draft);
    setCopiedDraft(true);
    setFeedback('Copied email draft to clipboard! You can paste it into any email client.');
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const savedName = formData.name;
    const savedEmail = formData.email;
    const savedSubject = formData.subject;
    const savedMsg = formData.message;

    // Clear all fields immediately as explicitly requested
    setFormData({ name: '', email: '', subject: '', message: '' });

    const fullSubj = savedSubject ? `[Portfolio Contact] ${savedSubject}` : `[Portfolio Contact] Inquiry from ${savedName}`;
    const emailBody = `Hi Harsh,\n\n${savedMsg}\n\n------------------------------\nSender Name: ${savedName}\nSender Email: ${savedEmail}\nDate: ${new Date().toLocaleString()}\nSent via Harsh Pithva Portfolio`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(fullSubj)}&body=${encodeURIComponent(emailBody)}`;
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(fullSubj)}&body=${encodeURIComponent(emailBody)}`;

    let sentViaServer = false;
    if (typeof window !== 'undefined' && window.location.protocol.startsWith('http')) {
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: savedName,
            email: savedEmail,
            _subject: fullSubj,
            message: savedMsg
          })
        });
        const json = await res.json();
        if (json.success === 'true' || json.success === true) {
          sentViaServer = true;
        }
      } catch {
        sentViaServer = false;
      }
    }

    if (sentViaServer) {
      setFeedback(`Message delivered directly to ${targetEmail}! Thank you for connecting!`);
    } else {
      let openedTab = false;
      try {
        const win = window.open(gmailUrl, '_blank');
        if (win && !win.closed && typeof win.closed !== 'undefined') {
          openedTab = true;
        }
      } catch {
        openedTab = false;
      }
      if (!openedTab) {
        window.location.href = mailtoUrl;
      }
      setFeedback(`Web Gmail opened with pre-filled message addressed directly to ${targetEmail}! Click Send in Gmail to deliver.`);
    }
  };

  const handleCopyEmail = () => {
    if (hasRealEmail) {
      navigator.clipboard.writeText(socialLinks.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Meaningful
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Have an opportunity, an interesting idea, or a project to discuss? I'd be happy to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Connect & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">
                Connect Directly
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Whether you're looking for a motivated MCA intern, want to discuss PostPro, or just want to talk about software development, feel free to reach out.
              </p>

              <div className="space-y-4">
                {/* Email option */}
                {hasRealEmail ? (
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-xs font-mono text-slate-400 block">Email</span>
                        <a
                          href={`mailto:${socialLinks.email}`}
                          className="text-sm text-white font-medium hover:text-indigo-400 transition-colors truncate block"
                        >
                          {socialLinks.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors flex-shrink-0"
                      title="Copy email address"
                      aria-label="Copy email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 text-xs text-slate-400 flex items-start gap-3">
                    <Info className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-300 block">Direct Email Setup</strong>
                      Add your preferred email in <code className="text-indigo-300 font-mono">src/data/profile.ts</code> to display your public contact card.
                    </div>
                  </div>
                )}

                {/* LinkedIn option */}
                {hasRealLinkedin ? (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400 block">LinkedIn Profile</span>
                        <span className="text-sm text-white font-medium group-hover:text-blue-400 transition-colors">
                          Harsh Pithva on LinkedIn
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white" />
                  </a>
                ) : null}

                {/* GitHub option */}
                {hasRealGithub ? (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400 block">GitHub Profile</span>
                        <span className="text-sm text-white font-medium group-hover:text-purple-400 transition-colors">
                          Repositories &amp; Code
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white" />
                  </a>
                ) : null}

                {/* Phone & WhatsApp option */}
                {hasRealPhone ? (
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400 block">Phone &amp; WhatsApp</span>
                        <a href={`tel:${socialLinks.phone}`} className="text-sm text-white font-medium hover:text-emerald-400 transition-colors">
                          {socialLinks.phone}
                        </a>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/919408517380"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 text-xs font-medium hover:bg-emerald-900/60 transition-colors flex items-center gap-1.5"
                    >
                      <span>💬</span> WhatsApp
                    </a>
                  </div>
                ) : null}
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-5 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Responsive to academic &amp; professional inquiries</span>
              </div>
            </div>

          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  Send a Message
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-violet-500/10 text-violet-300 border border-violet-500/30">
                  Direct &amp; Instant
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Choose your preferred email service or send automatically with one click.
              </p>

              {feedback && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-slate-200 text-xs space-y-3">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{feedback}</span>
                  </div>
                  <p className="text-slate-300">If your browser blocked popups, pick an alternative below:</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      onClick={sendViaGmail}
                      className="px-3 py-1.5 rounded-lg bg-red-600/20 border border-red-500/40 text-red-300 hover:bg-red-600/30 text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span>✉️</span> Gmail Web
                    </button>
                    <button
                      type="button"
                      onClick={sendViaWhatsApp}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30 text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span>💬</span> WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={sendViaOutlook}
                      className="px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 hover:bg-blue-600/30 text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span>📧</span> Outlook Web
                    </button>
                    <button
                      type="button"
                      onClick={sendViaDefaultMail}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span>💻</span> Mail Client
                    </button>
                    <button
                      type="button"
                      onClick={copyMessageDraft}
                      className="px-3 py-1.5 rounded-lg bg-violet-600/20 border border-violet-500/40 text-violet-300 hover:bg-violet-600/30 text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span>📋</span> {copiedDraft ? 'Copied!' : 'Copy Text'}
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all ${
                      errors.name ? 'border-rose-500/80' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all ${
                      errors.email ? 'border-rose-500/80' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Collaboration on PostPro / Internship Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all ${
                      errors.subject ? 'border-rose-500/80' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all resize-y ${
                      errors.message ? 'border-rose-500/80' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Quick Action Buttons */}
                <div className="pt-1">
                  <label className="block text-slate-400 font-mono uppercase text-[10px] mb-2">
                    Send Directly Via:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                    <button
                      type="button"
                      onClick={sendViaGmail}
                      className="p-2 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 hover:bg-rose-900/40 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>✉️</span> Gmail Web
                    </button>
                    <button
                      type="button"
                      onClick={sendViaOutlook}
                      className="p-2 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-300 hover:bg-sky-900/40 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>📧</span> Outlook Web
                    </button>
                    <button
                      type="button"
                      onClick={sendViaWhatsApp}
                      className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/40 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>💬</span> WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={copyMessageDraft}
                      className="p-2 rounded-xl bg-violet-950/40 border border-violet-500/30 text-violet-300 hover:bg-violet-900/40 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>📋</span> {copiedDraft ? 'Copied!' : 'Copy Draft'}
                    </button>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/30 border border-violet-400/30 transition-all active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message (Auto-Dispatch)</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
