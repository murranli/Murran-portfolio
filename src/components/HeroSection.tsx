'use client';

import { useTranslation } from "@/components/providers/LanguageProvider";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-16">
      {/* Heading 1 Example */}
      <div className="text-center space-y-4">
        <h1 className="text-heading-1 font-bold leading-tight text-foreground">
          {t('hero.title')}
        </h1>
        <p className="text-muted-foreground text-sm">
          {t('hero.titleDesc')}
        </p>
      </div>

      {/* Heading 2 Example */}
      <div className="text-center space-y-4">
        <h2 className="text-heading-2 font-bold leading-tight text-foreground">
          {t('hero.date')}
        </h2>
        <p className="text-muted-foreground text-sm">
          {t('hero.dateDesc')}
        </p>
      </div>

      {/* Body Text Example */}
      <div className="text-center max-w-2xl space-y-4">
        <p className="text-body font-normal leading-normal text-foreground">
          {t('hero.subtitle')}
        </p>
        <p className="text-muted-foreground text-sm">
          {t('hero.subtitleDesc')}
        </p>
      </div>

      {/* Design Token Info */}
      <div className="mt-12 p-8 rounded-lg bg-muted border border-muted-foreground/10">
        <h3 className="text-heading-2 font-bold mb-6">{t('tokens.title')}</h3>
        <div className="space-y-3 text-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-accent">{t('tokens.colors')} ({t('tokens.lightMode')})</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>{t('tokens.background')}: #ffffff</li>
                <li>{t('tokens.foreground')}: #171717</li>
                <li>{t('tokens.accent')}: #0066cc</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-accent">{t('tokens.colors')} ({t('tokens.darkMode')})</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>{t('tokens.background')}: #0a0a0a</li>
                <li>{t('tokens.foreground')}: #ededed</li>
                <li>{t('tokens.accent')}: #3b82f6</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
