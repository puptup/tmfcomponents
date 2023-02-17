export type Language = "ru" | "en"

export type BenefitCardType = {
  iconName: string;
  title: string;
  id: string;
  text: string;
};

export type TestimonalCardType = {
  id: string;
  image: string;
  name: string;
  role: string;
  text: string;
};

export type PricingCardType = {
  id: string;
  name: string;
  pricePerYear: number | null;
  pricePerMonth: number;
  benefits: string[];
};

export type Pricing = "monthly" | "yearly";
export type ChoosedPlan = {
  name: string;
  price: number;
  benefits: string[];
};

export type BlogCardType = {
  id: string;
  image: string;
  date: string;
  title: string;
  text: string;
  author: string;
  views: number;
  tags: string[];
};

export type ServiceCardType = {
  id: string;
  image: string;
  title: string;
  description: string;
};

export type CountactUsFormValues = {
  email: string;
  name: string;
  theme: string;
  message: string;
};

export type SolutionCardType = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type ArticleBlockType = {
  title: string;
  description: string | string[];
  image?: string;
  list?: string[];
};
