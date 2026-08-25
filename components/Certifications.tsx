"use client";

import { useState } from 'react';
import { PORTFOLIO_DATA, Certification } from '@/data/portfolio';
import CertificateModal from './CertificateModal';
import { Award, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Certifications</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Verified Cloud & Technical <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-gray-400 font-light text-base sm:text-lg leading-relaxed">
            Industry-recognized credentials in Cloud Computing, AWS, IBM Cloud, and Programming.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between space-y-6 hover:border-blue-500/40 transition-all duration-300 cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle accent light */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-blue-500/20 transition-colors" />

              <div className="space-y-4">

                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light mt-1">
                    {cert.subtitle}
                  </p>
                </div>

              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                <span className="flex items-center gap-1.5 text-gray-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  View Certificate
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
