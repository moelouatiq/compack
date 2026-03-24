'use client'

import { motion } from 'framer-motion'

const services = [
  { icon: '🩺', label: 'Consultations de routine', desc: 'Suivi médical régulier pour tous les résidents' },
  { icon: '🩹', label: 'Soins petits accidents', desc: 'Prise en charge rapide des urgences légères' },
  { icon: '💉', label: 'Vaccinations', desc: 'Programme complet de prévention' },
  { icon: '👨‍⚕️', label: 'Soins spécialisés', desc: 'Personnel médical qualifié et permanent' },
]

export default function HealthPole() {
  return (
    <section id="sante" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-red-500/10 text-red-500 text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Bien-être
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Pôle Bien-être de Proximité
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            Au cœur de chaque éco-village, le bien-être de chacun a une place centrale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-[#f5f1e8] rounded-3xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-[#2d3436] mb-2">{s.label}</h3>
              <p className="text-[#2d3436]/60 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#2d3436]">Ouvert 7j/7 — 24h/24</div>
              <div className="text-[#2d3436]/60 text-sm">Urgences prises en charge à toute heure</div>
            </div>
          </div>
          <div className="bg-[#1d6e4a]/5 border border-[#1d6e4a]/15 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#1d6e4a] flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#2d3436]">Accessible à tous</div>
              <div className="text-[#2d3436]/60 text-sm">Résidents, visiteurs, communauté locale</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
