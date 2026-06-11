import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { EVENT } from '../../constants/competitionData';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/index.jsx';

export function Tickets() {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://crown-cheerleading-events.assoconnect.com/public/build/js/iframe.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            label={t.tickets.label}
            title={<>{t.tickets.title1} <span className="text-gold-gradient">{t.tickets.title2}</span></>}
            subtitle={t.tickets.subtitle}
            center
          />
          {EVENT.assoconnectCollectId ? <a
            href={EVENT.assoconnectCollectId}
            target="_blank"
            className="inline-flex items-center gap-3 bg-gold/10 border border-gold/40 hover:bg-gold/20 hover:border-gold/70 text-gold font-display font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-200"
          >
            {t.tickets.label}
          </a> : null}
        </motion.div>

        {EVENT.assoconnectCollectId ? null : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-crown-gray border border-gold/20 rounded-2xl overflow-hidden"
          ><div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <div className="w-16 h-16 rounded-full border-2 border-gold/40 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-white font-display font-bold text-xl mb-3">{t.tickets.soon}</h3>
            </div></motion.div>)}

      </div>
    </section>
  );
}
