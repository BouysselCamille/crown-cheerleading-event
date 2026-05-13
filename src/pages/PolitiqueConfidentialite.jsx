import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function PolitiqueConfidentialite() {
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

        <h1 className="text-4xl font-display font-black text-white mb-2">Politique de confidentialité</h1>
        <p className="text-gray-500 text-sm mb-12">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

        <div className="prose prose-invert max-w-none space-y-10 text-gray-400 leading-relaxed">

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">1. Responsable du traitement</h2>
            <p>Crown Cheerleading Events est responsable du traitement des données personnelles collectées sur ce site. Pour toute question, vous pouvez nous contacter via le formulaire de contact.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">2. Données collectées</h2>
            <p>Dans le cadre de l'utilisation de ce site, nous pouvons être amenés à collecter les données suivantes :</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Nom et prénom (via le formulaire de contact)</li>
              <li>Adresse email (via le formulaire de contact)</li>
              <li>Données de navigation (via les cookies techniques)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">3. Finalité du traitement</h2>
            <p>Les données collectées sont utilisées uniquement pour répondre à vos demandes de contact et assurer le bon fonctionnement du site. Elles ne sont jamais vendues ni cédées à des tiers.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">4. Durée de conservation</h2>
            <p>Les données issues du formulaire de contact sont conservées pour la durée nécessaire au traitement de votre demande, et au maximum 3 ans à compter du dernier contact.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">5. Vos droits</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="mt-3">Pour exercer ces droits, contactez-nous via le formulaire de contact du site.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">6. Cookies</h2>
            <p>Ce site utilise uniquement des cookies techniques strictement nécessaires au fonctionnement du site. Aucun cookie publicitaire ou de traçage n'est utilisé.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">7. Billetterie HelloAsso</h2>
            <p>L'achat de billets est géré par HelloAsso, soumis à sa propre politique de confidentialité. Nous vous invitons à la consulter sur le site HelloAsso.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
