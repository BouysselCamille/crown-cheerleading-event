import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';

export function PolitiqueConfidentialite() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { t, lang } = useTranslation();
  const txt = t.privacyPolicy;

  return (
    <div className="min-h-screen bg-crown-black pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-gold text-sm font-display font-semibold mb-10 hover:opacity-80 transition-opacity">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {txt.back}
        </Link>

        <h1 className="text-4xl font-display font-black text-white mb-2">{txt.title}</h1>
        <p className="text-gray-500 text-sm mb-12">
          {txt.updated} : {txt.updatedDate}
        </p>

        <div className="prose prose-invert max-w-none space-y-10 text-gray-400 leading-relaxed">
          {txt.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl font-display font-bold text-white mb-3">{s.title}</h2>
              {s.content && <p>{s.content}</p>}
              {s.items && (
                <ul className="list-disc list-inside mt-3 space-y-1">
                  {s.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
              {s.footer && <p className="mt-3">{s.footer}</p>}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
