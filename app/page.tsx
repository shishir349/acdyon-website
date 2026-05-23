import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProgramCategories from "@/components/sections/ProgramCategories";
import WhyAcdyOn from "@/components/sections/WhyAcdyOn";
import WhoIsThisFor from "@/components/sections/WhoIsThisFor";
import FeaturedAIProgram from "@/components/sections/FeaturedAIProgram";
import UniversityNetwork from "@/components/sections/UniversityNetwork";
import SuccessStories from "@/components/sections/SuccessStories";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProgramCategories />
      <WhyAcdyOn />
      <WhoIsThisFor />
      <FeaturedAIProgram />
      <UniversityNetwork />
      <SuccessStories />
      <ProcessTimeline />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
