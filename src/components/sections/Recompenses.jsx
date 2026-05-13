import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

const REWARDS = [
  { icon: '🥇', text: 'Chaque participant reçoit une médaille' },
  { icon: '🏳️', text: 'Les champions et les équipes novices reçoivent une bannière' },
  { icon: '📸', text: 'Photos de la routine gratuites' },
  { icon: '🎥', text: 'Vidéo de la routine disponible sur YouTube post-compétition' },
  { icon: '🏟️', text: 'Compétition sur praticable dynamique de 7 panels' },
  { icon: '🎯', text: 'Routine jugées par un panel Varsity qualifié' },
];

const GRAND_CHAMPS = [
  {
    title: 'ALLSTAR GRAND CHAMPION',
    desc: 'L\'équipe au plus haut score dans la catégorie Allstar',
    prize: '2 000 EUR',
  },
  {
    title: 'NEXT GEN GRAND CHAMPION',
    desc: 'L\'équipe au plus haut score parmi les catégories Universitaire et Prep',
    prize: '1 000 EUR',
  },
];

export function Recompenses() {
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
            label="Récompenses"
            title={<>Ce qui vous <span className="text-gold-gradient">attend</span></>}
            subtitle="Parce que chaque athlète mérite d'être récompensé pour son effort."
            center
          />
        </motion.div>

        {/* Récompenses générales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {REWARDS.map((r, i) => (
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

        {/* Prix Grand Champion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          {GRAND_CHAMPS.map((g, i) => (
            <div
              key={g.title}
              className="relative border border-gold bg-crown-gray rounded-2xl overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gold/3 pointer-events-none" />

              <div className="relative p-8 text-center">
                <div className="text-3xl mb-4">👑</div>
                <p className="text-gold font-display font-black text-xs tracking-widest uppercase mb-2">Prix</p>
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
          className="text-gray-600 text-xs text-center leading-relaxed max-w-2xl mx-auto"
        >
          * Les équipes avec des exceptions d'âge ne seront pas considérées. Les deux prix seront attribués à des clubs différents. Les juges seront consultés si les scores sont égaux ou désignent deux fois le même club.
        </motion.p>
      </div>
    </section>
  );
}
