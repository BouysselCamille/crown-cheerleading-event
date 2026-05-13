import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { FAQ as FAQ_DATA } from '../../constants/competitionData';

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="border border-gold/20 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-crown-gray hover:bg-crown-black transition-colors"
      >
        <span className="font-display font-semibold text-white text-sm md:text-base pr-4">{item.q}</span>
        <span className={`text-gold text-xl flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 text-gray-400 text-sm leading-relaxed border-t border-gold/10 bg-crown-black">
              {item.a.split('\n').map((line, i) => {
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                const parts = line.split(urlRegex);
                return (
                  <span key={i}>
                    {parts.map((part, j) =>
                      /^https?:\/\//.test(part) ? (
                        <a key={j} href={part} target="_blank" rel="noopener noreferrer"
                          className="text-gold underline underline-offset-2 hover:text-gold-light break-all">
                          {part}
                        </a>
                      ) : part
                    )}
                    {i < item.a.split('\n').length - 1 && <br />}
                  </span>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="faq" className="py-24 bg-crown-dark">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <SectionTitle
            label="FAQ"
            title={<>Questions <span className="text-gold-gradient">fréquentes</span></>}
            center
          />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {FAQ_DATA.map((group, i) => (
            <button
              key={group.category}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === i
                  ? 'gold-gradient text-black'
                  : 'border border-gold/30 text-gray-400 hover:border-gold/60 hover:text-white'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-2"
          >
            {FAQ_DATA[activeTab].items.map((item, index) => (
              <FAQItem key={item.q} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
