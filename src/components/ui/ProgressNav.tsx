import { useLocale } from '../../hooks/useLocale';
import type { StorySection } from '../../types/story';

export function ProgressNav({ sections, activeId }: { sections: StorySection[]; activeId: string }) {
  const { t, locale } = useLocale();

  return (
    <nav
      aria-label={locale === 'pt' ? 'Progresso da leitura' : 'Reading progress'}
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3"
    >
      {sections.map((section) => {
        const isActive = section.id === activeId;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex items-center justify-end"
            aria-current={isActive ? 'true' : undefined}
          >
            <span
              className={`pointer-events-none absolute right-6 whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 ${
                isActive ? 'text-[var(--amber)]' : 'text-[var(--text-dim)]'
              }`}
            >
              {t(section.eyebrow)}
            </span>
            <span
              className={`h-2.5 w-2.5 rounded-full border transition-all ${
                isActive
                  ? 'border-[var(--amber)] bg-[var(--amber)] scale-125'
                  : 'border-[var(--border)] bg-transparent group-hover:border-[var(--text-dim)]'
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
