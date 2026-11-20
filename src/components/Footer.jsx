import React from 'react';
import { Shield, Sparkles, Heart } from 'lucide-react';

export function Footer({ onOpenPlaybook }) {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-10 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300 text-sm">⚖️ LaunchLegal</span>
            <span>•</span>
            <span>AI & SaaS Legal Compliance Suite</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPlaybook}
              className="text-slate-400 hover:text-emerald-400 transition"
            >
              $10/Day Blueprint
            </button>
            <span className="text-slate-700">|</span>
            <span className="text-slate-500">
              Zero Hosting Overhead • Self-Contained
            </span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-900 text-center sm:text-left text-[11px] text-slate-600">
          <p>
            Disclaimer: LaunchLegal provides automated compliance and legal documentation templates. It does not provide formal legal representation or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
