import React, { useState } from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { initialBrandConfig, BRAND_IMAGES } from '../config/brandConfig';

interface CollectionProps {
  onNotifyClick: () => void;
}

export const Collection: React.FC<CollectionProps> = ({ onNotifyClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'development'>('overview');

  const { product } = initialBrandConfig;

  return (
    <section id="collection" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#34302F]/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-widest text-[#B9A99A] font-semibold uppercase mb-3">
              <span>The Debut Collection</span>
              <span aria-hidden="true" className="text-[#C99499]">·</span>
              <span className="text-[#C99499] font-medium lowercase italic">coming soon</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#34302F] tracking-tight">
              A Softer Beginning.
            </h2>
          </div>

          <div className="text-xs text-[#34302F]/60 max-w-xs md:text-right">
            Pre-launch visual showcase · Product specifications subject to final verification
          </div>
        </div>

        {/* Product Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 border border-[#34302F]/8 shadow-[0_20px_50px_-25px_rgba(52,48,47,0.08)]">
          {/* Left Column: Conceptual Product Imagery */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-[#FAF7F2] aspect-[4/3] border border-[#34302F]/8 group">
              <img
                src={BRAND_IMAGES.product}
                alt="Lulliva conceptual soft blush baby cushion resting on natural travertine stone"
                referrerPolicy="no-referrer"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-[#FAF7F2]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-[#34302F] border border-[#34302F]/10">
                Conceptual Visual · In Pre-Launch Prep
              </div>

              {/* Clean bottom note */}
              <div className="absolute bottom-4 right-4 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1 rounded text-[11px] text-[#34302F]/70">
                Initial Colorway: Soft Blush
              </div>
            </div>
          </div>

          {/* Right Column: Thoughtful Product Context & Attributes */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Functional Segmented View Tabs */}
              <div className="inline-flex p-1 bg-[#FAF7F2] rounded-lg border border-[#34302F]/10 mb-6 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-[#34302F] text-[#FAF7F2] shadow-xs'
                      : 'text-[#34302F]/70 hover:text-[#34302F]'
                  }`}
                >
                  Product Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('development')}
                  className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    activeTab === 'development'
                      ? 'bg-[#34302F] text-[#FAF7F2] shadow-xs'
                      : 'text-[#34302F]/70 hover:text-[#34302F]'
                  }`}
                >
                  Launch Readiness
                </button>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#34302F] mb-3">
                {product.name}
              </h3>

              <p className="text-sm sm:text-base text-[#34302F]/75 leading-relaxed mb-6">
                {product.description}
              </p>

              {activeTab === 'overview' ? (
                /* Planned Attributes List */
                <dl className="space-y-3 pt-4 border-t border-[#34302F]/10 text-xs sm:text-sm">
                  {product.plannedAttributes.map((attr) => (
                    <div key={attr.label} className="flex justify-between items-baseline py-1 border-b border-[#34302F]/5">
                      <dt className="text-[#34302F]/60">{attr.label}</dt>
                      <dd className="font-medium text-[#34302F] text-right">{attr.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                /* Launch Readiness & Safety Transparency */
                <div className="space-y-3 pt-4 border-t border-[#34302F]/10 text-xs sm:text-sm text-[#34302F]/80">
                  <div className="flex gap-2.5 items-start bg-[#FAF7F2] p-3 rounded-xl border border-[#34302F]/5">
                    <ShieldCheck className="w-4 h-4 text-[#C99499] shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed text-[#34302F]/80">
                      <strong>Amazon FBA Compliance:</strong> Product testing, labeling standards, and children's product certificates (CPC) are handled through certified independent laboratories prior to listing activation.
                    </p>
                  </div>
                  <div className="flex gap-2.5 items-start bg-[#FAF7F2] p-3 rounded-xl border border-[#34302F]/5">
                    <Info className="w-4 h-4 text-[#B9A99A] shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed text-[#34302F]/80">
                      <strong>Honest Product Guidance:</strong> Lulliva will never provide hypothetical ratings, fake purchase reviews, or unverified claims.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Row */}
            <div className="mt-8 pt-6 border-t border-[#34302F]/10">
              <button
                type="button"
                onClick={onNotifyClick}
                className="w-full py-3.5 px-6 text-xs uppercase tracking-wider font-semibold text-[#FAF7F2] bg-[#34302F] rounded hover:bg-[#34302F]/90 active:scale-[0.99] transition-all cursor-pointer shadow-sm text-center"
              >
                Notify Me When Listing Is Live
              </button>
              <p className="text-[11px] text-[#34302F]/55 text-center mt-2.5">
                No purchase commitment · Early access alert only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
