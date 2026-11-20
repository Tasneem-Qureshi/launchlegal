import React, { useState } from 'react';
import { 
  X, Check, Sparkles, Shield, CreditCard, Lock, Zap, 
  ExternalLink, CheckCircle2, AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function PricingModal({ isOpen, onClose, isPro, onUpgrade, onReset }) {
  const [activeTab, setActiveTab] = useState('lifetime'); // 'lifetime' or 'subscription'
  const [stripeLink, setStripeLink] = useState('');
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

                  <p className="text-[10px] text-center text-slate-500">
                    Test Mode: No real funds will be deducted.
                  </p>
                </form>
              ) : (
                /* Primary CTA button */
                <div className="space-y-3">
                  <button
                    onClick={() => setShowSimulator(true)}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-brand-500/25 transition active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>
                      Get LaunchLegal Pro — {activeTab === 'lifetime' ? '$19 One-Time' : '$9/Month'}
                    </span>
                  </button>

                  <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3" /> 256-bit SSL Encrypted
                    </span>
                    <span>•</span>
                    <span>14-day Money-back Guarantee</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
