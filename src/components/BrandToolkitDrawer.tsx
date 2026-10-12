import React, { useState, useEffect } from 'react';
import { X, Download, Users, Sliders, ExternalLink, ShieldCheck, Mail } from 'lucide-react';
import { getSubscribers, exportSubscribersCSV } from '../utils/storage';
import { Subscriber } from '../types';
import { initialBrandConfig, BRAND_IMAGES } from '../config/brandConfig';

interface BrandToolkitDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  subscriberCountTrigger?: number;
}

export const BrandToolkitDrawer: React.FC<BrandToolkitDrawerProps> = ({
  isOpen,
  onClose,
  subscriberCountTrigger,
}) => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [activeTab, setActiveTab] = useState<'subscribers' | 'config' | 'assets'>('subscribers');

  useEffect(() => {
    if (isOpen) {
      setSubscribers(getSubscribers());
    }
  }, [isOpen, subscriberCountTrigger]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end bg-[#34302F]/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-[#FAF7F2] w-full max-w-lg h-full border-l border-[#34302F]/15 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#34302F]/10 bg-[#FFFFFF]">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[#B9A99A] font-semibold">
              Internal Brand Operations
            </div>
            <h3 className="font-serif text-xl text-[#34302F]">
              Lulliva Brand Hub & Waitlist
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#34302F]/5 text-[#34302F]/60 hover:text-[#34302F] transition-colors cursor-pointer"
            aria-label="Close brand drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="flex border-b border-[#34302F]/10 bg-[#FAF7F2] px-6 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('subscribers')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'subscribers'
                ? 'border-[#34302F] text-[#34302F] font-semibold'
                : 'border-transparent text-[#34302F]/60 hover:text-[#34302F]'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Launch Waitlist ({subscribers.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('config')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'config'
                ? 'border-[#34302F] text-[#34302F] font-semibold'
                : 'border-transparent text-[#34302F]/60 hover:text-[#34302F]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Brand Config</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('assets')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'assets'
                ? 'border-[#34302F] text-[#34302F] font-semibold'
                : 'border-transparent text-[#34302F]/60 hover:text-[#34302F]'
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Asset Registry</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'subscribers' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg text-[#34302F]">Recorded Subscriptions</h4>
                  <p className="text-xs text-[#34302F]/60">
                    Pre-launch interest stored in local browser storage
                  </p>
                </div>
                <button
                  type="button"
                  onClick={exportSubscribersCSV}
                  disabled={subscribers.length === 0}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#FAF7F2] bg-[#34302F] rounded-lg hover:bg-[#34302F]/90 disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>

              {subscribers.length === 0 ? (
                <div className="text-center py-12 px-4 rounded-2xl bg-[#FFFFFF] border border-[#34302F]/10">
                  <Mail className="w-8 h-8 text-[#C99499] mx-auto mb-2" />
                  <p className="font-serif text-base text-[#34302F]">No signups recorded yet</p>
                  <p className="text-xs text-[#34302F]/60 mt-1 max-w-xs mx-auto">
                    Submit the form in the pre-launch section to see your subscriber entries here.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#34302F]/10 rounded-2xl bg-[#FFFFFF] border border-[#34302F]/10 overflow-hidden">
                  {subscribers.map((sub) => (
                    <div key={sub.id} className="p-3.5 text-xs flex items-center justify-between">
                      <div>
                        <div className="font-medium text-[#34302F]">{sub.email}</div>
                        <div className="text-[11px] text-[#34302F]/50">
                          {new Date(sub.subscribedAt).toLocaleString()}
                        </div>
                      </div>
                      <span className="text-[10px] bg-[#FAF7F2] border border-[#34302F]/10 px-2 py-0.5 rounded text-[#34302F]/70">
                        Opted-in
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'config' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg text-[#34302F]">Core Brand Settings</h4>
              <p className="text-xs text-[#34302F]/60">
                Separated cleanly in <code className="font-mono bg-white px-1 py-0.5 rounded">src/config/brandConfig.ts</code>
              </p>

              <dl className="space-y-3 bg-[#FFFFFF] p-5 rounded-2xl border border-[#34302F]/10 text-xs">
                <div className="flex justify-between py-1 border-b border-[#34302F]/5">
                  <dt className="text-[#34302F]/60">Brand Name</dt>
                  <dd className="font-medium text-[#34302F]">{initialBrandConfig.name}</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-[#34302F]/5">
                  <dt className="text-[#34302F]/60">Tagline</dt>
                  <dd className="font-medium text-[#34302F]">{initialBrandConfig.tagline}</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-[#34302F]/5">
                  <dt className="text-[#34302F]/60">Launch Territory</dt>
                  <dd className="font-medium text-[#34302F]">{initialBrandConfig.market}</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-[#34302F]/5">
                  <dt className="text-[#34302F]/60">Fulfillment</dt>
                  <dd className="font-medium text-[#34302F]">{initialBrandConfig.distributionChannel}</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-[#34302F]/5">
                  <dt className="text-[#34302F]/60">Inquiries Contact</dt>
                  <dd className="font-medium text-[#34302F]">{initialBrandConfig.contactEmail}</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-[#34302F]/60">Initial Product</dt>
                  <dd className="font-medium text-[#34302F]">{initialBrandConfig.product.name}</dd>
                </div>
              </dl>
            </div>
          )}

          {activeTab === 'assets' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg text-[#34302F]">Art-Directed Visual Assets</h4>
              <p className="text-xs text-[#34302F]/60">
                Generated high-resolution photography ready to swap when physical inventory arrives.
              </p>

              <div className="space-y-3">
                <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#34302F]/10 flex items-center gap-3">
                  <img
                    src={BRAND_IMAGES.hero}
                    alt="Hero asset preview"
                    className="w-14 h-14 object-cover rounded-lg shrink-0 border border-[#34302F]/10"
                  />
                  <div className="text-xs min-w-0">
                    <div className="font-medium text-[#34302F]">Hero Nursery Still Life</div>
                    <div className="text-[11px] text-[#34302F]/50 truncate">
                      {BRAND_IMAGES.hero}
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#34302F]/10 flex items-center gap-3">
                  <img
                    src={BRAND_IMAGES.product}
                    alt="Product asset preview"
                    className="w-14 h-14 object-cover rounded-lg shrink-0 border border-[#34302F]/10"
                  />
                  <div className="text-xs min-w-0">
                    <div className="font-medium text-[#34302F]">First Collection Contour Pillow</div>
                    <div className="text-[11px] text-[#34302F]/50 truncate">
                      {BRAND_IMAGES.product}
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#34302F]/10 flex items-center gap-3">
                  <img
                    src={BRAND_IMAGES.packaging}
                    alt="Packaging asset preview"
                    className="w-14 h-14 object-cover rounded-lg shrink-0 border border-[#34302F]/10"
                  />
                  <div className="text-xs min-w-0">
                    <div className="font-medium text-[#34302F]">Rigid Gift Box Packaging Case</div>
                    <div className="text-[11px] text-[#34302F]/50 truncate">
                      {BRAND_IMAGES.packaging}
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#34302F]/10 flex items-center gap-3">
                  <img
                    src={BRAND_IMAGES.textile}
                    alt="Textile asset preview"
                    className="w-14 h-14 object-cover rounded-lg shrink-0 border border-[#34302F]/10"
                  />
                  <div className="text-xs min-w-0">
                    <div className="font-medium text-[#34302F]">Organic Cotton Weave Texture</div>
                    <div className="text-[11px] text-[#34302F]/50 truncate">
                      {BRAND_IMAGES.textile}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FFFFFF] border-t border-[#34302F]/10 flex items-center justify-between text-xs text-[#34302F]/70">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Pre-Launch Ready</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#FAF7F2] border border-[#34302F]/15 rounded-lg hover:bg-[#34302F]/5 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
