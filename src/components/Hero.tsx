import React, { useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { BRAND_IMAGES } from '../config/brandConfig';

interface HeroProps {
  onDiscoverClick: () => void;
  onMeetLullivaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, onMeetLullivaClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pb-32 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Unboxed pre-launch kicker */}
            <div className="flex items-center gap-2 mb-4 text-xs tracking-widest text-[#B9A99A] font-semibold uppercase">
              <span>Introducing Lulliva</span>
              <span aria-hidden="true" className="text-[#C99499]">·</span>
              <span className="text-[#34302F]/60 normal-case font-normal">Coming Soon</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.12] text-[#34302F] tracking-tight mb-6 text-balance">
              Little Moments. <br />
              <span className="italic font-normal text-[#34302F]/90">Thoughtfully Made.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#34302F]/75 leading-relaxed max-w-xl mb-9">
              Meet Lulliva — a new perspective on thoughtfully designed baby essentials, where considered details and a softer aesthetic come together.
            </p>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onDiscoverClick}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#FAF7F2] bg-[#34302F] rounded hover:bg-[#34302F]/90 active:scale-[0.98] transition-all cursor-pointer shadow-sm group whitespace-nowrap shrink-0"
              >
                <span>Discover Our World</span>
                <ArrowDown className="w-3.5 h-3.5 ml-2.5 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={onMeetLullivaClick}
                className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-medium text-[#34302F]/80 hover:text-[#34302F] underline underline-offset-8 decoration-[#C99499]/50 hover:decoration-[#C99499] transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                Meet Lulliva
              </button>
            </div>

            {/* Quiet Trust Strip */}
            <div className="mt-12 pt-8 border-t border-[#34302F]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#34302F]/60">
              <span className="font-medium text-[#34302F]/80">Amazon FBA Launch Partner</span>
              <span aria-hidden="true">·</span>
              <span>United States Pre-Launch</span>
              <span aria-hidden="true">·</span>
              <span>Design-Conscious Nursery</span>
            </div>
          </div>

          {/* Right Column: Editorial Visual Still Life */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#EBCFD0]/20 aspect-[4/3] shadow-[0_20px_50px_-20px_rgba(52,48,47,0.12)] border border-[#34302F]/8">
              {/* Fallback container if image fails or before load */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr from-[#FAF7F2] via-[#EBCFD0]/30 to-[#FAF7F2] flex items-center justify-center transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#FAF7F2] border border-[#B9A99A]/30 flex items-center justify-center text-[#C99499]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <p className="font-serif text-lg text-[#34302F]">Lulliva Still Life</p>
                  <p className="text-xs text-[#34302F]/60 mt-1">Calm Nursery Essentials</p>
                </div>
              </div>

              {/* Generated Real Image */}
              <img
                src={BRAND_IMAGES.hero}
                alt="Lulliva editorial still life featuring folded soft blush textiles, serene ceramics, and warm morning light"
                referrerPolicy="no-referrer"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02] ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Elegant caption credit */}
              <div className="absolute bottom-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1.5 rounded text-[11px] font-medium text-[#34302F]/75 border border-[#34302F]/5">
                Editorial Still Life · Calm Nursery Direction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
