import React from 'react';
import { Compass, Sparkles, HeartHandshake, Eye } from 'lucide-react';

export const Approach: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Intentional Form & Soft Palette',
      body: 'We reject visual clutter and hyper-saturated novelty. Every silhouette and tint is chosen to bring serene quiet into your living spaces.',
    },
    {
      icon: Eye,
      title: 'Honest Product Communication',
      body: 'Clear information without marketing embellishments. We articulate exactly what each product is, how it is made, and its developmental context.',
    },
    {
      icon: Sparkles,
      title: 'Consideration in Every Touchpoint',
      body: 'From product materials to tactile packaging and responsive care, we build a brand experience meant to be memorable and trusted.',
    },
    {
      icon: HeartHandshake,
      title: 'Designed for Mindful Parenting',
      body: 'Created for modern families and thoughtful gift-givers who value aesthetic harmony alongside everyday functionality.',
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#34302F]/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Headline Lockup */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs tracking-widest text-[#B9A99A] font-semibold uppercase mb-3">
            The Lulliva Approach
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#34302F] tracking-tight mb-5">
            More Than a Look.
          </h2>
          <p className="text-base sm:text-lg text-[#34302F]/75 leading-relaxed">
            We're building Lulliva with a simple idea in mind: thoughtful products deserve thoughtful presentation. Every choice, from the visual identity to the way we share product information, should feel considered, consistent, and honest.
          </p>
        </div>

        {/* 4-Pillar Grid with balanced editorial typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#34302F]/8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 shadow-[0_10px_30px_-15px_rgba(52,48,47,0.06)]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#34302F]/10 flex items-center justify-center text-[#C99499] mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-[#34302F] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#34302F]/70 leading-relaxed mt-2">
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quiet commitment block */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#EBCFD0]/15 border border-[#C99499]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-lg text-[#34302F] mb-1">
              Building with Intention for the U.S. Market
            </h4>
            <p className="text-xs sm:text-sm text-[#34302F]/70">
              Launching initially through Amazon FBA with verified logistics and customer care.
            </p>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#34302F]/80 whitespace-nowrap bg-[#FAF7F2] px-3.5 py-1.5 rounded-lg border border-[#34302F]/10">
            Pre-Launch Phase
          </div>
        </div>
      </div>
    </section>
  );
};
