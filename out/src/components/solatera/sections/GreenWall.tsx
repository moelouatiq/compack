'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '8 000 km', label: 'De Dakar à Djibouti' },
  { value: '11', label: 'Pays traversés' },
  { value: '2030', label: 'Objectif ONU' },
  { value: '100M', label: 'Hectares à reforester' },
]

const roles = [
  { icon: '🏕️', title: 'Camp de Base', desc: 'SOLATERA® comme point de départ pour les équipes de terrain.' },
  { icon: '🌱', title: 'Reforestation Active', desc: 'Plantation d\'espèces locales résistantes à la sécheresse.' },
  { icon: '💧', title: 'Gestion de l\'Eau', desc: 'Systèmes de collecte et de rétention des eaux pluviales.' },
  { icon: '👩‍🌾', title: 'Formation Locale', desc: 'Former des milliers d\'agriculteurs aux techniques durables.' },
]

export default function GreenWall() {
  return (
    <section id="muraille" className="py-24 bg-gradient-to-br from-[#1d6e4a] to-[#0d4a30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-white/20 text-white text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Vision Panafricaine
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            La Grande Muraille Verte
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            SOLATERA® s'inscrit dans l'initiative panafricaine de reforestation du Sahel —
            un projet historique soutenu par l'Union Africaine et l'ONU.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/15 rounded-2xl p-5 text-center">
              <div className="font-black text-2xl sm:text-3xl text-[#d4a574] mb-1">{s.value}</div>
              <div className="text-white/70 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
          {/* Left: Map visual */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="bg-white/10 border border-white/20 rounded-3xl p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">🌍</div>
                <div className="font-bold text-white text-xl">Sénégal → Djibouti</div>
                <div className="text-white/60 text-sm mt-1">La plus grande structure vivante au monde</div>
              </div>
              <div className="relative bg-white/5 rounded-2xl p-4 overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-xs">Dakar</span>
                  <span className="text-white/60 text-xs">Djibouti</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#d4a574] to-[#27ae60] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '35%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                  />
                </div>
                <div className="text-white/50 text-xs mt-2 text-center">Progression actuelle ~35%</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                {['Union Africaine', 'Nations Unies', 'FAO'].map((org) => (
                  <div key={org} className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-white text-xs font-semibold">{org}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Roles */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-5">
            <h3 className="text-white font-bold text-xl mb-4">Le rôle de SOLATERA® :</h3>
            {roles.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="flex items-start gap-4 bg-white/10 border border-white/15 rounded-2xl p-5">
                <span className="text-2xl flex-shrink-0">{r.icon}</span>
                <div>
                  <h4 className="font-bold text-white mb-1">{r.title}</h4>
                  <p className="text-white/65 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div className="bg-[#d4a574] rounded-2xl p-6 text-[#2d3436] text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <div className="font-bold text-lg">"Planter un arbre, c'est construire l'avenir"</div>
          <div className="text-[#2d3436]/70 text-sm mt-1">SOLATERA® contribue activement à la reforestation de 100 millions d'hectares de terres dégradées</div>
        </motion.div>
      </div>
    </section>
  )
}
