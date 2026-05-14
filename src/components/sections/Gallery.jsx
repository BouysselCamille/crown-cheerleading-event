import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { SectionTitle } from '../ui/SectionTitle';
import { useTranslation } from '../../i18n/index.jsx';

const GALLERY_ITEMS = [
  { src: '/gallery/2406-4130-dojo-de-paris.png', alt: 'Dojo de Paris' },
  { src: '/gallery/dojo-de-paris-1.jpg', alt: 'Dojo de Paris — salle' },
];

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  const openAt = (i) => { setIndex(i); setOpen(true); };

  return (
    <section id="gallery" className="py-24 bg-crown-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle
            label={t.gallery.label}
            title={<>{t.gallery.title1} <span className="text-gold-gradient">{t.gallery.title2}</span></>}
            subtitle={t.gallery.subtitle}
            center
          />
        </motion.div>

        <div className={`grid gap-3 ${GALLERY_ITEMS.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
          {GALLERY_ITEMS.map((item, i) => (
            <motion.button
              key={item.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              onClick={() => openAt(i)}
              className="relative overflow-hidden rounded-xl group cursor-pointer w-full"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 rounded-xl transition-colors duration-300" />
            </motion.button>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={GALLERY_ITEMS.map(item => ({ src: item.src, alt: item.alt }))}
          styles={{
            container: { backgroundColor: 'rgba(10,10,10,0.97)' },
          }}
        />
      </div>
    </section>
  );
}
