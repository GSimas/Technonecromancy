import { motion } from 'motion/react';
import { useLocale } from '../../hooks/useLocale';
import { funnelSteps } from '../../data/article';

export function Funnel() {
  const { t, locale } = useLocale();

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
      <ol className="space-y-0">
        {funnelSteps.map((step, i) => {
          const widthPct = 100 - i * 18;
          return (
            <li key={step.id} className="relative">
              <motion.div
                initial={{ opacity: 0, scaleX: 0.85 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ width: `${widthPct}%`, transformOrigin: 'top center' }}
                className="mx-auto mb-3 rounded-lg border border-[var(--border)] px-5 py-4"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-lg text-[var(--amber)]">{i + 1}</span>
                  <h3 className="font-display text-base font-medium text-[var(--text)] md:text-lg">{t(step.label)}</h3>
                </div>
                <p className="mt-1 text-sm text-[var(--text-mute)]">{t(step.description)}</p>
              </motion.div>
              {i < funnelSteps.length - 1 && (
                <div className="mx-auto mb-3 h-4 w-px bg-[var(--border)]" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-sm text-[var(--text-mute)]">
        {locale === 'pt'
          ? 'Figura 1 do artigo: um funil que converte dados pessoais em entidades digitais interativas.'
          : "The article's Figure 1: a funnel converting personal data into interactive digital entities."}
      </p>
    </div>
  );
}
