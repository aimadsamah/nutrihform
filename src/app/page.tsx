import CallToActionSection from "@/components/CallToActionSection";
import HeroSection from "@/components/HeroSection";
import PourquoiNousChoisirSection from "@/components/PourquoiNousChisirSection";
import PresentationSection from "@/components/PresentationCoach";
import ResultsSection from "@/components/ResultsSection";
import ServicesSection from "@/components/ServicesSection";
import TemoignagesSection from "@/components/TemoignagesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <PresentationSection />
      <ServicesSection />
      {/* <ResultsSection /> */}
      <PourquoiNousChoisirSection />
      <TemoignagesSection />
      <CallToActionSection />
    </div>
  );
}
