'use client'

import { motion } from 'framer-motion'

const model = [
  { icon: '🗑️', title: 'Collecte locale', desc: 'Points de collecte pour encourager le tri dans les villages alentours.' },
  { icon: '🔥', title: 'Transformation', desc: 'Four artisanal pour transformer les déchets en matière première.' },
  { icon: '🪑', title: 'Production mobilier', desc: 'Fabrication de chaises et bancs pour le village, écoles et entreprises.' },
  { icon: '👷', title: 'Formation & Emplois', desc: 'Formerons les jeunes aux techniques de recyclage, créant des emplois verts.' },
]

export default function PlasticRecycling() {
  return (
    <section id="plastique" className="py-24 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-[#1d6e4a]/10 text-[#1d6e4a] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Zéro Déchet
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Recycler le Plastique
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            Transformer les Déchets en Valeur — Inspiré du modèle Potato Head à Bali
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {model.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-white rounded-3xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{m.icon}</div>
              <h3 className="font-bold text-[#2d3436] mb-2">{m.title}</h3>
              <p className="text-[#2d3436]/60 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="bg-[#1d6e4a] rounded-3xl p-8 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Engagement Communautaire</h3>
              <p className="text-white/80 leading-relaxed">
                Un repas gratuit sera offert aux participants qui collecteront les déchets plastiques
                et aluminium dans les villes voisines. Un incitatif puissant pour la communauté.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/15 rounded-2xl p-4 text-center">
                <div className="font-black text-2xl">🍽️</div>
                <div className="text-white/80 text-sm">Repas gratuit</div>
                <div className="text-white/60 text-xs">par collecte</div>
              </div>
              <div className="bg-white/15 rounded-2xl p-4 text-center">
                <div className="font-black text-2xl">💼</div>
                <div className="text-white/80 text-sm">Emplois verts</div>
                <div className="text-white/60 text-xs">locaux créés</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
