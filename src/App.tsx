import { HeroSection } from "./components/HeroSection";
import { ValueProposition } from "./components/ValueProposition";
import { AppPreview } from "./components/AppPreview";
import { AITutor } from "./components/AITutor";
import { FeatureGrid } from "./components/FeatureGrid";
import { IntegrationsSection } from "./components/IntegrationsSection";
import { ForSchools } from "./components/ForSchools";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

// EduTrack AI School Management Platform
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <HeroSection />
      <ValueProposition />
      <AppPreview />
      <AITutor />
      <FeatureGrid />
      <IntegrationsSection />
      <ForSchools />
      <Pricing />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}