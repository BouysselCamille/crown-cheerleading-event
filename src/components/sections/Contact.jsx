import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pour une implémentation sans backend, utiliser EmailJS :
    // https://www.emailjs.com/ — gratuit jusqu'à 200 emails/mois
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    setSubmitted(true);
  };

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
            label="Contact"
            title={<>Prenons <span className="text-gold-gradient">contact</span></>}
            subtitle="Une question sur la compétition, un partenariat, une inscription ? Écrivez-nous."
            center
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-crown-gray border border-gold/20 rounded-2xl p-8"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-display font-bold text-xl mb-2">Message envoyé !</h3>
              <p className="text-gray-500 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-gold text-sm hover:underline font-display"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-display font-bold text-gray-400 uppercase tracking-widest mb-2">Nom</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder-gray-700"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-xs font-display font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder-gray-700"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-display font-bold text-gray-400 uppercase tracking-widest mb-2">Sujet</label>
                <select
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors"
                >
                  <option value="" className="bg-crown-black">Sélectionner un sujet</option>
                  <option value="inscription" className="bg-crown-black">Inscription équipe</option>
                  <option value="billetterie" className="bg-crown-black">Billetterie</option>
                  <option value="partenariat" className="bg-crown-black">Partenariat / Sponsoring</option>
                  <option value="presse" className="bg-crown-black">Presse / Médias</option>
                  <option value="autre" className="bg-crown-black">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-display font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder-gray-700 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Envoyer le message
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
