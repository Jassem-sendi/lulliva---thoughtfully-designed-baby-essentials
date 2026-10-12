export interface BrandConfig {
  name: string;
  tagline: string;
  announcement: string;
  contactEmail: string;
  instagramHandle: string;
  market: string;
  distributionChannel: string;
  launchStage: string;
  colors: {
    ivory: string;
    blush: string;
    rose: string;
    taupe: string;
    charcoal: string;
    white: string;
  };
  product: {
    name: string;
    status: string;
    category: string;
    description: string;
    colorway: string;
    channel: string;
    safetyNotice: string;
    plannedAttributes: { label: string; value: string }[];
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
  source: string;
}
