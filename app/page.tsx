import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { ServicesV2 } from '@/components/services-v2';
import { SolutionsSection } from '@/components/solutions-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ServicesV2 />
      <SolutionsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
