import React, { useState } from 'react';
import { 
  X, Check, Sparkles, Shield, CreditCard, Lock, Zap, 
  ExternalLink, CheckCircle2, AlertCircle, Settings, Link as LinkIcon 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function PricingModal({ isOpen, onClose, isPro, onUpgrade, onReset }) {
  const [activeTab, setActiveTab] = useState('lifetime'); // 'lifetime' or 'subscription'
  
  // Custom Stripe Payment Link from localStorage or env
  const [stripeLink, setStripeLink] = useState(() => {
    return localStorage.getItem('launchlegal_stripe_link') || import.meta.env.VITE_STRIPE_PAYMENT_URL || '';
  });
  const [showConfig, setShowConfig] = useState(false);
  const [savedLinkMsg, setSavedLinkMsg] = useState(false);

  const [showSimulator, setShowSimulator] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const triggerCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSaveStripeLink = (e) => {
    e.preventDefault();
    localStorage.setItem('launchlegal_stripe_link', stripeLink.trim());
    setSavedLinkMsg(true);
    setTimeout(() => setSavedLinkMsg(false), 2500);
  };

  const handleCheckoutClick = () => {
    if (stripeLink && stripeLink.startsWith('http')) {
      // Real Stripe Checkout redirect
      window.open(stripeLink, '_blank', 'noopener,noreferrer');
    } else {
      // Open interactive test simulator
      setShowSimulator(true);
    }
  };

  const handleSimulatePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    setTimeout(() => {
      setIsProcessing(false);
      onUpgrade();
      triggerCelebration();
      onClose();
    }, 1200);
  };

  const fillTestCard = () => {
    setCardNumber('4242 •••• •••• 4242');
    setExpiry('12/28');
    setCvc('999');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 text-center border-b border-slate-800 bg-gradient-to-b from-brand-950/40 to-slate-900">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LaunchLegal Pro Pass</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Stop Paying \$180/Year for Basic Legal Text
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto">
            Get lifetime access to attorney-grade SaaS terms, AI liability shields, and store approval checklists.
          </p>

          {/* Pricing Toggle */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setActiveTab('lifetime')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === 'lifetime'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Lifetime License (\$19 One-Time)
            </button>
            <button
              onClick={() => setActiveTab('subscription')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === 'subscription'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly (\$9/month)
            </button>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full Terms of Service Generator</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>AI & LLM Disclaimer & Liability Shield</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>GDPR / CCPA Cookie Policy</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Apple & Stripe Approval Checklist</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Unlimited Formatted PDF Downloads</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Commercial Use on Unlimited Apps</span>
            </div>
          </div>

          {/* Checkout Area */}
          {isPro ? (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold mb-1">
                <Check className="w-5 h-5" />
                <span>You Own the Pro License</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">All documents and PDF exports are unlocked.</p>
              <button
                onClick={onReset}
                className="text-xs text-slate-500 hover:text-slate-300 underline"
              >
                Reset License (Test Mode)
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {showSimulator ? (
                /* Interactive Stripe Test Card Simulator */
                <form onSubmit={handleSimulatePayment} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-brand-400" />
                      <span>Simulated Stripe Checkout</span>
                    </span>
                    <button
                      type="button"
                      onClick={fillTestCard}
                      className="text-[11px] text-brand-400 hover:text-brand-300 underline"
                    >
                      Fill Demo Card
                    </button>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-brand-500 font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">MM / YY</label>
                      <input
                        type="text"
                        placeholder="12/28"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        required
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-brand-500 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">CVC</label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        required
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-brand-500 font-mono"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span>Verifying Payment...</span>
                    ) : (
                      <>
                        <Zap className="w-3.5 h-3.5" />
                        <span>Pay {activeTab === 'lifetime' ? '$19.00 USD' : '$9.00 USD'} & Unlock Instantly</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span>Test Mode: No real funds deducted</span>
                    <button
                      type="button"
                      onClick={() => setShowSimulator(false)}
                      className="text-slate-400 hover:text-white underline"
                    >
                      Back
                    </button>
                  </div>
                </form>
              ) : (
                /* Primary CTA button */
                <div className="space-y-3">
                  <button
                    onClick={handleCheckoutClick}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-brand-500/25 transition active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {stripeLink ? (
                        <>Pay via Stripe — {activeTab === 'lifetime' ? '$19 One-Time' : '$9/Month'}</>
                      ) : (
                        <>Get LaunchLegal Pro — {activeTab === 'lifetime' ? '$19 One-Time' : '$9/Month'}</>
                      )}
                    </span>
                    {stripeLink && <ExternalLink className="w-4 h-4 ml-1" />}
                  </button>

                  <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3" /> 256-bit SSL Encrypted
                    </span>

                    <button
                      type="button"
                      onClick={() => setShowConfig(!showConfig)}
                      className="flex items-center gap-1 text-slate-400 hover:text-brand-400 transition"
                    >
                      <Settings className="w-3 h-3" />
                      <span>{stripeLink ? 'Stripe Connected' : 'Connect Stripe Payouts'}</span>
                    </button>
                  </div>

                  {/* Connect Stripe Payout Drawer */}
                  {showConfig && (
                    <div className="mt-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white flex items-center gap-1.5">
                          <LinkIcon className="w-3.5 h-3.5 text-brand-400" />
                          <span>Your Stripe Payment Link</span>
                        </span>
                        {savedLinkMsg && <span className="text-emerald-400 font-medium">Saved!</span>}
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Paste your Stripe Payment Link (e.g. <code>https://buy.stripe.com/...</code>). Payments will route directly to your Stripe account & bank payouts!
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="url"
                          placeholder="https://buy.stripe.com/..."
                          value={stripeLink}
                          onChange={(e) => setStripeLink(e.target.value)}
                          className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white outline-none focus:border-brand-500"
                        />
                        <button
                          type="button"
                          onClick={handleSaveStripeLink}
                          className="px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition"
                        >
                          Save
                        </button>
                      </div>
                      <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Don't have a link yet?</span>
                        <button
                          type="button"
                          onClick={() => setShowSimulator(true)}
                          className="text-brand-400 hover:underline"
                        >
                          Use Demo Simulator
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
