import { motion } from 'motion/react';
import { useLocale } from '../../hooks/useLocale';
import { preservedRows } from '../../data/article';

export function PreservedVsEmbodied() {
  const { t, locale } = useLocale();

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
      <p className="mb-4 text-xs uppercase tracking-wide text-[var(--text-mute)]">
        {locale === 'pt' ? 'Tabela 2 — o que fica, o que depende do corpo' : 'Table 2 — what remains, what depends on the body'}
      </p>
      <div className="mb-3 hidden grid-cols-2 gap-3 text-xs font-semibold uppercase tracking-wide sm:grid">
        <span className="text-[var(--violet)]">{locale === 'pt' ? 'Retido pelo modelo' : 'Retained by the model'}</span>
        <span className="text-[var(--amber)]">{locale === 'pt' ? 'Depende do corpo vivido' : 'Depends on lived embodiment'}</span>
      </div>
      <div className="space-y-3">
        {preservedRows.map((row, i) => (
          <motion.div
            key={row.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-lg border border-[var(--border-soft)] p-3.5"
          >
            <h3 className="mb-2 text-sm font-semibold text-[var(--text)]">{t(row.dimension)}</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <p className="border-l-2 border-[var(--violet-soft)] pl-3 text-sm leading-snug text-[var(--text-dim)]">
                <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wide text-[var(--violet)] sm:hidden">
                  {locale === 'pt' ? 'Retido' : 'Retained'}
                </span>
                {t(row.retained)}
              </p>
              <p className="border-l-2 border-[var(--amber-soft)] pl-3 text-sm leading-snug text-[var(--text-dim)]">
                <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wide text-[var(--amber)] sm:hidden">
                  {locale === 'pt' ? 'Depende do corpo' : 'Depends on the body'}
                </span>
                {t(row.embodied)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
