import { useState, useEffect } from 'react';
import { useLocale } from '../../hooks/useLocale';
import { useAccessibility } from '../../hooks/useAccessibility';
import { LocaleToggle } from './LocaleToggle';
import type { StorySection } from '../../types/story';
import { meta } from '../../data/article';

interface HeaderProps {
  sections: StorySection[];
  activeId: string;
  onOpenCite: () => void;
}

export function Header({ sections, activeId, onOpenCite }: HeaderProps) {
  const { locale, t } = useLocale();
  const { theme, toggleTheme, contrast, toggleContrast, increaseFontSize, decreaseFontSize, fontScale, resetFontSize } = useAccessibility();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[var(--surface)]/95 shadow-lg shadow-black/10 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-[var(--surface)]/80 backdrop-blur-sm border-b border-[var(--border-soft)]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Brand / Article Title */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#inicio"
            aria-label={locale === 'pt' ? 'Ir para o início da página' : 'Go to top of page'}
            className="group flex items-center gap-2 transition-transform hover:opacity-90"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--amber)]/40 bg-[var(--amber)]/10 text-xs font-semibold text-[var(--amber)]">
              Ψ
            </span>
            <span className="font-display text-base font-semibold tracking-tight text-[var(--text)] sm:text-lg">
              {locale === 'pt' ? meta.titlePt : meta.titleEn}
            </span>
          </a>
        </div>

        {/* Desktop Sections Navigation */}
        <nav
          aria-label={locale === 'pt' ? 'Navegação por seções' : 'Section navigation'}
          className="hidden xl:flex items-center gap-1 overflow-x-auto py-1 no-scrollbar text-xs"
        >
          {sections.map((section) => {
            const isActive = section.id === activeId;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`whitespace-nowrap rounded-lg px-2.5 py-1.5 font-medium transition-all ${
                  isActive
                    ? 'border border-[var(--amber)] bg-[var(--amber)]/15 text-[var(--amber)] shadow-sm'
                    : 'text-[var(--text-dim)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]'
                }`}
              >
                {t(section.eyebrow)}
              </a>
            );
          })}
        </nav>

        {/* Right Actions & Accessibility Toolbar */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* "Como Citar" Button */}
          <button
            type="button"
            onClick={onOpenCite}
            aria-label={locale === 'pt' ? 'Abrir opções de citação do artigo' : 'Open article citation options'}
            className="flex items-center gap-1.5 rounded-lg border border-[var(--amber)]/50 bg-[var(--amber)]/10 px-2.5 py-1.5 text-xs font-semibold text-[var(--amber)] transition-colors hover:bg-[var(--amber)] hover:text-[#0b0b0e] active:scale-95"
          >
            <span aria-hidden="true">❝</span>
            <span className="hidden sm:inline">{locale === 'pt' ? 'Como citar' : 'How to cite'}</span>
            <span className="sm:hidden">{locale === 'pt' ? 'Citar' : 'Cite'}</span>
          </button>

          {/* Accessibility Controls Group */}
          <div
            role="group"
            aria-label={locale === 'pt' ? 'Ferramentas de acessibilidade' : 'Accessibility tools'}
            className="flex items-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-0.5 text-xs"
          >
            {/* Decrease Font Size */}
            <button
              type="button"
              onClick={decreaseFontSize}
              disabled={fontScale <= 90}
              title={locale === 'pt' ? 'Diminuir tamanho da letra' : 'Decrease font size'}
              aria-label={locale === 'pt' ? 'Diminuir tamanho da letra' : 'Decrease font size'}
              className="flex h-7 w-7 items-center justify-center rounded font-semibold text-[var(--text-dim)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)] disabled:opacity-30"
            >
              A-
            </button>

            {/* Reset / Font Scale Indicator */}
            <button
              type="button"
              onClick={resetFontSize}
              title={locale === 'pt' ? `Tamanho atual: ${fontScale}%. Clique para restaurar 100%` : `Current font size: ${fontScale}%. Click to reset to 100%`}
              aria-label={locale === 'pt' ? `Restaurar tamanho padrão da letra (${fontScale}%)` : `Reset font size (${fontScale}%)`}
              className="px-1 text-[10px] font-mono text-[var(--text-mute)] hover:text-[var(--amber)]"
            >
              {fontScale}%
            </button>

            {/* Increase Font Size */}
            <button
              type="button"
              onClick={increaseFontSize}
              disabled={fontScale >= 130}
              title={locale === 'pt' ? 'Aumentar tamanho da letra' : 'Increase font size'}
              aria-label={locale === 'pt' ? 'Aumentar tamanho da letra' : 'Increase font size'}
              className="flex h-7 w-7 items-center justify-center rounded font-bold text-[var(--text-dim)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)] disabled:opacity-30"
            >
              A+
            </button>

            <span className="mx-0.5 h-4 w-px bg-[var(--border)]" aria-hidden="true" />

            {/* High Contrast Toggle */}
            <button
              type="button"
              onClick={toggleContrast}
              aria-pressed={contrast === 'high'}
              title={
                contrast === 'high'
                  ? locale === 'pt' ? 'Desativar alto contraste' : 'Disable high contrast'
                  : locale === 'pt' ? 'Ativar alto contraste' : 'Enable high contrast'
              }
              aria-label={locale === 'pt' ? 'Alternar modo de alto contraste' : 'Toggle high contrast mode'}
              className={`flex h-7 w-7 items-center justify-center rounded text-sm transition-colors ${
                contrast === 'high'
                  ? 'bg-[var(--amber)] text-[#0b0b0e] font-bold'
                  : 'text-[var(--text-dim)] hover:bg-[var(--surface)] hover:text-[var(--text)]'
              }`}
            >
              ◐
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? locale === 'pt' ? 'Mudar para modo claro' : 'Switch to light mode'
                  : locale === 'pt' ? 'Mudar para modo escuro' : 'Switch to dark mode'
              }
              title={
                theme === 'dark'
                  ? locale === 'pt' ? 'Modo claro' : 'Light mode'
                  : locale === 'pt' ? 'Modo escuro' : 'Dark mode'
              }
              className="flex h-7 w-7 items-center justify-center rounded text-sm text-[var(--text-dim)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)]"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Locale Toggle */}
          <div className="hidden sm:block">
            <LocaleToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={locale === 'pt' ? 'Abrir menu de seções' : 'Open section menu'}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-dim)] xl:hidden hover:text-[var(--text)]"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-4 xl:hidden">
          <div className="mb-3 flex items-center justify-between pb-2 border-b border-[var(--border-soft)] sm:hidden">
            <span className="text-xs font-semibold text-[var(--text-mute)] uppercase tracking-wider">
              {locale === 'pt' ? 'Idioma' : 'Language'}
            </span>
            <LocaleToggle />
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--amber)]">
            {locale === 'pt' ? 'Capítulos do Artigo' : 'Article Chapters'}
          </p>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex flex-col rounded-lg px-3 py-2 text-xs transition-colors ${
                    isActive
                      ? 'border border-[var(--amber)]/40 bg-[var(--amber)]/10 text-[var(--amber)] font-medium'
                      : 'text-[var(--text-dim)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]'
                  }`}
                >
                  <span className="font-semibold">{t(section.eyebrow)}</span>
                  <span className="truncate text-[11px] text-[var(--text-mute)]">{t(section.title)}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
