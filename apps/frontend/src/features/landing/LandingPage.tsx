import Hero from "./components/Hero";
import FeaturesSection from "./components/Features";
import PipelineSection from "./components/Pipeline";
import DashboardPreview from "./components/DashboardPreview";
import ResearchSources from "./components/ResearchSources";
import ArchitectureSection from "./components/Architecture";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PipelineSection />
      <DashboardPreview />
      <ResearchSources /> 
      <ArchitectureSection />
    </>
  );
}