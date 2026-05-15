import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { SPONSORS } from '../../constants/competitionData';
import { useTranslation } from '../../i18n/index.jsx';

const TIER_STYLES = {
  gold: { border: 'border-gold/50', text: 'text-gold' },
  silver: { border: 'border-gray-400/30', text: 'text-gray-400' },
  bronze: { border: 'border-amber-700/30', text: 'text-amber-700' },
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
  const { t } = useTranslation();
  const gold = SPONSORS.filter(s => s.tier === 'gold');
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
            label={t.sponsors.label}
            title={<>{t.sponsors.title1} <span className="text-gold-gradient">{t.sponsors.title2}</span></>}
            subtitle={t.sponsors.subtitle}
            center
          />
        </motion.div>

        {/* Or / Gold */}
        {gold.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-gold text-xs font-display font-bold tracking-widest uppercase text-center mb-5">{t.sponsors.tiers.gold}</p>
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
              {gold.map(s => <SponsorCard key={s.name} {...s} />)}
            </div>
          </motion.div>
        )}

        {/* Argent / Silver */}
        {silver.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-gray-400 text-xs font-display font-bold tracking-widest uppercase text-center mb-5">{t.sponsors.tiers.silver}</p>
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
            <p className="text-amber-700 text-xs font-display font-bold tracking-widest uppercase text-center mb-5">{t.sponsors.tiers.bronze}</p>
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
            href="mailto:contact@crown-cheerleading-events.org?subject=Partenariat Crown Cheerleading Events"
            className="text-gold/70 hover:text-gold text-sm font-display font-semibold transition-colors border-b border-gold/30 hover:border-gold pb-1"
          >
            {t.sponsors.become}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
