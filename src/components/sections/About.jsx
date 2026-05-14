import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/index.jsx';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-crown-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label={t.about.label}
              title={<>{t.about.title1}<br /><span className="text-gold-gradient">{t.about.title2}</span><br />{t.about.title3}</>}
            />
            <p className="text-gray-400 leading-relaxed mb-6">{t.about.p1}</p>
            <p className="text-gray-400 leading-relaxed mb-8">{t.about.p2}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold font-display font-semibold text-sm tracking-wider">{t.about.badge}</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {t.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-crown-gray border border-gold/20 rounded-xl p-8 text-center hover:border-gold/50 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-display font-black text-gold mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm font-display uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
