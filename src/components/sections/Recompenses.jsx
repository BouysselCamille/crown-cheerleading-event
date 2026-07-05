import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/index.jsx';

const MONEY_INFO = import.meta.env.VITE_MONEY_INFO === 'true';

export function Recompenses() {
  const { t } = useTranslation();

  return (
    <section id="awards" className="py-24 bg-crown-black">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle
            label={t.recompenses.label}
            title={<>{t.recompenses.title1} <span className="text-gold-gradient">{t.recompenses.title2}</span></>}
            subtitle={t.recompenses.subtitle}
            center
          />
        </motion.div>

        {/* Récompenses générales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {t.recompenses.rewards.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-4 bg-crown-gray border border-gold/15 rounded-xl px-5 py-4 hover:border-gold/40 transition-colors"
            >
              <span className="text-2xl flex-shrink-0">{r.icon}</span>
              <p className="text-gray-300 text-sm leading-snug">{r.text}</p>
            </motion.div>
          ))}
        </div>

        {MONEY_INFO ? (<>
          {/* Prix Grand Champion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4"
          >
            {t.recompenses.grandChamps.map((g) => (
              <div
                key={g.title}
                className="relative border border-gold bg-crown-gray rounded-2xl overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gold/3 pointer-events-none" />

                <div className="relative p-8 text-center">
                  <div className="text-3xl mb-4">👑</div>
                  <p className="text-gold font-display font-black text-xs tracking-widest uppercase mb-2">{t.recompenses.prizeLabel}</p>
                  <h3 className="text-white font-display font-black text-lg leading-tight mb-3">{g.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{g.desc}</p>
                  <div className="gold-gradient rounded-xl py-3 px-6 inline-block">
                    <span className="text-black font-display font-black text-2xl tracking-tight">
                      {g.prize}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-xs text-center leading-relaxed max-w-2xl mx-auto mb-12"
          >
            {t.recompenses.note}
          </motion.p>

          {/* Cheer spirit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative border border-gold/40 bg-crown-gray rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gold/3 pointer-events-none" />
            <div className="relative px-5 py-5 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="text-3xl flex-shrink-0">🌟</div>
              <div className="flex-1">
                <p className="text-gold font-display font-black text-xs tracking-widest uppercase mb-2">{t.recompenses.cheerSpirit.title}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{t.recompenses.cheerSpirit.desc}</p>
              </div>
            </div>
          </motion.div></>) : (null)}

      </div>
    </section >
  );
}
