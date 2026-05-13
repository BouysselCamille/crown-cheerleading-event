import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

const transports = [
  {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Paris_transit_icons_white_-_M%C3%A9tro.svg/960px-Paris_transit_icons_white_-_M%C3%A9tro.svg.png"
        alt="Métro"
        className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(50%) saturate(600%) hue-rotate(5deg) brightness(95%)' }}
      />
    ),
    label: 'Métro',
    lines: [
      { name: 'Ligne 4', detail: 'Porte d\'Orléans ou Mairie de Montrouge' },
      { name: 'Ligne 13', detail: 'Porte de Vanves' },
    ],
  },
  {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Paris_transit_icons_white_-_Tram.svg/40px-Paris_transit_icons_white_-_Tram.svg.png"
        alt="Tram"
        className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(50%) saturate(600%) hue-rotate(5deg) brightness(95%)' }}
      />
    ),
    label: 'Tram',
    lines: [
      { name: 'Ligne T3a', detail: 'Porte de Vanves, Didot, Jean Moulin ou Porte d\'Orléans' },
    ],
  },
  {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Paris_transit_icons_white_-_Bus.svg"
        alt="Bus"
        className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(50%) saturate(600%) hue-rotate(5deg) brightness(95%)' }}
      />
    ),
    label: 'Bus',
    lines: [
      { name: 'Ligne 58', detail: 'Porte de Chatillon' },
      { name: 'Lignes 194 & 388', detail: 'Jean Moulin' },
    ],
  },
  {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Paris_transit_icons_white_-_Covoiturage.svg/40px-Paris_transit_icons_white_-_Covoiturage.svg.png"
        alt="En voiture"
        className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(50%) saturate(600%) hue-rotate(5deg) brightness(95%)' }}
      />
    ),
    label: 'En voiture',
    lines: [
      { name: 'Parking Q-Park', detail: '21 avenue de la Porte de Chatillon, 75014 Paris' },
    ],
  },
];

export function PlanAcces() {
  return (
    <section id="acces" className="py-24 bg-crown-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle
            label="Lieu"
            title={<>Plan <span className="text-gold-gradient">d'accès</span></>}
            subtitle="La compétition se déroule au Dojo de Paris."
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Adresse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-crown-gray border border-gold/20 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-display font-bold text-gold uppercase tracking-widest mb-1">Adresse</p>
                <p className="text-white font-display font-semibold text-lg leading-tight">Dojo de Paris</p>
                <p className="text-gray-400 text-sm mt-1">21/25 avenue de la Porte de Chatillon<br />75014 Paris</p>
                <a
                  href="https://www.dojodeparis.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-gold text-xs font-display hover:underline"
                >
                  Site officiel du Dojo de Paris →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Transport */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-crown-gray border border-gold/20 rounded-2xl p-6"
          >
            <p className="text-xs font-display font-bold text-gold uppercase tracking-widest mb-5">Comment venir</p>
            <div className="flex flex-col gap-5">
              {transports.map((t) => (
                <div key={t.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 text-gold">
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-white font-display font-semibold text-sm">{t.label}</p>
                    <ul className="mt-1 space-y-0.5">
                      {t.lines.map((l) => (
                        <li key={l.name} className="text-gray-400 text-sm">
                          <span className="text-gray-300">{l.name}</span>
                          {l.detail && <span className="text-gray-500"> — {l.detail}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
