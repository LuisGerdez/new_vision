import { paths } from "@/config/paths";

export const site = {
  name: "New Vision Auto Glass",
  legalName: "New Vision Auto Glass LLC",
  phoneDisplay: "281-712-7165",
  phoneHref: "tel:+12817127165",
  location: "Katy & Houston",
  locationShort: "Katy / Houston",
  tagline: "Clear Vision. Safer Roads.",
  missionScript: "Your Vision. Our Mission.",
  aboutScript: "Quality Glass. Professional Service.",
  description:
    "Professional mobile auto glass service in Katy & Houston. We come to your home, work, or wherever you need us.",
  hours: [
    { label: "Monday – Saturday", value: "7:00 AM – 7:00 PM" },
    { label: "Sunday", value: "By appointment" },
  ],
  social: [
    { label: "Facebook", href: "#", icon: "facebook" as const },
    { label: "Instagram", href: "#", icon: "instagram" as const },
  ],
} as const;

export const navItems = [
  { label: "Home", href: paths.home },
  { label: "Services", href: paths.services },
  { label: "About Us", href: paths.about },
  { label: "Service Area", href: paths.serviceArea },
  { label: "Gallery", href: paths.gallery },
  { label: "Contact", href: paths.contact },
] as const;

export const services = [
  {
    slug: "windshield-replacement",
    title: "Windshield Replacement",
    shortTitle: "Windshield Replacement",
    description:
      "OEM-quality windshield replacement at your home or workplace. We calibrate ADAS systems when required so your safety features stay accurate.",
    image: "/images/service-windshield.png",
    imageAlt: "Newly installed automotive windshield reflecting the sky",
    comingSoon: false,
  },
  {
    slug: "side-rear-glass",
    title: "Side & Rear Glass Replacement",
    shortTitle: "Side & Rear Glass Replacement",
    description:
      "Cracked door glass, quarter glass, or a shattered back window — we replace side and rear auto glass with a precise, weather-tight fit.",
    image: "/images/service-side-glass.png",
    imageAlt: "Car side window and rear quarter glass",
    comingSoon: false,
  },
  {
    slug: "window-regulator",
    title: "Window Regulator Replacement",
    shortTitle: "Window Regulator Replacement",
    description:
      "If your window will not roll up or down, we diagnose and replace failed regulators and motors so the glass operates smoothly again.",
    image: "/images/service-regulator.png",
    imageAlt: "Car door window regulator mechanism",
    comingSoon: false,
  },
  {
    slug: "window-tinting",
    title: "Window Tinting",
    shortTitle: "Window Tinting",
    description:
      "Professional automotive window tinting for heat rejection, privacy, and a clean finish. This service is coming soon to New Vision Auto Glass.",
    image: "/images/service-tinting.png",
    imageAlt: "Dark tinted pickup truck window",
    comingSoon: true,
  },
] as const;

export const values = [
  {
    title: "Quality Work",
    description: "Top-grade glass and reliable materials.",
    icon: "shield" as const,
  },
  {
    title: "Fast Service",
    description: "Get back on the road as soon as possible.",
    icon: "clock" as const,
  },
  {
    title: "Mobile Service",
    description: "We come to you — home, work or anywhere.",
    icon: "pin" as const,
  },
  {
    title: "Trusted & Professional",
    description: "Your safety is our priority.",
    icon: "handshake" as const,
  },
] as const;

export const aboutHighlights = [
  "Experienced & professional technicians",
  "Mobile service for your convenience",
  "Competitive pricing with no hidden fees",
] as const;

export const testimonials = [
  {
    name: "James R.",
    quote:
      "Fast, professional and super friendly. They came to my house and had my windshield replaced in no time. Highly recommend!",
    image: "/images/avatar-james.png",
    rating: 5,
  },
  {
    name: "Jessica M.",
    quote:
      "Great service and great price! The technician was on time, explained everything and did an amazing job.",
    image: "/images/avatar-jessica.png",
    rating: 5,
  },
  {
    name: "Robert T.",
    quote:
      "Best auto glass experience I've had. Very professional and the quality is outstanding.",
    image: "/images/avatar-robert.png",
    rating: 5,
  },
] as const;

export const serviceCities = [
  "Katy",
  "Houston",
  "Sugar Land",
  "Cypress",
  "Fulshear",
  "Richmond",
  "Rosenberg",
  "Missouri City",
  "Memorial",
  "Energy Corridor",
  "Brookshire",
  "Sealy",
] as const;

export const galleryImages = [
  {
    src: "/images/gallery-1.png",
    alt: "View through a newly installed windshield",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Mobile auto glass service at a customer driveway",
  },
  {
    src: "/images/gallery-3.png",
    alt: "Suction cups on a windshield during installation",
  },
  {
    src: "/images/gallery-4.png",
    alt: "Pickup truck rear window glass",
  },
  {
    src: "/images/gallery-5.png",
    alt: "SUV with a replaced windshield in a driveway",
  },
  {
    src: "/images/gallery-6.png",
    alt: "Automotive glass inventory ready for installation",
  },
] as const;

export const heroBadges = [
  { label: "Quality Workmanship", icon: "shield" as const },
  { label: "Fast & Reliable Service", icon: "clock" as const },
  { label: "Competitive Pricing", icon: "handshake" as const },
] as const;
