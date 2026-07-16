import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import VideoShowcase from "../components/VideoShowcase";
import Services from "../components/Services";
import WhyCarrierWeb from "../components/WhyCarrierWeb";
import Sectors from "../components/Sectors";
import DashboardPreview from "../components/DashboardPreview";
import PartnersLogos from "../components/PartnersLogos";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";
import { getDict } from "@/lib/dictionaries";
import { getSiteSettings } from "@/lib/site-settings";
import { getTestimonialsFromWP } from "@/lib/wordpress";
import type { Locale } from "@/lib/i18n";

// Vue d'accueil partagée entre la racine (fr) et app/[locale] (ar/en).
export default async function HomeView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const settings = await getSiteSettings(locale);
  // WordPress ne porte que le FR : ar/en gardent les témoignages du dictionnaire.
  const testimonials = locale === "fr" ? (await getTestimonialsFromWP()) ?? undefined : undefined;
  return (
    <>
      <StructuredData locale={locale} dict={dict} />
      <Header locale={locale} dict={dict} />
      <main id="main-content" role="main">
        <Hero locale={locale} dict={dict} settings={settings} />
        <TrustBar dict={dict} />
        <VideoShowcase dict={dict} />
        <Services locale={locale} dict={dict} />
        <WhyCarrierWeb locale={locale} dict={dict} />
        <Sectors locale={locale} dict={dict} />
        <DashboardPreview dict={dict} />
        <PartnersLogos dict={dict} />
        <Testimonials dict={dict} items={testimonials} />
        <FAQSection dict={dict} />
        <CTASection locale={locale} dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
