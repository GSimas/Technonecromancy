import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocale } from '../../hooks/useLocale';
import { meta } from '../../data/article';

interface CitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CitationTab = 'apa' | 'abnt' | 'bibtex';

export function CitationModal({ isOpen, onClose }: CitationModalProps) {
  const { locale } = useLocale();
  const [activeTab, setActiveTab] = useState<CitationTab>('apa');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCopy = async (text: string, formatKey: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTab(formatKey);
      setTimeout(() => setCopiedTab(null), 2500);
    } catch {
      // Fallback
    }
  };

  const citations = {
    apa: locale === 'pt' ? meta.citations.apa.pt : meta.citations.apa.en,
    abnt: locale === 'pt' ? meta.citations.abnt.pt : meta.citations.abnt.en,
    bibtex: meta.citations.bibtex,
  };

  const tabs: { id: CitationTab; label: string }[] = [
    { id: 'apa', label: 'APA (7ª ed.)' },
    { id: 'abnt', label: 'ABNT (NBR 6023)' },
    { id: 'bibtex', label: 'BibTeX' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="citation-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl md:p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-4">
              <div>
                <h2 id="citation-modal-title" className="font-display text-xl font-medium text-[var(--text)] md:text-2xl">
                  {locale === 'pt' ? 'Como Citar o Artigo' : 'How to Cite the Article'}
                </h2>
                <p className="mt-1 text-xs text-[var(--text-mute)]">
                  {meta.journal}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={locale === 'pt' ? 'Fechar janela modal' : 'Close modal'}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-dim)] transition-colors hover:border-[var(--text-dim)] hover:text-[var(--text)]"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="mt-6 flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'border border-[var(--amber)] bg-[var(--amber)]/10 text-[var(--amber)]'
                        : 'border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-dim)] hover:text-[var(--text)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Citation Content Area */}
            <div className="mt-4 flex-1 overflow-y-auto">
              <div className="relative rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 font-mono text-sm leading-relaxed text-[var(--text)]">
                {activeTab === 'bibtex' ? (
                  <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-xs text-[var(--text-dim)]">
                    {citations.bibtex}
                  </pre>
                ) : (
                  <p className="font-sans text-sm leading-relaxed text-[var(--text)]">
                    {citations[activeTab]}
                  </p>
                )}
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-soft)] pt-4 text-xs">
              <a
                href={meta.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--violet)] underline decoration-dotted underline-offset-4 hover:text-[var(--text)]"
              >
                DOI: {meta.doi}
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy(citations[activeTab], activeTab)}
                  className="flex items-center gap-2 rounded-lg bg-[var(--amber)] px-4 py-2 text-xs font-semibold text-[#0b0b0e] transition-opacity hover:opacity-90 active:scale-95"
                >
                  {copiedTab === activeTab ? (
                    <>
                      <span>✓</span>
                      <span>{locale === 'pt' ? 'Copiado com sucesso!' : 'Copied to clipboard!'}</span>
                    </>
                  ) : (
                    <>
                      <span>📋</span>
                      <span>{locale === 'pt' ? 'Copiar citação' : 'Copy citation'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
