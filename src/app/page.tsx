import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ValuePropositions from '@/components/sections/ValuePropositions';
import CategoriesOverview from '@/components/sections/CategoriesOverview';
import FeaturedCourses from '@/components/sections/FeaturedCourses';
import GDGPartnership from '@/components/sections/GDGPartnership';
import QuizVerificationSection from '@/components/sections/QuizVerificationSection';
import LearningProgressSection from '@/components/sections/LearningProgressSection';
import Testimonials from '@/components/sections/Testimonials';
import CommunitySection from '@/components/sections/CommunitySection';
import CTABanner from '@/components/sections/CTABanner';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <ValuePropositions />
      <CategoriesOverview />
      <FeaturedCourses />
      <GDGPartnership />
      <QuizVerificationSection />
      <LearningProgressSection />
      <Testimonials />
      <CommunitySection />
      <CTABanner />
      <Footer />
    </main>
  );
}
