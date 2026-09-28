import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, User, LogOut, CheckCircle2 } from 'lucide-react';
import { Language, UserProfile } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  user: UserProfile;
  onOpenLogin: () => void;
  onLogout: () => void;
  onSelectTopic: (topicId: string) => void;
  onOpenBudgetCalc: () => void;
  onOpenSearch: () => void;
}

export function Header({
  currentLang,
  user,
  onOpenLogin,
  onLogout,
  onSelectTopic,
  onOpenBudgetCalc,
  onOpenSearch
}: HeaderProps) {
  const [supportMenuOpen, setSupportMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const supportRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLang];

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (supportRef.current && !supportRef.current.contains(event.target as Node)) {
        setSupportMenuOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesMenuOpen(false);
      }
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Container */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-tr from-amber-400 via-rose-500 to-red-500 shadow-xs shadow-red-200">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className="leading-none text-left">
              <span className="block text-xl font-bold tracking-tight text-gray-900 font-sans">
                Support
              </span>
              <span className="block text-[10px] font-bold text-gray-500 tracking-wider uppercase">
                GoWhere
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {/* Support Dropdown */}
            <div className="relative" ref={supportRef}>
              <button 
                onClick={() => {
                  setSupportMenuOpen(!supportMenuOpen);
                  setResourcesMenuOpen(false);
                }}
                className="inline-flex items-center gap-1.5 hover:text-[#175CD3] transition-colors cursor-pointer py-2"
                aria-expanded={supportMenuOpen}
              >
                {t.supportNav}
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {supportMenuOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 animate-in fade-in duration-100">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    Browse Categories
                  </div>
                  <button
                    onClick={() => {
                      onSelectTopic('financial');
                      setSupportMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>Financial Support & Benefits</span>
                    <span className="text-[10px] text-gray-400">14 schemes</span>
                  </button>
                  <button
                    onClick={() => {
                      onSelectTopic('caregiving');
                      setSupportMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>Caregiving Support</span>
                    <span className="text-[10px] text-gray-400">8 schemes</span>
                  </button>
                  <button
                    onClick={() => {
                      onSelectTopic('education');
                      setSupportMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>Education & Student Care</span>
                    <span className="text-[10px] text-gray-400">11 schemes</span>
                  </button>
                  <button
                    onClick={() => {
                      onSelectTopic('healthcare');
                      setSupportMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>Healthcare & Well-being</span>
                    <span className="text-[10px] text-gray-400">12 schemes</span>
                  </button>
                  <button
                    onClick={() => {
                      onSelectTopic('retirement');
                      setSupportMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>Retirement & CPF Planning</span>
                    <span className="text-[10px] text-gray-400">9 schemes</span>
                  </button>
                </div>
              )}
            </div>

            {/* Resources & Tools Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button 
                onClick={() => {
                  setResourcesMenuOpen(!resourcesMenuOpen);
                  setSupportMenuOpen(false);
                }}
                className="inline-flex items-center gap-1.5 hover:text-[#175CD3] transition-colors cursor-pointer py-2"
                aria-expanded={resourcesMenuOpen}
              >
                {t.resourcesNav}
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {resourcesMenuOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 animate-in fade-in duration-100">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    Interactive Tools
                  </div>
                  <button
                    onClick={() => {
                      onOpenBudgetCalc();
                      setResourcesMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors cursor-pointer flex flex-col"
                  >
                    <span className="font-semibold text-gray-900">Budget 2026 Calculator</span>
                    <span className="text-[11px] text-gray-500">Calculate CDC vouchers & AP payouts</span>
                  </button>
                  <button
                    onClick={() => {
                      onOpenSearch();
                      setResourcesMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors cursor-pointer flex flex-col"
                  >
                    <span className="font-semibold text-gray-900">Eligibility Navigator</span>
                    <span className="text-[11px] text-gray-500">Quick question guided scheme match</span>
                  </button>
                  <a
                    href="https://www.socialservice.sg"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex flex-col"
                  >
                    <span className="font-semibold text-gray-900">Directory of SSOs</span>
                    <span className="text-[11px] text-gray-500">Find your nearest Social Service Office</span>
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenSearch}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
            aria-label="Search schemes"
            title="Search schemes"
          >
            <Search className="w-4 h-4 text-[#175CD3]" />
          </button>

          {user.isLoggedIn ? (
            <div className="relative" ref={userRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 pl-2 pr-3 py-1.5 text-xs font-semibold text-gray-800 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors cursor-pointer bg-red-50/40"
              >
                <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">
                  SG
                </div>
                <span className="hidden sm:inline">{user.name}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 animate-in fade-in duration-100">
                  <div className="px-3 py-2 border-b border-gray-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Singpass Verified
                    </div>
                    <div className="text-[11px] text-gray-500">{user.nric}</div>
                  </div>

                  <div className="py-1">
                    <div className="px-3 py-1 text-[11px] text-gray-500">
                      Estimated 2026 Aid: <strong className="text-gray-900">${user.estimatedBenefits}</strong>
                    </div>
                  </div>

                  <div className="pt-1 border-t border-gray-100">
                    <button
                      onClick={() => {
                        onLogout();
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      {t.logout}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={onOpenLogin}
              className="px-4 py-1.5 text-sm font-semibold text-[#175CD3] border border-[#175CD3] rounded-md hover:bg-blue-50 transition-colors cursor-pointer"
            >
              {t.login}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
