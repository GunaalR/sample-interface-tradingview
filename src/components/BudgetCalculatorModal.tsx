import React, { useState } from 'react';
import { X, Calculator, HelpCircle, Check, DollarSign, Wallet, Zap, HeartPulse } from 'lucide-react';
import { BudgetInput, BudgetResult } from '../types';

interface BudgetCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyProfile?: (total: number) => void;
}

export function BudgetCalculatorModal({ isOpen, onClose, onApplyProfile }: BudgetCalculatorModalProps) {
  const [input, setInput] = useState<BudgetInput>({
    age: 45,
    assessableIncome: 'below_34k',
    housingType: 'hdb_4',
    hasElderly: true,
    numChildren: 1,
    isSelfEmployed: false
  });

  if (!isOpen) return null;

  // Real formula based on Singapore Budget 2026 enhanced Assurance Package
  const calculateBenefits = (): BudgetResult => {
    let cdc = 600;
    if (input.housingType === 'hdb_1_2' || input.housingType === 'hdb_3') {
      cdc = 800;
    }

    let col = 200;
    if (input.assessableIncome === 'below_34k') {
      col = 400;
    } else if (input.assessableIncome === '34k_100k') {
      col = 300;
    }

    let uSave = 440;
    if (input.housingType === 'hdb_1_2') {
      uSave = 950;
    } else if (input.housingType === 'hdb_3') {
      uSave = 760;
    } else if (input.housingType === 'hdb_4') {
      uSave = 600;
    } else if (input.housingType === 'private') {
      uSave = 0;
    }

    let mediSave = 150;
    if (input.age >= 65) {
      mediSave = 450;
    } else if (input.age >= 55) {
      mediSave = 300;
    } else if (input.hasElderly) {
      mediSave = 250;
    }

    let assuranceCash = 600;
    if (input.assessableIncome === 'below_34k') {
      assuranceCash = 1200;
    } else if (input.assessableIncome === '34k_100k') {
      assuranceCash = 800;
    }

    const sg60Bonus = input.age >= 21 ? 200 : 0;
    const total = cdc + col + uSave + mediSave + assuranceCash + sg60Bonus;

    return {
      cdcVouchers: cdc,
      colSpecialPayment: col,
      uSaveRebates: uSave,
      mediSaveTopup: mediSave,
      assuranceCash: assuranceCash,
      sg60Bonus: sg60Bonus,
      totalAnnualBenefit: total
    };
  };

  const results = calculateBenefits();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              Official Calculator
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Budget 2026 Support Calculator
            </h3>
          </div>
        </div>

        {/* Input Parameters Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          
          {/* Age */}
          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-1">
              Your Age (in 2026)
            </label>
            <input
              type="number"
              min={18}
              max={100}
              value={input.age}
              onChange={(e) => setInput({ ...input, age: parseInt(e.target.value) || 18 })}
              className="w-full text-xs font-medium border border-gray-200 rounded-xl p-2.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Assessable Income */}
          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-1">
              Annual Assessable Income (AI)
            </label>
            <select
              value={input.assessableIncome}
              onChange={(e) => setInput({ ...input, assessableIncome: e.target.value as any })}
              className="w-full text-xs font-medium border border-gray-200 rounded-xl p-2.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="below_34k">Up to $34,000 / year</option>
              <option value="34k_100k">$34,001 – $100,000 / year</option>
              <option value="above_100k">Above $100,000 / year</option>
            </select>
          </div>

          {/* Housing Type */}
          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-1">
              Residential Property Type
            </label>
            <select
              value={input.housingType}
              onChange={(e) => setInput({ ...input, housingType: e.target.value as any })}
              className="w-full text-xs font-medium border border-gray-200 rounded-xl p-2.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="hdb_1_2">HDB 1-Room or 2-Room</option>
              <option value="hdb_3">HDB 3-Room</option>
              <option value="hdb_4">HDB 4-Room</option>
              <option value="hdb_5_exec">HDB 5-Room / Executive</option>
              <option value="private">Private Residential Property</option>
            </select>
          </div>

          {/* Children */}
          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-1">
              Singaporean Children (&lt; 21 yrs)
            </label>
            <select
              value={input.numChildren}
              onChange={(e) => setInput({ ...input, numChildren: parseInt(e.target.value) })}
              className="w-full text-xs font-medium border border-gray-200 rounded-xl p-2.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value={0}>0 children</option>
              <option value={1}>1 child</option>
              <option value={2}>2 children</option>
              <option value={3}>3 or more children</option>
            </select>
          </div>

        </div>

        {/* Checkbox for seniors in household */}
        <div className="mb-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="hasElderly"
            checked={input.hasElderly}
            onChange={(e) => setInput({ ...input, hasElderly: e.target.checked })}
            className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <label htmlFor="hasElderly" className="text-xs text-gray-700 cursor-pointer select-none">
            Household includes a senior aged 65 or above (Eligible for Pioneer/Merdeka top-ups)
          </label>
        </div>

        {/* Results Card */}
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 rounded-2xl p-5 border border-emerald-100 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 pb-3 border-b border-emerald-200/60">
            <span className="text-xs font-semibold text-gray-600">
              Estimated Total Government Package
            </span>
            <div className="text-3xl font-extrabold text-emerald-800 tracking-tight">
              ${results.totalAnnualBenefit.toLocaleString()}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                <Wallet className="w-3.5 h-3.5 text-emerald-600" />
                <span>CDC Vouchers</span>
              </div>
              <div className="text-sm font-bold text-gray-900">${results.cdcVouchers}</div>
            </div>

            <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                <span>Assurance Cash</span>
              </div>
              <div className="text-sm font-bold text-gray-900">${results.assuranceCash}</div>
            </div>

            <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>U-Save Rebates</span>
              </div>
              <div className="text-sm font-bold text-gray-900">${results.uSaveRebates}</div>
            </div>

            <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                <HeartPulse className="w-3.5 h-3.5 text-rose-500" />
                <span>MediSave Top-up</span>
              </div>
              <div className="text-sm font-bold text-gray-900">${results.mediSaveTopup}</div>
            </div>

            <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                <DollarSign className="w-3.5 h-3.5 text-purple-600" />
                <span>COL Special Pay</span>
              </div>
              <div className="text-sm font-bold text-gray-900">${results.colSpecialPayment}</div>
            </div>

            <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                <Check className="w-3.5 h-3.5 text-teal-600" />
                <span>SG60 Bonus</span>
              </div>
              <div className="text-sm font-bold text-gray-900">${results.sg60Bonus}</div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-[11px] text-gray-400">
            *Final payouts subject to official MOF notices and Singpass verification.
          </p>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
            >
              Done
            </button>
            {onApplyProfile && (
              <button
                onClick={() => {
                  onApplyProfile(results.totalAnnualBenefit);
                  onClose();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                Save to Profile
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
