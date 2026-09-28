import { useState } from 'react';
import { X, CheckCircle2, Bookmark, BookmarkCheck, ArrowRight, ExternalLink, ShieldCheck, FileText, Banknote } from 'lucide-react';
import { Scheme, UserProfile } from '../types';

interface SchemeDetailModalProps {
  scheme: Scheme | null;
  onClose: () => void;
  user: UserProfile;
  onToggleBookmark: (schemeId: string) => void;
  onOpenLogin: () => void;
}

export function SchemeDetailModal({
  scheme,
  onClose,
  user,
  onToggleBookmark,
  onOpenLogin
}: SchemeDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'benefits' | 'docs'>('overview');
  const [applied, setApplied] = useState(false);

  if (!scheme) return null;

  const isBookmarked = user.savedSchemeIds.includes(scheme.id);

  const handleApply = () => {
    if (!user.isLoggedIn) {
      onOpenLogin();
      return;
    }
    setApplied(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative my-8 text-left">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              {scheme.agencyAbbr}
            </span>
            <span className="text-xs text-gray-500">{scheme.agency}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(scheme.id)}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'bg-blue-50 border-blue-200 text-blue-600' 
                  : 'hover:bg-gray-100 border-gray-200 text-gray-500'
              }`}
              title={isBookmarked ? 'Remove from saved' : 'Save scheme'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {scheme.title}
          </h2>
          <p className="text-xs text-gray-500 mt-1 font-medium">
            {scheme.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {scheme.tags.map((tag, idx) => (
            <span key={idx} className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
          {scheme.budget2026Measure && (
            <span className="text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full font-bold">
              Budget 2026 Measure
            </span>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-5 gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 cursor-pointer transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('eligibility')}
            className={`pb-2.5 cursor-pointer transition-colors border-b-2 ${
              activeTab === 'eligibility'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Eligibility Criteria
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`pb-2.5 cursor-pointer transition-colors border-b-2 ${
              activeTab === 'benefits'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Support & Payouts
          </button>
          <button
            onClick={() => setActiveTab('docs')}
            className={`pb-2.5 cursor-pointer transition-colors border-b-2 ${
              activeTab === 'docs'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Required Documents
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-48 text-xs text-gray-700 leading-relaxed mb-6">
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-in fade-in duration-100">
              <p className="text-gray-600 text-sm">
                {scheme.description}
              </p>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="font-semibold text-gray-900 mb-1 flex items-center gap-1.5">
                  <Banknote className="w-4 h-4 text-emerald-600" />
                  Disbursement Details
                </div>
                <p className="text-gray-600 text-xs">
                  {scheme.disbursement}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'eligibility' && (
            <div className="space-y-3 animate-in fade-in duration-100">
              <p className="text-gray-600 mb-2 font-medium">
                To qualify for this support scheme, applicants must meet the following criteria:
              </p>
              <ul className="space-y-2">
                {scheme.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="space-y-3 animate-in fade-in duration-100">
              <p className="text-gray-600 mb-2 font-medium">
                Assistance and allowances provided under this scheme:
              </p>
              <div className="space-y-2">
                {scheme.benefits.map((b, idx) => (
                  <div key={idx} className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="font-medium text-gray-800">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'docs' && (
            <div className="space-y-3 animate-in fade-in duration-100">
              <p className="text-gray-600 mb-2 font-medium">
                Have these supporting documents ready before submitting your application:
              </p>
              <div className="space-y-2">
                {scheme.requiredDocs.map((doc, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-gray-500 shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Official Government Scheme Verification
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>

            {applied ? (
              <div className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-emerald-800 bg-emerald-100 rounded-xl flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Application Submitted!
              </div>
            ) : (
              <button
                onClick={handleApply}
                className="w-full sm:w-auto px-5 py-2 text-xs font-bold text-white bg-[#1570EF] hover:bg-blue-700 rounded-xl inline-flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
              >
                {user.isLoggedIn ? 'Apply with Singpass' : 'Log in to Apply'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
