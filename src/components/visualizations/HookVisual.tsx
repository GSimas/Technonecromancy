import { motion } from 'motion/react';
import { useLocale } from '../../hooks/useLocale';

export function HookVisual() {
  const { locale } = useLocale();

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
      <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-xl border border-[var(--border-soft)] bg-[var(--bg)]">
        <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-labelledby="hook-svg-title">
          <title id="hook-svg-title">
            {locale === 'pt'
              ? 'Duas linhas verticais representando vida e morte, com uma zona pontilhada e tremulante entre elas'
              : 'Two vertical lines representing life and death, with a dotted, flickering zone between them'}
          </title>
          <line x1="60" y1="20" x2="60" y2="140" stroke="var(--amber)" strokeWidth="2" />
          <line x1="260" y1="20" x2="260" y2="140" stroke="var(--violet)" strokeWidth="2" />
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={60 + ((i + 1) * (260 - 60)) / 10}
              cy={80}
              r={2.6}
              fill="var(--text-dim)"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.15, 0.9, 0.15] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
            />
          ))}
        </svg>
        <span className="absolute left-4 top-4 text-xs font-medium uppercase tracking-wide text-[var(--amber)]">
          {locale === 'pt' ? 'vida' : 'life'}
        </span>
        <span className="absolute right-4 top-4 text-xs font-medium uppercase tracking-wide text-[var(--violet)]">
          {locale === 'pt' ? 'morte' : 'death'}
        </span>
      </div>
      <p className="mt-4 text-sm text-[var(--text-mute)]">
        {locale === 'pt'
          ? 'A fronteira entre presença e ausência deixou de ser um limite fixo — passou a ser uma zona de interação programável.'
          : 'The boundary between presence and absence is no longer a fixed line — it has become a programmable zone of interaction.'}
      </p>
    </div>
  );
}
