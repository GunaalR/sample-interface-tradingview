import { Language } from '../types';
import { translations } from '../data/translations';

interface AgencyAffiliationsProps {
  currentLang: Language;
}

export function AgencyAffiliations({ currentLang }: AgencyAffiliationsProps) {
  const t = translations[currentLang];

  return (
    <section className="border-t border-gray-100 bg-[#FCFCFD] py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Initiative by LifeSG & GovTech */}
          <div>
            <div className="text-[11px] font-medium text-gray-500 mb-3">
              {t.initiativeBy}
            </div>
            <div className="flex items-center gap-6">
              {/* LifeSG Logo */}
              <a
                href="https://www.life.gov.sg"
                target="_blank"
                rel="noreferrer"
                className="flex items-center group cursor-pointer"
              >
                <span className="text-xl font-extrabold tracking-tight text-gray-900 group-hover:text-black">
                  Life
                </span>
                <span className="text-xl font-extrabold tracking-tight text-[#E63946]">
                  SG
                </span>
              </a>

              {/* GovTech Singapore representation */}
              <a
                href="https://www.tech.gov.sg"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg border-2 border-indigo-500 border-dashed flex items-center justify-center group-hover:border-indigo-600 transition-colors">
                  <div className="w-3 h-3 bg-indigo-500 rotate-45 group-hover:bg-indigo-600 transition-colors" />
                </div>
                <div className="leading-none text-left">
                  <div className="text-[11px] font-extrabold text-gray-800 tracking-wider">
                    GOVTECH
                  </div>
                  <div className="text-[8px] font-semibold text-gray-500 tracking-widest">
                    SINGAPORE
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Collaboration with Ministries */}
          <div>
            <div className="text-[11px] font-medium text-gray-500 mb-3">
              {t.collaborationWith}
            </div>
            <div className="flex flex-wrap items-center gap-6">
              
              {/* MOF */}
              <div className="text-xs font-black text-gray-800 tracking-tighter">
                MOF
                <div className="text-[7px] font-normal text-gray-500 uppercase tracking-tight">
                  Ministry of Finance
                </div>
              </div>

              {/* MSF */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[9px] font-bold">
                  ♥
                </div>
                <div className="text-xs font-bold text-gray-800 leading-tight">
                  MSF
                  <div className="text-[6px] text-gray-500 font-normal">
                    Social & Family Dev
                  </div>
                </div>
              </div>

              {/* NCSS */}
              <div className="text-xs font-black text-rose-600 leading-tight">
                NCSS
                <div className="text-[6px] font-medium text-gray-500 uppercase">
                  National Council
                </div>
              </div>

              {/* Muis representation */}
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-emerald-700 text-white flex items-center justify-center text-[10px] font-serif rounded-xs">
                  M
                </div>
                <div className="text-[9px] font-bold text-emerald-800 leading-tight">
                  Muis
                  <div className="text-[6px] text-gray-400 font-normal">
                    Islamic Council
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
