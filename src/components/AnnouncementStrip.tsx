import React from 'react';

interface AnnouncementStripProps {
  message?: string;
  onCtaClick?: () => void;
}

export const AnnouncementStrip: React.FC<AnnouncementStripProps> = ({
  message = "Something thoughtful is on its way.",
  onCtaClick,
}) => {
  return (
    <div
      role="region"
      aria-label="Brand Announcement"
      className="w-full bg-[#FAF7F2] border-b border-[#34302F]/10 text-[#34302F] text-xs tracking-wide py-2 px-4 transition-colors"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-center">
        <span className="font-medium tracking-normal text-[#34302F]/80">
          {message}
        </span>
        <button
          onClick={onCtaClick}
          className="text-[#C99499] hover:text-[#34302F] font-medium underline underline-offset-4 transition-colors cursor-pointer text-xs"
        >
          Join launch preview
        </button>
      </div>
    </div>
  );
};
