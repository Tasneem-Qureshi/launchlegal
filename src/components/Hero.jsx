import React from 'react';
import { ShieldCheck, CheckCircle2, Zap, ArrowRight, CreditCard, Sparkles } from 'lucide-react';

export function Hero({ onStart }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-8 sm:pt-14 sm:pb-12 text-center border-b border-slate-900">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Top Pills */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-6 shadow-inner">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Updated for 2026 GDPR, CCPA, Apple Guidelines & OpenAI API Terms</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Stripe & App Store</span> Approved in 2 Minutes.
        </h1>

        {/* Subhead */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Lawyers charge $1,500+. Subscription services charge $180/year. 
          Generate attorney-grade <strong>Privacy Policies, Terms of Service, and AI Disclaimers</strong> tailored specifically for indie hackers, SaaS apps, and modern AI wrappers.
        </p>

        {/* Trust Points */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 bg-slate-900/70 border border-slate-800/80 px-3 py-1.5 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Stripe Verification Ready</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900/70 border border-slate-800/80 px-3 py-1.5 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-brand-400" />
            <span>Apple App Store & Play Store Vetted</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900/70 border border-slate-800/80 px-3 py-1.5 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            <span>LLM Hallucination & AI Disclaimers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
