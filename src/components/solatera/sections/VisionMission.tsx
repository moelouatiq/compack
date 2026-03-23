'use client'

import { motion } from 'framer-motion'

const visionPoints = [
  "Création d'éco-villages touristiques inclusifs sur le modèle 'CalEarth' ou 'superadobe' créé par l'architecte Nader Khalili, résistant aux séismes, fortes températures, imputrescible.",
  "Développement d'un modèle résilient face au changement climatique qui contribue à diminuer les émissions de gaz à effet de serre.",
]

const visionBullets = [
  'Récupération des eaux de pluie',
  'Panneaux solaires & photovoltaïques',
  'Production biologique de légumes et fruits',
  'Cuisine solaire',
  'Énergie 100% verte',
]

const missionPoints = [
  "Ces éco-villages touristiques sont conçus pour être des oasis universelles, des laboratoires expérimentaux de nouvelles technologies.",
]

const missionBullets = [
  'Lutter contre le changement climatique',
  "Promouvoir l'inclusion intergénérationnelle",
  'Offrir formation et aide à l\'intégration des jeunes',
  "Favoriser l'entrepreneuriat",
  'Servir de base au projet de conservation forestière et biodiversité',
]

export default function VisionMission() {
  return (
    <section id="vision" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#c4623d]/10 text-[#c4623d] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Notre Raison d'Être
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Vision & Mission
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#f5f1e8] rounded-3xl p-8 border-l-4 border-[#c4623d]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#c4623d] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <span className="text-[#c4623d] text-xs font-bold tracking-widest uppercase">01</span>
                <h3 className="text-2xl font-bold text-[#2d3436]" style={{ fontFamily: 'var(--font-playfair)' }}>Vision</h3>
              </div>
            </div>
            {visionPoints.map((p, i) => (
              <p key={i} className="text-[#2d3436]/75 leading-relaxed mb-4">{p}</p>
            ))}
            <ul className="space-y-2 mt-4">
              {visionBullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-2 text-sm text-[#2d3436]/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c4623d] flex-shrink-0" />
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-[#1d6e4a]/5 rounded-3xl p-8 border-l-4 border-[#1d6e4a]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1d6e4a] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <span className="text-[#1d6e4a] text-xs font-bold tracking-widest uppercase">02</span>
                <h3 className="text-2xl font-bold text-[#2d3436]" style={{ fontFamily: 'var(--font-playfair)' }}>Mission</h3>
              </div>
            </div>
            {missionPoints.map((p, i) => (
              <p key={i} className="text-[#2d3436]/75 leading-relaxed mb-4">{p}</p>
            ))}
            <ul className="space-y-2 mt-4">
              {missionBullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-2 text-sm text-[#2d3436]/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1d6e4a] flex-shrink-0" />
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
