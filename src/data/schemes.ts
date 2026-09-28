import { Scheme } from '../types';

export const SCHEMES: Scheme[] = [
  {
    id: 'comcare-short-medium-term',
    title: 'ComCare Assistance',
    subtitle: 'ComCare Short-to-Medium-Term Assistance (SMTA)',
    agency: 'Ministry of Social and Family Development',
    agencyAbbr: 'MSF',
    topicId: 'financial',
    featured: true,
    summary: 'Provides financial support for individuals and families facing varied challenges, ensuring timely aid for both short-term and long-term...',
    description: 'ComCare Short-to-Medium-Term Assistance provides temporary financial aid for lower-income individuals and families who are actively looking for work, unable to work temporarily, or earning a low income and require urgent interim support.',
    tags: ['Cash assistance', 'Lower-income', 'Short-to-medium term'],
    eligibility: [
      'Singapore Citizen or Permanent Resident (at least 1 citizen in family nucleus)',
      'Monthly household income of $1,900 and below, or per capita income (PCI) of $650 and below',
      'Unemployed and seeking employment, or earning insufficient household income'
    ],
    benefits: [
      'Monthly cash assistance for daily living expenses',
      'Assistance with utility bills, service and conservancy charges (S&CC)',
      'Medical assistance at polyclinics and public hospitals',
      'Referral to employment assistance, family service centres (FSC) and skills upgrading'
    ],
    requiredDocs: [
      'NRIC of all household members',
      'Latest 3 months bank statements / passbooks',
      'Latest payslips or letter of employment termination',
      'Recent utilities and town council bills'
    ],
    disbursement: 'Direct bank transfer credited monthly for a 3- to 6-month renewable window.',
    budget2026Measure: false
  },
  {
    id: 'scfa-student-care',
    title: 'Student Care Fee Assistance (SCFA)',
    subtitle: 'Student Care Subsidies for Primary School Children',
    agency: 'Ministry of Social and Family Development',
    agencyAbbr: 'MSF',
    topicId: 'education',
    featured: true,
    summary: 'Provides fee assistance for children from lower-income working families enrolled in Student Care Centres (SCCs) registered with MSF.',
    description: 'SCFA enables children from low-income working families to receive after-school care and supervision in registered Student Care Centres while parents are gainfully employed.',
    tags: ['Budget 2026', 'Students', 'Subsidies'],
    eligibility: [
      'Child is a Singapore Citizen aged 7 to 14 years old',
      'Enrolled in an MSF-registered Student Care Centre',
      'Both parents are working (min 56 hours per month) unless medically unfit',
      'Gross monthly household income does not exceed $4,500, or per capita income does not exceed $1,125'
    ],
    benefits: [
      'Subsidies of up to 98% of monthly student care fees (up to $290/month subsidy)',
      'One-off enrolment grant of up to $400 under Budget 2026 enhancement'
    ],
    requiredDocs: [
      'Child and parents NRIC / Birth Certificate',
      'Employment confirmation letters or CPF contribution statements',
      'Proof of enrolment at an MSF-registered centre'
    ],
    disbursement: 'Direct subsidy offset credited directly to the registered student care centre account.',
    budget2026Measure: true
  },
  {
    id: 'silver-support',
    title: 'Silver Support Scheme',
    subtitle: 'Quarterly Cash Supplements for Seniors',
    agency: 'Central Provident Fund Board',
    agencyAbbr: 'CPFB',
    topicId: 'retirement',
    summary: 'Provides quarterly cash payouts to targeted Singaporean seniors who earned lower incomes during their working lives.',
    description: 'Enhanced under Budget 2026, the Silver Support Scheme provides quarterly cash to bottom 20% of Singapore seniors aged 65 and above, with expanded coverage.',
    tags: ['Seniors', 'Cash Payout', 'Quarterly'],
    eligibility: [
      'Singapore Citizen aged 65 and above',
      'Total CPF contributions of $140,000 or less by age 55',
      'Live in a 1-room to 5-room HDB flat, and do not own a second property',
      'Monthly household income per capita of $1,800 or less'
    ],
    benefits: [
      'Quarterly cash payouts ranging from $360 to $1,080 ($1,440 to $4,320 per year)',
      'No application required; automatically assessed by CPF and paid into bank accounts'
    ],
    requiredDocs: ['Automatically assessed. Ensure bank details are updated on CPF portal.'],
    disbursement: 'Quarterly in March, June, September, and December directly via PayNow-NRIC or bank account.',
    budget2026Measure: true
  },
  {
    id: 'home-caregiving-grant',
    title: 'Home Caregiving Grant (HCG)',
    subtitle: 'Monthly Cash Aid for Informal Family Caregivers',
    agency: 'Agency for Integrated Care',
    agencyAbbr: 'AIC',
    topicId: 'caregiving',
    summary: 'Monthly cash payout to defray caregiving costs for persons with moderate to severe disabilities.',
    description: 'HCG reduces the financial burden of caregiving expenses such as medical supplies, eldercare transport, and hiring foreign domestic workers or home care nurses.',
    tags: ['Caregiving', 'Monthly Cash', 'Disability Support'],
    eligibility: [
      'Care recipient is a Singapore Citizen or Permanent Resident residing in Singapore',
      'Assessed by an MOH-accredited doctor to need permanent assistance with at least 3 Activities of Daily Living (ADLs)',
      'Monthly per capita household income is $2,800 or less, or Annual Value of property ≤ $21,000'
    ],
    benefits: [
      'Up to $400 monthly cash payout for eligible low-to-middle income households',
      'Can be used flexibly for nursing consumables, medication, or caregiver relief'
    ],
    requiredDocs: [
      'Doctor Functional Assessment Report (FAR)',
      'NRIC of care recipient and main caregiver',
      'Bank details for monthly GIRO disbursement'
    ],
    disbursement: 'Monthly payout credited to nominated caregiver bank account.',
    budget2026Measure: false
  },
  {
    id: 'skillsfuture-jobseeker-support',
    title: 'SkillsFuture Jobseeker Support Scheme',
    subtitle: 'Interim Financial Support for Involuntarily Unemployed Workers',
    agency: 'Workforce Singapore',
    agencyAbbr: 'WSG',
    topicId: 'work',
    summary: 'Temporary tiered monthly payouts of up to $6,000 over 6 months for workers facing job loss.',
    description: 'A key government safety net supporting retrenched and involuntarily displaced workers who commit to job search, career coaching, and training programmes.',
    tags: ['Job loss', 'Employment', 'Budget 2026'],
    eligibility: [
      'Singapore Citizen aged 21 and above',
      'Involuntarily unemployed due to retrenchment, business closure, or medical discharge',
      'Previously employed for at least 12 months in the past 24 months',
      'Actively engaging in job hunt activities, interviews, or WSG-approved courses'
    ],
    benefits: [
      'Tiered monthly allowance up to $1,500 in month 1, descending to $750 in month 6 (total up to $6,000)',
      'Free career coaching, resume clinics, and dedicated employment facilitation'
    ],
    requiredDocs: [
      'Letter of retrenchment / cessation of employment',
      'Past 12 months CPF contribution records',
      'Proof of job search submissions via MyCareersFuture'
    ],
    disbursement: 'Monthly tiered bank payouts subject to verified monthly career activity completion.',
    budget2026Measure: true
  },
  {
    id: 'lifesg-child-credits',
    title: 'Child LifeSG Credits & Baby Bonus',
    subtitle: 'Cash Gifts and Child Development Account (CDA) First Step',
    agency: 'Ministry of Social and Family Development',
    agencyAbbr: 'MSF',
    topicId: 'family',
    summary: 'Up to $11,000 in Baby Bonus cash gift plus dollar-for-dollar government savings co-matching.',
    description: 'Comprehensive financial package delivered via the LifeSG app to support Singaporean parents with the costs of welcoming and raising a newborn child.',
    tags: ['LifeSG', 'Children', 'Cash Gift', 'CDA'],
    eligibility: [
      'Child is a Singapore Citizen',
      'Parents lawfully married (for Baby Bonus cash gift; CDA is available to all citizen children)'
    ],
    benefits: [
      '$11,000 cash gift for 1st and 2nd child; $13,000 for 3rd and subsequent children',
      'Initial $5,000 First Step Grant deposited into CDA without deposit requirement',
      'Dollar-for-dollar government co-matching up to $4,000 to $9,000 in CDA'
    ],
    requiredDocs: [
      'Child Birth Registration via LifeSG app',
      'Parents Singpass login and designated bank account'
    ],
    disbursement: 'Paid in 5 installments across the child first 6.5 years via direct bank transfer.',
    budget2026Measure: false
  },
  {
    id: 'chas-card',
    title: 'Community Health Assist Scheme (CHAS)',
    subtitle: 'Subsidies for Medical and Dental Care at Private Clinics',
    agency: 'Ministry of Health',
    agencyAbbr: 'MOH',
    topicId: 'healthcare',
    summary: 'Subsidies at over 1,700 private general practitioner (GP) and dental clinics islandwide.',
    description: 'CHAS cards (Blue, Orange, Green) ensure all Singaporean households can access affordable outpatient healthcare close to home for common illnesses and chronic conditions.',
    tags: ['Healthcare', 'Clinic Subsidies', 'CHAS Blue/Orange'],
    eligibility: [
      'All Singapore Citizens are eligible for CHAS cards (tiered by household income per capita)',
      'CHAS Blue: Household per capita income ≤ $1,500 (or AV ≤ $21,000)',
      'CHAS Orange: Household per capita income $1,501 to $2,300'
    ],
    benefits: [
      'Up to $540/year per chronic condition subsidy',
      'Up to $28.50 per visit for acute conditions at participating GPs',
      'Subsidized dental procedures up to $256.50/year (CHAS Blue)'
    ],
    requiredDocs: [
      'Online application via Singpass',
      'Consent from household members'
    ],
    disbursement: 'Direct point-of-sale fee reduction upon presenting your CHAS or Pioneer/Merdeka card.',
    budget2026Measure: false
  },
  {
    id: 'budget-2026-cdc-vouchers',
    title: 'CDC Vouchers Scheme 2026',
    subtitle: '$600 to $800 Digital Vouchers for Heartlands and Supermarkets',
    agency: 'Community Development Councils & GovTech',
    agencyAbbr: 'CDC',
    topicId: 'financial',
    summary: 'Digital vouchers distributed to every Singaporean household to cushion daily household inflation.',
    description: 'Co-funded under the enhanced Assurance Package in Budget 2026, every Singaporean citizen household receives up to $800 in digital vouchers spendable at hawkers, heartland merchants, and major supermarkets.',
    tags: ['Budget 2026', 'CDC Vouchers', 'All Households'],
    eligibility: [
      'Every Singaporean citizen household is eligible',
      'Only 1 representative per household needs to claim via Singpass'
    ],
    benefits: [
      '$400 for heartland hawkers and merchants',
      '$400 for participating supermarket chains (FairPrice, Sheng Siong, Prime, Giant, Cold Storage)'
    ],
    requiredDocs: ['Singpass login via vouchers.cdc.gov.sg or LifeSG app.'],
    disbursement: 'Instant digital voucher link sent via SMS to verified Singpass mobile number.',
    budget2026Measure: true
  },
  {
    id: 'cpf-withdrawal-rules',
    title: 'CPF Retirement Sum & Withdrawal Guidelines',
    subtitle: 'Understanding Age 55 and Age 65 CPF Payout Options',
    agency: 'Central Provident Fund Board',
    agencyAbbr: 'CPFB',
    topicId: 'retirement',
    summary: 'Clear guidelines on withdrawing up to $5,000 from Ordinary and Special accounts at age 55.',
    description: 'Members reaching age 55 can unconditionally withdraw up to $5,000 from their Ordinary and Special Accounts, and any savings above their Full Retirement Sum (FRS) or Basic Retirement Sum (with sufficient property pledge). Monthly lifelong payouts begin at age 65 under CPF LIFE.',
    tags: ['CPF', 'Retirement', 'Age 55', 'CPF LIFE'],
    eligibility: [
      'Singapore Citizens and Permanent Residents reaching age 55 or 65',
      'CPF members with accumulated Ordinary, Special, and Retirement Accounts'
    ],
    benefits: [
      'Withdraw up to $5,000 at age 55 regardless of savings amount',
      'Withdraw savings in excess of Full Retirement Sum',
      'Lifelong monthly retirement payouts from age 65 via CPF LIFE Standard, Escalating, or Basic plans'
    ],
    requiredDocs: ['Online submission on cpf.gov.sg with Singpass.'],
    disbursement: 'Direct instant PayNow NRIC bank transfer on approved withdrawal date.',
    budget2026Measure: false
  }
];
