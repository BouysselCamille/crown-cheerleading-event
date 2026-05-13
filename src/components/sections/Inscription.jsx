import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

export function Inscription() {
  return (
    <section id="inscription" className="py-24 bg-crown-dark">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <SectionTitle
            label="Inscription"
            title={<>Inscrivez votre <span className="text-gold-gradient">équipe</span></>}
            subtitle="Toutes les informations pour inscrire votre club à la compétition."
            center
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-crown-gray border border-gold/20 rounded-2xl p-8 md:p-12 text-center"
        >
          {/* Icône */}
          <div className="w-16 h-16 rounded-full border-2 border-gold/40 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>

          {/* Message formulaire */}
          <h3 className="text-white font-display font-bold text-xl mb-3">
            Formulaire d'inscription disponible le{' '}
            <span className="text-gold">10 septembre</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
            Le formulaire d'inscription en ligne ouvrira le <strong className="text-gray-200">10 septembre</strong>.
            En attendant, les dirigeants peuvent dès maintenant télécharger le fichier Excel à compléter
            et à fournir au moment de l'inscription. <strong className="text-gray-200">Un fichier Excel par équipe</strong> sera requis.
          </p>

          {/* Séparateur */}
          <div className="border-t border-gold/10 mb-10" />

          {/* Téléchargement Excel */}
          <p className="text-gray-400 text-xs uppercase tracking-widest font-display font-semibold mb-5">
            Préparez votre dossier
          </p>
          <a
            href="/docs/inscription-equipe.xlsx"
            download="Crown_CE_Inscription_Equipe.xlsx"
            className="inline-flex items-center gap-3 bg-gold/10 border border-gold/40 hover:bg-gold/20 hover:border-gold/70 text-gold font-display font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-200"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger le fichier Excel d'inscription
          </a>
          <p className="text-gray-600 text-xs mt-4">
            Fichier à remettre complété lors de votre inscription en ligne
          </p>
        </motion.div>
      </div>
    </section>
  );
}
