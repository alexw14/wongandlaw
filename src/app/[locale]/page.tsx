'use client';
import HeroSection from '@/components/HeroSection';
import AboutStatsSection from '@/components/AboutStatsSection';
import KeyValuesSection from '@/components/KeyValuesSection';
import LegalServicesSection from '@/components/LegalServicesSection';
import RecentNewsSection from '@/components/RecentNewsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutStatsSection />
      <KeyValuesSection />
      <LegalServicesSection />
      <RecentNewsSection />
    </>
  );
}
