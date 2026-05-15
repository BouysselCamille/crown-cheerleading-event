import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { useTranslation } from '../../i18n/index.jsx';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const { t } = useTranslation();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => setError(t.contact.fields.errorMessage || 'Une erreur est survenue. Veuillez réessayer.'))
      .finally(() => setLoading(false));
  };

  const f = t.contact.fields;

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
            label={t.contact.label}
            title={<>{t.contact.title1} <span className="text-gold-gradient">{t.contact.title2}</span></>}
            subtitle={t.contact.subtitle}
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
              <h3 className="text-white font-display font-bold text-xl mb-2">{t.contact.success.title}</h3>
              <p className="text-gray-500 text-sm">{t.contact.success.subtitle}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-gold text-sm hover:underline font-display"
              >
                {t.contact.success.reset}
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-display font-bold text-gray-400 uppercase tracking-widest mb-2">{f.name}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder-gray-700"
                    placeholder={f.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-xs font-display font-bold text-gray-400 uppercase tracking-widest mb-2">{f.email}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder-gray-700"
                    placeholder={f.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-display font-bold text-gray-400 uppercase tracking-widest mb-2">{f.subject}</label>
                <select
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors"
                >
                  <option value="" className="bg-crown-black">{f.subjectDefault}</option>
                  {f.subjects.map((s) => (
                    <option key={s.value} value={s.value} className="bg-crown-black">{s.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-display font-bold text-gray-400 uppercase tracking-widest mb-2">{f.message}</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder-gray-700 resize-none"
                  placeholder={f.messagePlaceholder}
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              <Button type="submit" variant="primary" className="w-full" disabled={loading}>
                {loading ? '…' : f.submit}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
