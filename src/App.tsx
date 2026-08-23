import type { ComponentType } from 'react';
import { LocaleProvider, useLocale } from './hooks/useLocale';
import { useActiveSection } from './hooks/useActiveSection';
import { sections, meta } from './data/article';
import { SkipLink } from './components/ui/SkipLink';
import { LocaleToggle } from './components/ui/LocaleToggle';
import { ProgressNav } from './components/ui/ProgressNav';
import { Hero } from './components/scrollytelling/Hero';
import { Section } from './components/scrollytelling/Section';
import { Footer } from './components/scrollytelling/Footer';
import { HookVisual } from './components/visualizations/HookVisual';
import { Funnel } from './components/visualizations/Funnel';
import { SimulacraLadder } from './components/visualizations/SimulacraLadder';
import { PreservedVsEmbodied } from './components/visualizations/PreservedVsEmbodied';
import { CaseWindows } from './components/visualizations/CaseWindows';
import { RiskTable } from './components/visualizations/RiskTable';
import { NecroFlow } from './components/visualizations/NecroFlow';
import { GovernanceWheel } from './components/visualizations/GovernanceWheel';

const visualMap: Record<string, ComponentType> = {
  hook: HookVisual,
  funnel: Funnel,
  simulacraLadder: SimulacraLadder,
  preservedVsEmbodied: PreservedVsEmbodied,
  caseWindows: CaseWindows,
  riskTable: RiskTable,
  necroFlow: NecroFlow,
  governanceWheel: GovernanceWheel,
};

function AppShell() {
  const { locale } = useLocale();
  const sectionIds = sections.map((s) => s.id);
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SkipLink />
      <div className="fixed right-4 top-4 z-40 md:right-6 md:top-6">
        <LocaleToggle />
      </div>
      <ProgressNav sections={sections} activeId={activeId} />

      <Hero />

      <main id="conteudo-principal">
        {sections.map((section) => {
          const Visual = visualMap[section.visual];
          return (
            <Section key={section.id} section={section}>
              <Visual />
            </Section>
          );
        })}
      </main>

      <Footer />

      <p className="sr-only" aria-live="polite">
        {locale === 'pt' ? `Idioma atual: português. ${meta.titlePt}` : `Current language: English. ${meta.titleEn}`}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <AppShell />
    </LocaleProvider>
  );
}
