import React from 'react';
import { X, Sparkles, Shield, Database, ExternalLink } from 'lucide-react';

interface ChatbotInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatbotInfoModal({ isOpen, onClose }: ChatbotInfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Beta Feature
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              About the SupportGoWhere Assistant
            </h3>
          </div>
        </div>

        <div className="space-y-3.5 text-xs text-gray-600 leading-relaxed mb-6">
          <p>
            The SupportGoWhere chatbot is an experimental initiative developed by LifeSG and GovTech Singapore. It uses intelligent retrieval algorithms to help citizens quickly discover relevant government support schemes without wading through dozens of policy documents.
          </p>

          <div className="p-3.5 bg-blue-50 rounded-2xl border border-blue-100 space-y-2">
            <div className="font-semibold text-gray-900 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-blue-600" />
              Verified Government Sources
            </div>
            <p className="text-[11px] text-gray-600">
              Information is referenced directly from MSF, CPF Board, MOH, MOF, HDB, and other official Singapore ministries.
            </p>
          </div>

          <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
            <div className="font-semibold text-gray-900 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              Privacy & Data Protection
            </div>
            <p className="text-[11px] text-gray-600">
              Do not enter sensitive personal information such as full NRIC numbers or passwords into this chat box. We do not store queries with personal identities.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer"
          >
            Got it
          </button>
        </div>

      </div>
    </div>
  );
}
