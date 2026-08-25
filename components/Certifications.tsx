"use client";

import { useState } from 'react';
import { PORTFOLIO_DATA, Certification } from '@/data/portfolio';
import CertificateModal from './CertificateModal';
import { Award, ArrowRight, ShieldCheck } from 'lucide-react';
import { soundFx } from './SoundEffects';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleOpenCert = (cert: Certification) => {
    soundFx.playClick();
    setSelectedCert(cert);
  };

  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-pill text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Certifications</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Verified Cloud & Technical <span className="theme-heading">Credentials</span>
          </h2>
          <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed">
            Industry-recognized credentials in Cloud Computing, AWS Foundations, IBM Cloud Architecture, and Core Programming.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => handleOpenCert(cert)}
              className="theme-card rounded-3xl p-7 flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold text-zinc-300">
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-1">
                    {cert.subtitle}
                  </p>
                </div>

              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-bold text-zinc-300 group-hover:text-white">
                <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  View Verified Document
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
