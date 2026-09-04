import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: "ar",
      },
      {
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, iOS, Windows",
        description: SITE_DESCRIPTION,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EGP",
          lowPrice: "600",
          highPrice: "5000",
        },
        inLanguage: "ar",
        url: SITE_URL,
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "ar",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
