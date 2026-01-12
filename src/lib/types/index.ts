// Service Types
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  pricingFactors: string[];
  image: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// Destination Types
export interface Destination {
  id: string;
  slug: string;
  country: string;
  countryCode: string;
  flag: string;
  description: string;
  transitTimeAir: string;
  transitTimeSea: string;
  majorPorts: string[];
  majorAirports: string[];
  customsInfo: string;
  documentation: string[];
  routes: Route[];
  faqs: FAQ[];
  image: string;
}

export interface Route {
  id: string;
  slug: string;
  originCity: string;
  originPort: string;
  originCountry: string;
  destinationCity: string;
  destinationPort: string;
  destinationCountry: string;
  destinationSlug: string;
  serviceType: 'air' | 'sea';
  transitTime: string;
  frequency: string;
  containerOptions?: ContainerOption[];
  airCargoOptions?: AirCargoOption[];
  pricingStructure: string[];
  popularGoods: string[];
  isPopular: boolean;
  // Enhanced route page fields
  heroFeatures?: string[];
  containerPricing?: ContainerPricing[];
  originPortInfo?: PortInfo;
  destinationPortInfo?: PortInfo;
  sailingSchedule?: SailingSchedule;
  containerTypes?: ContainerTypeInfo[];
  serviceTiers?: ServiceTier[];
  shippingProcess?: ShippingProcessStep[];
  requiredDocuments?: string[];
  corridorInfo?: ShippingCorridor;
  routeStats?: RouteStats;
  faqs?: FAQ[];
}

// Enhanced Route Page Types
export interface ContainerPricing {
  type: string;
  label?: string;
  dimensions: string;
  transitTime: string;
  priceRange: string;
}

export interface PortInfo {
  name: string;
  code?: string;
  description: string;
}

export interface SailingSchedule {
  frequency: string;
  transitDays: string;
  departureDays?: string[];
}

export interface ContainerTypeInfo {
  type: string;
  name: string;
  description: string;
  icon: string;
}

export interface ServiceTier {
  name: 'express' | 'standard' | 'economy';
  label: string;
  transitTime: string;
  pricePerCBM: string;
  features: string[];
  isPopular?: boolean;
}

export interface ShippingProcessStep {
  step: number;
  title: string;
  description: string;
  timeline: string;
  userRole: string;
}

export interface ShippingCorridor {
  significance: string;
  commonCargo: string[];
  seasonalPatterns: string;
  regulations: string;
  economicFactors: string;
}

export interface RouteStats {
  yearsExperience: number;
  containersShipped: string;
  reliabilityRate: string;
  supportAvailability: string;
}

export interface ContainerOption {
  type: string;
  dimensions: string;
  maxWeight: string;
  description: string;
}

export interface AirCargoOption {
  type: string;
  maxWeight: string;
  description: string;
}

// Port Types
export interface Port {
  id: string;
  name: string;
  code: string;
  city: string;
  country: string;
  type: 'sea' | 'air' | 'both';
  description: string;
  isOrigin: boolean;
}

// Blog Types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  image: string;
  featured: boolean;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

// Quote Request Types
export interface QuoteRequest {
  id?: string;
  shippingType: 'sea' | 'air' | 'door-to-door';
  originCity: string;
  originPort?: string;
  destinationCity: string;
  destinationPort?: string;
  cargoType: string;
  cargoDescription: string;
  weight: number;
  weightUnit: 'kg' | 'lbs';
  dimensions?: Dimensions;
  containerType?: string;
  quantity: number;
  timeline: string;
  incoterm?: string;
  specialRequirements?: string;
  contact: ContactInfo;
  createdAt?: string;
}

export interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: 'cm' | 'in';
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  position?: string;
}

// FAQ Types
export interface FAQ {
  question: string;
  answer: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  route?: string;
}

// Statistics Types
export interface Statistic {
  value: string;
  label: string;
  description?: string;
}

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}
