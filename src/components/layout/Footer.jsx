import { Link } from 'react-router-dom';
import { EVENT } from '../../constants/competitionData';

export function Footer() {
  return (
    <footer className="bg-crown-dark border-t border-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-display font-black text-gold-gradient block mb-3">CROWN</span>
            <p className="text-gray-500 text-sm leading-relaxed">
              La compétition qui couronne les champions.<br />
              {EVENT.edition} — {EVENT.dateDisplay}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['#about', '#gallery', '#awards', '#schedule', '#divisions', '#tickets', '#contact'].map((href) => (
                <li key={href}>
                  <a href={href} className="text-gray-500 hover:text-gold text-sm transition-colors capitalize">
                    {href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">Contact</h4>
            <p className="text-gray-500 text-sm">
              Pour toute question, utilisez<br />
              le formulaire de contact.
            </p>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Crown Cheerleading Events. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/mentions-legales" className="text-gray-600 hover:text-gold text-xs transition-colors">
              Mentions légales
            </Link>
            <span className="text-gray-700 text-xs">·</span>
            <Link to="/politique-de-confidentialite" className="text-gray-600 hover:text-gold text-xs transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
