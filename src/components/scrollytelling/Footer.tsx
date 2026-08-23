import { useLocale } from '../../hooks/useLocale';
import { meta, evidenceLedger } from '../../data/article';

export function Footer() {
  const { locale, t } = useLocale();

  return (
    <footer className="border-t border-[var(--border-soft)] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-2xl font-medium text-[var(--text)]">
          {locale === 'pt' ? 'Sobre esta página' : 'About this page'}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-dim)]">
          {locale === 'pt' ? meta.companionNotePt : meta.companionNoteEn}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-dim)]">
          {locale === 'pt' ? meta.articleTypePt : meta.articleTypeEn}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-dim)]">
          {locale === 'pt' ? meta.doctoralNotePt : meta.doctoralNoteEn}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-mute)]">
          {locale === 'pt' ? meta.aiUseNotePt : meta.aiUseNoteEn}
        </p>

        <div className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h3 className="font-display text-base font-medium text-[var(--text)]">
            {locale === 'pt' ? 'Como citar' : 'How to cite'}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-dim)]">{meta.howToCite}</p>
          <a
            href={meta.doi}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm text-[var(--violet)] underline decoration-dotted underline-offset-4 hover:text-[var(--text)]"
          >
            {meta.doi}
          </a>
          <p className="mt-2 text-xs text-[var(--text-mute)]">{locale === 'pt' ? meta.datesPt : meta.datesEn}</p>
        </div>

        <details className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <summary className="cursor-pointer font-display text-base font-medium text-[var(--text)]">
            {locale === 'pt'
              ? `Ledger de evidências (${evidenceLedger.length} afirmações rastreadas)`
              : `Evidence ledger (${evidenceLedger.length} tracked claims)`}
          </summary>
          <p className="mt-3 text-sm text-[var(--text-mute)]">
            {locale === 'pt'
              ? 'Cada afirmação usada nesta página está ligada a uma página e seção específicas do artigo original.'
              : 'Every claim used on this page is tied to a specific page and section of the original article.'}
          </p>
          <ol className="mt-4 space-y-3 border-t border-[var(--border-soft)] pt-4 text-sm">
            {evidenceLedger.map((item, i) => (
              <li key={item.id} className="border-b border-[var(--border-soft)] pb-3 last:border-0">
                <p className="text-[var(--text-dim)]">
                  <span className="text-[var(--text-mute)]">{i + 1}.</span> {t(item.claim)}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-[var(--amber)]">
                  p. {item.source.page} · {t(item.source.locator)}
                </p>
                {item.caveat && <p className="mt-1 text-xs italic text-[var(--text-mute)]">{t(item.caveat)}</p>}
              </li>
            ))}
          </ol>
        </details>

        <p className="mt-12 text-xs text-[var(--text-mute)]">
          {locale === 'pt' ? 'Página não oficial, produzida a partir do artigo publicado em acesso aberto.' : 'Unofficial companion page, produced from the openly published article.'}
        </p>
      </div>
    </footer>
  );
}
