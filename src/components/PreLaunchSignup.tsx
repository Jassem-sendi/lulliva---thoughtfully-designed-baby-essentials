import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import { saveSubscriber } from '../utils/storage';

interface PreLaunchSignupProps {
  onOpenPrivacy: () => void;
  onSubscriberAdded?: () => void;
}

export const PreLaunchSignup: React.FC<PreLaunchSignupProps> = ({
  onOpenPrivacy,
  onSubscriberAdded,
}) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successInfo, setSuccessInfo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please provide an email address.');
      return;
    }

    if (!consent) {
      setStatus('error');
      setErrorMessage('Please confirm your consent to receive launch updates.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      const result = saveSubscriber(email, 'website_prelaunch_section');
      if (result.success) {
        setStatus('success');
        setSuccessInfo(result.message);
        setEmail('');
        setConsent(false);
        if (onSubscriberAdded) onSubscriberAdded();
      } else {
        setStatus('error');
        setErrorMessage(result.message);
      }
    }, 400);
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
    setSuccessInfo('');
  };

  return (
    <section id="signup" className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#34302F]/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-14 border border-[#34302F]/10 shadow-[0_20px_50px_-25px_rgba(52,48,47,0.08)]">
          <div className="max-w-2xl mx-auto text-center">
            {/* Kicker */}
            <div className="text-xs tracking-widest text-[#B9A99A] font-semibold uppercase mb-3">
              Early Access & Updates
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#34302F] tracking-tight mb-4">
              Be Part of the Beginning.
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#34302F]/75 leading-relaxed mb-8">
              Get a first look at Lulliva, discover what's coming next, and be among the first to hear when our Amazon listing goes live.
            </p>

            {status === 'success' ? (
              <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#C99499]/30 text-center animate-in fade-in-50 duration-300">
                <div className="w-12 h-12 rounded-full bg-[#EBCFD0]/40 text-[#34302F] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C99499]" />
                </div>
                <h3 className="font-serif text-2xl text-[#34302F] mb-2">Welcome to Lulliva</h3>
                <p className="text-sm text-[#34302F]/75 mb-6 max-w-md mx-auto leading-relaxed">
                  {successInfo}
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs font-semibold text-[#34302F] underline underline-offset-4 hover:text-[#C99499] cursor-pointer"
                >
                  Register another email address
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="text-left space-y-4 max-w-lg mx-auto">
                {/* Input Row */}
                <div>
                  <label htmlFor="email-input" className="block text-xs font-medium text-[#34302F]/80 mb-1.5">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#34302F]/40">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="your.email@example.com"
                      autoComplete="email"
                      aria-invalid={status === 'error' && !email ? 'true' : 'false'}
                      aria-describedby={status === 'error' ? 'form-error' : undefined}
                      className="w-full pl-10 pr-4 py-3 bg-[#FFFFFF] rounded-xl border border-[#34302F]/20 text-[#34302F] placeholder-[#34302F]/40 text-sm focus:outline-none focus:border-[#C99499] focus:ring-1 focus:ring-[#C99499] transition-all"
                    />
                  </div>
                </div>

                {/* Affirmative Consent Checkbox (not preselected per requirement) */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    id="consent-checkbox"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (status === 'error') setStatus('idle');
                    }}
                    className="mt-0.5 w-4 h-4 rounded border-[#34302F]/30 text-[#34302F] focus:ring-[#C99499] accent-[#34302F] cursor-pointer"
                  />
                  <label htmlFor="consent-checkbox" className="text-xs text-[#34302F]/70 leading-relaxed cursor-pointer select-none">
                    I agree to receive launch updates and product announcements from Lulliva. You can unsubscribe at any time. View our{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="text-[#34302F] underline underline-offset-2 hover:text-[#C99499] cursor-pointer inline"
                    >
                      Privacy Policy
                    </button>.
                  </label>
                </div>

                {/* Inline Error Message */}
                {status === 'error' && (
                  <div id="form-error" className="flex items-center gap-2 text-xs text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200" role="alert">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 px-6 text-xs uppercase tracking-wider font-semibold text-[#FAF7F2] bg-[#34302F] rounded-xl hover:bg-[#34302F]/90 active:scale-[0.99] transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Saving Your Preferences...</span>
                      </>
                    ) : (
                      <>
                        <span>Keep Me Updated</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Honest backend status caption */}
                <p className="text-[11px] text-[#34302F]/50 text-center pt-2">
                  Stored securely in pre-launch local storage · Ready for export to your launch list
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
