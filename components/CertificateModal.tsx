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

      // Check if file exists via fetch HEAD request
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card border border-gray-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl bg-gray-950/90 text-white space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close certificate viewer"
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title & Metadata */}
        <div className="flex items-start gap-4 pr-12">
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
                {certification.issuer}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {certification.year}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {certification.title}
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
              {certification.subtitle}
            </p>
          </div>
        </div>

        {/* Certificate Display Window */}
        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 flex items-center justify-center p-6 text-center">
          {fileAvailable ? (
            <iframe
              src={certification.filePath}
              className="w-full h-full rounded-xl border-0"
              title={certification.title}
            />
          ) : (
            <div className="space-y-4 max-w-md">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mx-auto flex items-center justify-center text-blue-400">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Certificate Document Placeholder
                </h3>
                <p className="text-xs text-gray-400 font-mono bg-gray-950 p-2 rounded-lg border border-gray-800">
                  Target File: /public{certification.filePath}
                </p>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Place your official PDF or image certificate file at the path above to display it directly inside this viewer.
              </p>
            </div>
          )}
        </div>

        {/* Verification Status Pill */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-gray-900/60 border border-gray-800 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified Credentials • {certification.issuer}</span>
          </div>
          <span className="font-mono text-gray-400">{certification.category}</span>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-gray-800">
          <a
            href={certification.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 border border-gray-700 text-white text-xs font-semibold hover:bg-gray-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Open Full Screen
          </a>

          <a
            href={certification.filePath}
            download={`${certification.id}.pdf`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
          >
            <Download className="w-4 h-4" />
            Download Certificate
          </a>
        </div>

      </div>
    </div>
  );
}
