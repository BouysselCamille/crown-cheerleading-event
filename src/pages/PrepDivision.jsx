import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';

export function PrepDivision() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { t } = useTranslation();
  const txt = t.prepArticle;

  return (
    <div className="min-h-screen bg-crown-black pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-gold text-sm font-display font-semibold mb-10 hover:opacity-80 transition-opacity">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {txt.back}
        </Link>

        <p className="text-gold text-xs font-display font-bold uppercase tracking-wider mb-3">{txt.label}</p>
        <h1 className="text-4xl font-display font-black text-white mb-2">{txt.title}</h1>
        <p className="text-gray-500 text-sm mb-12">{txt.subtitle}</p>

        <div className="space-y-10 text-gray-400 leading-relaxed">
          {txt.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl font-display font-bold text-white mb-3">{s.title}</h2>
              {s.content && <p className="whitespace-pre-line">{s.content}</p>}
              {s.items && (
                <ul className="list-disc list-inside mt-3 space-y-1">
                  {s.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
              {s.info && (
                <div className="mt-3 border border-gold/20 bg-crown-gray rounded-xl p-5 space-y-1 text-sm">
                  {s.info.map((row, j) => (
                    <p key={j}><span className="text-white font-semibold">{row.label} :</span> {row.value}</p>
                  ))}
                </div>
              )}
              {s.links && (
                <div className="mt-3 flex flex-col gap-1">
                  {s.links.map((link, j) => (
                    <a key={j} href={link.href} target="_blank" rel="noopener noreferrer"
                      className="inline-block text-gold underline underline-offset-2 hover:text-gold-light">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              {s.downloads && (
                <div className="mt-3 flex flex-col gap-3">
                  {s.downloads.map((dl, j) => (
                    <a key={j} href={dl.href} download
                      className="flex items-center justify-center gap-2 border border-gold/30 rounded-xl px-5 py-3 text-gold font-display font-semibold text-sm hover:bg-crown-gray transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {dl.label}
                    </a>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
