'use client'

import { motion } from 'framer-motion'

const phases = [
  { num: '01', title: 'Acquisition du Terrain', desc: '7 hectares à Marrakech — permis de construire en cours.', year: '2025' },
  { num: '02', title: 'Construction Phase 1', desc: '20 dômes superadobe, infrastructures énergétiques et hydrauliques.', year: '2026 T1' },
  { num: '03', title: 'Ouverture Partielle', desc: '40 dômes opérationnels, café solidaire, FAB Lab, école.', year: '2026 T3' },
  { num: '04', title: 'Village Complet', desc: '60 dômes, centre santé, pôle sportif, grande muraille verte.', year: 'Fin 2026' },
]

const infrastructure = [
  '60 dômes superadobe (dont 10 PMR)',
  'Centrale solaire — autonomie énergétique totale',
  'Station osmose inverse — eau potable',
  'Serre bioclimatique 500m²',
  '20 ruches — production de miel',
  'Pôle santé 7j/7',
  'FAB Lab & formation numérique',
  'Café solidaire & piscine',
  'Éco-School (15 disciplines)',
  'Centre de bien-être & fitness',
  'Unité de simulation de crise',
  'Atelier recyclage plastique',
  'Refuge animalier',
  'Potager biologique',
]

export default function ProjectDetails() {
  return (
    <section id="projet" className="py-24 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-[#c4623d]/10 text-[#c4623d] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Projet Pilote
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Marrakech — Le Premier Village
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            7 hectares, 60 dômes, une vision complète — le prototype qui démontrera que SOLATERA® est reproductible à l'échelle mondiale.
          </p>
        </motion.div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { value: '7 ha', label: 'Surface totale' },
            { value: '60', label: 'Dômes superadobe' },
            { value: '2026', label: 'Année d\'ouverture' },
            { value: '500+', label: 'Résidents attendus' },
          ].map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="font-black text-3xl text-[#c4623d] mb-1">{m.value}</div>
              <div className="text-[#2d3436]/60 text-sm">{m.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">
          {/* Timeline */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h3 className="font-bold text-[#2d3436] text-xl mb-6">Calendrier de Déploiement</h3>
            <div className="space-y-4">
              {phases.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#c4623d] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{p.num}</div>
                    {i < phases.length - 1 && <div className="w-0.5 h-12 bg-[#c4623d]/30 mt-1" />}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-[#2d3436]">{p.title}</h4>
                      <span className="text-xs bg-[#d4a574]/20 text-[#c4623d] px-2 py-0.5 rounded-full font-semibold">{p.year}</span>
                    </div>
                    <p className="text-[#2d3436]/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Infrastructure list */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="font-bold text-[#2d3436] text-xl mb-6">Infrastructures Complètes</h3>
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <ul className="space-y-2">
                {infrastructure.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 text-[#2d3436]/75 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#1d6e4a] flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Investment CTA */}
        <motion.div className="bg-gradient-to-br from-[#c4623d] to-[#d4a574] rounded-3xl p-8 text-white text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Rejoignez l'Aventure</h3>
          <p className="text-white/85 max-w-2xl mx-auto mb-6 leading-relaxed">
            SOLATERA® Marrakech est le premier d'une série de villages écologiques à travers l'Afrique et le monde.
            Investisseurs, partenaires et bénévoles bienvenus.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:contact@compack.io" className="bg-white text-[#c4623d] font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors cursor-pointer">
              Devenir Partenaire
            </a>
            <a href="#reservation" className="bg-white/20 border border-white/40 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors cursor-pointer">
              Réserver un Dôme
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
