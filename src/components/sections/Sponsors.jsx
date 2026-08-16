import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { SPONSORS } from '../../constants/competitionData';
import { useTranslation } from '../../i18n/index.jsx';

function SponsorCard({ name, logo, url, bg, className = '' }) {
  const Wrapper = url ? 'a' : 'div';
  const wrapperProps = url ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Wrapper {...wrapperProps} style={{ backgroundColor: bg || '#fff' }} className={`border border-gold/50 rounded-xl h-28 flex items-center justify-center overflow-hidden transition-colors ${logo ? 'p-4' : 'px-6'} ${className}`}>
      {logo
        ? <img src={logo} alt={name} className="w-full h-full object-contain" />
        : <span className={`font-display font-bold text-sm text-center ${style.text}`}>{name}</span>
      }
    </Wrapper>
  );
}

export function Sponsors() {
  const { t } = useTranslation();

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

        <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
          {SPONSORS.map((s, i) => {
            const isLastOdd = i === SPONSORS.length - 1 && SPONSORS.length % 2 !== 0;
            return isLastOdd
              ? <div key={s.name} className="col-span-2 flex justify-center"><SponsorCard {...s} className="w-1/2" /></div>
              : <SponsorCard key={s.name} {...s} />;
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <a
            href="mailto:contact@crown-cheerleading-events.fr?subject=Partenariat Crown Cheerleading Events"
            className="text-gold/70 hover:text-gold text-sm font-display font-semibold transition-colors border-b border-gold/30 hover:border-gold pb-1"
          >
            {t.sponsors.become}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
