'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Ombrières de Parking',
    desc: 'Nos zones de stationnement sont recouvertes de structures photovoltaïques, protégeant les véhicules tout en captant l\'énergie solaire.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Serres Bioclimatiques',
    desc: 'Les toitures de nos serres à légumes sont équipées de panneaux solaires, créant un écosystème où production alimentaire et électrique cohabitent.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    title: 'Autonomie Énergétique',
    desc: 'Chaque éco-village SOLATERA vise l\'autonomie énergétique complète grâce à une intégration solaire multifonctionnelle à l\'échelle du village.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function SolarEnergy() {
  return (
    <section id="solaire" className="py-24 bg-gradient-to-br from-[#c4623d]/10 to-[#d4a574]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#c4623d]/15 text-[#c4623d] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Énergie Verte
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Propulsé par le Soleil
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            Autonomie énergétique 100% — Intégration solaire intelligente
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#c4623d] text-white flex items-center justify-center mx-auto mb-5">
                {c.icon}
              </div>
              <h3 className="font-bold text-[#2d3436] text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>{c.title}</h3>
              <p className="text-[#2d3436]/65 leading-relaxed text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 bg-[#c4623d] text-white px-8 py-4 rounded-full font-bold text-lg">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            100% Énergie Renouvelable
          </div>
        </motion.div>
      </div>
    </section>
  )
}
