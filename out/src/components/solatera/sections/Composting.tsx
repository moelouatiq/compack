'use client'

import { motion } from 'framer-motion'

const steps = [
  { step: '01', title: 'Collecte', desc: 'Biodéchets du restaurant et café collectés quotidiennement' },
  { step: '02', title: 'Transformation', desc: 'Processus de compostage et production de biochar ultra-performant' },
  { step: '03', title: 'Application', desc: 'Fertilisant naturel pour les serres et cultures maraîchères' },
  { step: '04', title: 'Impact', desc: 'Empreinte carbone réduite + 100% biodéchets valorisés' },
]

export default function Composting() {
  return (
    <section id="compostage" className="py-24 bg-[#1d6e4a]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#1d6e4a]/10 text-[#1d6e4a] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Économie Circulaire
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Compostage — De l'assiette à la terre
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            Zéro déchet, 100% valorisé — Au sein de l'éco-village, rien ne se perd, tout se transforme.
          </p>
        </motion.div>

        {/* Cycle steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative bg-white rounded-3xl p-6 shadow-md text-center"
            >
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-[#1d6e4a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              <div className="w-12 h-12 rounded-full bg-[#1d6e4a] text-white font-black text-lg flex items-center justify-center mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="font-bold text-[#2d3436] mb-2">{s.title}</h3>
              <p className="text-[#2d3436]/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-[#1d6e4a] rounded-3xl p-8 text-white text-center"
        >
          <div className="text-3xl font-black mb-2">Ce modèle réduit l'empreinte carbone</div>
          <p className="text-white/80 text-lg">
            tout en valorisant 100% des biodéchets sur place — Un cycle vertueux au service de la communauté SOLATERA
          </p>
        </motion.div>
      </div>
    </section>
  )
}
