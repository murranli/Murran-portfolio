'use client';

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-base">
      <Header />

      <main className="pt-24 pb-16 px-6 sm:px-8 lg:px-12 mx-auto max-w-container">
        <HeroSection />
      </main>
    </div>
  );
}
