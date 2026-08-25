"use client";

import { useEffect, useState } from 'react';
import { Certification } from '@/data/portfolio';
import { X, Download, ExternalLink, Award, FileText, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export default function CertificateModal({ certification, onClose }: CertificateModalProps) {
  const [fileAvailable, setFileAvailable] = useState<boolean>(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (certification) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      fetch(certification.filePath, { method: 'HEAD' })
        .then((res) => {
          setFileAvailable(res.ok);
        })
        .catch(() => {
          setFileAvailable(false);
        });
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certification, onClose]);

  if (!certification) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto theme-card border border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-2xl bg-zinc-950 text-white space-y-6 animate-in zoom-in-95 duration-200 scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close certificate viewer"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors z-20"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Title & Metadata */}
        <div className="flex items-start gap-3 sm:gap-4 pr-8">
          <div className="p-2.5 sm:p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-200 shrink-0">
            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="px-3 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold text-zinc-300">
                {certification.issuer}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                {certification.year}
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
              {certification.title}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
              {certification.subtitle}
            </p>
          </div>
        </div>

        {/* Certificate Display Window */}
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-4 sm:p-6 text-center">
          {fileAvailable ? (
            <iframe
              src={certification.filePath}
              className="w-full h-full rounded-xl border-0"
              title={certification.title}
            />
          ) : (
            <div className="space-y-3 max-w-md">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 mx-auto flex items-center justify-center text-zinc-300">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Certificate Document
                </h3>
                <p className="text-[10px] sm:text-xs text-zinc-400 font-mono bg-zinc-950 p-2 rounded-lg border border-zinc-800 break-all">
                  Target File: /public{certification.filePath}
                </p>
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Place your official PDF or image certificate file at the path above to display it directly inside this viewer.
              </p>
            </div>
          )}
        </div>

        {/* Verification Status Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Verified Credentials • {certification.issuer}</span>
          </div>
          <span className="font-mono text-zinc-400 text-[11px]">{certification.category}</span>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-zinc-800">
          <a
            href={certification.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Open Full Screen
          </a>

          <a
            href={certification.filePath}
            download={`${certification.id}.pdf`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 text-xs font-bold hover:bg-white transition-colors shadow-lg"
          >
            <Download className="w-4 h-4" />
            Download Certificate
          </a>
        </div>

      </div>
    </div>
  );
}
