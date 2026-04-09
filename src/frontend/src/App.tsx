import { Layout } from "./Layout";
import { AboutSection } from "./pages/AboutSection";
import { ContactSection } from "./pages/ContactSection";
import { FavoritesSection } from "./pages/FavoritesSection";
import { HeroSection } from "./pages/HeroSection";
import { MenuSection } from "./pages/MenuSection";
import { TestimonialsSection } from "./pages/TestimonialsSection";
import { VisitUsSection } from "./pages/VisitUsSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <VisitUsSection />
      <FavoritesSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}
