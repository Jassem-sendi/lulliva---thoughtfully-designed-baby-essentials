import React, { useState } from 'react';
import { AnnouncementStrip } from './components/AnnouncementStrip';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Collection } from './components/Collection';
import { PackagingIdentity } from './components/PackagingIdentity';
import { Approach } from './components/Approach';
import { PreLaunchSignup } from './components/PreLaunchSignup';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { BrandToolkitDrawer } from './components/BrandToolkitDrawer';
import { Sliders } from 'lucide-react';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isBrandDrawerOpen, setIsBrandDrawerOpen] = useState(false);
  const [subscriberUpdateCount, setSubscriberUpdateCount] = useState(0);

  const scrollToSignup = () => {
    const signupEl = document.getElementById('signup');
    if (signupEl) {
      signupEl.scrollIntoView({ behavior: 'smooth' });
      // Focus email input if possible after scroll
      setTimeout(() => {
        const emailInput = document.getElementById('email-input');
        if (emailInput) emailInput.focus();
      }, 500);
    }
  };

  const scrollToPhilosophy = () => {
    const el = document.getElementById('philosophy');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToApproach = () => {
    const el = document.getElementById('approach');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#34302F] flex flex-col font-sans selection:bg-[#EBCFD0] selection:text-[#34302F]">
      {/* Section A: Announcement Strip */}
      <AnnouncementStrip
        message="Something thoughtful is on its way."
        onCtaClick={scrollToSignup}
      />

      {/* Section B: Navigation */}
      <Navbar onScrollToSignup={scrollToSignup} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section C: Hero */}
        <Hero
          onDiscoverClick={scrollToPhilosophy}
          onMeetLullivaClick={scrollToApproach}
        />

        {/* Section D: Brand Philosophy */}
        <Philosophy />

        {/* Section E: The First Collection */}
        <Collection onNotifyClick={scrollToSignup} />

        {/* Section F: Packaging & Identity */}
        <PackagingIdentity />

        {/* Section G: The Lulliva Approach */}
        <Approach />

        {/* Section H: Pre-launch Signup */}
        <PreLaunchSignup
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onSubscriberAdded={() => setSubscriberUpdateCount((c) => c + 1)}
        />

        {/* Section I: FAQ */}
        <FAQ />

        {/* Section J: Final Call to Action */}
        <FinalCTA onScrollToSignup={scrollToSignup} />
      </main>

      {/* Section K: Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenBrandDrawer={() => setIsBrandDrawerOpen(true)}
      />

      {/* Legal Modals (Privacy & Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Internal Brand & Waitlist Drawer */}
      <BrandToolkitDrawer
        isOpen={isBrandDrawerOpen}
        onClose={() => setIsBrandDrawerOpen(false)}
        subscriberCountTrigger={subscriberUpdateCount}
      />

      {/* Discreet Brand Hub launcher button */}
      <div className="fixed bottom-4 right-4 z-30">
        <button
          type="button"
          onClick={() => setIsBrandDrawerOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-2 bg-[#34302F]/90 hover:bg-[#34302F] text-[#FAF7F2] text-xs font-medium rounded-full shadow-lg backdrop-blur-md border border-[#FAF7F2]/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Open Lulliva Brand Hub & Waitlist Export"
          aria-label="Open Lulliva Brand Hub"
        >
          <Sliders className="w-3.5 h-3.5 text-[#C99499]" />
          <span className="hidden sm:inline">Brand Hub & Waitlist</span>
        </button>
      </div>
    </div>
  );
}
