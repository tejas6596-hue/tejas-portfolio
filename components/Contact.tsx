"use client";

import { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check } from 'lucide-react';
import { soundFx } from './SoundEffects';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; text: string }>({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();
    setIsSubmitting(true);
    setStatus({ type: '', text: '' });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', text: 'All fields are required.' });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      soundFx.playSuccess();
      setStatus({
        type: 'success',
        text: 'Thank you! Your message has been prepared and your email client is launching.',
      });

      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      setTimeout(() => {
        window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
      }, 800);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-pill text-xs font-mono font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Let&apos;s Start a <span className="theme-heading">Conversation</span>
          </h2>
          <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed">
            Have an engineering role or internship opportunity? Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8 theme-card p-8 sm:p-10 rounded-3xl">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                Contact Details
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Direct communication channels for candidate outreach & technical discussions.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-zinc-800">
              
              {/* Email */}
              <div className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] uppercase font-mono text-zinc-500 font-bold">Email</p>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-zinc-300 transition-colors truncate block"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy Email"
                  className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 shrink-0 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] uppercase font-mono text-zinc-500 font-bold">Phone</p>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-zinc-300 transition-colors truncate block"
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  title="Copy Phone Number"
                  className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 shrink-0 transition-colors"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono text-zinc-500 font-bold">Location</p>
                  <p className="text-xs font-mono text-white">
                    {PORTFOLIO_DATA.personal.location}
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-400">
              <span>Response Window: <strong className="text-zinc-200">&lt; 24 Hours</strong></span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 theme-card p-8 sm:p-10 rounded-3xl space-y-6">
            
            {status.text && (
              <div
                className={`p-4 rounded-2xl text-xs font-mono border flex items-center gap-3 ${
                  status.type === 'error'
                    ? 'bg-zinc-900 border-red-500/40 text-red-300'
                    : 'bg-zinc-900 border-emerald-500/40 text-emerald-300'
                }`}
              >
                {status.type === 'error' ? (
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                )}
                <span>{status.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Recruiter / Engineering Manager"
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-mono"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. recruiter@company.com"
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-mono"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  Message / Inquiry
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Details regarding role, tech stack, or interview schedule..."
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all text-xs font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-zinc-100 text-zinc-950 font-bold text-sm hover:bg-white transition-all shadow-lg hover:scale-[1.01] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Dispatching Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
