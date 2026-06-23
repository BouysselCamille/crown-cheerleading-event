import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/index.jsx';

function PricingCard({ plan, perAthlete, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl overflow-hidden border ${plan.highlight ? 'border-gold bg-crown-gray' : 'border-gold/20 bg-crown-gray/50'
        }`}
    >
      {plan.badge && (
        <div className="absolute top-0 right-0">
          <span className="gold-gradient text-black text-xs font-display font-black tracking-wider uppercase px-4 py-1.5 block">
            {plan.badge}
          </span>
        </div>
      )}

      <div className={`px-8 pt-8 pb-6 border-b ${plan.highlight ? 'border-gold/30' : 'border-gold/10'}`}>
        <h3 className={`font-display font-black text-2xl mb-1 ${plan.highlight ? 'text-gold' : 'text-white'}`}>
          {plan.label}
        </h3>
        <p className="text-gray-500 text-sm font-display">{plan.deadline}</p>
        <p className="text-gray-600 text-xs font-display mt-1">{perAthlete}</p>
      </div>

      <div className="px-8 py-6 space-y-5">
        {plan.rows.map((row) => (
          <div key={row.cat} className="flex items-center justify-between gap-4">
            <span className="text-gray-400 text-sm leading-snug">{row.cat}</span>
            <span className={`font-display font-bold text-lg flex-shrink-0 ${plan.highlight ? 'text-gold' : 'text-white'}`}>
              {row.price}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Divisions() {
  const { t } = useTranslation();

  return (
    <section id="tarifs" className="py-24 bg-crown-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle
            label={t.divisions.label}
            title={<>{t.divisions.title.split(' ').slice(0, -1).join(' ')} <span className="text-gold-gradient">{t.divisions.title.split(' ').slice(-1)[0]}</span></>}
            subtitle={t.divisions.subtitle}
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {t.divisions.pricing.map((plan, index) => (
            <PricingCard key={plan.label} plan={plan} perAthlete={t.divisions.perAthlete} index={index} />
          ))}
        </div>

        {/* Notes tarifaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 mb-12"
        >
          <div className="flex gap-3 bg-crown-gray border border-gold/15 rounded-xl px-5 py-4">
            <span className="text-gold mt-0.5 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <p
              className="text-gray-400 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.divisions.noteAccompagnateurs }}
            />
          </div>

        </motion.div>

        {/* Documents téléchargeables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <a
            href={t.divisions.ruleDocLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-gold/30 bg-crown-gray hover:border-gold hover:bg-crown-black rounded-xl px-6 py-5 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-display font-bold text-sm group-hover:text-gold transition-colors">{t.divisions.ruleDocLabel}</p>
              <p className="text-gray-500 text-xs mt-0.5">{t.divisions.docSub}</p>
            </div>
          </a>
          <a
            href={t.divisions.docLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-gold/30 bg-crown-gray hover:border-gold hover:bg-crown-black rounded-xl px-6 py-5 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-display font-bold text-sm group-hover:text-gold transition-colors">{t.divisions.docLabel}</p>
              <p className="text-gray-500 text-xs mt-0.5">{t.divisions.docSub}</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
