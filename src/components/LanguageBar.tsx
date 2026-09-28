import { Language } from '../types';
import { translations } from '../data/translations';

interface LanguageBarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageBar({ currentLang, onLanguageChange }: LanguageBarProps) {
  const t = translations[currentLang];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'ms', label: 'Melayu' },
    { code: 'ta', label: 'தமிழ்' }
  ];

  return (
    <div className="border-b border-gray-100 bg-[#FCFCFD] text-xs py-1.5 px-4 text-gray-500" data-purpose="language-selector">
      <div className="max-w-7xl mx-auto flex items-center gap-2">
        <span className="text-gray-500">{t.readThisIn}</span>
        {languages.map((lang, idx) => (
          <div key={lang.code} className="flex items-center gap-2">
            <button
              onClick={() => onLanguageChange(lang.code)}
              className={`cursor-pointer transition-colors ${
                currentLang === lang.code
                  ? 'font-bold text-gray-900 underline underline-offset-4 decoration-[#175CD3]'
                  : 'hover:text-gray-900 text-gray-600'
              }`}
            >
              {lang.label}
            </button>
            {idx < languages.length - 1 && <span className="text-gray-300">|</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
