import type {
  NavItem,
  TrustPoint,
  StatItem,
  ProcessStep,
  ValueProp,
  SocialLink,
} from "@/types";

export const siteConfig = {
  name: "FARSAH Tutors",
  tagline: "LEARN • GROW • ACHIEVE",
  description:
    "FARSAH Tutors is an international education brand offering personalized tutoring and academic support across subjects, levels, and countries.",
  // Placeholder contact details — replace with real business information.
  email: "farsahtutors@gmail.com",
  phone: "+971558410520",
  // Digits only, no symbols/spaces — used to build the wa.me deep link.
  whatsappNumber: "971558410520",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM (GMT)",
  address: "Available online, worldwide",
};

export const primaryNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Tutors", href: "/tutors" },
  // { label: "Success Stories ", href: "/student-success" },

  { label: "How It Works", href: "/how-it-works" },
  { label: "Why FARSAH", href: "/why-farsah" },
  { label: "FAQ", href: "/faq" },
];

export const mobileNavItems: NavItem[] = [
  ...primaryNavItems,
  { label: "Success Stories", href: "/student-success" },
  { label: "Contact", href: "/contact" },
  { label: "AI Assistant", href: "/ai-assistant" },
];

export const footerNavItems: NavItem[] = mobileNavItems;

export const legalNavItems: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19aZPbkuGo/",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/farsahtutors",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/farsah-tutors",
    icon: "linkedin",
  },
];

export const trustPoints: TrustPoint[] = [
  {
    id: "qualified-tutors",
    title: "Qualified Tutors",
    description:
      "Educators selected for subject expertise and teaching ability.",
    icon: "safety-certificate",
  },
  {
    id: "personalized-learning",
    title: "Personalized Learning",
    description: "Support shaped around each student's pace and goals.",
    icon: "user",
  },
  {
    id: "flexible-learning",
    title: "Flexible Learning",
    description: "Sessions that fit around school, work, and time zones.",
    icon: "clock-circle",
  },
  {
    id: "student-focused",
    title: "Student-Focused Approach",
    description: "Progress measured by understanding, not just completion.",
    icon: "smile",
  },
  {
    id: "international-accessibility",
    title: "International Accessibility",
    description: "Quality tutoring available to learners across countries.",
    icon: "global",
  },
];

// Placeholder figures — replace with verified business statistics.
export const statistics: StatItem[] = [
  { id: "students", label: "Students Supported", value: "1,000+" },
  { id: "tutors", label: "Expert Tutors", value: "50+" },
  { id: "subjects", label: "Subjects Covered", value: "20+" },
  { id: "countries", label: "Countries Reached", value: "15+" },
  { id: "satisfaction", label: "Student Satisfaction", value: "95%" },
];

export const processSteps: ProcessStep[] = [
  {
    id: "goals",
    number: "01",
    title: "Tell Us Your Goals",
    description:
      "Share what the student needs help with and what success looks like.",
  },
  {
    id: "explore",
    number: "02",
    title: "Explore Your Options",
    description: "Review matched programs and tutors suited to those goals.",
  },
  {
    id: "start",
    number: "03",
    title: "Start Learning",
    description:
      "Begin sessions with a tutor in a structure that fits the student.",
  },
  {
    id: "grow",
    number: "04",
    title: "Grow & Achieve",
    description: "Track progress over time and build lasting confidence.",
  },
];

export const valueProps: ValueProp[] = [
  {
    id: "personalized-learning",
    title: "Personalized Learning",
    description: "Learning experiences adapted to individual needs.",
    icon: "user",
  },
  {
    id: "expert-tutors",
    title: "Expert Tutors",
    description: "Qualified educators focused on student development.",
    icon: "safety-certificate",
  },
  {
    id: "flexible-learning",
    title: "Flexible Learning",
    description: "Learning designed around student schedules.",
    icon: "clock-circle",
  },
  {
    id: "student-focused",
    title: "Student-Focused Approach",
    description: "Focus on understanding, progress, and confidence.",
    icon: "smile",
  },
  {
    id: "global-accessibility",
    title: "Global Accessibility",
    description: "Quality education beyond geographical boundaries.",
    icon: "global",
  },
  {
    id: "supportive-environment",
    title: "Supportive Environment",
    description:
      "A welcoming environment where students can learn comfortably.",
    icon: "heart",
  },
];

export const aiSuggestedPrompts: string[] = [
  "Which program is right for me?",
  "What subjects do you offer?",
  "How does FARSAH Tutors work?",
  "Tell me about your tutors.",
];
