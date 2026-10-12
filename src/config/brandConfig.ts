import { BrandConfig, FAQItem } from '../types';

export const initialBrandConfig: BrandConfig = {
  name: 'Lulliva',
  tagline: 'Little Moments. Thoughtfully Made.',
  announcement: "Something thoughtful is on its way.",
  contactEmail: 'inquiries@lullivababy.com',
  instagramHandle: '@lullivababy',
  market: 'United States',
  distributionChannel: 'Amazon FBA (Launch Partner)',
  launchStage: 'Pre-launch Preparation',
  colors: {
    ivory: '#FAF7F2',
    blush: '#EBCFD0',
    rose: '#C99499',
    taupe: '#B9A99A',
    charcoal: '#34302F',
    white: '#FFFFFF',
  },
  product: {
    name: 'The First Sleep Essential',
    status: 'In Pre-Launch Preparation',
    category: 'Baby Care & Nursery Essentials',
    description:
      'Our journey begins with a thoughtfully considered approach to baby essentials. We are preparing our first product with a focus on visual identity, presentation, and the details that make a brand feel distinctive.',
    colorway: 'Soft Blush with Warm Ivory Trim',
    channel: 'Amazon FBA (United States)',
    safetyNotice:
      'Exact product specifications, intended age range, and applicable consumer product safety certifications will be published prior to commercial availability.',
    plannedAttributes: [
      { label: 'Initial Form', value: 'Contour Nursery Comfort Cushion' },
      { label: 'Color Direction', value: 'Subtle Blush & Natural Ivory' },
      { label: 'Fabric Aesthetic', value: 'Breathable Organic Woven Cotton' },
      { label: 'Initial Market', value: 'United States via Amazon FBA' },
      { label: 'Availability Stage', value: 'Pre-launch Production Review' },
    ],
  },
};

export const BRAND_IMAGES = {
  hero: '/src/assets/images/hero_lulliva_editorial_1791794320575.jpg',
  product: '/src/assets/images/product_lulliva_pillow_1791794332063.jpg',
  packaging: '/src/assets/images/packaging_lulliva_box_1791794343230.jpg',
  textile: '/src/assets/images/textile_lulliva_macro_1791794352878.jpg',
};

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'what-is-lulliva',
    question: 'What is Lulliva?',
    answer:
      'Lulliva is an emerging baby-products and parenting essentials brand founded on a design-conscious approach. We focus on calm aesthetics, premium presentation, and considered details for modern family spaces.',
  },
  {
    id: 'first-product',
    question: 'What products are you preparing to launch?',
    answer:
      'Our initial debut focuses on a thoughtfully designed pink baby cushion and nursery sleep-related essential. We are currently finalizing technical specifications, developmental age recommendations, and material tests.',
  },
  {
    id: 'launch-timeline',
    question: 'When will Lulliva launch?',
    answer:
      'We are in pre-launch development and will announce our official release date to waitlist subscribers first. Rather than rushing arbitrary deadlines, we are ensuring our packaging, product consistency, and compliance standards meet our exact standards.',
  },
  {
    id: 'where-available',
    question: 'Where will Lulliva products be available?',
    answer:
      'Lulliva will debut in the United States through Amazon FBA for reliable, fast fulfillment. We plan to expand distribution and offer additional nursery essentials as our collection grows.',
  },
  {
    id: 'stay-updated',
    question: 'How can I stay updated?',
    answer:
      'You can join our pre-launch community using the signup form on this page. Subscribers receive thoughtful behind-the-scenes previews, product announcements, and first notification when our Amazon listing goes live.',
  },
  {
    id: 'contact-brand',
    question: 'Where can I contact the brand?',
    answer:
      'For press inquiries, brand collaborations, or wholesale questions, you can reach out directly to inquiries@lullivababy.com. We respond to every inquiry with personal care.',
  },
];
