'use client'

import { motion } from 'framer-motion'

const expertise = ['Conception et gestion de projets à grande échelle', 'Création d\'expériences uniques', 'Marketing et communication', 'Innovation et création de communautés']

const achievements = [
  { icon: '🎭', label: 'Clubs emblématiques', desc: 'Metropolis, Duplex' },
  { icon: '🎪', label: 'Festivals majeurs', desc: 'Foire du Trône' },
  { icon: '🎤', label: 'Concerts internationaux', desc: 'Concert Mariah Carey' },
  { icon: '💃', label: 'Phénomène culturel', desc: 'Création Tecktonik®' },
]

export default function Team() {
  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-[#c4623d]/10 text-[#c4623d] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            L'Équipe
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Qui Sommes-Nous
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            Un collectif d'entrepreneurs chevronnés, enrichi par des experts multiculturels
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Founder */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#c4623d] to-[#d4a574] flex items-center justify-center text-white font-black text-2xl flex-shrink-0">AB</div>
              <div>
                <h3 className="text-2xl font-bold text-[#2d3436]" style={{ fontFamily: 'var(--font-playfair)' }}>Alexandre BAROUZDIN</h3>
                <div className="text-[#c4623d] font-semibold">Fondateur de SOLATERA</div>
                <div className="text-[#2d3436]/60 text-sm mt-1">25+ ans d'expertise en événementiel & innovation</div>
              </div>
            </div>

            <p className="text-[#2d3436]/70 leading-relaxed mb-4">
              Notre équipe fondatrice est un collectif d'entrepreneurs chevronnés, enrichi par des experts
              universitaires, un géologue, juristes, influenceurs, ainsi qu'un expert en crédit carbone et reforestation.
            </p>
            <p className="text-[#2d3436]/70 leading-relaxed mb-6">
              Cette alliance unique combine des profils multiculturels à une expertise de plus de 25 ans
              dans l'événementiel, l'innovation, la gestion de projets.
            </p>

            <h3 className="font-bold text-[#2d3436] mb-3">Expertises clés :</h3>
            <ul className="space-y-2">
              {expertise.map((e, i) => (
                <li key={i} className="flex items-center gap-2 text-[#2d3436]/75 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c4623d] flex-shrink-0" />{e}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Achievements */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="font-bold text-[#2d3436] text-xl mb-6">Réalisations antérieures :</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#f5f1e8] rounded-2xl p-5">
                  <div className="text-3xl mb-2">{a.icon}</div>
                  <div className="font-bold text-[#2d3436] text-sm">{a.label}</div>
                  <div className="text-[#2d3436]/55 text-xs">{a.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#c4623d] to-[#d4a574] rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">L'innovation et la création de communautés sont au cœur de notre ADN.</p>
              <p className="text-white/80 text-sm leading-relaxed">
                SOLATERA® représente l'aboutissement de notre vision : le lieu où notre savoir-faire
                et notre créativité s'unissent pour construire un projet à impact local et international.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
