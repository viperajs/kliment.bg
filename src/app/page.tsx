import { Hero } from "@/components/home/Hero";
import { QuickLinks } from "@/components/home/QuickLinks";
import { MissionSection } from "@/components/home/MissionSection";
import { AdmissionCards } from "@/components/home/AdmissionCards";
import { NumbersSection } from "@/components/home/NumbersSection";
import { News } from "@/components/home/News";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <MissionSection />
      <AdmissionCards />
      <NumbersSection />
      <News />
    </>
  );
}
