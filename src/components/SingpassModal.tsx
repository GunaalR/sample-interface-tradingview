import { useState } from 'react';
import { X, QrCode, ShieldCheck, CheckCircle2, User, KeyRound, ArrowRight } from 'lucide-react';
import { UserProfile } from '../types';

interface SingpassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (profile: UserProfile) => void;
}

export function SingpassModal({ isOpen, onClose, onLoginSuccess }: SingpassModalProps) {
  const [tab, setTab] = useState<'qr' | 'password'>('qr');
  const [nricInput, setNricInput] = useState('S1234567A');
  const [passwordInput, setPasswordInput] = useState('••••••••••');
  const [isVerifying, setIsVerifying] = useState(false);

  if (!isOpen) return null;

  const handleDemoLogin = (customName?: string, customNric?: string) => {
    setIsVerifying(true);
    setTimeout(() => {
      onLoginSuccess({
        name: customName || 'Tan Ah Meng',
        nric: customNric || 'S••••567A',
        email: 'ahmeng.tan@example.com',
        isLoggedIn: true,
        savedSchemeIds: ['comcare-short-medium-term', 'budget-2026-cdc-vouchers'],
        housingType: 'HDB 4-Room',
        estimatedBenefits: 2450
      });
      setIsVerifying(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Singpass Official Banner */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-lg tracking-wider shadow-sm">
            sg
          </div>
          <div>
            <div className="text-sm font-black text-gray-900 tracking-tight">
              singpass
            </div>
            <div className="text-[11px] text-gray-500">
              Singapore Government National Digital Identity
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-6 text-xs font-semibold">
          <button
            onClick={() => setTab('qr')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              tab === 'qr'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            Singpass App QR
          </button>
          <button
            onClick={() => setTab('password')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              tab === 'password'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            Singpass ID & Password
          </button>
        </div>

        {/* Tab 1: QR Code */}
        {tab === 'qr' && (
          <div className="text-center space-y-4">
            <div className="mx-auto w-48 h-48 bg-white border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-4 relative group cursor-pointer hover:border-red-500 transition-colors shadow-2xs">
              {/* QR Pattern Representation */}
              <div className="grid grid-cols-4 gap-1.5 w-32 h-32 p-2 bg-gray-50 rounded-xl">
                <div className="bg-gray-900 rounded-xs"></div>
                <div className="bg-gray-900 rounded-xs"></div>
                <div className="bg-red-600 rounded-xs"></div>
                <div className="bg-gray-900 rounded-xs"></div>
                <div className="bg-gray-900 rounded-xs"></div>
                <div className="bg-white rounded-xs border border-gray-300"></div>
                <div className="bg-gray-900 rounded-xs"></div>
                <div className="bg-gray-900 rounded-xs"></div>
                <div className="bg-red-600 rounded-xs"></div>
                <div className="bg-gray-900 rounded-xs"></div>
                <div className="bg-white rounded-xs border border-gray-300"></div>
                <div className="bg-gray-900 rounded-xs"></div>
                <div className="bg-gray-900 rounded-xs"></div>
                <div className="bg-gray-900 rounded-xs"></div>
                <div className="bg-gray-900 rounded-xs"></div>
                <div className="bg-red-600 rounded-xs"></div>
              </div>
              <div className="absolute inset-0 bg-red-600/5 backdrop-blur-2xs rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  Click to Auto-Scan
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-600">
              Scan with your <strong>Singpass app</strong> to log in securely without entering password.
            </p>

            <button
              onClick={() => handleDemoLogin()}
              disabled={isVerifying}
              className="w-full py-2.5 bg-red-600 hover:bg-red-700 active:scale-98 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer disabled:opacity-50"
            >
              {isVerifying ? 'Verifying Digital Pass...' : '1-Click Scan & Log In (Demo Persona)'}
            </button>
          </div>
        )}

        {/* Tab 2: Password Login */}
        {tab === 'password' && (
          <div className="space-y-4 text-xs">
            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                Singpass ID / NRIC / FIN
              </label>
              <input
                type="text"
                value={nricInput}
                onChange={(e) => setNricInput(e.target.value)}
                className="w-full border border-gray-200 rounded-xl p-2.5 focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full border border-gray-200 rounded-xl p-2.5 focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            <button
              onClick={() => handleDemoLogin('Tan Ah Meng', nricInput)}
              disabled={isVerifying}
              className="w-full py-2.5 bg-red-600 hover:bg-red-700 active:scale-98 text-white font-bold rounded-xl transition-all shadow-sm cursor-pointer disabled:opacity-50"
            >
              {isVerifying ? 'Authenticating...' : 'Log in with Singpass'}
            </button>
          </div>
        )}

        {/* Security Notice */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] text-gray-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Always verify URL ends in <strong>.gov.sg</strong> before logging in.</span>
        </div>

      </div>
    </div>
  );
}
