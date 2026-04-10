'use client';

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-base">
      <Header />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
        </div>
      </main>
    </div>
  );
}
