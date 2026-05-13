import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { EVENT } from '../../constants/competitionData';

export function Tickets() {
  const hasSlug = Boolean(EVENT.helloassoSlug);
  const widgetUrl = hasSlug
    ? `https://www.helloasso.com${EVENT.helloassoSlug}/widget`
    : null;

  return (
    <section id="tickets" className="py-24 bg-crown-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <SectionTitle
            label="Billetterie"
            title={<>Réservez vos <span className="text-gold-gradient">places</span></>}
            subtitle="Paiement sécurisé via HelloAsso."
            center
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-crown-gray border border-gold/20 rounded-2xl overflow-hidden"
        >
          {hasSlug ? (
            <iframe
              src={widgetUrl}
              allowTransparency="true"
              style={{ border: 'none', width: '100%', height: '750px', display: 'block' }}
              title="Billetterie HelloAsso — Crown Cheerleading Events"
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <div className="w-16 h-16 rounded-full border-2 border-gold/40 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-white font-display font-bold text-xl mb-3">La billetterie sera ouverte au 10 septembre 2026</h3>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
