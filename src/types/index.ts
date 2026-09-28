export type Language = 'en' | 'zh' | 'ms' | 'ta';

export interface Scheme {
  id: string;
  title: string;
  subtitle: string;
  agency: string;
  agencyAbbr: string;
  topicId: string;
  summary: string;
  description: string;
  tags: string[];
  eligibility: string[];
  benefits: string[];
  requiredDocs: string[];
  disbursement: string;
  budget2026Measure?: boolean;
  featured?: boolean;
}

export interface Topic {
  id: string;
  title: string;
  colorBg: string;
  schemeCount: number;
  description: string;
  iconType: string;
}

export interface BudgetInput {
  age: number;
  assessableIncome: 'below_34k' | '34k_100k' | 'above_100k';
  housingType: 'hdb_1_2' | 'hdb_3' | 'hdb_4' | 'hdb_5_exec' | 'private';
  hasElderly: boolean;
  numChildren: number;
  isSelfEmployed: boolean;
}

export interface BudgetResult {
  cdcVouchers: number;
  colSpecialPayment: number;
  uSaveRebates: number;
  mediSaveTopup: number;
  assuranceCash: number;
  sg60Bonus?: number;
  totalAnnualBenefit: number;
}

export interface UserProfile {
  name: string;
  nric: string;
  email: string;
  isLoggedIn: boolean;
  savedSchemeIds: string[];
  housingType: string;
  estimatedBenefits: number;
}
