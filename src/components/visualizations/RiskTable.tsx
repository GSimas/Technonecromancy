import { motion } from 'motion/react';
import { useLocale } from '../../hooks/useLocale';
import { riskRows } from '../../data/article';

export function RiskTable() {
  const { t, locale } = useLocale();

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
      <p className="mb-4 text-xs uppercase tracking-wide text-[var(--text-mute)]">
        {locale === 'pt' ? 'Tabela 1 — heurísticas de mitigação de risco' : 'Table 1 — risk-mitigation heuristics'}
      </p>
      <div className="space-y-3">
        {riskRows.map((row, i) => (
          <motion.div
            key={row.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="rounded-lg border border-[var(--rose)]/30 bg-[var(--rose)]/[0.04] p-4"
          >
            <h3 className="text-sm font-semibold text-[var(--text)]">
              <span className="mr-1.5 text-[var(--rose)]" aria-hidden="true">
                ⚠
              </span>
              {t(row.vector)}
            </h3>
            <p className="mt-1.5 text-sm text-[var(--text-mute)]">
              <span className="text-[var(--text-dim)]">{locale === 'pt' ? 'Mecanismo: ' : 'Mechanism: '}</span>
              {t(row.mechanism)}
            </p>
            <p className="mt-1 text-sm text-[var(--teal)]">
              <span className="text-[var(--text-dim)]">{locale === 'pt' ? 'Mitigação: ' : 'Mitigation: '}</span>
              {t(row.mitigation)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
