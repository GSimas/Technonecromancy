import { motion } from 'motion/react';
import { useLocale } from '../../hooks/useLocale';
import { governanceItems, governanceProgression, prioritySteps } from '../../data/article';

const RADIUS = 42;

export function GovernanceWheel() {
  const { t, locale } = useLocale();

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
        <p className="mb-4 text-xs uppercase tracking-wide text-[var(--text-mute)]">
          {locale === 'pt' ? 'Figura 2 — arquitetura normativa (8 instrumentos)' : 'Figure 2 — normative architecture (8 instruments)'}
        </p>

        <div className="relative mx-auto aspect-square w-full max-w-[320px]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="1.5 2" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-[var(--teal)]/50 bg-[var(--bg)] text-center">
              <span className="font-display text-xs font-medium leading-tight text-[var(--teal)]">
                {locale === 'pt' ? 'Arquitetura normativa' : 'Normative architecture'}
              </span>
            </div>
          </div>
          {governanceItems.map((item, i) => {
            const angle = (i / governanceItems.length) * 2 * Math.PI - Math.PI / 2;
            const x = 50 + RADIUS * Math.cos(angle);
            const y = 50 + RADIUS * Math.sin(angle);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--teal)]/60 bg-[var(--surface-2)] text-[10px] font-semibold text-[var(--teal)]"
                style={{ left: `${x}%`, top: `${y}%` }}
                tabIndex={0}
              >
                {i + 1}
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-40 -translate-x-1/2 rounded-md border border-[var(--border)] bg-[var(--bg)] p-2 text-left text-[11px] font-normal normal-case text-[var(--text-dim)] opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <strong className="block text-[var(--text)]">{t(item.label)}</strong>
                  {t(item.detail)}
                </span>
              </motion.div>
            );
          })}
        </div>

        <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-1.5 text-xs text-[var(--text-mute)] sm:grid-cols-2">
          {governanceItems.map((item, i) => (
            <li key={item.id}>
              <span className="text-[var(--teal)]">{i + 1}.</span> {t(item.label)}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[var(--border-soft)] pt-4 text-xs">
          <span className="rounded-full border border-[var(--rose)]/40 px-2.5 py-1 text-[var(--rose)]">
            {t(governanceProgression.before)}
          </span>
          <span aria-hidden="true" className="text-[var(--text-mute)]">
            →
          </span>
          <span className="rounded-full border border-[var(--amber)]/40 px-2.5 py-1 text-[var(--amber)]">
            {t(governanceProgression.middle)}
          </span>
          <span aria-hidden="true" className="text-[var(--text-mute)]">
            →
          </span>
          <span className="rounded-full border border-[var(--teal)]/40 px-2.5 py-1 text-[var(--teal)]">
            {t(governanceProgression.after)}
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
        <p className="mb-4 text-xs uppercase tracking-wide text-[var(--text-mute)]">
          {locale === 'pt' ? 'Cinco passos prioritários (p. 16)' : 'Five priority steps (p. 16)'}
        </p>
        <ol className="space-y-4">
          {prioritySteps.map((step, i) => (
            <motion.li
              key={step.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-l-2 border-[var(--border)] pl-4"
            >
              <h4 className="text-sm font-semibold text-[var(--text)]">
                {i + 1}. {t(step.title)}
              </h4>
              <p className="mt-1 text-xs uppercase tracking-wide text-[var(--amber)]">{t(step.actors)}</p>
              <p className="mt-1 text-sm text-[var(--text-dim)]">{t(step.action)}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
