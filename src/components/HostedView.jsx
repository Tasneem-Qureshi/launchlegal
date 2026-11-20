import React from 'react';
import { ShieldCheck, ExternalLink, ArrowRight, Printer } from 'lucide-react';

export function HostedView({ docTitle, docContent, appName, onExit }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Banner (Viral Referral Hook) */}
      <div className="bg-brand-950/80 border-b border-brand-800/50 py-2.5 px-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-300">
              Verified Legal Policy for <strong className="text-white">{appName}</strong> • Hosted via <span className="text-brand-400 font-semibold">LaunchLegal</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1 text-slate-400 hover:text-white transition"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onExit();
              }}
              className="flex items-center gap-1 px-3 py-1 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold transition shadow-sm"
            >
              <span>Create Your Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Document Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full flex-1">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-4">
          {docContent.split('\n').map((line, idx) => {
            if (line.startsWith('# ')) {
              return (
                <h1 key={idx} className="text-2xl sm:text-3xl font-extrabold text-white border-b border-slate-800 pb-4 mb-4 tracking-tight">
                  {line.replace('# ', '')}
                </h1>
              );
            }
            if (line.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-lg sm:text-xl font-bold text-slate-100 mt-8 pt-3 text-brand-400">
                  {line.replace('## ', '')}
                </h2>
              );
            }
            if (line.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-sm sm:text-base font-semibold text-slate-200 mt-5">
                  {line.replace('### ', '')}
                </h3>
              );
            }
            if (line.startsWith('- ')) {
              return (
                <li key={idx} className="ml-5 list-disc text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {line.replace('- ', '')}
                </li>
              );
            }
            if (line.trim() === '---') {
              return <hr key={idx} className="border-slate-800 my-6" />;
            }
            if (line.trim().length === 0) {
              return <div key={idx} className="h-2" />;
            }
            return (
              <p key={idx} className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {line}
              </p>
            );
          })}

          {/* Verification Badge Footer */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
            <p>
              This document is published for {appName} and generated using standard international GDPR, CCPA, and SaaS compliance guidelines.
            </p>
            <p className="mt-1">
              Need a policy for your app or startup? Visit <a href="/" onClick={(e) => { e.preventDefault(); onExit(); }} className="text-brand-400 underline underline-offset-2">LaunchLegal</a> to generate yours in under 2 minutes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
