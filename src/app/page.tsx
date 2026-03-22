import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModelsSection from "@/components/ModelsSection";
import TechSection from "@/components/TechSection";
import CustomizeSection from "@/components/CustomizeSection";
import FactorySection from "@/components/FactorySection";
import AppSection from "@/components/AppSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <ModelsSection />
      <TechSection />
      <CustomizeSection />
      <FactorySection />
      <AppSection />
      <Footer />
    </main>
  );
}
