import React, { useState } from 'react';
import { BRAND_IMAGES } from '../config/brandConfig';

export const Philosophy: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const principles = [
    {
      number: '01',
      title: 'Considered Design',
      description: 'A thoughtful approach to form, color, and detail.',
      note: 'Every contour and tone is selected to evoke calm without visual noise.',
    },
    {
      number: '02',
      title: 'The Beauty of Simplicity',
      description: 'A calm, cohesive aesthetic designed to feel at home in modern spaces.',
      note: 'Created for contemporary parents who appreciate understated elegance in everyday nursery environments.',
    },
    {
      number: '03',
      title: 'Made to Be Thoughtful',
      description: 'Careful attention to the details that shape the overall experience.',
      note: 'From the tactile touch of fabric to the quiet unboxing ritual.',
    },
  ];

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#34302F]/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="text-xs tracking-widest text-[#B9A99A] font-semibold uppercase mb-3">
            Brand Philosophy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#34302F] tracking-tight mb-5">
            Thoughtful by Nature.
          </h2>
          <p className="text-base sm:text-lg text-[#34302F]/75 leading-relaxed">
            We believe the little details matter. From the way a product looks to the way it is presented, every detail is an opportunity to bring more thought and intention to everyday essentials.
          </p>
        </div>

        {/* Editorial Layout: Left Macro Visual + Right Editorial Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Tactile Materiality Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#EBCFD0]/20 border border-[#34302F]/10 shadow-[0_16px_40px_-20px_rgba(52,48,47,0.1)]">
                <img
                  src={BRAND_IMAGES.textile}
                  alt="Close-up macro of soft blush organic woven textile texture"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
              <div className="text-xs text-[#34302F]/60 flex items-center justify-between px-1">
                <span>Tactile Study · Organic Woven Weave</span>
                <span className="text-[#C99499]">Soft Blush Palette</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Principles with quiet numbering */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12 divide-y divide-[#34302F]/10">
            {principles.map((item, index) => (
              <div key={item.number} className={index > 0 ? 'pt-10' : ''}>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-serif text-xl sm:text-2xl text-[#C99499]">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#34302F] tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#34302F]/85 font-normal leading-relaxed mb-2">
                  {item.description}
                </p>
                <p className="text-xs sm:text-sm text-[#34302F]/60 leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
