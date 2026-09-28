import { Language } from '../types';

export interface Translations {
  scamBannerText: string;
  scamBannerLink: string;
  govAgency: string;
  howToIdentify: string;
  supportNav: string;
  resourcesNav: string;
  login: string;
  logout: string;
  readThisIn: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPlaceholder: string;
  chatbotBetaNote: string;
  learnMore: string;
  exploreTopicsTitle: string;
  budgetTitle: string;
  budgetSubtitle: string;
  useCalculator: string;
  applySchemesTitle: string;
  moreDetails: string;
  otherResourcesTitle: string;
  foodConnectTitle: string;
  foodConnectDesc: string;
  foodConnectAction: string;
  goBusinessTitle: string;
  goBusinessDesc: string;
  goBusinessAction: string;
  initiativeBy: string;
  collaborationWith: string;
  aboutUs: string;
  contactUs: string;
  reportVulnerability: string;
  privacyStatement: string;
  termsOfUse: string;
  copyright: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    scamBannerText: 'Beware of impersonation scams — Government officials will NEVER ask you to transfer money or disclose bank log-in details over a phone call. Call the 24/7 ScamShield Helpline at 1799 if you are unsure if something is a scam. For more information on how to protect yourself against scams, please visit the',
    scamBannerLink: 'ScamShield website',
    govAgency: 'A Singapore Government Agency Website',
    howToIdentify: 'How to identify',
    supportNav: 'Support',
    resourcesNav: 'Resources & Tools',
    login: 'Log in',
    logout: 'Log out',
    readThisIn: 'Read this in:',
    heroTitle: 'Find the support you need',
    heroSubtitle: 'An initiative by LifeSG',
    heroPlaceholder: "I'm a senior citizen and need help with my living expenses",
    chatbotBetaNote: 'This chatbot is a Beta version that is still undergoing improvements.',
    learnMore: 'Learn more',
    exploreTopicsTitle: 'Explore support by topic',
    budgetTitle: 'BUDGET 2026 CALCULATOR',
    budgetSubtitle: 'Find out more about the measures announced at Budget 2026',
    useCalculator: 'Use calculator',
    applySchemesTitle: 'Apply for support schemes',
    moreDetails: 'More details',
    otherResourcesTitle: 'Other resources',
    foodConnectTitle: 'FoodConnect',
    foodConnectDesc: 'Find out which food support organisations are best equipped to support your food needs.',
    foodConnectAction: 'Visit FoodConnect Directory',
    goBusinessTitle: 'GoBusiness',
    goBusinessDesc: 'For businesses in Singapore to access Government e-services and resources.',
    goBusinessAction: 'Visit GoBusiness',
    initiativeBy: 'An initiative by:',
    collaborationWith: 'A collaboration with:',
    aboutUs: 'About Us',
    contactUs: 'Contact Us/Feedback',
    reportVulnerability: 'Report Vulnerability',
    privacyStatement: 'Privacy Statement',
    termsOfUse: 'Terms of Use',
    copyright: '©2026, Government of Singapore. Last updated 21 Sept 2026, 3:43:36 pm.'
  },
  zh: {
    scamBannerText: '谨防冒充骗局 —— 政府官员绝不会通过电话要求您转账或透露银行登录信息。若有疑问，请拨打24小时防诈热线1799。详情请浏览',
    scamBannerLink: 'ScamShield官方网站',
    govAgency: '新加坡政府机构官方网站',
    howToIdentify: '如何识别',
    supportNav: '援助计划',
    resourcesNav: '资源与工具',
    login: '登录',
    logout: '登出',
    readThisIn: '阅读语言：',
    heroTitle: '寻找您所需的政府援助',
    heroSubtitle: '由 LifeSG 推出',
    heroPlaceholder: '我是年长者，需要生活开销补助',
    chatbotBetaNote: '此智能助理为测试版本，仍在不断优化中。',
    learnMore: '了解更多',
    exploreTopicsTitle: '按主题探索援助计划',
    budgetTitle: '2026年财政预算案计算机',
    budgetSubtitle: '了解2026年预算案公布的各项援助与津贴措施',
    useCalculator: '使用计算机',
    applySchemesTitle: '申请援助计划',
    moreDetails: '查看详情',
    otherResourcesTitle: '其他资源',
    foodConnectTitle: 'FoodConnect 食物援助网络',
    foodConnectDesc: '寻找最适合协助您食物需求的慈善及支援组织。',
    foodConnectAction: '访问 FoodConnect 目录',
    goBusinessTitle: 'GoBusiness 企业指南',
    goBusinessDesc: '新加坡企业获取政府电子服务与资源的一站式平台。',
    goBusinessAction: '访问 GoBusiness',
    initiativeBy: '发起机构：',
    collaborationWith: '合作机构：',
    aboutUs: '关于我们',
    contactUs: '联系我们 / 反馈',
    reportVulnerability: '报告漏洞',
    privacyStatement: '隐私声明',
    termsOfUse: '使用条款',
    copyright: '©2026，新加坡政府。最后更新于 2026年9月21日 下午3:43:36。'
  },
  ms: {
    scamBannerText: 'Berhati-hati dengan penipuan penyamaran — Pegawai Kerajaan TIDAK AKAN sesekali meminta anda memindahkan wang atau mendedahkan butiran log masuk bank melalui panggilan telefon. Hubungi Talian Bantuan ScamShield 24/7 di 1799 jika anda tidak pasti. Untuk maklumat lanjut, sila layari laman web',
    scamBannerLink: 'ScamShield',
    govAgency: 'Laman Web Agensi Kerajaan Singapura',
    howToIdentify: 'Cara mengenal pasti',
    supportNav: 'Bantuan',
    resourcesNav: 'Sumber & Alat',
    login: 'Log masuk',
    logout: 'Log keluar',
    readThisIn: 'Baca dalam:',
    heroTitle: 'Dapatkan sokongan yang anda perlukan',
    heroSubtitle: 'Inisiatif oleh LifeSG',
    heroPlaceholder: 'Saya warga emas dan perlukan bantuan perbelanjaan harian',
    chatbotBetaNote: 'Chatbot ini adalah versi Beta yang sedang dipertingkatkan.',
    learnMore: 'Ketahui lebih lanjut',
    exploreTopicsTitle: 'Terokai bantuan mengikut topik',
    budgetTitle: 'KALKULATOR BELANJAWAN 2026',
    budgetSubtitle: 'Ketahui lebih lanjut mengenai langkah-langkah Belanjawan 2026',
    useCalculator: 'Gunakan kalkulator',
    applySchemesTitle: 'Memohon skim bantuan',
    moreDetails: 'Butiran lanjut',
    otherResourcesTitle: 'Sumber-sumber lain',
    foodConnectTitle: 'FoodConnect',
    foodConnectDesc: 'Ketahui pertubuhan bantuan makanan yang bersedia menyokong keperluan pemakanan anda.',
    foodConnectAction: 'Layari Direktori FoodConnect',
    goBusinessTitle: 'GoBusiness',
    goBusinessDesc: 'Untuk perniagaan di Singapura mengakses perkhidmatan e-kerajaan dan sumber.',
    goBusinessAction: 'Layari GoBusiness',
    initiativeBy: 'Inisiatif oleh:',
    collaborationWith: 'Dengan kerjasama:',
    aboutUs: 'Tentang Kami',
    contactUs: 'Hubungi Kami/Maklum Balas',
    reportVulnerability: 'Lapor Kerentanan',
    privacyStatement: 'Pernyataan Privasi',
    termsOfUse: 'Syarat Penggunaan',
    copyright: '©2026, Kerajaan Singapura. Terakhir dikemas kini 21 Sept 2026, 3:43:36 ptg.'
  },
  ta: {
    scamBannerText: 'ஆள்மாறாட்ட மோசடிகள் குறித்து எச்சரிக்கையாக இருங்கள் — தொலைபேசி அழைப்பில் அரசு அதிகாரிகள் பணம் மாற்றவோ வங்கி விவரங்களை வெளியிடவோ ஒருபோதும் கேட்கமாட்டார்கள். சந்தேகம் இருந்தால் 24/7 ஸ்கேம்ஷீல்டு உதவி எண் 1799-ஐ அழைக்கவும். மேலும் தகவலுக்கு',
    scamBannerLink: 'ScamShield இணையதளம் பார்க்கவும்',
    govAgency: 'சிங்கப்பூர் அரசு நிறுவன இணையதளம்',
    howToIdentify: 'எவ்வாறு அடையாளம் காண்பது',
    supportNav: 'ஆதரவு',
    resourcesNav: 'வளங்கள் & கருவிகள்',
    login: 'உள்நுழைக',
    logout: 'வெளியேறுக',
    readThisIn: 'மொழியைத் தேர்ந்தெடுக்கவும்:',
    heroTitle: 'உங்களுக்குத் தேவையான ஆதரவைக் கண்டறியவும்',
    heroSubtitle: 'LifeSG-ன் ஒரு முன்னெடுப்பு',
    heroPlaceholder: 'நான் ஒரு மூத்த குடிமகன், என் அன்றாட வாழ்க்கைச் செலவுகளுக்கு உதவி தேவை',
    chatbotBetaNote: 'இந்த அரட்டைப் பெட்டி பீட்டா பதிப்பில் உள்ளது, மேம்படுத்தப்பட்டு வருகிறது.',
    learnMore: 'மேலும் அறிய',
    exploreTopicsTitle: 'தலைப்பு வாரியாக ஆதரவை ஆராயுங்கள்',
    budgetTitle: 'பட்ஜெட் 2026 கணக்கீட்டுப் பொறி',
    budgetSubtitle: 'பட்ஜெட் 2026 அறிவிக்கப்பட்ட திட்டங்கள் பற்றி மேலும் அறியவும்',
    useCalculator: 'கணக்கீட்டுப் பொறியைப் பயன்படுத்துக',
    applySchemesTitle: 'ஆதரவுத் திட்டங்களுக்கு விண்ணப்பிக்கவும்',
    moreDetails: 'கூடுதல் விவரங்கள்',
    otherResourcesTitle: 'பிற வளங்கள்',
    foodConnectTitle: 'FoodConnect',
    foodConnectDesc: 'உங்கள் உணவுத் தேவைகளுக்கு உதவும் உணவு உதவி அமைப்புகளை அறிந்து கொள்ளுங்கள்.',
    foodConnectAction: 'FoodConnect விவரக்கொத்தை பார்க்கவும்',
    goBusinessTitle: 'GoBusiness',
    goBusinessDesc: 'சிங்கப்பூரில் உள்ள வணிகங்கள் அரசு மின்-சேவைகளை அணுகுவதற்கு.',
    goBusinessAction: 'GoBusiness பார்வையிடுக',
    initiativeBy: 'முன்னெடுப்பு:',
    collaborationWith: 'ஒத்துழைப்புடன்:',
    aboutUs: 'எங்களைப் பற்றி',
    contactUs: 'தொடர்புகொள்ள / கருத்துப் பதிவு',
    reportVulnerability: 'பாதிப்பை அறிவிக்கவும்',
    privacyStatement: 'தனியுரிமை அறிக்கை',
    termsOfUse: 'பயன்பாட்டு விதிமுறைகள்',
    copyright: '©2026, சிங்கப்பூர் அரசு. கடைசியாகப் புதுப்பிக்கப்பட்டது 21 செப் 2026, 3:43:36 பிற்பகல்.'
  }
};
