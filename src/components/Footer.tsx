import { useState } from 'react';
import { ExternalLink, X, Info, MessageSquare, ShieldCheck, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onOpenFeedback: () => void;
}

export function Footer({ currentLang, onOpenFeedback }: FooterProps) {
  const [modalType, setModalType] = useState<'about' | 'contact' | 'vulnerability' | 'privacy' | 'terms' | null>(null);
  const t = translations[currentLang];

  return (
    <>
      <footer className="bg-white border-t border-gray-200 text-xs text-gray-600 py-8">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="font-bold text-sm text-gray-900 tracking-tight">
              SupportGoWhere
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setModalType('about')}
                className="hover:text-[#175CD3] transition-colors cursor-pointer"
              >
                {t.aboutUs}
              </button>
              <button
                onClick={onOpenFeedback}
                className="hover:text-[#175CD3] transition-colors cursor-pointer"
              >
                {t.contactUs}
              </button>
            </div>
          </div>

          {/* Bottom Links and Copyright */}
          <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-gray-500">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalType('vulnerability')}
                className="hover:text-[#175CD3] inline-flex items-center gap-1 cursor-pointer"
              >
                {t.reportVulnerability}
                <ExternalLink className="w-3 h-3 inline" />
              </button>
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-[#175CD3] cursor-pointer"
              >
                {t.privacyStatement}
              </button>
              <button
                onClick={() => setModalType('terms')}
                className="hover:text-[#175CD3] cursor-pointer"
              >
                {t.termsOfUse}
              </button>
            </div>
            <div>
              {t.copyright}
            </div>
          </div>

        </div>
      </footer>

      {/* Info Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'about' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">About SupportGoWhere</h3>
                    <p className="text-xs text-gray-500">A Singapore Government Whole-of-Government Initiative</p>
                  </div>
                </div>
                <div className="space-y-3 text-xs text-gray-600 leading-relaxed mb-6">
                  <p>
                    SupportGoWhere is built by GovTech Singapore in close partnership with the Ministry of Social and Family Development (MSF), Ministry of Finance (MOF), and partner agencies under LifeSG.
                  </p>
                  <p>
                    Our mission is to help Singaporeans and Permanent Residents discover, understand, and apply for government schemes, subsidies, and community aid in one accessible portal.
                  </p>
                </div>
              </div>
            )}

            {modalType === 'vulnerability' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Vulnerability Disclosure Programme</h3>
                    <p className="text-xs text-gray-500">Government Technology Agency of Singapore</p>
                  </div>
                </div>
                <div className="space-y-3 text-xs text-gray-600 leading-relaxed mb-6">
                  <p>
                    GovTech manages Singapore’s Vulnerability Disclosure Programme (VDP) to encourage responsible security research across government systems.
                  </p>
                  <p>
                    If you identify a vulnerability in SupportGoWhere or related services, please submit a report directly via the Government Technology Agency HackerOne platform.
                  </p>
                </div>
              </div>
            )}

            {modalType === 'privacy' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Privacy Statement</h3>
                    <p className="text-xs text-gray-500">Singapore Public Sector Data Governance</p>
                  </div>
                </div>
                <div className="space-y-3 text-xs text-gray-600 leading-relaxed mb-6">
                  <p>
                    This is a Government of Singapore service. If you are only browsing this website, we do not capture data that allows us to identify you individually.
                  </p>
                  <p>
                    When you authenticate via Singpass, we only access verified citizen attributes to determine eligibility for support schemes under strict Public Sector (Governance) Act compliance.
                  </p>
                </div>
              </div>
            )}

            {modalType === 'terms' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Terms of Use</h3>
                    <p className="text-xs text-gray-500">SupportGoWhere Terms and Conditions</p>
                  </div>
                </div>
                <div className="space-y-3 text-xs text-gray-600 leading-relaxed mb-6">
                  <p>
                    By accessing and using this website, you agree to comply with and be bound by the Terms of Use.
                  </p>
                  <p>
                    The schemes and calculator estimations provided on SupportGoWhere are for informational purposes. Final eligibility and disbursement amounts are determined by the respective governing agency.
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
