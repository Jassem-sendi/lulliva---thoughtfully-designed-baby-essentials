import React, { useState } from 'react';
import { Copy, Check, Eye } from 'lucide-react';
import { BRAND_IMAGES } from '../config/brandConfig';

export const PackagingIdentity: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const palette = [
    { name: 'Warm Ivory', hex: '#FAF7F2', role: 'Primary Canvas', bgClass: 'bg-[#FAF7F2]', border: true },
    { name: 'Soft Blush', hex: '#EBCFD0', role: 'Restrained Accent', bgClass: 'bg-[#EBCFD0]', border: false },
    { name: 'Dusty Rose', hex: '#C99499', role: 'Tonal Emphasis', bgClass: 'bg-[#C99499]', border: false },
    { name: 'Warm Taupe', hex: '#B9A99A', role: 'Neutral Sub-text', bgClass: 'bg-[#B9A99A]', border: false },
    { name: 'Deep Charcoal', hex: '#34302F', role: 'Editorial Typography', bgClass: 'bg-[#34302F]', textLight: true },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="packaging" className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#34302F]/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs tracking-widest text-[#B9A99A] font-semibold uppercase mb-3">
            Identity & Packaging Study
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#34302F] tracking-tight mb-5">
            Thoughtful in Every Detail.
          </h2>
          <p className="text-base sm:text-lg text-[#34302F]/75 leading-relaxed">
            A distinctive brand experience starts long before a product becomes part of someone's everyday life. We believe the details of presentation, packaging, and design deserve the same thoughtful attention as the product itself.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Packaging Box Visual */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-[#FAF7F2] aspect-[4/3] border border-[#34302F]/10 shadow-[0_25px_60px_-30px_rgba(52,48,47,0.14)] group">
              <img
                src={BRAND_IMAGES.packaging}
                alt="Lulliva premium rigid gift box with unboxing presentation and custom tissue"
                referrerPolicy="no-referrer"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Tag */}
              <div className="absolute top-4 left-4 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-[#34302F] border border-[#34302F]/10 shadow-xs">
                Case Study · Packaging Architecture
              </div>

              {/* Bottom annotation */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md p-3 rounded-xl border border-[#34302F]/10 flex items-center justify-between text-xs text-[#34302F]">
                <span className="font-medium">Conceptual Unboxing Presentation</span>
                <span className="text-[#34302F]/60">Rigid Gift Box & Custom Tissue</span>
              </div>
            </div>
          </div>

          {/* Design System Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Wordmark Specimen */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#34302F]/8">
              <div className="text-[11px] uppercase tracking-wider text-[#B9A99A] font-semibold mb-3">
                Typographic Wordmark
              </div>
              <div className="font-serif text-4xl sm:text-5xl text-[#34302F] tracking-tight mb-2">
                Lulliva
              </div>
              <p className="text-xs text-[#34302F]/65 leading-relaxed">
                Rendered with refined classical proportion, balanced tracking, and an understated presence suitable for debossing on tactile unboxing surfaces.
              </p>
            </div>

            {/* Packaging Principles */}
            <div className="space-y-4">
              <div className="text-[11px] uppercase tracking-wider text-[#B9A99A] font-semibold">
                Packaging Focus Points
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#34302F]/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C99499] mt-2 shrink-0" />
                  <span>
                    <strong>Rigid Keepsake Construction:</strong> Designed to feel intentional and durable from arrival through everyday storage.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C99499] mt-2 shrink-0" />
                  <span>
                    <strong>Restrained Color Application:</strong> Warm ivory canvas complemented by quiet blush tones rather than high-saturation prints.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C99499] mt-2 shrink-0" />
                  <span>
                    <strong>Honest Labeling:</strong> Clear, readable specifications designed with full transparency for parenting peace of mind.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Color Palette System */}
        <div className="pt-12 border-t border-[#34302F]/10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <h3 className="font-serif text-2xl text-[#34302F]">
              The Lulliva Palette
            </h3>
            <span className="text-xs text-[#34302F]/60">
              Click any swatch to copy hexadecimal value
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {palette.map((swatch) => (
              <button
                key={swatch.hex}
                type="button"
                onClick={() => handleCopy(swatch.hex)}
                className="group p-3.5 rounded-xl bg-[#FAF7F2] border border-[#34302F]/8 hover:border-[#C99499]/60 transition-all text-left cursor-pointer active:scale-[0.98]"
              >
                <div
                  className={`w-full h-16 rounded-lg ${swatch.bgClass} ${
                    swatch.border ? 'border border-[#34302F]/15' : ''
                  } mb-3 shadow-inner flex items-end justify-end p-1.5`}
                >
                  {copiedHex === swatch.hex ? (
                    <span className="bg-[#FFFFFF]/90 text-[#34302F] text-[10px] font-medium px-1.5 py-0.5 rounded shadow-xs flex items-center gap-1">
                      <Check className="w-2.5 h-2.5 text-emerald-600" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#34302F]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <div className="font-medium text-xs text-[#34302F]">{swatch.name}</div>
                <div className="text-[11px] font-mono text-[#34302F]/60 tracking-wider">
                  {swatch.hex}
                </div>
                <div className="text-[10px] text-[#34302F]/50 mt-1">{swatch.role}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
