import { motion } from 'motion/react';
import { useLocale } from '../../hooks/useLocale';
import { simulacraSteps } from '../../data/article';

export function SimulacraLadder() {
  const { t, locale } = useLocale();
  const steps = [...simulacraSteps].sort((a, b) => b.order - a.order);

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
      <p className="mb-5 text-xs uppercase tracking-wide text-[var(--text-mute)]">
        {locale === 'pt' ? 'Tabela 3 — as quatro ordens do simulacro' : 'Table 3 — the four orders of the simulacrum'}
      </p>
      <div className="space-y-3">
        {steps.map((step, i) => {
          const intensity = step.order / 4;
          return (
            <motion.div
              key={step.order}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-lg border p-4"
              style={{
                borderColor: `color-mix(in srgb, var(--violet) ${20 + intensity * 60}%, var(--border))`,
                background: `color-mix(in srgb, var(--violet) ${intensity * 12}%, transparent)`,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                  style={{
                    background: `color-mix(in srgb, var(--violet) ${30 + intensity * 60}%, var(--bg))`,
                    color: '#0b0b0e',
                  }}
                >
                  {step.order}
                </span>
                <h3 className="font-display text-base font-medium text-[var(--text)]">{t(step.orderLabel)}</h3>
              </div>
              <p className="mt-1.5 text-sm text-[var(--text-dim)]">{t(step.relation)}</p>
              <p className="mt-1 text-sm text-[var(--text-mute)]">
                <span className="text-[var(--amber)]">{locale === 'pt' ? 'Exemplo: ' : 'Example: '}</span>
                {t(step.affordance)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
