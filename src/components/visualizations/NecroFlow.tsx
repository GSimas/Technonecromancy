import { motion } from 'motion/react';
import { useLocale } from '../../hooks/useLocale';
import { necroFlowSteps } from '../../data/article';

export function NecroFlow() {
  const { t, locale } = useLocale();

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
      <div className="flex flex-col gap-0">
        {necroFlowSteps.map((step, i) => {
          const isGap = step.id === 'lacuna';
          return (
            <div key={step.id}>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`rounded-lg border p-4 ${
                  isGap ? 'border-[var(--rose)]/40 bg-[var(--rose)]/[0.05]' : 'border-[var(--border-soft)]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                    style={{ background: isGap ? 'var(--rose)' : 'var(--violet)', color: '#0b0b0e' }}
                  >
                    {isGap ? '!' : i + 1}
                  </span>
                  <h3 className="font-display text-base font-medium text-[var(--text)]">{t(step.label)}</h3>
                </div>
                <p className="mt-1 pl-8 text-sm text-[var(--text-mute)]">{t(step.description)}</p>
              </motion.div>
              {i < necroFlowSteps.length - 1 && (
                <div className="ml-3 h-4 w-px bg-[var(--border)]" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-[var(--text-mute)]">
        {locale === 'pt'
          ? 'Diagrama original com base na seção "Comodificação da Memória e Necrocapitalismo" (p. 14) — não é uma figura do artigo.'
          : 'Original diagram based on the "Memory Commodification and Necrocapitalism" section (p. 14) — not a figure from the article.'}
      </p>
    </div>
  );
}
