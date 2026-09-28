import { useState } from 'react';
import { Language, Scheme, Topic, UserProfile } from './types';
import { ScamBanner } from './components/ScamBanner';
import { GovMasthead } from './components/GovMasthead';
import { Header } from './components/Header';
import { LanguageBar } from './components/LanguageBar';
import { HeroSection } from './components/HeroSection';
import { ExploreTopics } from './components/ExploreTopics';
import { SupportSchemesSection } from './components/SupportSchemesSection';
import { OtherResourcesSection } from './components/OtherResourcesSection';
import { AgencyAffiliations } from './components/AgencyAffiliations';
import { Footer } from './components/Footer';
import { FeedbackWidget } from './components/FeedbackWidget';
import { BudgetCalculatorModal } from './components/BudgetCalculatorModal';
import { SchemeDetailModal } from './components/SchemeDetailModal';
import { TopicDetailModal } from './components/TopicDetailModal';
import { SingpassModal } from './components/SingpassModal';
import { ChatbotInfoModal } from './components/ChatbotInfoModal';
import { SearchModal } from './components/SearchModal';
import { TOPICS } from './data/topics';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isBudgetCalcOpen, setIsBudgetCalcOpen] = useState(false);
  const [isSingpassOpen, setIsSingpassOpen] = useState(false);
  const [isChatbotInfoOpen, setIsChatbotInfoOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  // User state (Singpass simulation)
  const [user, setUser] = useState<UserProfile>({
    name: 'Guest User',
    nric: '',
    email: '',
    isLoggedIn: false,
    savedSchemeIds: [],
    housingType: '',
    estimatedBenefits: 0
  });

  const handleToggleBookmark = (schemeId: string) => {
    setUser((prev) => {
      const exists = prev.savedSchemeIds.includes(schemeId);
      return {
        ...prev,
        savedSchemeIds: exists
          ? prev.savedSchemeIds.filter((id) => id !== schemeId)
          : [...prev.savedSchemeIds, schemeId]
      };
    });
  };

  const handleLogout = () => {
    setUser({
      name: 'Guest User',
      nric: '',
      email: '',
      isLoggedIn: false,
      savedSchemeIds: [],
      housingType: '',
      estimatedBenefits: 0
    });
  };

  const handleSelectTopicById = (topicId: string) => {
    const found = TOPICS.find((t) => t.id === topicId);
    if (found) {
      setSelectedTopic(found);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased flex flex-col selection:bg-blue-100 selection:text-[#175CD3]">
      
      {/* 1. Scam Alert Banner */}
      <ScamBanner currentLang={currentLang} />

      {/* 2. Official Singapore Government Masthead */}
      <GovMasthead currentLang={currentLang} />

      {/* 3. Main Header with Navigation & Singpass */}
      <Header
        currentLang={currentLang}
        user={user}
        onOpenLogin={() => setIsSingpassOpen(true)}
        onLogout={handleLogout}
        onSelectTopic={handleSelectTopicById}
        onOpenBudgetCalc={() => setIsBudgetCalcOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 4. Language Bar Switcher */}
      <LanguageBar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 5. Hero & Intelligent Chat/Search Section */}
        <HeroSection
          currentLang={currentLang}
          onOpenScheme={(scheme) => setSelectedScheme(scheme)}
          onOpenChatbotInfo={() => setIsChatbotInfoOpen(true)}
        />

        {/* 6. Explore Support By Topic (12 Cards + Budget 2026 Card) */}
        <ExploreTopics
          currentLang={currentLang}
          onSelectTopic={(topic) => setSelectedTopic(topic)}
          onOpenBudgetCalc={() => setIsBudgetCalcOpen(true)}
        />

        {/* 7. Apply for Support Schemes (ComCare & SCFA) */}
        <SupportSchemesSection
          currentLang={currentLang}
          onOpenScheme={(scheme) => setSelectedScheme(scheme)}
        />

        {/* 8. Other Resources (FoodConnect & GoBusiness) */}
        <OtherResourcesSection currentLang={currentLang} />

        {/* 9. Agency Affiliations (LifeSG, GovTech, MOF, MSF, NCSS, Muis) */}
        <AgencyAffiliations currentLang={currentLang} />
      </main>

      {/* 10. Main Official Government Footer */}
      <Footer
        currentLang={currentLang}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
      />

      {/* 11. Persistent Floating Feedback Widget (Yellow smiley) */}
      <FeedbackWidget
        isOpen={isFeedbackOpen}
        onToggle={() => setIsFeedbackOpen(!isFeedbackOpen)}
        onClose={() => setIsFeedbackOpen(false)}
      />

      {/* Modals */}
      {/* Budget 2026 Calculator Modal */}
      <BudgetCalculatorModal
        isOpen={isBudgetCalcOpen}
        onClose={() => setIsBudgetCalcOpen(false)}
        onApplyProfile={(total) => {
          setUser((prev) => ({ ...prev, estimatedBenefits: total }));
        }}
      />

      {/* Scheme Detail Modal */}
      <SchemeDetailModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
        user={user}
        onToggleBookmark={handleToggleBookmark}
        onOpenLogin={() => {
          setSelectedScheme(null);
          setIsSingpassOpen(true);
        }}
      />

      {/* Topic Detail Modal */}
      <TopicDetailModal
        topic={selectedTopic}
        onClose={() => setSelectedTopic(null)}
        onSelectScheme={(scheme) => setSelectedScheme(scheme)}
      />

      {/* Singpass Authentication Modal */}
      <SingpassModal
        isOpen={isSingpassOpen}
        onClose={() => setIsSingpassOpen(false)}
        onLoginSuccess={(profile) => setUser(profile)}
      />

      {/* Chatbot Beta Info Modal */}
      <ChatbotInfoModal
        isOpen={isChatbotInfoOpen}
        onClose={() => setIsChatbotInfoOpen(false)}
      />

      {/* Global Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectScheme={(scheme) => setSelectedScheme(scheme)}
      />

    </div>
  );
}
