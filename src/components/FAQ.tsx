import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../config/brandConfig';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('what-is-lulliva');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#34302F]/10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <div className="text-xs tracking-widest text-[#B9A99A] font-semibold uppercase mb-3">
            Common Inquiries
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#34302F] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#34302F]/75 leading-relaxed">
            Honest answers regarding our brand development, upcoming product launch, and distribution.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#34302F]/10 border-y border-[#34302F]/10">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full flex items-center justify-between text-left gap-4 py-2 text-[#34302F] hover:text-[#C99499] transition-colors cursor-pointer group"
                >
                  <span className="font-serif text-lg sm:text-xl tracking-tight text-[#34302F] group-hover:text-[#C99499] transition-colors">
                    {item.question}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#34302F]/10 flex items-center justify-center shrink-0 text-[#34302F]/70 group-hover:border-[#C99499]/40 transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className="pt-3 pb-2 text-sm sm:text-base text-[#34302F]/75 leading-relaxed pr-10 animate-in fade-in-50 duration-200"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
