/**
 * Site-wide types describing FARSAH's static content shapes.
 * Kept separate from data so future backend/CMS integration can
 * reuse these interfaces without touching component code.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  description: string;
  image: string;
  learningOutcomes: string[];
}

export interface Tutor {
  id: string;
  name: string;
  image: string;
  subject: string;
  qualification: string;
  experience: string;
  languages: string[];
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  role: string;
  image?: string;
  rating: number;
  message: string;
}

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export type FaqCategory =
  | "Students"
  | "Parents"
  | "Programs"
  | "Tutors"
  | "Learning"
  | "General";

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
