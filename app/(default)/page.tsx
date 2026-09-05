export const metadata = {
  title: "إدارة محافظك الإلكترونية ومحلك بالكامل مع Cashy Link",
  description:
    "Cashy Link يساعدك تدير مبيعاتك، محافظك الإلكترونية، الأقساط، الديون والصيانة من تطبيق واحد.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Downloads from "@/components/downloads";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";
import AboutPrivacy from "@/components/about-privacy";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Downloads />
      <Pricing />
      <Cta />
      <AboutPrivacy />
    </>
  );
}
