import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { useTranslation } from '../../i18n/index.jsx';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, switchLang, t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-crown-black/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img src="/logo.jpg" className="w-30 h-20"/>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-display font-semibold text-gray-300 hover:text-gold transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Lang selector */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href="#tickets" variant="primary" className="text-xs px-6 py-3">
            {t.nav.tickets}
          </Button>
          <div className="flex items-center gap-1 ml-1">
            <button
              onClick={() => switchLang('fr')}
              title="Français"
              className={`text-lg transition-opacity ${lang === 'fr' ? 'opacity-100' : 'opacity-35 hover:opacity-70'}`}
            >
              🇫🇷
            </button>
            <button
              onClick={() => switchLang('en')}
              title="English"
              className={`text-lg transition-opacity ${lang === 'en' ? 'opacity-100' : 'opacity-35 hover:opacity-70'}`}
            >
              🇬🇧
            </button>
          </div>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-gold transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gold transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gold transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-crown-dark border-t border-gold/20">
          <ul className="flex flex-col py-4">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-6 py-3 text-sm font-display font-semibold text-gray-300 hover:text-gold hover:bg-crown-gray transition-colors tracking-wide uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-3">
              <Button href="#tickets" variant="primary" className="w-full text-xs py-3">
                {t.nav.tickets}
              </Button>
            </li>
            <li className="px-6 pt-4 pb-2 flex items-center gap-3">
              <button
                onClick={() => switchLang('fr')}
                title="Français"
                className={`text-xl transition-opacity ${lang === 'fr' ? 'opacity-100' : 'opacity-35'}`}
              >
                🇫🇷
              </button>
              <button
                onClick={() => switchLang('en')}
                title="English"
                className={`text-xl transition-opacity ${lang === 'en' ? 'opacity-100' : 'opacity-35'}`}
              >
                🇬🇧
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
