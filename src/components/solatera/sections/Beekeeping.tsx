'use client'

import { motion } from 'framer-motion'

const programme = [
  "Animations pédagogiques autour de la ruche",
  "Découverte de l'apiculture et de l'importance des abeilles",
  "Organisation du travail et des tâches au sein de la ruche",
  "Fabrication artisanale de produits dérivés (bonbons, bougies, savon)",
  "Installation de 20 ruches = 20 litres de miel/ruche/an",
]

export default function Beekeeping() {
  return (
    <section id="ruches" className="py-24 bg-gradient-to-br from-[#d4a574]/20 to-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Stats visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#d4a574] rounded-3xl p-10 text-[#2d3436] shadow-xl">
              <div className="text-6xl mb-4">🐝</div>
              <h3 className="text-3xl font-black mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                Les abeilles au cœur de notre écosystème
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/40 rounded-2xl p-4 text-center">
                  <div className="font-black text-3xl">20</div>
                  <div className="text-sm text-[#2d3436]/70">Ruches</div>
                </div>
                <div className="bg-white/40 rounded-2xl p-4 text-center">
                  <div className="font-black text-3xl">400L</div>
                  <div className="text-sm text-[#2d3436]/70">Miel/an</div>
                </div>
                <div className="bg-white/40 rounded-2xl p-4 text-center">
                  <div className="font-black text-3xl">1/3</div>
                  <div className="text-sm text-[#2d3436]/70">Alim. mondiale</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-[#d4a574]/30 text-[#c4623d] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Biodiversité
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ruches & Apiculture
            </h2>
            <div className="space-y-3 mb-6">
              <p className="text-[#2d3436]/70 leading-relaxed">
                Les pollinisateurs contribuent directement à la sécurité alimentaire.
                Près de trois quarts des plantes produisent 90% de la nourriture mondiale grâce à eux.
              </p>
              <p className="text-[#2d3436]/70 leading-relaxed">
                Un tiers de la production alimentaire mondiale dépend des abeilles selon l'ONU pour l'alimentation et l'agriculture.
              </p>
            </div>

            <h3 className="font-bold text-[#2d3436] mb-4">Programme complet :</h3>
            <ul className="space-y-3">
              {programme.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
                >
                  <span className="text-lg">🍯</span>
                  <span className="text-[#2d3436]/75 text-sm">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
