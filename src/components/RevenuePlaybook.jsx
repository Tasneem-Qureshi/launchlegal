import React from 'react';
import { 
  X, DollarSign, TrendingUp, Target, Share2, 
  Search, Rocket, CheckCircle2, ArrowRight, ShieldAlert 
} from 'lucide-react';

export function RevenuePlaybook({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>The $10/Day Passive Income Blueprint</span>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  $300+/Month Target
                </span>
              </h2>
              <p className="text-xs text-slate-400">How to launch and monetize this exact app to generate steady passive revenue.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {/* Step 1: The Math */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-2 text-emerald-400">
              <TrendingUp className="w-4 h-4" />
              <span>1. The Math of $10 / Day</span>
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              $10 a day = <strong>$300/month</strong>. In digital products, you don't need thousands of customers to achieve this. You only need:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-white text-sm">Model A: One-Time Pass ($19)</span>
                <p className="text-slate-400 mt-1">Requires only <strong>16 sales per month</strong> (~1 sale every 2 days) to hit <strong>$304/month</strong>.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-white text-sm">Model B: Monthly Subscription ($9/mo)</span>
                <p className="text-slate-400 mt-1">Requires only <strong>34 active users</strong> to generate <strong>$306/month</strong> recurring forever.</p>
              </div>
            </div>
          </div>

          {/* Step 2: Zero-Cost Deployment */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-2 text-brand-400">
              <Rocket className="w-4 h-4" />
              <span>2. Free Hosting & Zero Monthly Overhead</span>
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Because this app is client-side React + jsPDF, it has <strong>$0/month in hosting costs</strong>:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
              <li>Deploy in 1 click to <strong>Vercel</strong> or <strong>Netlify</strong> (100% free tier).</li>
              <li>Connect your custom domain (e.g. `launchlegal.io` or `devpolicy.com` for ~$10/year).</li>
              <li>Create a free <strong>Stripe Payment Link</strong> in your Stripe Dashboard and paste it into the app.</li>
            </ul>
          </div>

          {/* Step 3: Distribution (Where customers come from) */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-2 text-indigo-400">
              <Share2 className="w-4 h-4" />
              <span>3. Distribution: Where to Get Traffic Without Ads</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-white">A. Reddit Communities (High Intent)</span>
                <p className="text-slate-400 mt-1">
                  Post on <strong>r/SideProject</strong>, <strong>r/SaaS</strong>, <strong>r/IndieHackers</strong>, and <strong>r/reactjs</strong>. Title format: <em>"I built a free tool to generate AI & SaaS Privacy Policies and Terms so you don't get rejected by Stripe or Apple."</em>
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-white">B. Twitter / X (#buildinpublic)</span>
                <p className="text-slate-400 mt-1">
                  Share screenshots of App Store Guideline 5.1 rejections and explain how your tool automatically prevents them. Tag #indiehackers and #buildinpublic.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-white">C. Low-Competition SEO Keywords</span>
                <p className="text-slate-400 mt-1">
                  Target: <em>"privacy policy for ai wrapper"</em>, <em>"terms of service generator for stripe"</em>, <em>"openai api terms of service template"</em>. These have massive search intent and low competition.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-white">D. ProductHunt & Hacker News Show HN</span>
                <p className="text-slate-400 mt-1">
                  Launch as a free utility with Pro upsell. ProductHunt launches routinely drive 1,000–5,000 targeted founders in the first 48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4: Maintenance */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white text-xs">Truly Passive Operations</span>
              <p className="text-xs text-slate-400 mt-0.5">
                Once deployed with your Stripe Payment Link, the site processes payments and delivers downloads automatically without any manual intervention. Check your Stripe dashboard once a day.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
          >
            Got It, Let's Build
          </button>
        </div>
      </div>
    </div>
  );
}
