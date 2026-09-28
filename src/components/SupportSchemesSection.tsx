import React from 'react';
import { Scheme, Language } from '../types';
import { translations } from '../data/translations';
import { SCHEMES } from '../data/schemes';

interface SupportSchemesSectionProps {
  currentLang: Language;
  onOpenScheme: (scheme: Scheme) => void;
}

export function SupportSchemesSection({
  currentLang,
  onOpenScheme
}: SupportSchemesSectionProps) {
  const t = translations[currentLang];

  const comCare = SCHEMES.find(s => s.id === 'comcare-short-medium-term') || SCHEMES[0];
  const scfa = SCHEMES.find(s => s.id === 'scfa-student-care') || SCHEMES[1];

  return (
    <section className="bg-[#F9FAFB] py-14 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Scheme Intro Graphic */}
          <div className="lg:col-span-4 flex flex-col items-start pr-4">
            <div className="relative mb-6 select-none">
              <svg className="w-32 h-32" fill="none" viewBox="0 0 120 120">
                {/* Sparkling stars */}
                <path d="M32 24L34 29L39 31L34 33L32 38L30 33L25 31L30 29L32 24Z" fill="#F59E0B" />
                <path d="M95 72L96 76L100 77L96 78L95 82L94 78L90 77L94 76L95 72Z" fill="#F59E0B" />
                {/* Form Paper */}
                <rect fill="#FFFFFF" height="62" rx="4" stroke="#E2E8F0" strokeWidth="2" width="46" x="45" y="22" />
                <line stroke="#94A3B8" strokeLinecap="round" strokeWidth="2.5" x1="53" x2="81" y1="36" y2="36" />
                <line stroke="#CBD5E1" strokeLinecap="round" strokeWidth="2" x1="53" x2="77" y1="46" y2="46" />
                <line stroke="#CBD5E1" strokeLinecap="round" strokeWidth="2" x1="53" x2="72" y1="54" y2="54" />
                <line stroke="#CBD5E1" strokeLinecap="round" strokeWidth="2" x1="53" x2="79" y1="62" y2="62" />
                {/* Supporting Hand */}
                <path d="M35 75C40 68 48 65 58 72L65 82C62 86 48 94 38 88C32 84 32 78 35 75Z" fill="#FDBA74" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              {t.applySchemesTitle}
            </h2>
            <p className="text-xs text-gray-500 mt-2 max-w-sm">
              Discover official government support schemes tailored to individuals, seniors, students, and families across Singapore.
            </p>
          </div>

          {/* Right Schemes Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Scheme 1: ComCare Assistance */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-200 transition-all">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {comCare.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  {comCare.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {comCare.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenScheme(comCare)}
                className="text-xs font-semibold text-[#175CD3] hover:text-blue-800 inline-flex items-center gap-1 group cursor-pointer text-left self-start"
              >
                {t.moreDetails} 
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Scheme 2: Student Care Fee Assistance (SCFA) */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-200 transition-all">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {scfa.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  {scfa.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {scfa.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenScheme(scfa)}
                className="text-xs font-semibold text-[#175CD3] hover:text-blue-800 inline-flex items-center gap-1 group cursor-pointer text-left self-start"
              >
                {t.moreDetails} 
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
