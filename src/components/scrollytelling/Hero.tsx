import { motion } from 'motion/react';
import { useLocale } from '../../hooks/useLocale';
import { meta, thesisQuote } from '../../data/article';

export function Hero() {
  const { locale, t } = useLocale();

  return (
    <header id="inicio" className="relative flex min-h-[92vh] flex-col justify-end border-b border-[var(--border-soft)] px-6 pb-16 pt-32 md:px-10">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, color-mix(in srgb, var(--violet) 16%, transparent), transparent), radial-gradient(45% 40% at 85% 100%, color-mix(in srgb, var(--amber) 10%, transparent), transparent)',
        }}
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs uppercase tracking-[0.2em] text-[var(--text-mute)]"
        >
          {locale === 'pt' ? 'Artigo de reflexão · CTS' : 'Reflection article · STS'} · {meta.journal}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display break-words text-4xl font-medium leading-[1.05] text-[var(--text)] sm:text-6xl md:text-7xl"
        >
          {locale === 'pt' ? meta.titlePt : meta.titleEn}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl text-lg text-[var(--text-dim)] md:text-xl"
        >
          {locale === 'pt' ? meta.subtitlePt : meta.subtitleEn}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display mt-10 max-w-2xl border-l-2 border-[var(--amber)] pl-5 text-xl italic leading-snug text-[var(--text)] md:text-2xl"
        >
          {t(thesisQuote)}
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--text-mute)]"
        >
          <span>
            <a
              href="https://gustavosimas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text)] underline decoration-dotted underline-offset-4 transition-colors hover:text-[var(--amber)]"
            >
              Gustavo Simas da Silva
            </a>{' '}
            & Vânia Ribas Ulbricht
          </span>
          <span aria-hidden="true">·</span>
          <span>{locale === 'pt' ? meta.affiliationPt : meta.affiliationEn}</span>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          href={meta.doi}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-sm text-[var(--violet)] underline decoration-dotted underline-offset-4 hover:text-[var(--text)]"
        >
          {meta.doi}
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mx-auto mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-wide text-[var(--text-mute)]"
      >
        <span>{locale === 'pt' ? 'role para continuar' : 'scroll to continue'}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          ↓
        </motion.span>
      </motion.div>
    </header>
  );
}
