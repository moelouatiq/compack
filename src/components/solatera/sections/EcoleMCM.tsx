'use client'

import { motion } from 'framer-motion'

const languages = [
  { lang: 'Français', level: 'Débutant → Avancé', icon: '🇫🇷', desc: 'Cours du soir, ateliers conversation, aide administrative.' },
  { lang: 'Anglais', level: 'Débutant → Avancé', icon: '🇬🇧', desc: 'Anglais professionnel, voyage, communication internationale.' },
  { lang: 'Arabe', level: 'Darija & Classique', icon: '🇲🇦', desc: 'Dialecte marocain et arabe standard, écriture et lecture.' },
]

const programs = [
  'Cours collectifs par niveaux',
  'Ateliers de conversation',
  'Apprentissage du vivre-ensemble',
  'Échanges interculturels',
  'Cours de soutien scolaire',
  'Alphabétisation adultes',
  'Ateliers numériques & inclusion',
  'Certification de niveau',
]

export default function EcoleMCM() {
  return (
    <section id="ecole-mcm" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            École MCM
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Apprendre les Langues Ensemble
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            L'École MCM de SOLATERA propose des cours de langue gratuits ou à prix solidaire,
            animés par des bénévoles résidents du village.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Languages */}
          <div className="space-y-4">
            <h3 className="font-bold text-[#2d3436] text-xl mb-5">Langues enseignées</h3>
            {languages.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-[#f5f1e8] rounded-2xl p-5 flex gap-5 items-start">
                <span className="text-4xl flex-shrink-0">{l.icon}</span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-[#2d3436] text-lg">{l.lang}</h4>
                    <span className="text-xs bg-[#2563eb]/10 text-[#2563eb] px-2 py-0.5 rounded-full font-medium">{l.level}</span>
                  </div>
                  <p className="text-[#2d3436]/60 text-sm leading-relaxed">{l.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Programs */}
          <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="font-bold text-[#2d3436] text-xl mb-5">Programme complet</h3>
            <div className="bg-[#2563eb]/5 border border-[#2563eb]/15 rounded-3xl p-6 mb-6">
              <ul className="grid grid-cols-1 gap-2.5">
                {programs.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#2d3436]/75 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#2563eb] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl p-5 text-white">
              <p className="font-bold mb-1">Le vivre-ensemble au cœur de l'école</p>
              <p className="text-white/75 text-sm leading-relaxed">
                Au-delà des langues, l'École MCM est un espace d'échange entre les cultures,
                les générations et les origines — pour apprendre à se connaître et à se respecter.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
