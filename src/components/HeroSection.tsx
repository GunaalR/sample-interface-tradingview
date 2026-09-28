import React, { useState } from 'react';
import { ArrowUp, ExternalLink, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Language, Scheme } from '../types';
import { translations } from '../data/translations';
import { SCHEMES } from '../data/schemes';

interface HeroSectionProps {
  currentLang: Language;
  onOpenScheme: (scheme: Scheme) => void;
  onOpenChatbotInfo: () => void;
}

export function HeroSection({
  currentLang,
  onOpenScheme,
  onOpenChatbotInfo
}: HeroSectionProps) {
  const [query, setQuery] = useState("I'm a senior citizen and need help with my living expenses");
  const [activeResult, setActiveResult] = useState<{
    queryText: string;
    summary: string;
    matchedSchemes: Scheme[];
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const t = translations[currentLang];

  const quickPills = [
    'Any assistance for job loss?',
    'When can I withdraw my CPF?',
    'How do I apply for Child LifeSG credits?'
  ];

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);

    setTimeout(() => {
      const lower = searchQuery.toLowerCase();
      let matched: Scheme[] = [];
      let summaryText = '';

      if (lower.includes('senior') || lower.includes('living expense') || lower.includes('elderly') || lower.includes('retire')) {
        matched = SCHEMES.filter(s => 
          s.id === 'silver-support' || 
          s.id === 'comcare-short-medium-term' || 
          s.id === 'budget-2026-cdc-vouchers' ||
          s.id === 'chas-card'
        );
        summaryText = 'As a senior citizen, you have multiple tiers of support available under Budget 2026. The Silver Support Scheme provides quarterly cash of up to $1,080 automatically. ComCare offers urgent monthly cash assistance, while CHAS and CDC vouchers offset everyday clinic visits and grocery bills.';
      } else if (lower.includes('job') || lower.includes('unemploy') || lower.includes('retrench') || lower.includes('loss')) {
        matched = SCHEMES.filter(s => 
          s.id === 'skillsfuture-jobseeker-support' || 
          s.id === 'comcare-short-medium-term'
        );
        summaryText = 'For displaced workers, the new SkillsFuture Jobseeker Support Scheme provides tiered monthly payouts of up to $6,000 over 6 months alongside career coaching. If facing immediate financial distress, ComCare Short-to-Medium-Term Assistance can provide urgent monthly living expenses.';
      } else if (lower.includes('cpf') || lower.includes('withdraw') || lower.includes('55') || lower.includes('65')) {
        matched = SCHEMES.filter(s => 
          s.id === 'cpf-withdrawal-rules' || 
          s.id === 'silver-support'
        );
        summaryText = 'At age 55, CPF members can unconditionally withdraw up to $5,000 from Ordinary and Special accounts, plus any excess above your Full Retirement Sum. Monthly payouts begin from age 65 under CPF LIFE. Check your current balances directly on the CPF portal.';
      } else if (lower.includes('child') || lower.includes('lifesg') || lower.includes('baby') || lower.includes('parent') || lower.includes('student')) {
        matched = SCHEMES.filter(s => 
          s.id === 'lifesg-child-credits' || 
          s.id === 'scfa-student-care'
        );
        summaryText = 'Singaporean parents can apply for Child LifeSG credits and the Baby Bonus cash gift (up to $11,000) directly through the LifeSG mobile application upon registering the birth. For primary school students, SCFA provides up to 98% fee assistance for after-school care.';
      } else {
        matched = SCHEMES.filter(s => 
          s.title.toLowerCase().includes(lower) || 
          s.summary.toLowerCase().includes(lower) || 
          s.tags.some(tag => tag.toLowerCase().includes(lower))
        );
        if (matched.length === 0) {
          matched = SCHEMES.slice(0, 3);
        }
        summaryText = `Based on "${searchQuery}", here are the top relevant government support schemes and assistance grants that match your criteria.`;
      }

      setActiveResult({
        queryText: searchQuery,
        summary: summaryText,
        matchedSchemes: matched
      });
      setIsSearching(false);
    }, 300);
  };

  const handlePillClick = (pill: string) => {
    setQuery(pill);
    handleSearch(pill);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSearch(query);
    }
  };

  return (
    <section className="relative bg-[radial-gradient(circle_at_50%_10%,#F0F6FE_0%,#FFFFFF_65%)] pt-14 pb-16 px-4 overflow-hidden border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Floating Illustrations for Hero Left */}
        <div className="hidden lg:block absolute -left-48 top-4 pointer-events-none select-none">
          <div className="relative w-44 h-44">
            {/* Floating Note 1 */}
            <div className="absolute top-0 left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 w-32 -rotate-6 animate-pulse">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500 flex items-center justify-center text-white text-[8px]">
                  ♥
                </span>
                <div className="h-2 w-12 bg-gray-200 rounded"></div>
              </div>
              <div className="space-y-1">
                <div className="h-1.5 bg-gray-100 rounded w-full"></div>
                <div className="h-1.5 bg-gray-100 rounded w-4/5"></div>
              </div>
            </div>
            {/* Floating Note 2 */}
            <div className="absolute bottom-2 left-0 bg-white p-3 rounded-xl shadow-md border border-gray-100 w-36 rotate-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 rounded bg-amber-400 text-white flex items-center justify-center text-[10px] font-bold">
                  +
                </span>
                <div className="h-2 w-14 bg-gray-200 rounded"></div>
              </div>
              <div className="h-1.5 bg-gray-100 rounded w-full"></div>
            </div>
            {/* Hand / Sparkle deco */}
            <div className="absolute -right-2 top-8 text-amber-400 text-lg">✦</div>
          </div>
        </div>

        {/* Floating Illustrations for Hero Right */}
        <div className="hidden lg:block absolute -right-48 top-2 pointer-events-none select-none">
          <div className="relative w-44 h-44">
            {/* Floating Map */}
            <div className="absolute top-0 right-4 bg-white p-2.5 rounded-xl shadow-lg border border-gray-100 w-32 rotate-8">
              <div className="w-full h-14 bg-blue-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                <svg className="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd"></path>
                </svg>
                <div className="absolute top-2 right-4 w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                <div className="absolute top-2 right-4 w-2 h-2 rounded-full bg-red-500"></div>
              </div>
            </div>
            {/* Floating Document with Magnifier */}
            <div className="absolute bottom-1 right-2 bg-white p-3 rounded-xl shadow-md border border-gray-100 w-32 -rotate-5">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-rose-500 text-xs">♥</span>
                <div className="h-2 w-10 bg-gray-200 rounded"></div>
              </div>
              <div className="h-1.5 bg-gray-100 rounded w-full mb-1"></div>
              <div className="h-1.5 bg-gray-100 rounded w-2/3"></div>
            </div>
            <div className="absolute -left-2 bottom-6 text-red-500">
              <svg className="w-6 h-6 -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" strokeWidth="2"></circle>
                <path d="M16 16l4 4" strokeLinecap="round" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Section Titles */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101828] tracking-tight mb-2">
          {t.heroTitle}
        </h1>
        <p className="text-xs sm:text-sm text-[#475467] font-medium flex items-center justify-center gap-1 mb-6">
          <span>{t.heroSubtitle.split('LifeSG')[0]}</span>
          <a
            href="https://www.life.gov.sg"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center font-bold text-gray-900 hover:text-red-600 transition-colors"
          >
            Life<span className="text-[#E63946]">SG</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 ml-1 inline" />
          </a>
        </p>

        {/* Prompt Search / Chat Box */}
        <div className="relative bg-white rounded-2xl shadow-sm border border-gray-300 p-4 text-left max-w-2xl mx-auto focus-within:ring-2 focus-within:ring-[#175CD3] focus-within:border-[#175CD3] transition-all">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full resize-none border-none p-0 text-gray-800 text-sm focus:ring-0 placeholder:text-gray-400 outline-none leading-relaxed"
            placeholder={t.heroPlaceholder}
            rows={3}
            aria-label="Ask about support schemes"
          />
          <div className="flex items-center justify-between mt-2 pt-1 border-t border-gray-50">
            <span className="text-[11px] text-gray-400">Press Enter or click arrow to ask</span>
            <button
              onClick={() => handleSearch(query)}
              disabled={isSearching}
              aria-label="Submit query"
              className="bg-[#1570EF] hover:bg-blue-700 active:scale-95 text-white rounded-xl p-2.5 transition-all shadow-sm cursor-pointer disabled:opacity-50"
            >
              {isSearching ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowUp className="w-4 h-4 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Chatbot Beta Disclaimer */}
        <p className="text-[12px] text-gray-500 mt-2.5">
          {t.chatbotBetaNote}{' '}
          <button
            onClick={onOpenChatbotInfo}
            className="text-[#175CD3] underline font-medium hover:text-blue-800 cursor-pointer"
          >
            {t.learnMore}
          </button>
        </p>

        {/* Quick Query Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
          {quickPills.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => handlePillClick(pill)}
              className="text-xs bg-white hover:bg-gray-50 hover:border-blue-300 text-gray-700 border border-gray-200 rounded-full px-4 py-2 shadow-xs transition-colors cursor-pointer active:scale-95"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Interactive Query Result Display */}
        {activeResult && (
          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-2xl border border-blue-100 shadow-md p-6 text-left animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-gray-900">
                  SupportGoWhere Assistant
                </span>
              </div>
              <button
                onClick={() => setActiveResult(null)}
                className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                Clear
              </button>
            </div>

            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              {activeResult.summary}
            </p>

            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
              Recommended Schemes ({activeResult.matchedSchemes.length})
            </div>

            <div className="space-y-2.5">
              {activeResult.matchedSchemes.map((scheme) => (
                <div
                  key={scheme.id}
                  className="p-3 bg-gray-50 hover:bg-blue-50/60 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-900 hover:text-blue-700 cursor-pointer" onClick={() => onOpenScheme(scheme)}>
                        {scheme.title}
                      </span>
                      {scheme.budget2026Measure && (
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          Budget 2026
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                      {scheme.summary}
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenScheme(scheme)}
                    className="shrink-0 text-xs font-semibold text-[#175CD3] hover:text-blue-800 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                  >
                    View scheme →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
