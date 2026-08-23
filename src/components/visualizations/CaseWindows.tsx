import { motion } from 'motion/react';
import { useLocale } from '../../hooks/useLocale';
import { caseWindows } from '../../data/article';

const icons: Record<string, string> = {
  rogueone: 'M12 3 3 8v8l9 5 9-5V8l-9-5Zm0 2.3L18.3 9 12 12.7 5.7 9 12 5.3ZM5 10.7l6 3.4v6.2l-6-3.4v-6.2Zm14 0v6.2l-6 3.4v-6.2l6-3.4Z',
  deepnostalgia: 'M12 5a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Zm-1-8h2v3.6l2.8 1.6-1 1.7L11 13.5V9Z',
  griefbots: 'M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3 4v2h2V9H7Zm4 0v2h2V9h-2Zm4 0v2h2V9h-2Z',
};

export function CaseWindows() {
  const { t, locale } = useLocale();

  return (
    <div className="space-y-4">
      {caseWindows.map((c, i) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45, delay: i * 0.1 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6"
        >
          <div className="mb-2 flex items-start gap-3">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0 text-[var(--violet)]" fill="currentColor" aria-hidden="true">
              <path d={icons[c.id]} />
            </svg>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--amber)]">{t(c.modality)}</p>
              <h3 className="font-display text-lg font-medium text-[var(--text)]">{t(c.name)}</h3>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-dim)]">{t(c.description)}</p>
          <p className="mt-2 border-l-2 border-[var(--violet-soft)] pl-3 text-sm italic leading-relaxed text-[var(--text-mute)]">
            {t(c.tension)}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-wide text-[var(--text-mute)]">
            {locale === 'pt' ? 'p.' : 'p.'} {c.source.page} · {t(c.source.locator)}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
