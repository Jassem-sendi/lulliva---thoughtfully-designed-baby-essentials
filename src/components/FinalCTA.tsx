import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onScrollToSignup: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToSignup }) => {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#34302F]/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-xs tracking-widest text-[#B9A99A] font-semibold uppercase mb-3">
          Join the Journey
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#34302F] tracking-tight mb-5 max-w-2xl mx-auto text-balance">
          Something Thoughtful Is Taking Shape.
        </h2>
        <p className="text-base sm:text-lg text-[#34302F]/75 leading-relaxed max-w-xl mx-auto mb-9">
          Follow the beginning of Lulliva and be the first to discover what's next.
        </p>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={onScrollToSignup}
            className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-wider font-semibold text-[#FAF7F2] bg-[#34302F] rounded-lg hover:bg-[#34302F]/90 active:scale-[0.98] transition-all cursor-pointer shadow-sm group"
          >
            <span>Stay in the Loop</span>
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
