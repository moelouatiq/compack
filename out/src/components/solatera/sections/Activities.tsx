'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Tourisme & Découverte',
    color: '#c4623d',
    bg: 'bg-[#c4623d]/10',
    border: 'border-[#c4623d]/20',
    activities: [
      { name: 'Excursion Médina de Marrakech', duration: '1 journée' },
      { name: 'Balade à dos de dromadaire', duration: '2h' },
      { name: 'Visite des souks & artisanat', duration: 'Demi-journée' },
      { name: 'Trek Atlas & Agafay', duration: '1-2 jours' },
      { name: 'Coucher de soleil dans le désert', duration: 'Soirée' },
      { name: 'Quad & buggy', duration: '1-2h' },
    ],
  },
  {
    title: 'Nature & Éco-Village',
    color: '#1d6e4a',
    bg: 'bg-[#1d6e4a]/10',
    border: 'border-[#1d6e4a]/20',
    activities: [
      { name: 'Visite des serres biologiques', duration: '1h' },
      { name: 'Atelier apiculture & miel', duration: '2h' },
      { name: 'Initiation au compostage', duration: '1h' },
      { name: 'Jardinage & plantation', duration: 'Matinée' },
      { name: 'Balade à vélo dans le village', duration: 'Libre' },
      { name: 'Observation des étoiles', duration: 'Soirée' },
    ],
  },
  {
    title: 'Sports & Loisirs',
    color: '#2563eb',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    activities: [
      { name: 'Cours de yoga matinal', duration: 'Chaque matin' },
      { name: 'Zumba & danse', duration: '1h' },
      { name: 'Natation & lazy river', duration: 'Libre' },
      { name: 'Tennis & padel', duration: 'Sur réservation' },
      { name: 'Pétanque & jeux de plein air', duration: 'Libre' },
      { name: 'Randonnée guidée', duration: 'Demi-journée' },
    ],
  },
  {
    title: 'Culture & Créativité',
    color: '#d4a574',
    bg: 'bg-[#d4a574]/10',
    border: 'border-[#d4a574]/20',
    activities: [
      { name: 'Cours de cuisine marocaine', duration: '2-3h' },
      { name: 'Atelier poterie & zellige', duration: '2h' },
      { name: 'Concert & soirées musicales', duration: 'Soirée' },
      { name: 'Ateliers peinture & arts', duration: '2h' },
      { name: 'Projection de films en plein air', duration: 'Soirée' },
      { name: 'Hammam & soins traditionnels', duration: 'À la carte' },
    ],
  },
]

export default function Activities() {
  return (
    <section id="activites" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-[#c4623d]/10 text-[#c4623d] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Activités & Tourisme
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Vos Activités à SOLATERA
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            Des expériences inoubliables pour tous — valides, seniors et personnes handicapées.
            Chaque activité peut être adaptée selon vos besoins.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {categories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className={`${cat.bg} border ${cat.border} rounded-3xl p-6`}>
              <h3 className="font-bold text-[#2d3436] text-lg mb-4" style={{ color: cat.color }}>{cat.title}</h3>
              <ul className="space-y-2.5">
                {cat.activities.map((a, j) => (
                  <li key={j} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-[#2d3436]/80">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                      {a.name}
                    </span>
                    <span className="text-[#2d3436]/40 text-xs ml-2 flex-shrink-0">{a.duration}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Accessibility note */}
        <motion.div className="bg-gradient-to-r from-[#1d6e4a] to-[#155438] rounded-2xl p-6 text-white text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <div className="text-2xl mb-2">♿</div>
          <p className="font-bold text-lg mb-1">Toutes les activités sont accessibles aux PMR</p>
          <p className="text-white/70 text-sm">Équipements adaptés, accompagnateurs formés, transport accessible — aucun compromis sur l'inclusion.</p>
        </motion.div>
      </div>
    </section>
  )
}
