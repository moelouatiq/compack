'use client'

import { motion } from 'framer-motion'

const programmes = [
  {
    duration: '1 Semaine',
    title: 'Le Reset',
    items: ['Détoxification profonde', 'Relance de l\'énergie', 'Perte premiers kilos'],
    color: '#c4623d',
  },
  {
    duration: '2 Semaines',
    title: 'Le Rééquilibrage',
    items: ['Stabilisation du rythme métabolique', 'Ancrage nouvelles habitudes alimentaires'],
    color: '#1d6e4a',
  },
  {
    duration: '1 Mois',
    title: 'La Métamorphose',
    items: ['Perte de poids significative', 'Transformation de la silhouette', 'Retour à vitalité optimale'],
    color: '#d4a574',
  },
]

const facilities = ['Hamam & Bain maure', 'Piscine & Lazy river', 'Sauna & Balnéo', 'Coaching sportif', 'Nutrition & Diét.', 'Yoga & Méditation', 'Coiffure & Barbier', 'Soins cosmétiques', 'Massage & Réflexo.', 'Manucure & Pédicure', 'Soins du visage', 'Spa privatif']

export default function FitnessWellness() {
  return (
    <section id="wellness" className="py-24 bg-gradient-to-br from-[#2d3436] to-[#1a0e0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-white/15 text-white text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Remise en Forme
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Parcours de Transformation
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center">
            <div className="font-black text-3xl text-[#c4623d]">53%</div>
            <div className="text-white/70 text-sm">Population adulte marocaine en surpoids</div>
          </div>
          <div className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center">
            <div className="font-black text-3xl text-[#d4a574]">60%</div>
            <div className="text-white/70 text-sm">Adultes européens concernés par l'obésité</div>
          </div>
        </motion.div>

        {/* Programmes */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {programmes.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/10 border border-white/15 rounded-3xl p-6 hover:bg-white/15 transition-colors"
            >
              <div
                className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white mb-3"
                style={{ background: p.color }}
              >
                {p.duration}
              </div>
              <h3 className="font-bold text-white text-xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                {p.title}
              </h3>
              <ul className="space-y-2">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: p.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Facilities */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {facilities.map((f, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/15 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {f}
            </motion.span>
          ))}
        </div>

        {/* Slogan */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <blockquote className="text-xl text-white/90 italic leading-relaxed">
            "À SOLATERA, on ne vient pas seulement perdre du poids, on vient retrouver son poids
            de forme et une santé durable dans un cadre d'exception."
          </blockquote>
          <cite className="text-[#d4a574] text-sm mt-3 block not-italic font-semibold">— SOLATERA Wellness</cite>
        </motion.div>
      </div>
    </section>
  )
}
