import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#34302F]/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-[#FAF7F2] max-w-2xl w-full max-h-[85vh] rounded-3xl border border-[#34302F]/15 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#34302F]/10">
          <h3 className="font-serif text-2xl text-[#34302F]">
            {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#34302F]/5 text-[#34302F]/60 hover:text-[#34302F] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 overflow-y-auto space-y-5 text-sm text-[#34302F]/80 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="text-xs text-[#34302F]/60">
                Last updated: October 2026 · Lulliva Pre-Launch Information
              </p>
              <div>
                <h4 className="font-semibold text-[#34302F] mb-1">1. Information We Collect</h4>
                <p>
                  During our pre-launch phase, we collect only the information you voluntarily provide, primarily your email address when opting in to receive product launch announcements and early access notifications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#34302F] mb-1">2. How We Use Information</h4>
                <p>
                  Your email address is used solely to notify you about the Lulliva pre-launch progress, product specification reveals, and the activation of our official Amazon listing. We do not sell, rent, or trade your personal information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#34302F] mb-1">3. Affirmative Consent & Unsubscribing</h4>
                <p>
                  We rely on affirmative, voluntary consent. You may request removal from our pre-launch notification list at any time by contacting inquiries@lullivababy.com or by clicking the unsubscribe link included in our launch announcements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#34302F] mb-1">4. Data Security & Storage</h4>
                <p>
                  We employ standard protective measures to ensure your contact details remain confidential. Data collected during early development is stored in secured repositories strictly intended for launch distribution.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#34302F] mb-1">5. Inquiries</h4>
                <p>
                  For any privacy-related requests or data deletion questions, please reach us directly at inquiries@lullivababy.com.
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="text-xs text-[#34302F]/60">
                Last updated: October 2026 · Lulliva Pre-Launch Information
              </p>
              <div>
                <h4 className="font-semibold text-[#34302F] mb-1">1. Pre-Launch Nature of this Website</h4>
                <p>
                  This website is created for brand presentation, creative preview, and pre-launch interest registration for Lulliva. No commercial transactions, physical product fulfillment, or binding purchase contracts are conducted on this site.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#34302F] mb-1">2. Product Specifications & Descriptions</h4>
                <p>
                  Visuals, packaging renders, and product notes depicted are conceptual design prototypes. Exact dimensions, certified materials, safety guidelines, and age-appropriateness ratings will be finalized and certified before commercial release on Amazon FBA.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#34302F] mb-1">3. Intellectual Property</h4>
                <p>
                  All trademarks, wordmarks, visual assets, imagery, copy, and packaging concepts related to Lulliva remain the proprietary creative property of Lulliva.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#34302F] mb-1">4. Contact Information</h4>
                <p>
                  For commercial inquiries, licensing, or official correspondence, contact inquiries@lullivababy.com.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-[#FFFFFF] border-t border-[#34302F]/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#FAF7F2] bg-[#34302F] rounded-lg hover:bg-[#34302F]/90 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
