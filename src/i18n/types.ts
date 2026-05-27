export interface NavDictionary {
  inicio: string;
  appMovil: string;
  appAI: string;
  appWeb: string;
  faq: string;
}

export interface HeroDictionary {
  titleBefore: string;
  highlightedText: string;
  titleAfter: string;
  description: string;
}

export interface MobileFeatureItem {
  title: string;
  description: string;
  icon: string;
  align: "left" | "right";
}

export interface StepImage {
  src: string;
  alt: string;
}

export interface StepItem {
  title: string;
  description: string;
  images: StepImage[];
  badges?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WebProfessionalFeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface ResourceLink {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  github: { user: string; url: string } | null;
  linkedin: { user: string; url: string } | null;
  email: string | null;
}

export interface FooterDictionary {
  description: string;
  navigation: string;
  usefulResources: string;
  team: string;
  copyright: string;
  resourcesLinks: ResourceLink[];
  teamMembers: TeamMember[];
}

export interface BadgeDictionary {
  comingSoon: string;
}

export interface AIDictionary {
  title: string;
  subtitle: string;
  riskLabel: string;
  complications: Array<{ name: string; risk: string; icon: string; description?: string }>;
  steps: Array<{ title: string; description: string; icon: string }>;
  stat: string;
  statDetail: string;
}

export interface ImageAltDictionary {
  webDashboard: string;
  mobileDashboard: string;
}

export interface Dictionary {
  nav: NavDictionary;
  hero: HeroDictionary;
  mobileFeatures: {
    title: string;
    items: MobileFeatureItem[];
  };
  mobileHowItWorks: {
    title: string;
    steps: StepItem[];
  };
  mobileCTA: {
    title: string;
    description: string;
  };
  webFeatures: {
    title: string;
    items: WebProfessionalFeatureItem[];
  };
  webHowItWorks: {
    title: string;
    steps: StepItem[];
    loginButton: string;
    registerButton: string;
    comingSoon: string;
  };
  webCTA: {
    title: string;
    description: string;
    loginButton: string;
    registerButton: string;
    comingSoon: string;
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  footer: FooterDictionary;
  badges: BadgeDictionary;
  alt: ImageAltDictionary;
  ai: AIDictionary;
  backToTop: string;
  openMenu: string;
  closeMenu: string;
}
