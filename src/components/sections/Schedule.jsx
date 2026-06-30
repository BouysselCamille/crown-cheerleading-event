import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/index.jsx';

export function Schedule() {
  const { t } = useTranslation();

  return (
    <section id="schedule" className="relative py-24 bg-crown-dark overflow-hidden">
      {/* Cheerleader silhouette — left side, behind content */}
      <img
        src="/gallery/silhouette.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 h-[80%] w-auto max-w-none block left-1/4 -translate-x-1/2 opacity-20 lg:left-0 lg:-translate-x-1/4"
      />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle
            label={t.schedule.label}
            title={<>{t.schedule.title.split(' ').slice(0, -1).join(' ')} <span className="text-gold-gradient">{t.schedule.title.split(' ').slice(-1)[0]}</span></>}
            subtitle={`${t.hero.dateDisplay} ${t.schedule.subtitleSuffix}`}
            center
          />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-16 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />

          <div className="space-y-0">
            {t.schedule.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="relative flex items-start md:items-center gap-6 pl-24 md:pl-0 pb-8"
              >
                {/* Time — mobile left aligned */}
                <div className="absolute left-0 top-0 md:static md:w-[calc(50%-2rem)] text-right hidden md:block">
                  <span className="text-gold font-display font-black text-lg">{item.time}</span>
                </div>

                {/* Dot */}
                <div className="absolute left-[3.8rem] md:static md:mx-4 flex-shrink-0 w-4 h-4 rounded-full bg-gold border-2 border-crown-dark shadow-[0_0_12px_rgba(212,175,55,0.5)] mt-1 md:mt-0" />

                {/* Label */}
                <div className="md:w-[calc(50%-2rem)]">
                  {/* Time — mobile only */}
                  <span className="block md:hidden text-gold font-display font-black text-sm mb-1">{item.time}</span>
                  <p className="text-white font-display font-semibold text-base leading-snug">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
