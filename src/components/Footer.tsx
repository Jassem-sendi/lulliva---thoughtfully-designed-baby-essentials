import React from 'react';
import { ArrowUp, Instagram, Mail } from 'lucide-react';
import { initialBrandConfig } from '../config/brandConfig';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenBrandDrawer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenBrandDrawer,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Our Philosophy', href: '#philosophy' },
    { label: 'The Collection', href: '#collection' },
    { label: 'Packaging & Identity', href: '#packaging' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#34302F]/10 pt-16 pb-12 text-[#34302F]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#34302F]/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-serif text-3xl tracking-tight text-[#34302F] block"
            >
              {initialBrandConfig.name}
            </a>
            <p className="text-sm text-[#34302F]/70 max-w-sm leading-relaxed">
              A contemporary baby-products brand preparing for debut on Amazon FBA in the United States. Thoughtful aesthetics, considered details, and honest presentation.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-[#34302F]/80">
              <a
                href={`mailto:${initialBrandConfig.contactEmail}`}
                className="flex items-center gap-1.5 hover:text-[#C99499] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C99499]" />
                <span>{initialBrandConfig.contactEmail}</span>
              </a>
              <span className="text-[#34302F]/30">|</span>
              <span className="flex items-center gap-1.5 text-[#34302F]/70">
                <Instagram className="w-3.5 h-3.5 text-[#C99499]" />
                <span>{initialBrandConfig.instagramHandle}</span>
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B9A99A]">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#34302F]/75 hover:text-[#34302F] hover:underline underline-offset-4 decoration-[#C99499]/50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pre-Launch Disclosure */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B9A99A]">
              Pre-Launch Notice
            </div>
            <p className="text-xs text-[#34302F]/65 leading-relaxed">
              Lulliva is currently in product formulation and compliance readiness. No products are currently offered for sale. Amazon storefront links will be published at official release.
            </p>
            {onOpenBrandDrawer && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBrandDrawer}
                  className="text-[11px] font-medium text-[#C99499] hover:text-[#34302F] underline underline-offset-4 cursor-pointer"
                >
                  View Brand Toolkit & Waitlist
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#34302F]/60">
          <div>
            © {new Date().getFullYear()} Lulliva. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#34302F] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-[#34302F] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#34302F] transition-colors cursor-pointer ml-2"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
