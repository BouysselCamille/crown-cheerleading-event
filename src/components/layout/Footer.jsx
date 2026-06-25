import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/index.jsx';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-crown-dark border-t border-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-display font-black text-gold-gradient block mb-3">CROWN</span>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t.footer.tagline}<br />
              {t.hero.edition} — {t.hero.dateDisplay}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">{t.footer.navigation}</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[...t.nav.links, ...t.nav.extraLinks].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-500 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">{t.footer.contact}</h4>
            <a
              href={`mailto:${t.footer.contactText}`}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gold text-sm transition-colors break-all mb-4"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.footer.contactText}
            </a>
            <a
              href="https://www.instagram.com/crown.cheerleading.events"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gold text-sm transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @crown.cheerleading.events
            </a>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            {new Date().getFullYear()} Crown Cheerleading Events. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/mentions-legales" className="text-gray-600 hover:text-gold text-xs transition-colors">
              {t.footer.legal}
            </Link>
            <span className="text-gray-700 text-xs">·</span>
            <Link to="/politique-de-confidentialite" className="text-gray-600 hover:text-gold text-xs transition-colors">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
