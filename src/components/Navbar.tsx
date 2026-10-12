import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onScrollToSignup: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToSignup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Philosophy', href: '#philosophy' },
    { label: 'The Collection', href: '#collection' },
    { label: 'Packaging & Identity', href: '#packaging' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#34302F]/10 shadow-[0_4px_20px_-10px_rgba(52,48,47,0.06)]'
          : 'bg-[#FAF7F2] border-b border-[#34302F]/5'
      }`}
    >
      {/* 3-Zone Top Bar Contract */}
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element, no pill or subtitle lockup) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif text-2xl tracking-normal text-[#34302F] whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
          aria-label="Lulliva Home"
        >
          Lulliva
        </a>

        {/* Zone 2: 4-5 single-line clean text links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#34302F]/75"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#34302F] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#C99499]/60 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onScrollToSignup}
            className="hidden sm:inline-flex items-center justify-center px-4.5 py-2 text-xs uppercase tracking-wider font-semibold text-[#FAF7F2] bg-[#34302F] rounded hover:bg-[#34302F]/90 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            Stay in the Loop
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#34302F] hover:bg-[#34302F]/5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99499] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#34302F]/10 bg-[#FAF7F2] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#34302F]/85">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-1 hover:text-[#C99499] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#34302F]/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToSignup();
                }}
                className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-center text-[#FAF7F2] bg-[#34302F] rounded hover:bg-[#34302F]/90 cursor-pointer"
              >
                Stay in the Loop
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
