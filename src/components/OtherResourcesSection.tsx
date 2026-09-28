import { useState } from 'react';
import { ExternalLink, X, MapPin, Building2, UtensilsCrossed } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface OtherResourcesSectionProps {
  currentLang: Language;
}

export function OtherResourcesSection({ currentLang }: OtherResourcesSectionProps) {
  const [activeModal, setActiveModal] = useState<'food' | 'gobusiness' | null>(null);
  const t = translations[currentLang];

  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-bold text-center text-[#101828] mb-8">
        {t.otherResourcesTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Resource 1: FoodConnect */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4 shadow-xs hover:border-gray-300 transition-colors">
          {/* FoodConnect Logo Representation */}
          <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-gray-50 rounded-xl p-2">
            <div className="relative w-8 h-8">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 absolute top-0 left-0" />
              <div className="w-5 h-5 rounded-full bg-teal-500 absolute bottom-0 right-0 opacity-90" />
            </div>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-900 block mb-1">
              {t.foodConnectTitle}
            </span>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              {t.foodConnectDesc}
            </p>
            <button
              onClick={() => setActiveModal('food')}
              className="text-xs font-semibold text-[#175CD3] hover:text-blue-800 inline-flex items-center gap-1 cursor-pointer"
            >
              {t.foodConnectAction}
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </button>
          </div>
        </div>

        {/* Resource 2: GoBusiness */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4 shadow-xs hover:border-gray-300 transition-colors">
          {/* GoBusiness Logo Representation */}
          <div className="w-14 h-14 shrink-0 flex flex-col items-center justify-center bg-gray-50 rounded-xl p-1 text-teal-700">
            <span className="font-extrabold text-base leading-none tracking-tight">gb</span>
            <span className="text-[8px] font-bold tracking-tighter uppercase text-gray-500 mt-0.5">gobusiness</span>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-900 block mb-1">
              {t.goBusinessTitle}
            </span>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              {t.goBusinessDesc}
            </p>
            <button
              onClick={() => setActiveModal('gobusiness')}
              className="text-xs font-semibold text-[#175CD3] hover:text-blue-800 inline-flex items-center gap-1 cursor-pointer"
            >
              {t.goBusinessAction}
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </button>
          </div>
        </div>

      </div>

      {/* FoodConnect Info Modal */}
      {activeModal === 'food' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">FoodConnect Directory</h3>
                <p className="text-xs text-gray-500">Government & Community Food Aid Directory</p>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              FoodConnect connects individuals and families with registered charities, soup kitchens, and food distribution drives across Singapore heartlands.
            </p>

            <div className="space-y-2 mb-6 text-xs">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="font-semibold text-gray-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  Free Community Meals & Ration Drops
                </div>
                <div className="text-gray-500 mt-1">
                  Over 120 distribution touchpoints across Ang Mo Kio, Bedok, Jurong, Woodlands, and Tampines.
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="font-semibold text-gray-900">Immediate Food Urgency</div>
                <div className="text-gray-500 mt-1">
                  Contact ComCare hotline at 1800-222-0000 or visit your local Family Service Centre (FSC) for emergency grocery vouchers.
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer"
              >
                Close
              </button>
              <a
                href="https://foodconnect.gov.sg"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg inline-flex items-center gap-1"
              >
                Go to FoodConnect Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* GoBusiness Info Modal */}
      {activeModal === 'gobusiness' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">GoBusiness Singapore</h3>
                <p className="text-xs text-gray-500">Ministry of Trade and Industry & GovTech</p>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              GoBusiness is the official portal for Singapore business owners and sole proprietors to apply for licenses, grants (EDG, PSG), and explore enterprise schemes.
            </p>

            <div className="space-y-2 mb-6 text-xs">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="font-semibold text-gray-900">Enterprise Grants & Subsidies</div>
                <div className="text-gray-500 mt-1">
                  Productivity Solutions Grant (PSG), Energy Efficiency Grant (EEG), and SkillsFuture Enterprise Credits.
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="font-semibold text-gray-900">Business Licenses & Compliance</div>
                <div className="text-gray-500 mt-1">
                  Streamlined one-stop license applications with ACRA, SFA, BCA, and MOM.
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer"
              >
                Close
              </button>
              <a
                href="https://www.gobusiness.gov.sg"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg inline-flex items-center gap-1"
              >
                Open GoBusiness <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
