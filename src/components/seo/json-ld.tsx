import { services, serviceCities, site } from "@/config/site";
import { absoluteUrl } from "@/config/seo";

export function LocalBusinessJsonLd() {
  const telephone = site.phoneHref.replace(/^tel:/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": absoluteUrl("/#localbusiness"),
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: absoluteUrl("/"),
    telephone,
    image: absoluteUrl("/images/new-vision-logo.png"),
    logo: absoluteUrl("/images/new-vision-logo.png"),
    slogan: site.tagline,
    priceRange: "$$",
    currenciesAccepted: "USD",
    availableLanguage: "English",
    areaServed: serviceCities.map((city) => ({
      "@type": "City",
      name: `${city}, Texas`,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Katy",
      addressRegion: "TX",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      areaServed: "US-TX",
      availableLanguage: "English",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto glass services",
      itemListElement: services
        .filter((service) => !service.comingSoon)
        .map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
