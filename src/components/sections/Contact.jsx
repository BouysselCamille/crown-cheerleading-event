import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/index.jsx';

export function Contact() {
  const { t } = useTranslation();
  const c = t.contact;

  return (
    <section id="contact" className="py-24 bg-crown-black">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle
            label={c.label}
            title={<>{c.title1} <span className="text-gold-gradient">{c.title2}</span></>}
            subtitle={c.subtitle}
            center
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-crown-gray border border-gold/20 rounded-2xl p-10 text-center"
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <a
            href={`mailto:${c.email}`}
            className="text-gold font-display font-bold text-lg hover:text-gold-light transition-colors break-all"
          >
            {c.email}
          </a>
          <p className="mt-6">
            <a
              href={`mailto:${c.email}`}
              className="inline-flex items-center gap-2 bg-gold text-crown-black font-display font-bold text-sm px-6 py-3 rounded-xl hover:bg-gold-light transition-colors"
            >
              {c.cta}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
