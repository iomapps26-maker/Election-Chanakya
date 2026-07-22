export type PageRoute = 
  | 'home'
  | 'about'
  | 'services'
  | 'team'
  | 'projects'
  | 'gallery'
  | 'blog'
  | 'contact'
  | 'careers'
  | 'faq'
  | 'testimonials'
  | 'privacy'
  | 'terms'
  | 'disclaimer'
  | 'cookie-policy'
  | 'refund-policy'
  | 'sitemap'
  | '404';

export interface LeadItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject?: string;
  message?: string;
  serviceRequested?: string;
  sourceForm: 'Consultation Modal' | 'Contact Page' | 'Career Application' | 'Footer Quick Inquiry' | 'Services Spec Request';
  submittedAt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  highlightText: string;
  tagline: string;
  image: string;
  ctaText: string;
  secondaryCtaText: string;
  stats: { label: string; value: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  specialization: string[];
  isCEO?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  constituencyType: string;
  state: string;
  year: string;
  image: string;
  swingAchieved: string;
  votersReached: string;
  description: string;
  results: string[];
  category: 'assembly' | 'parliamentary' | 'local' | 'survey';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'War Room' | 'Campaigns' | 'Surveys' | 'Analytics' | 'Media';
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  location: string;
  department: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Surveys' | 'War Room' | 'Legal & Privacy';
}

export interface TestimonialItem {
  id: string;
  name: string;
  designation: string;
  partyAffiliation?: string;
  quote: string;
  rating: number;
  videoUrl?: string;
  image: string;
}
