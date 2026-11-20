import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "Why do Stripe and Apple reject new apps so often?",
    a: "Stripe and Apple require active, publicly accessible Privacy Policies and Terms of Service before clearing merchant accounts or approving App Store submissions. Common rejection reasons include missing refund terms, failure to disclose third-party AI APIs (like OpenAI), or omitting GDPR/CCPA consumer rights and account deletion clauses."
  },
  {
    q: "Are these legal documents legally valid?",
    a: "Yes. These templates are structured according to current international consumer protection and privacy standards (GDPR, CCPA/CPRA, CalOPPA, and standard commercial contract law). While they provide comprehensive legal protection for standard software and web apps, you should always consult an attorney for specialized regulatory advice."
  },
  {
    q: "How does the AI Disclaimer protect me?",
    a: "Modern AI models can hallucinate or generate unexpected outputs. The AI Disclaimer explicitly clarifies that completions are probabilistic, disclaims warranties of perfection, and mandates that users independently verify results, shielding you from liability."
  },
  {
    q: "Can I host the generated documents on my own site?",
    a: "Yes. You can copy the generated documents as clean Markdown, HTML, or download them as professional PDFs to upload directly to your repository or website (e.g. /privacy and /terms)."
  },
  {
    q: "How does the monetization model make $10/day?",
    a: "By pricing the Pro Suite at $19 one-time or $9/month, you only need 1 purchase every 1-2 days to average $10/day ($300+/month). Because hosting costs are $0 on Vercel/Netlify, your profit margin is virtually 100%."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 border-t border-slate-900">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-400" />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Everything you need to know about compliance and store approvals.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
