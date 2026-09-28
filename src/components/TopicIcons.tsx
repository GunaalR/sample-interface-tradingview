import React from 'react';

export function TopicIcon({ type }: { type: string }) {
  switch (type) {
    case 'caregiving':
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#E6F4EA" r="45" />
          <circle cx="38" cy="38" fill="#FBBF24" r="10" />
          <path d="M28 65C28 54 36 50 44 50C52 50 56 54 56 65" fill="#38BDF8" />
          <circle cx="62" cy="35" fill="#E5E7EB" r="9" />
          <path d="M62 44C58 44 54 48 54 55C54 62 60 70 70 70" stroke="#059669" strokeLinecap="round" strokeWidth="6" />
          <circle cx="36" cy="37" fill="#1F2937" r="1" /><circle cx="42" cy="37" fill="#1F2937" r="1" />
        </svg>
      );
    case 'citizenship':
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#EEF2F6" r="45" />
          <circle cx="50" cy="32" fill="#D1D5DB" r="12" />
          <path d="M38 24C38 24 45 18 58 24C58 24 58 32 50 32C42 32 38 24 38 24Z" fill="#15803D" />
          <path d="M32 75C32 58 40 52 50 52C60 52 68 58 68 75" fill="#1E293B" />
          <rect fill="#334155" height="7" rx="3" transform="rotate(-15 25 48)" width="40" x="25" y="48" />
        </svg>
      );
    case 'counselling':
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#F3E8FF" r="45" />
          <path d="M30 65C38 60 42 62 48 58L42 50C36 53 32 55 25 60L30 65Z" fill="#FED7AA" />
          <path d="M70 65C62 60 58 62 52 58L58 50C64 53 68 55 75 60L70 65Z" fill="#FED7AA" />
          <path d="M50 45C50 45 42 34 50 26C58 34 50 45 50 45Z" fill="#A855F7" />
          <circle cx="45" cy="30" fill="#A855F7" r="4" /><circle cx="55" cy="30" fill="#A855F7" r="4" />
        </svg>
      );
    case 'disability':
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#FFE4E6" r="45" />
          <circle cx="40" cy="40" fill="#F43F5E" r="6" />
          <circle cx="42" cy="65" fill="none" r="10" stroke="#E11D48" strokeWidth="4" />
          <path d="M42 48V60L52 65" stroke="#E11D48" strokeLinecap="round" strokeWidth="4" />
          <circle cx="65" cy="35" fill="#FB7185" r="6" />
          <path d="M60 55C60 48 70 48 70 55V75" stroke="#BE123C" strokeLinecap="round" strokeWidth="4" />
        </svg>
      );
    case 'education':
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#E0E7FF" r="45" />
          <polygon fill="#1E293B" points="65,26 80,33 65,40 50,33" />
          <line stroke="#F59E0B" strokeWidth="2" x1="75" x2="75" y1="36" y2="44" />
          <circle cx="65" cy="48" fill="#FCD34D" r="8" />
          <circle cx="36" cy="45" fill="#F472B6" r="8" />
          <rect fill="#4338CA" height="12" rx="2" width="16" x="42" y="60" />
          <path d="M30 65C30 55 42 55 42 65" stroke="#9333EA" strokeWidth="4" />
        </svg>
      );
    case 'family':
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#FFEDD5" r="45" />
          <circle cx="36" cy="35" fill="#EA580C" r="8" />
          <circle cx="54" cy="32" fill="#1E293B" r="9" />
          <circle cx="68" cy="42" fill="#F97316" r="6" />
          <path d="M26 68C26 55 42 52 46 68" fill="#FB923C" />
          <path d="M46 68C46 52 64 50 66 68" fill="#475569" />
        </svg>
      );
    case 'financial':
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#FEF3C7" r="45" />
          <rect fill="#D97706" height="30" rx="6" width="46" x="28" y="44" />
          <path d="M28 50C28 44 34 38 42 38H60C68 38 74 44 74 50" fill="#B45309" />
          <circle cx="62" cy="58" fill="#FDE68A" r="4" />
          <circle cx="62" cy="32" fill="#10B981" r="10" />
          <text fill="white" fontSize="12" fontWeight="bold" x="59" y="36">$</text>
        </svg>
      );
    case 'healthcare':
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#DBEAFE" r="45" />
          <path d="M50 25C40 25 36 34 36 44C36 56 46 64 50 68C54 64 64 56 64 44C64 34 60 25 50 25Z" fill="#2563EB" />
          <rect fill="white" height="18" width="6" x="47" y="36" />
          <rect fill="white" height="6" width="18" x="41" y="42" />
          <path d="M30 65C30 75 70 75 70 65" stroke="#1E40AF" strokeLinecap="round" strokeWidth="4" />
        </svg>
      );
    case 'housing':
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#FEE2E2" r="45" />
          <polygon fill="#EF4444" points="50,25 22,48 78,48" />
          <rect fill="#F87171" height="26" width="40" x="30" y="48" />
          <rect fill="#FFFFFF" height="18" width="12" x="44" y="56" />
          <circle cx="26" cy="74" r="5" stroke="#475569" strokeWidth="2" />
          <circle cx="40" cy="74" r="5" stroke="#475569" strokeWidth="2" />
        </svg>
      );
    case 'mental-health':
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#DCFCE7" r="45" />
          <circle cx="34" cy="40" fill="#15803D" r="9" />
          <circle cx="66" cy="40" fill="#0284C7" r="9" />
          <path d="M22 68C22 55 35 52 44 68" fill="#86EFAC" />
          <path d="M56 68C65 52 78 55 78 68" fill="#BAE6FD" />
          <circle cx="50" cy="35" fill="#F43F5E" r="7" />
          <path d="M50 32C49 30 46 30 46 32C46 34 50 37 50 37C50 37 54 34 54 32C54 30 51 30 50 32Z" fill="white" />
        </svg>
      );
    case 'retirement':
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#FEF3C7" r="45" />
          <circle cx="42" cy="42" fill="#D97706" r="8" />
          <circle cx="62" cy="40" fill="#92400E" r="8" />
          <path d="M30 70C30 58 45 56 48 70" fill="#FBBF24" />
          <path d="M52 70C55 56 70 58 70 70" fill="#F59E0B" />
          <path d="M24 38C24 30 30 26 30 26C30 26 36 30 36 38" stroke="#15803D" strokeWidth="2" />
        </svg>
      );
    case 'work':
    default:
      return (
        <svg className="w-24 h-24" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="#FFEDD5" r="45" />
          <circle cx="50" cy="35" fill="#EA580C" r="9" />
          <path d="M38 68C38 52 62 52 62 68" fill="#C2410C" />
          <rect fill="#94A3B8" height="10" rx="1" width="16" x="42" y="58" />
          <line stroke="#0F172A" strokeWidth="2" x1="38" x2="62" y1="68" y2="68" />
        </svg>
      );
  }
}
