import React, { useState } from 'react';
import { 
  ShieldCheck, Sparkles, DollarSign, Lock, Unlock, 
  Share2, Check, ExternalLink, Megaphone 
} from 'lucide-react';

export function Header({ isPro, onOpenPricing, onOpenPlaybook }) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const shareUrl = window.location.origin;
  const shareText = "I found this free tool to generate GDPR/CCPA Privacy Policies and Terms of Service for AI apps and SaaS in 60s:";

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    setShowShareMenu(false);
  };

  const handleShareReddit = () => {
    window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent("Free AI & SaaS Privacy Policy & Terms of Service Generator (LaunchLegal)")}`, '_blank');
    setShowShareMenu(false);
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
    setShowShareMenu(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => {
      setCopiedLink(false);
      setShowShareMenu(false);
    }, 2000);
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-brand-500/20 text-white font-bold text-lg">
            ⚖️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white tracking-tight">LaunchLegal</span>
              <span className="bg-brand-500/10 text-brand-400 border border-brand-500/20 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                v2.4 AI Ready
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">Legal & Compliance Suite for SaaS & AI Apps</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Share Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white text-xs font-medium transition"
              title="Share this tool with founders"
            >
              <Share2 className="w-3.5 h-3.5 text-brand-400" />
              <span className="hidden sm:inline">Share</span>
            </button>

            {showShareMenu && (
              <div className="absolute right-0 mt-2 w-52 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 text-xs space-y-1">
                <button
                  onClick={handleShareTwitter}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-between transition"
                >
                  <span>Share on Twitter / X</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </button>
                <button
                  onClick={handleShareReddit}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-between transition"
                >
                  <span>Share on Reddit</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </button>
                <button
                  onClick={handleShareLinkedIn}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-between transition"
                >
                  <span>Share on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </button>
                <div className="border-t border-slate-800 my-1"></div>
                <button
                  onClick={handleCopyLink}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-between transition font-medium"
                >
                  <span>{copiedLink ? "Link Copied!" : "Copy Site Link"}</span>
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
                </button>
              </div>
            )}
          </div>

          {/* Strategy / Playbook Button */}
          <button
            onClick={onOpenPlaybook}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-slate-600 bg-slate-900/60 text-slate-300 hover:text-white text-xs font-medium transition"
            title="View the $10/Day Passive Income Playbook"
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">Traffic & Blueprint</span>
          </button>

          {/* Pro Status or Upgrade Button */}
          {isPro ? (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Unlock className="w-3.5 h-3.5" />
              <span>Pro License Active</span>
            </div>
          ) : (
            <button
              onClick={onOpenPricing}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-brand-600/25 transition active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unlock Pro ($19)</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
