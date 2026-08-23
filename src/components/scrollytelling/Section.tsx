import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useLocale } from '../../hooks/useLocale';
import type { StorySection } from '../../types/story';

export function Section({ section, children }: { section: StorySection; children: ReactNode }) {
  const { t, locale } = useLocale();

  return (
    <section id={section.id} className="relative border-t border-[var(--border-soft)] py-20 md:py-28 scroll-mt-6">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-10">
        <div className="prose-body min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--amber)]"
          >
            {t(section.eyebrow)}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display mb-6 break-words text-3xl font-medium leading-tight text-[var(--text)] md:text-4xl"
          >
            {t(section.title)}
          </motion.h2>

          <div className="space-y-4 text-[1.05rem] leading-relaxed text-[var(--text-dim)]">
            {section.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
              >
                {t(p)}
              </motion.p>
            ))}
          </div>

          {section.callout && (
            <blockquote className="mt-6 border-l-2 border-[var(--violet)] pl-4 font-display text-lg italic text-[var(--text)]">
              {t(section.callout)}
            </blockquote>
          )}

          <p className="mt-8 text-xs uppercase tracking-wide text-[var(--text-mute)]">
            {locale === 'pt' ? 'Fonte no artigo: ' : 'Source in the article: '}
            {t(section.sourceNote)}
          </p>
        </div>

        <div className="min-w-0 md:sticky md:top-20 md:self-start">{children}</div>
      </div>
    </section>
  );
}
