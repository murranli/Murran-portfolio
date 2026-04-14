'use client';

import { BrandLogo } from './header/BrandLogo';
import { ProjectLink } from './header/ProjectLink';
import { LanguageSwitcher } from './header/LanguageSwitcher';
import { ThemeButton } from './header/ThemeButton';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line-primary bg-background-primary/95 backdrop-blur-sm transition-colors duration-smooth">
      <div className="h-[86px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between max-w-container">
        
        {/* Left Section: Brand + Navigation */}
        <div className="flex items-center gap-2xl">
          {/* Brand Logo */}
          <BrandLogo state="selected" />

          {/* Navigation Items */}
          <nav className="hidden sm:flex items-center gap-2xl">
            <ProjectLink state="selected" />
          </nav>
        </div>

        {/* Right Section: Controls */}
        <div className="flex items-center gap-md">
          <LanguageSwitcher />
          <ThemeButton state="selected" />
        </div>
      </div>
    </header>
  );
}
