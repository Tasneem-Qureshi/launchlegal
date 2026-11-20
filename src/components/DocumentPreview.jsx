import React, { useState, useEffect } from 'react';
import { 
  FileText, Copy, Check, Download, Edit3, Eye, Lock, 
  Sparkles, CheckCircle2, Shield, ListChecks, Cookie, BookOpen 
} from 'lucide-react';
import { exportDocumentToPdf } from '../utils/pdfExport';

export function DocumentPreview({ 
  activeTab, 
  setActiveTab, 
  documents, 
  appName, 
  isPro, 
  onOpenPricing 
}) {
  const [copiedFormat, setCopiedFormat] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableDocs, setEditableDocs] = useState(documents);

  useEffect(() => {
    setEditableDocs(documents);
  }, [documents]);

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', isPro: false, icon: Shield },
    { id: 'terms', label: 'Terms of Service', isPro: true, icon: FileText },
    { id: 'ai', label: 'AI Disclaimer', isPro: true, icon: Sparkles },
    { id: 'cookies', label: 'Cookie Policy', isPro: true, icon: Cookie },
    { id: 'checklist', label: 'Approval Checklist', isPro: true, icon: ListChecks },
  ];

  const currentTabObj = tabs.find(t => t.id === activeTab) || tabs[0];
  const isCurrentLocked = currentTabObj.isPro && !isPro;
  const currentContent = editableDocs[activeTab] || '';

  const handleCopy = (format) => {
    let textToCopy = currentContent;
    if (format === 'html') {
      // Basic markdown to html wrapper
      textToCopy = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${currentTabObj.label} - ${appName}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #1e293b; }
    h1, h2, h3 { color: #0f172a; }
    pre, code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
${currentContent.split('\n').map(line => {
  if (line.startsWith('# ')) return `<h1>${line.replace('# ', '')}</h1>`;
  if (line.startsWith('## ')) return `<h2>${line.replace('## ', '')}</h2>`;
  if (line.startsWith('### ')) return `<h3>${line.replace('### ', '')}</h3>`;
  if (line.startsWith('- ')) return `<li>${line.replace('- ', '')}</li>`;
  if (line.trim() === '---') return `<hr />`;
  if (line.trim().length === 0) return `<br />`;
  return `<p>${line}</p>`;
}).join('\n')}
</body>
</html>`;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  const handlePdfExport = () => {
    if (isCurrentLocked) {
      onOpenPricing();
      return;
    }
    exportDocumentToPdf(currentTabObj.label, currentContent, appName);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl flex flex-col h-[750px] shadow-xl overflow-hidden">
      {/* Top Document Bar */}
      <div className="border-b border-slate-800 bg-slate-950/80 px-4 py-2.5 flex items-center justify-between flex-wrap gap-2">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                  isSelected
                    ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-brand-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {tab.isPro && !isPro && (
                  <span className="ml-1 text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.2 rounded font-semibold flex items-center gap-0.5">
                    <Lock className="w-2.5 h-2.5" /> Pro
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {!isCurrentLocked && (
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition border ${
                isEditing
                  ? 'bg-brand-600 text-white border-brand-500'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              }`}
              title="Toggle Edit Mode"
            >
              {isEditing ? <Eye className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
              <span>{isEditing ? 'Preview' : 'Edit'}</span>
            </button>
          )}

          <button
            onClick={() => handleCopy('md')}
            disabled={isCurrentLocked}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition disabled:opacity-40 disabled:cursor-not-allowed"
            title="Copy as Markdown"
          >
            {copiedFormat === 'md' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedFormat === 'md' ? 'Copied MD' : 'Markdown'}</span>
          </button>

          <button
            onClick={() => handleCopy('html')}
            disabled={isCurrentLocked}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition disabled:opacity-40 disabled:cursor-not-allowed"
            title="Copy as HTML snippet"
          >
            {copiedFormat === 'html' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedFormat === 'html' ? 'Copied HTML' : 'HTML'}</span>
          </button>

          <button
            onClick={handlePdfExport}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-brand-500/20 transition active:scale-95"
            title="Download formatted PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>
        </div>
      </div>

      {/* Document Body or Pro Gate */}
      <div className="relative flex-1 overflow-hidden bg-slate-950">
        {isCurrentLocked ? (
          /* Pro Gate Screen */
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-slate-950/90 backdrop-blur-sm">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-brand-500/20 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400 shadow-xl shadow-amber-500/10">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Unlock the Complete {currentTabObj.label}
            </h3>
            <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
              This document is included in the <strong>LaunchLegal Pro Suite</strong>. Unlock Terms of Service, AI Disclaimers, Cookie Policy, and unlimited PDF exports for a single payment.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenPricing}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 transition active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Unlock All Documents ($19)</span>
              </button>

              <button
                onClick={() => setActiveTab('privacy')}
                className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4 py-2"
              >
                Back to Free Privacy Policy
              </button>
            </div>

            {/* Blurred Teaser preview behind */}
            <div className="mt-8 max-w-lg w-full p-4 rounded-xl border border-slate-900 bg-slate-900/40 opacity-30 select-none text-left font-mono text-xs text-slate-500">
              <p># {currentTabObj.label} for {appName}...</p>
              <p>1. General Terms and Disclaimers...</p>
              <p>2. Subscription, Merchant PCI-DSS and chargeback policies...</p>
              <p>3. Limitation of liability and statutory arbitration...</p>
            </div>
          </div>
        ) : isEditing ? (
          /* Live Edit Textarea */
          <textarea
            value={currentContent}
            onChange={(e) => {
              setEditableDocs({
                ...editableDocs,
                [activeTab]: e.target.value
              });
            }}
            className="w-full h-full p-6 bg-slate-950 text-slate-200 font-mono text-xs sm:text-sm resize-none outline-none focus:ring-0 leading-relaxed border-none"
            placeholder="Edit document content..."
          />
        ) : (
          /* Rendered Document View */
          <div className="w-full h-full p-6 sm:p-8 overflow-y-auto text-slate-200 font-sans text-xs sm:text-sm leading-relaxed space-y-4">
            <div className="max-w-3xl mx-auto space-y-4">
              {currentContent.split('\n').map((line, idx) => {
                if (line.startsWith('# ')) {
                  return (
                    <h1 key={idx} className="text-xl sm:text-2xl font-bold text-white border-b border-slate-800 pb-3 mt-2">
                      {line.replace('# ', '')}
                    </h1>
                  );
                }
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="text-base sm:text-lg font-bold text-slate-100 mt-6 pt-2 text-brand-400">
                      {line.replace('## ', '')}
                    </h2>
                  );
                }
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-sm font-semibold text-slate-200 mt-4">
                      {line.replace('### ', '')}
                    </h3>
                  );
                }
                if (line.startsWith('- ')) {
                  return (
                    <li key={idx} className="ml-5 list-disc text-slate-300">
                      {line.replace('- ', '')}
                    </li>
                  );
                }
                if (line.startsWith('- [ ] ')) {
                  return (
                    <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900/50 border border-slate-800/80 my-1.5">
                      <input type="checkbox" className="mt-0.5 rounded border-slate-700 bg-slate-900 text-brand-600" />
                      <span className="text-slate-300 text-xs sm:text-sm">{line.replace('- [ ] ', '')}</span>
                    </div>
                  );
                }
                if (line.trim() === '---') {
                  return <hr key={idx} className="border-slate-800 my-4" />;
                }
                if (line.trim().length === 0) {
                  return <div key={idx} className="h-2" />;
                }
                return (
                  <p key={idx} className="text-slate-300 leading-relaxed">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Footer Status Bar */}
      <div className="border-t border-slate-800 bg-slate-950/90 px-4 py-2 flex items-center justify-between text-xs text-slate-500">
        <span>Word count: ~{currentContent.split(/\s+/).filter(Boolean).length} words</span>
        <span>Standard Legal Standard (Updated 2026)</span>
      </div>
    </div>
  );
}
