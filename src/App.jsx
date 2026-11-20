import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FormWizard } from './components/FormWizard';
import { DocumentPreview } from './components/DocumentPreview';
import { PricingModal } from './components/PricingModal';
import { RevenuePlaybook } from './components/RevenuePlaybook';
import { HostedView } from './components/HostedView';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

import { generatePrivacyPolicy } from './templates/privacyPolicy';
import { generateTermsOfService } from './templates/termsOfService';
import { generateAiDisclaimer } from './templates/aiDisclaimer';
import { generateCookiePolicy } from './templates/cookiePolicy';
import { generateAppStoreChecklist } from './templates/appStoreChecklist';

const INITIAL_CONFIG = {
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
  aiProviders: ['OpenAI (GPT-4/DALL-E)', 'Anthropic (Claude)'],
  analytics: ['PostHog', 'Google Analytics'],
  authProviders: ['Clerk / Supabase Auth'],
  cloudProviders: ['Vercel', 'AWS'],
  collectsCookies: true,
  collectsTelemetry: true,
  gdprCompliant: true,
  ccpaCompliant: true,
  minimumAge: 13
};

export default function App() {
  const [config, setConfig] = useState(INITIAL_CONFIG);
  const [activeTab, setActiveTab] = useState('privacy');
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isPlaybookOpen, setIsPlaybookOpen] = useState(false);

  // Check if viewing as a standalone hosted policy page
  const [isHostedView, setIsHostedView] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('hosted') === 'true';
  });

  // Handle URL query parameters (e.g. ?app=MyApp&doc=terms&hosted=true)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const appParam = params.get('app');
    const docParam = params.get('doc');
    if (appParam) {
      setConfig(prev => ({ ...prev, appName: appParam }));
    }
    if (docParam && ['privacy', 'terms', 'ai', 'cookies', 'checklist'].includes(docParam)) {
      setActiveTab(docParam);
    }
  }, []);

  // Persistent Pro status from localStorage
  const [isPro, setIsPro] = useState(() => {
    return localStorage.getItem('launchlegal_is_pro') === 'true';
  });

  const handleUpgrade = () => {
    setIsPro(true);
    localStorage.setItem('launchlegal_is_pro', 'true');
  };

  const handleReset = () => {
    setIsPro(false);
    localStorage.removeItem('launchlegal_is_pro');
  };

  // Generate all documents dynamically
  const documents = useMemo(() => {
    return {
      privacy: generatePrivacyPolicy(config),
      terms: generateTermsOfService(config),
      ai: generateAiDisclaimer(config),
      cookies: generateCookiePolicy(config),
      checklist: generateAppStoreChecklist(config)
    };
  }, [config]);

  // If in Hosted Public View, show clean reading page with referral banner
  if (isHostedView) {
    return (
      <HostedView
        docTitle={activeTab}
        docContent={documents[activeTab] || documents.privacy}
        appName={config.appName}
        onExit={() => {
          setIsHostedView(false);
          window.history.pushState({}, '', '/');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Header */}
      <Header 
        isPro={isPro} 
        onOpenPricing={() => setIsPricingOpen(true)}
        onOpenPlaybook={() => setIsPlaybookOpen(true)}
      />

      {/* Hero Banner */}
      <Hero />

      {/* Main Interactive Studio */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form & Presets (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <FormWizard config={config} onChange={setConfig} />
          </div>

          {/* Right Column: Live Document Preview & Actions (7 cols) */}
          <div className="lg:col-span-7 w-full sticky top-20">
            <DocumentPreview
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              documents={documents}
              appName={config.appName}
              isPro={isPro}
              onOpenPricing={() => setIsPricingOpen(true)}
            />
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenPlaybook={() => setIsPlaybookOpen(true)} />

      {/* Pricing & Checkout Modal */}
      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        isPro={isPro}
        onUpgrade={handleUpgrade}
        onReset={handleReset}
      />

      {/* Revenue Blueprint & Distribution Modal */}
      <RevenuePlaybook
        isOpen={isPlaybookOpen}
        onClose={() => setIsPlaybookOpen(false)}
      />
    </div>
  );
}
