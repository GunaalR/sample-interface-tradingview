import { useState } from 'react';
import { X, ExternalLink, ShieldAlert, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ScamBannerProps {
  currentLang: Language;
}

export function ScamBanner({ currentLang }: ScamBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const t = translations[currentLang];

  if (!isVisible) return null;

  return (
    <>
      <aside 
        className="bg-[#FFF1F3] border-b border-[#FEE4E2] text-xs text-[#344054] py-2 px-4" 
        data-purpose="scam-alert"
      >
        <div className="max-w-7xl mx-auto flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <svg 
              className="w-4 h-4 text-[#E63946] flex-shrink-0 mt-0.5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path 
                clipRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                fillRule="evenodd"
              />
            </svg>
            <p className="leading-relaxed">
              <strong className="font-semibold text-gray-900">
                {currentLang === 'en' ? 'Beware of impersonation scams' : t.scamBannerText.split('—')[0]}
              </strong>
              {' '}&mdash;{' '}
              {currentLang === 'en' 
                ? 'Government officials will NEVER ask you to transfer money or disclose bank log-in details over a phone call. Call the 24/7 ScamShield Helpline at 1799 if you are unsure if something is a scam. For more information on how to protect yourself against scams, please visit the'
                : t.scamBannerText.split('—')[1] || t.scamBannerText
              }{' '}
              <button 
                onClick={() => setShowModal(true)}
                className="underline text-[#E63946] hover:text-red-800 font-medium inline-flex items-center gap-0.5 cursor-pointer"
              >
                {t.scamBannerLink}
                <ExternalLink className="w-3 h-3 inline ml-0.5" />
              </button>.
            </p>
          </div>
          <button 
            aria-label="Dismiss banner" 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0 cursor-pointer p-0.5" 
            type="button"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* ScamShield Info Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">Official ScamShield Advisory</h3>
                <p className="text-xs text-gray-500">National Crime Prevention Council & Singapore Police Force</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-gray-600 mb-6">
              <div className="p-3 bg-red-50 rounded-xl border border-red-100 text-red-900">
                <p className="font-semibold mb-1">Key Anti-Scam Rules:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Government agencies will never request bank credentials or OTPs via SMS or phone calls.</li>
                  <li>No official will threaten you with immediate arrest unless you transfer funds.</li>
                  <li>Always check the domain ends with <strong>.gov.sg</strong> before entering credentials.</li>
                </ul>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div>
                  <div className="font-semibold text-gray-900">24/7 ScamShield Helpline</div>
                  <div className="text-gray-500">Toll-free hotline for scam inquiries</div>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-base text-red-600">
                  <PhoneCall className="w-4 h-4" />
                  1799
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href="https://www.scamshield.gov.sg"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg inline-flex items-center gap-1 transition-colors"
              >
                Visit Official ScamShield <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
