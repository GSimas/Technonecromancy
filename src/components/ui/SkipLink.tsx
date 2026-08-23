import { useLocale } from '../../hooks/useLocale';

export function SkipLink() {
  const { locale } = useLocale();
  return (
    <a href="#conteudo-principal" className="skip-link">
      {locale === 'pt' ? 'Pular para o conteúdo principal' : 'Skip to main content'}
    </a>
  );
}
