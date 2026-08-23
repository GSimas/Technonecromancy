import { useLocale } from '../../hooks/useLocale';

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label={locale === 'pt' ? 'Selecionar idioma' : 'Select language'}
      className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 text-sm"
    >
      <button
        type="button"
        onClick={() => setLocale('pt')}
        aria-pressed={locale === 'pt'}
        className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
          locale === 'pt' ? 'bg-[var(--amber)] text-[#0b0b0e]' : 'text-[var(--text-dim)] hover:text-[var(--text)]'
        }`}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
          locale === 'en' ? 'bg-[var(--amber)] text-[#0b0b0e]' : 'text-[var(--text-dim)] hover:text-[var(--text)]'
        }`}
      >
        EN
      </button>
    </div>
  );
}
