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
            <p className="text-gray-500 text-sm whitespace-pre-line">
              {t.footer.contactText}
            </p>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Crown Cheerleading Events. {t.footer.rights}
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
