'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const AMOUNTS = [10, 25, 50, 100, 250, 500]

const CAUSES = [
  { icon: '🌱', label: 'Serres & Agriculture bio' },
  { icon: '📚', label: 'École MCM & Formation' },
  { icon: '♻️', label: 'Recyclage plastique' },
  { icon: '🤝', label: 'Café & Épicerie solidaires' },
]

export default function Donation() {
  const [selected, setSelected] = useState<number | null>(25)
  const [custom, setCustom] = useState('')

  return (
    <section className="py-24 bg-[#1a0e0b] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#c4623d]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#1d6e4a]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-[#c4623d]/15 text-[#d4a574] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5 border border-[#c4623d]/20">
            Faire un don
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Chaque don, chaque geste compte.
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            Rejoignez la communauté COMPACK et contribuez à des projets écologiques
            et solidaires qui transforment des vies.
          </p>
        </motion.div>

        {/* Causes */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {CAUSES.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
            >
              <span className="text-lg">{c.icon}</span>
              <span className="text-white/65 text-xs font-medium leading-tight">{c.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Donation card */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Amount selector */}
          <p className="text-white/40 text-xs font-bold tracking-[0.15em] uppercase mb-4">
            Choisissez un montant
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-5">
            {AMOUNTS.map((amount) => (
              <button
                key={amount}
                onClick={() => { setSelected(amount); setCustom('') }}
                className={`py-3 rounded-xl font-bold text-sm border transition-all duration-150 cursor-pointer ${
                  selected === amount && !custom
                    ? 'bg-[#c4623d] border-[#c4623d] text-white'
                    : 'bg-white/5 border-white/15 text-white/60 hover:border-[#c4623d]/50 hover:text-white'
                }`}
              >
                {amount}€
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div className="flex items-center gap-3 mb-8">
            <div className={`flex-1 flex items-center gap-2 border rounded-xl px-4 py-3 transition-all ${
              custom ? 'border-[#c4623d] bg-[#c4623d]/5' : 'border-white/15 bg-white/5'
            }`}>
              <span className="text-white/40 font-medium">€</span>
              <input
                type="number"
                min="1"
                placeholder="Montant libre"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setSelected(null) }}
                className="flex-1 bg-transparent text-white placeholder-white/25 text-sm outline-none"
              />
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-[#c4623d] hover:bg-[#d4754f] text-white font-bold text-base py-4 rounded-xl transition-colors duration-200 cursor-pointer">
            Faire un don de {custom ? `${custom}€` : selected ? `${selected}€` : '…'} →
          </button>

          <p className="text-white/25 text-xs text-center mt-4">
            Don sécurisé · Association SOLATERA · RNA W751154531 · Reçu fiscal sur demande
          </p>
        </motion.div>

      </div>
    </section>
  )
}
