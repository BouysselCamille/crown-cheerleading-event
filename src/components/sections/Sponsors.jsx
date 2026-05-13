import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { SPONSORS } from '../../constants/competitionData';

const TIER_STYLES = {
  gold:   { border: 'border-gold/50',         text: 'text-gold',       label: 'Or' },
  silver: { border: 'border-gray-400/30',      text: 'text-gray-400',   label: 'Argent' },
  bronze: { border: 'border-amber-700/30',     text: 'text-amber-700',  label: 'Bronze' },
};

function SponsorCard({ name, tier, logo }) {
  const style = TIER_STYLES[tier];
  return (
    <div className={`border ${style.border} bg-crown-gray rounded-xl h-28 flex items-center justify-center px-6 hover:bg-crown-black transition-colors`}>
      {logo
        ? <img src={logo} alt={name} className="max-h-16 max-w-full object-contain" />
        : <span className={`font-display font-bold text-sm text-center ${style.text}`}>{name}</span>
      }
    </div>
  );
}

export function Sponsors() {
  const gold   = SPONSORS.filter(s => s.tier === 'gold');
  const silver = SPONSORS.filter(s => s.tier === 'silver');
  const bronze = SPONSORS.filter(s => s.tier === 'bronze');

  return (
    <section id="sponsors" className="py-24 bg-crown-black">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle
            label="Partenaires"
            title={<>Nos <span className="text-gold-gradient">partenaires</span></>}
            subtitle="Ils nous font confiance et rendent cet événement possible."
            center
          />
        </motion.div>

        {/* Or */}
        {gold.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-gold text-xs font-display font-bold tracking-widest uppercase text-center mb-5">Or</p>
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
              {gold.map(s => <SponsorCard key={s.name} {...s} />)}
            </div>
          </motion.div>
        )}

        {/* Argent */}
        {silver.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-gray-400 text-xs font-display font-bold tracking-widest uppercase text-center mb-5">Argent</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {silver.map(s => <SponsorCard key={s.name} {...s} />)}
            </div>
          </motion.div>
        )}

        {/* Bronze */}
        {bronze.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-amber-700 text-xs font-display font-bold tracking-widest uppercase text-center mb-5">Bronze</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {bronze.map(s => <SponsorCard key={s.name} {...s} />)}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <a
            href="#contact"
            className="text-gold/70 hover:text-gold text-sm font-display font-semibold transition-colors border-b border-gold/30 hover:border-gold pb-1"
          >
            Devenir partenaire
          </a>
        </motion.div>
      </div>
    </section>
  );
}
