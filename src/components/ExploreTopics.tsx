import React from 'react';
import { Topic, Language } from '../types';
import { TOPICS } from '../data/topics';
import { TopicIcon } from './TopicIcons';
import { translations } from '../data/translations';

interface ExploreTopicsProps {
  currentLang: Language;
  onSelectTopic: (topic: Topic) => void;
  onOpenBudgetCalc: () => void;
}

export function ExploreTopics({
  currentLang,
  onSelectTopic,
  onOpenBudgetCalc
}: ExploreTopicsProps) {
  const t = translations[currentLang];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12" id="explore-topics">
      <h2 className="text-2xl font-bold text-center text-[#101828] mb-8">
        {t.exploreTopicsTitle}
      </h2>

      {/* Budget 2026 Calculator Callout Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs hover:border-emerald-300 transition-all">
        <div className="flex items-center gap-4 text-left">
          {/* Budget 2026 Colorful Pinwheel Logo */}
          <div className="shrink-0 w-12 h-12 flex items-center justify-center relative">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
              <path d="M14 10C18 6 24 8 26 12C28 16 26 22 20 24L14 10Z" fill="#F04438" fillOpacity="0.9" />
              <path d="M26 12C30 15 30 22 27 26C24 30 18 30 14 26L26 12Z" fill="#F79009" fillOpacity="0.9" />
              <path d="M27 26C24 31 18 32 13 30C8 28 8 21 11 17L27 26Z" fill="#12B76A" fillOpacity="0.9" />
              <path d="M11 17C8 13 10 7 15 5C20 3 24 7 24 12L11 17Z" fill="#2E90FA" fillOpacity="0.9" />
            </svg>
            <div className="absolute -bottom-1 -right-1 text-[9px] font-black text-rose-600 bg-white px-1 rounded shadow-2xs border border-rose-100">
              2026
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#027A48]">
              {t.budgetTitle}
            </div>
            <div className="text-sm font-semibold text-gray-900">
              {t.budgetSubtitle}
            </div>
          </div>
        </div>
        <button
          onClick={onOpenBudgetCalc}
          className="w-full md:w-auto px-5 py-2 border border-gray-300 text-xs font-semibold rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:scale-95 transition-all shadow-2xs cursor-pointer"
        >
          {t.useCalculator}
        </button>
      </div>

      {/* 12 Topic Cards Grid (4 columns on lg, 3 on md, 2 on sm) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {TOPICS.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            className="group bg-white rounded-2xl border border-gray-200 p-4 flex flex-col items-center text-center cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-left"
          >
            <div 
              className="w-full h-32 mb-3 rounded-xl flex items-center justify-center p-3 overflow-hidden transition-transform group-hover:scale-[1.02]"
              style={{ backgroundColor: topic.colorBg }}
            >
              <TopicIcon type={topic.iconType} />
            </div>
            <span className="text-xs font-semibold text-gray-800 group-hover:text-[#175CD3] transition-colors leading-tight">
              {topic.title}
            </span>
            <span className="text-[10px] text-gray-400 mt-1">
              {topic.schemeCount} schemes
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
