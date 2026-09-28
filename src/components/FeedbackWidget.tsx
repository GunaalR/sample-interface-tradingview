import { useState } from 'react';
import { X, Send, CheckCircle2, Star } from 'lucide-react';

interface FeedbackWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function FeedbackWidget({ isOpen, onToggle, onClose }: FeedbackWidgetProps) {
  const [rating, setRating] = useState<number>(5);
  const [category, setCategory] = useState('Scheme Information');
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        setComment('');
        onClose();
      }, 1500);
    }, 500);
  };

  return (
    <>
      {/* Floating yellow smiley button at bottom-left */}
      <div className="fixed bottom-4 left-4 z-50" data-purpose="feedback-widget">
        <button
          onClick={onToggle}
          aria-label="Provide Feedback"
          title="Provide Feedback"
          className="w-11 h-11 bg-[#FEE227] hover:bg-[#ebd01a] rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 border-2 border-white cursor-pointer"
        >
          <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="9" cy="9" r="1.5" />
            <circle cx="15" cy="9" r="1.5" />
            <path
              d="M8 13.5C8 13.5 9.5 16 12 16C14.5 16 16 13.5 16 13.5"
              fill="none"
              stroke="#111827"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      {/* Feedback Modal Popup */}
      {isOpen && (
        <div className="fixed bottom-18 left-4 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FEE227] border border-gray-400"></span>
              <span className="text-xs font-bold text-gray-900">Your Feedback Matters</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {submitted ? (
            <div className="py-8 text-center animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <div className="text-sm font-bold text-gray-900">Thank you!</div>
              <p className="text-xs text-gray-500 mt-1">
                Your feedback has been submitted to the SupportGoWhere team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-gray-600 block mb-1">
                  How was your experience today?
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-gray-600 block mb-1">
                  Topic
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-xs border border-gray-200 rounded-lg p-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-500 outline-none"
                >
                  <option>Scheme Information</option>
                  <option>Eligibility Calculator</option>
                  <option>Website Usability</option>
                  <option>Bug / Error Report</option>
                  <option>Other Feedback</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-gray-600 block mb-1">
                  Tell us more
                </label>
                <textarea
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What can we do to improve SupportGoWhere?"
                  rows={3}
                  className="w-full text-xs border border-gray-200 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-gray-600 block mb-1">
                  Email (optional for follow up)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full text-xs border border-gray-200 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Send className="w-3 h-3" />
                  Submit Feedback
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
}
