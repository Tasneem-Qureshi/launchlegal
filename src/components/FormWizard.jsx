import React from 'react';
import { 
  Building2, Globe, Mail, Shield, Sparkles, Server, 
  CreditCard, Check, Sliders, Smartphone, Puzzle, ShoppingBag, Bot 
} from 'lucide-react';

const PRESETS = [
  {
    id: 'ai-saas',
    title: 'AI SaaS / Web App',
    icon: Bot,
    data: {
      appName: 'PromptFlow AI',
      companyName: 'PromptFlow Technologies Inc.',
      websiteUrl: 'https://promptflow.io',
      contactEmail: 'legal@promptflow.io',
      jurisdiction: 'Delaware, United States',
      hasAccounts: true,
      hasPayments: true,
      paymentProcessor: 'Stripe',
      pricingModel: '$19/mo Subscription',
      refundWindowDays: 14,
      aiProviders: ['OpenAI', 'Anthropic'],
      analytics: ['PostHog', 'Google Analytics'],
      authProviders: ['Clerk / Supabase Auth'],
      cloudProviders: ['Vercel', 'AWS'],
      collectsCookies: true,
      collectsTelemetry: true,
      gdprCompliant: true,
      ccpaCompliant: true,
      minimumAge: 13
    }
  },
  {
    id: 'mobile-app',
    title: 'Mobile App (iOS / Android)',
    icon: Smartphone,
    data: {
      appName: 'HabitZen',
      companyName: 'Zenith Labs LLC',
      websiteUrl: 'https://habitzen.app',
      contactEmail: 'support@habitzen.app',
      jurisdiction: 'California, United States',
      hasAccounts: true,
      hasPayments: true,
      paymentProcessor: 'Apple StoreKit & Stripe',
      pricingModel: '$4.99/mo In-App Purchase',
      refundWindowDays: 14,
      aiProviders: [],
      analytics: ['Mixpanel', 'Firebase Analytics'],
      authProviders: ['Apple Sign-In / Google Auth'],
      cloudProviders: ['Supabase', 'Cloudflare'],
      collectsCookies: false,
      collectsTelemetry: true,
      gdprCompliant: true,
      ccpaCompliant: true,
      minimumAge: 13
    }
  },
  {
    id: 'chrome-ext',
    title: 'Chrome Extension',
    icon: Puzzle,
    data: {
      appName: 'MailSummarizer Pro',
      companyName: 'IndieBuilder Studio',
      websiteUrl: 'https://mailsummarizer.com',
      contactEmail: 'contact@mailsummarizer.com',
      jurisdiction: 'United Kingdom',
      hasAccounts: false,
      hasPayments: true,
      paymentProcessor: 'Stripe',
      pricingModel: '$29 One-Time Lifetime License',
      refundWindowDays: 7,
      aiProviders: ['OpenAI'],
      analytics: ['Plausible Analytics'],
      authProviders: ['Chrome Identity API'],
      cloudProviders: ['Cloudflare Workers'],
      collectsCookies: false,
      collectsTelemetry: false,
      gdprCompliant: true,
      ccpaCompliant: true,
      minimumAge: 13
    }
  },
  {
    id: 'e-commerce',
    title: 'Digital Store / Templates',
    icon: ShoppingBag,
    data: {
      appName: 'UIForge Assets',
      companyName: 'Creative Forge LLC',
      websiteUrl: 'https://uiforge.dev',
      contactEmail: 'support@uiforge.dev',
      jurisdiction: 'Wyoming, United States',
      hasAccounts: true,
      hasPayments: true,
      paymentProcessor: 'Stripe',
      pricingModel: '$49 Pay-per-download',
      refundWindowDays: 14,
      aiProviders: [],
      analytics: ['Google Analytics'],
      authProviders: ['Email / Magic Link'],
      cloudProviders: ['AWS S3', 'Netlify'],
      collectsCookies: true,
      collectsTelemetry: true,
      gdprCompliant: true,
      ccpaCompliant: true,
      minimumAge: 16
    }
  }
];

export function FormWizard({ config, onChange }) {
  const applyPreset = (presetData) => {
    onChange({ ...config, ...presetData });
  };

  const toggleArrayItem = (key, item) => {
    const list = config[key] || [];
    if (list.includes(item)) {
      onChange({ ...config, [key]: list.filter(i => i !== item) });
    } else {
      onChange({ ...config, [key]: [...list, item] });
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl">
      {/* Header & Quick Presets */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sliders className="w-5 h-5 text-brand-400" />
            <span>Customize Your Project</span>
          </h2>
          <span className="text-xs text-slate-400">1-Click Presets:</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESETS.map((preset) => {
            const Icon = preset.icon;
            return (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset.data)}
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-brand-500/50 hover:bg-slate-800/60 text-left transition text-xs font-medium text-slate-200 group"
              >
                <Icon className="w-4 h-4 text-brand-400 group-hover:scale-110 transition" />
                <span className="truncate">{preset.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        {/* Section 1: Business & App Identity */}
        <div className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-brand-400" />
              <span>1. Application & Legal Entity</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                App / Product Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={config.appName}
                onChange={(e) => onChange({ ...config, appName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 outline-none transition"
                placeholder="e.g. PromptFlow AI"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Legal Company / Developer Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={config.companyName}
                onChange={(e) => onChange({ ...config, companyName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 outline-none transition"
                placeholder="e.g. PromptFlow LLC"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Website URL <span className="text-rose-400">*</span>
              </label>
              <input
                type="url"
                value={config.websiteUrl}
                onChange={(e) => onChange({ ...config, websiteUrl: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 outline-none transition"
                placeholder="https://promptflow.io"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Support / Legal Email <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                value={config.contactEmail}
                onChange={(e) => onChange({ ...config, contactEmail: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 outline-none transition"
                placeholder="support@promptflow.io"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Governing Jurisdiction / State / Country
              </label>
              <input
                type="text"
                value={config.jurisdiction}
                onChange={(e) => onChange({ ...config, jurisdiction: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 outline-none transition"
                placeholder="e.g. Delaware, United States or London, UK"
              />
            </div>
          </div>
        </div>

        {/* Section 2: AI & LLM Infrastructure */}
        <div className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>2. AI & Machine Learning Disclosures</span>
            </h3>
          </div>

          <div>
            <p className="text-xs text-slate-400 mb-2">
              Select AI APIs your software routes user data or prompts to:
            </p>
            <div className="flex flex-wrap gap-2">
              {['OpenAI (GPT-4/DALL-E)', 'Anthropic (Claude)', 'Google Gemini', 'Mistral AI', 'Groq', 'Replicate', 'Perplexity'].map((provider) => {
                const isSelected = (config.aiProviders || []).includes(provider);
                return (
                  <button
                    key={provider}
                    type="button"
                    onClick={() => toggleArrayItem('aiProviders', provider)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition border ${
                      isSelected
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-200'
                        : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <Check className={`w-3.5 h-3.5 ${isSelected ? 'opacity-100 text-indigo-400' : 'opacity-0'}`} />
                    <span>{provider}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 3: Billing, Payments & User Accounts */}
        <div className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
              <span>3. Billing, Subscriptions & Accounts</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
              <input
                id="hasAccounts"
                type="checkbox"
                checked={config.hasAccounts}
                onChange={(e) => onChange({ ...config, hasAccounts: e.target.checked })}
                className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-brand-600 focus:ring-brand-500"
              />
              <label htmlFor="hasAccounts" className="text-xs text-slate-200 cursor-pointer">
                <strong>User Registration & Accounts</strong>
                <p className="text-[11px] text-slate-400">Users create credentials/logins</p>
              </label>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
              <input
                id="hasPayments"
                type="checkbox"
                checked={config.hasPayments}
                onChange={(e) => onChange({ ...config, hasPayments: e.target.checked })}
                className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-brand-600 focus:ring-brand-500"
              />
              <label htmlFor="hasPayments" className="text-xs text-slate-200 cursor-pointer">
                <strong>Paid Subscriptions or Purchases</strong>
                <p className="text-[11px] text-slate-400">Collects money via Stripe/Apple</p>
              </label>
            </div>

            {config.hasPayments && (
              <>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Payment Gateway
                  </label>
                  <input
                    type="text"
                    value={config.paymentProcessor}
                    onChange={(e) => onChange({ ...config, paymentProcessor: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-brand-500 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 outline-none"
                    placeholder="Stripe / LemonSqueezy / Apple Pay"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Refund Window (Days)
                  </label>
                  <select
                    value={config.refundWindowDays}
                    onChange={(e) => onChange({ ...config, refundWindowDays: Number(e.target.value) })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-brand-500 rounded-lg px-3 py-2 text-sm text-white outline-none"
                  >
                    <option value={7}>7 Days Money-Back</option>
                    <option value={14}>14 Days Money-Back (Standard EU/US)</option>
                    <option value={30}>30 Days Money-Back</option>
                    <option value={0}>No Refunds (All Sales Final)</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Section 4: Analytics, Cloud & Regulatory Toggles */}
        <div className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brand-400" />
              <span>4. Analytics, Cookies & Compliance</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={config.gdprCompliant}
                onChange={(e) => onChange({ ...config, gdprCompliant: e.target.checked })}
                className="rounded border-slate-700 bg-slate-900 text-brand-600"
              />
              <span className="text-slate-300">GDPR (Europe)</span>
            </label>

            <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={config.ccpaCompliant}
                onChange={(e) => onChange({ ...config, ccpaCompliant: e.target.checked })}
                className="rounded border-slate-700 bg-slate-900 text-brand-600"
              />
              <span className="text-slate-300">CCPA (California)</span>
            </label>

            <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={config.collectsCookies}
                onChange={(e) => onChange({ ...config, collectsCookies: e.target.checked })}
                className="rounded border-slate-700 bg-slate-900 text-brand-600"
              />
              <span className="text-slate-300">Cookies Used</span>
            </label>

            <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={config.collectsTelemetry}
                onChange={(e) => onChange({ ...config, collectsTelemetry: e.target.checked })}
                className="rounded border-slate-700 bg-slate-900 text-brand-600"
              />
              <span className="text-slate-300">Usage Telemetry</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
