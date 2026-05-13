import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

const STATS = [
  { value: '500+', label: 'Athlètes attendus' },
  { value: '30+', label: 'Équipes participantes' },
  { value: '2', label: 'Crown Grand Champs' },
  { value: '1', label: 'Journée inoubliable' },
];

export function About() {
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
              label="À propos"
              title={<>La compétition<br /><span className="text-gold-gradient">qui couronne</span><br />les champions</>}
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Crown Cheerleading Events est une compétition créée par des passionnés, pour des passionnés.
              Notre ambition : offrir aux équipes de cheerleading françaises une scène à la hauteur de leur talent,
              dans une ambiance électrique et bienveillante.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Que vous soyez équipe débutante ou confirmée, Crown Cheerleading Events accueille toutes les divisions
              dans un format pensé pour valoriser chaque athlète et chaque prestation.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold font-display font-semibold text-sm tracking-wider">Jugé selon les standards IASF / United Scoring System</span>
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
            {STATS.map((stat) => (
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
