import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function MentionsLegales() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-crown-black pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-gold text-sm font-display font-semibold mb-10 hover:opacity-80 transition-opacity">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-display font-black text-white mb-2">Mentions légales</h1>
        <p className="text-gray-500 text-sm mb-12">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

        <div className="space-y-10 text-gray-400 leading-relaxed">

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">1. Éditeur du site</h2>
            <p>Le site Crown Cheerleading Events est édité par :</p>
            <div className="mt-3 border border-gold/20 bg-crown-gray rounded-xl p-5 space-y-1 text-sm">
              <p><span className="text-white font-semibold">Association :</span> Crown Cheerleading Events</p>
              <p><span className="text-white font-semibold">Siège social :</span> 11 avenue Ledru Rollin 75012 Paris</p>
              <p><span className="text-white font-semibold">Email :</span> À compléter</p>
              <p><span className="text-white font-semibold">SIRET / RNA :</span> À compléter</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">2. Directeur de la publication</h2>
            <p>Le directeur de la publication est le représentant légal de l'association Crown Cheerleading Events.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">3. Hébergement</h2>
            <div className="mt-3 border border-gold/20 bg-crown-gray rounded-xl p-5 space-y-1 text-sm">
              <p><span className="text-white font-semibold">Hébergeur :</span> Vercel Inc.</p>
              <p><span className="text-white font-semibold">Adresse :</span> 340 Pine Street, Suite 1501, San Francisco, CA 94104, USA</p>
              <p><span className="text-white font-semibold">Site :</span> vercel.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">4. Propriété intellectuelle</h2>
            <p>L'ensemble des contenus présents sur ce site (textes, images, logos, visuels) est la propriété exclusive de Crown Cheerleading Events ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">5. Limitation de responsabilité</h2>
            <p>Crown Cheerleading Events s'efforce de maintenir les informations de ce site à jour et exactes. Toutefois, l'organisation ne peut être tenue responsable des erreurs ou omissions, ni des dommages résultant de l'utilisation du site.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">6. Droit applicable</h2>
            <p>Le présent site et ses mentions légales sont soumis au droit français. Tout litige relatif à son utilisation sera soumis à la compétence des tribunaux français.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
