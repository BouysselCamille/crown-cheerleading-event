import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { CountdownTimer } from '../ui/CountdownTimer';
import { EVENT } from '../../constants/competitionData';
import { useTranslation } from '../../i18n/index.jsx';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-crown-black pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/3 blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/3 blur-3xl" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main content — flex-1 so it fills available space */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-16 max-w-5xl mx-auto w-full">
       

        <img src="/logo.png" className='h-70 md:h-100' alt="Crown Cheerleading Events" />

 <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-turquoise font-display font-bold text-xs tracking-[0.4em] uppercase my-6 border border-turquoise/40 px-4 py-2">
            {t.hero.edition} - Paris Spring Open Championship
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-gold font-display font-semibold tracking-wider text-base md:text-lg mb-4"
        >
          {t.hero.dateDisplay} &nbsp;|&nbsp; {t.hero.city}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-white text-xs uppercase tracking-widest font-display  mb-12"
        >
          {t.hero.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-12"
        >
          <p className="text-gray-600 text-xs uppercase tracking-widest font-display mb-4">{t.hero.countdown}</p>
          <CountdownTimer targetDate={EVENT.date} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="#tickets" variant="primary">
            {t.hero.buyTickets}
          </Button>
          <Button href="#inscription" variant="outline">
            {t.hero.registerTeam}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
