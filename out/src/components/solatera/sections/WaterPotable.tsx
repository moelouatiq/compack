'use client'

import { motion } from 'framer-motion'

const removed = ['Contaminants', 'Sels dissous', 'Micro-organismes', 'Polluants chimiques']

export default function WaterPotable() {
  return (
    <section id="eau" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#2563eb] to-[#1d6e4a] rounded-3xl p-10 text-white text-center shadow-2xl">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Osmose Inverse</h3>
              <p className="text-white/80 mb-6">Système de filtration de pointe</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/15 rounded-2xl p-4">
                  <div className="font-black text-2xl">100%</div>
                  <div className="text-white/70 text-xs">Autonome en eau</div>
                </div>
                <div className="bg-white/15 rounded-2xl p-4">
                  <div className="font-black text-2xl">0</div>
                  <div className="text-white/70 text-xs">Bouteilles plastique</div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-5 -right-5 bg-[#d4a574] text-[#2d3436] rounded-2xl p-4 shadow-xl font-bold"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: 'spring' }}
            >
              Norme potabilité
              <div className="text-xs font-normal opacity-70">OMS certifié</div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-blue-500/10 text-blue-600 text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Blue Économie
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Eau Potable — Système Autonome
            </h2>
            <p className="text-[#2d3436]/65 leading-relaxed mb-6">
              Dans le cadre de notre engagement pour la Blue Économie et l'accès à l'eau potable,
              nous avons conçu une unité de filtration par Osmose Inverse.
            </p>
            <p className="text-[#2d3436]/65 leading-relaxed mb-6">
              Ce système autonome et à faible consommation énergétique sécurise l'approvisionnement
              en eau, réduisant drastiquement le recours aux bouteilles plastiques et les risques
              sanitaires liés à l'eau non traitée.
            </p>

            <h3 className="font-bold text-[#2d3436] mb-3">Éléments éliminés par osmose :</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {removed.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 bg-red-50 rounded-xl px-4 py-3"
                >
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[#2d3436]/70 text-sm">{r}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-2xl px-5 py-4">
              <p className="text-[#2563eb] font-bold">Une solution durable et essentielle</p>
              <p className="text-[#2d3436]/60 text-sm mt-1">pour l'autonomie de nos communautés face aux défis de l'eau</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
