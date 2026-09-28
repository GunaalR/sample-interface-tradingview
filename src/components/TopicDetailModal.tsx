import { useState } from 'react';
import { X, Search, ChevronRight } from 'lucide-react';
import { Topic, Scheme } from '../types';
import { SCHEMES } from '../data/schemes';
import { TopicIcon } from './TopicIcons';

interface TopicDetailModalProps {
  topic: Topic | null;
  onClose: () => void;
  onSelectScheme: (scheme: Scheme) => void;
}

export function TopicDetailModal({
  topic,
  onClose,
  onSelectScheme
}: TopicDetailModalProps) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!topic) return null;

  // Filter schemes by topic or matching search
  const topicSchemes = SCHEMES.filter(
    (s) => s.topicId === topic.id || s.tags.some(t => t.toLowerCase().includes(topic.title.toLowerCase()))
  );

  const displayedSchemes = topicSchemes.filter((s) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      s.title.toLowerCase().includes(term) ||
      s.summary.toLowerCase().includes(term) ||
      s.tags.some(tag => tag.toLowerCase().includes(term))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative my-8 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Topic Header */}
        <div className="flex items-center gap-4 mb-5">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center p-2 shrink-0 border border-gray-100"
            style={{ backgroundColor: topic.colorBg }}
          >
            <TopicIcon type={topic.iconType} />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Support Topic
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              {topic.title}
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {topic.description}
            </p>
          </div>
        </div>

        {/* Search within Topic */}
        <div className="relative mb-5">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Search schemes in ${topic.title.toLowerCase()}...`}
            className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Schemes List */}
        <div className="space-y-3 max-h-96 overflow-y-auto pr-1 mb-6">
          {displayedSchemes.length > 0 ? (
            displayedSchemes.map((scheme) => (
              <div
                key={scheme.id}
                onClick={() => {
                  onSelectScheme(scheme);
                  onClose();
                }}
                className="p-4 bg-gray-50/70 hover:bg-blue-50/70 rounded-2xl border border-gray-200 hover:border-blue-200 transition-all cursor-pointer flex items-center justify-between gap-4 group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {scheme.title}
                    </span>
                    {scheme.budget2026Measure && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        Budget 2026
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {scheme.summary}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {scheme.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white group-hover:bg-blue-600 text-gray-400 group-hover:text-white flex items-center justify-center shrink-0 border border-gray-200 group-hover:border-blue-600 transition-all shadow-2xs">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-gray-500">
              No specific schemes found matching "{searchTerm}". Try a different search keyword.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-3 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
