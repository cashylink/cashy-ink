import "./css/style.css";

import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";

import Header from "@/components/ui/header";
import JsonLd from "@/components/json-ld";
import SupportChat from "@/components/support-chat";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | إدارة محافظك الإلكترونية ومحلك بالكامل`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Cashy Link",
    "إدارة محلات",
    "إدارة مبيعات",
    "محافظ إلكترونية",
    "أقساط",
    "ديون",
    "صيانة موبايلات",
    "محلات موبايلات",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
    languages: { ar: "/" },
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | إدارة محافظك الإلكترونية ومحلك بالكامل`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero-image-01.jpg",
        width: 1104,
        height: 576,
        alt: "واجهة Cashy Link",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | إدارة محافظك الإلكترونية ومحلك بالكامل`,
    description: SITE_DESCRIPTION,
    images: ["/images/hero-image-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} overflow-x-clip`}>
      <body
        className={`${cairo.className} overflow-x-clip bg-gray-950 text-base text-gray-200 antialiased overscroll-x-none`}
      >
        <JsonLd />
        <div className="flex min-h-screen flex-col overflow-x-clip">
          <Header />
          {children}
          <SupportChat />
        </div>
      </body>
    </html>
  );
}
