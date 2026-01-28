import { HeroSection } from "@/components/sections/hero-section";
import { HadithSection } from "@/components/sections/hadith-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <HeroSection />
      <HadithSection />
    </main>
  );
}
