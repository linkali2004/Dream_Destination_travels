export type NavItem = {
  label: string;
  path: string;
};

export type BrandContent = {
  name: string;
  tagline: string;
  logoAlt: string;
};

export type HeroSlide = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

export type Vehicle = {
  id: number;
  name: string;
  image: string;
  seats: number;
  fuel: string;
  luggage: number;
  runningKm: number;
  currentPrice: number;
  previousPrice: number;
  tag: string;
  discount: number;
  category: string;
};

export type VehicleCatalogItem = {
  id?: string;
  name: string;
  image_url: string;
  category?: VehicleCategoryKey;
  created_at?: string;
};

export type VehicleCategoryKey = "sedan" | "muv_suv" | "tempo_traveler" | "van" | "luxury";

export type VehicleCatalog = {
  sedan: VehicleCatalogItem[];
  muv_suv: VehicleCatalogItem[];
  tempo_traveler: VehicleCatalogItem[];
  van: VehicleCatalogItem[];
  luxury: VehicleCatalogItem[];
};

export type TourPackage = {
  id: string;
  name: string;
  region: string;
  zone: string;
  imageurl: string;
  days: string;
  description: string;
  created_at?: string | null;
  city?: string;
};

export type Hotel = {
  id: string;
  name: string;
  city: string;
  location: string;
  pricePerNight: string;
  images: string[];
  description: string;
  amenities: string[];
};

export type FareRow = {
  type: string;
  airport: string;
  roundTrip: string;
  oneWay: string;
  fullDay: string;
  insideCity: string;
  outsideCity: string;
};

export type PopularCity = {
  name: string;
  image: string;
  text: string;
  badge: string;
};

export type PickupVehicle = {
  name: string;
  image: string;
  price: string;
};

export type Testimonial = {
  name: string;
  role: string;
  message: string;
  rating: number;
};

export type SectionContent = {
  title: string;
  subtitle?: string;
};

export type ToursSectionContent = SectionContent & {
  viewMoreLabel?: string;
};

export type HomeContent = {
  heroCtaLabel: string;
  heroSlides: HeroSlide[];
  aboutTitle: string;
  aboutDescription: string;
  trustPoints: string[];
  popularDestinationsSection: SectionContent;
  popularCities: PopularCity[];
  packagesSection: ToursSectionContent;
  featuredTours: TourPackage[];
  fareSection: SectionContent;
  fareRows: FareRow[];
  pickupSection: SectionContent & {
    badges: string[];
    ctaLabel: string;
    viewMoreLabel?: string;
  };
  pickupVehicles: PickupVehicle[];
  testimonialsSection: SectionContent;
  testimonials: Testimonial[];
};

export type ContactContent = {
  section: SectionContent;
  details: {
    phone: string;
    email: string;
    address: string;
  };
  supportCard: {
    title: string;
    description: string;
    points: string[];
  };
  form: {
    submitLabel: string;
    successMessage: string;
    fields: Record<
      "fullName" | "phoneNumber" | "email" | "startingCity" | "destination" | "travelDates" | "travelers" | "vehiclePreference" | "budget" | "message",
      string
    >;
  };
};

export type TravelInquiryPayload = {
  fullName: string;
  phoneNumber: string;
  email: string;
  startingCity: string;
  destination: string;
  travelDates: string;
  travelers: string;
  vehiclePreference: string;
  budget: string;
  message: string;
};

export type ToursPageContent = {
  section: ToursSectionContent;
  customTrip: {
    title: string;
    description: string;
    buttonLabel: string;
  };
};

export type HotelsPageContent = {
  section: SectionContent;
  searchPlaceholder: string;
};

export type TicketContent = {
  section: SectionContent;
  tableHeaders: string[];
  note: string;
};

export type VehiclesPageContent = {
  section: SectionContent;
  card: {
    description: string;
    highlightsHeading: string;
    highlights: string[];
    requestLabel: string;
    ctaLabel: string;
    bookingSuccessTemplate: string;
  };
};

export type FooterContent = {
  description: string;
  services: string[];
  contactLines: string[];
  whyChooseUs: string[];
  policyLinks: string[];
};

export type FloatingActionsContent = {
  whatsappLabel: string;
  whatsappUrl: string;
  callLabel: string;
  callUrl: string;
};

export type SiteContent = {
  navigation: NavItem[];
  brand: BrandContent;
  floatingActions: FloatingActionsContent;
  footer: FooterContent;
  home: HomeContent;
  contact: ContactContent;
  ticket: TicketContent;
  vehiclesPage: VehiclesPageContent;
  toursPage: ToursPageContent;
  hotelsPage: HotelsPageContent;
};
