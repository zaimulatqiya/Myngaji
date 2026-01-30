"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { HadithSection } from "@/components/sections/hadith-section";
import { SenaraiPakejKelas } from "@/components/sections/senarai-pakej-kelas";
import ModernBackgroundPaths from "@/components/modern-background-paths";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <HeroSection />
      <HadithSection />
      <SenaraiPakejKelas />
      <ModernBackgroundPaths />

      <FooterSection />
    </main>
  );
}
