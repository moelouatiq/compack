'use client'

import { motion } from 'framer-motion'

const impacts = [
  { title: 'Impact & Sensibilisation', desc: 'Montrer l\'évolution concrète des projets, de la première pierre à l\'autonomie énergétique.' },
  { title: 'Engagement Communautaire', desc: 'Fédérer une communauté autour de nos valeurs — dons, partenariats, médiatisation.' },
  { title: 'Notoriété & Crédibilité', desc: 'Valoriser l\'expertise COMPACK® comme greentech engagée, attirer nouveaux partenaires.' },
]

export default function MediaTV() {
  return (
    <section id="media" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-purple-500/10 text-purple-600 text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Médias & Visibilité
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Émission de Télévision
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            SOLATERA — Une série documentaire inspirante filmée en intégralité
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="bg-gradient-to-br from-purple-900 to-[#2d3436] rounded-3xl p-10 text-white shadow-2xl">
              <div className="text-6xl mb-6">🎬</div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                Notre Différenciateur — L'Appel aux Célébrités
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Inviterons régulièrement des personnalités influentes (acteurs, entrepreneurs,
                athlètes) à participer physiquement à la construction ou à une étape clé du projet.
              </p>
              <div className="space-y-2">
                {['Rendez-vous médiatique fort', 'Pics de visibilité (réseaux, presse)', 'Attractivité pour diffuseurs & sponsors'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/75 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Impacts */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-5">
            <p className="text-[#2d3436]/70 leading-relaxed mb-6">
              L'intégralité du projet SOLATERA® sera filmée et produite sous forme d'une série
              documentaire/émission de télévision captivante.
            </p>
            {impacts.map((im, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-[#f5f1e8] rounded-2xl p-5">
                <h3 className="font-bold text-[#2d3436] mb-2">{im.title}</h3>
                <p className="text-[#2d3436]/65 text-sm leading-relaxed">{im.desc}</p>
              </motion.div>
            ))}
            <div className="bg-[#c4623d] rounded-2xl p-5 text-white text-center">
              <div className="font-bold text-lg">Les Éco-Villages SOLATERA®</div>
              <div className="text-white/80 text-sm">Plus qu'un projet, un Mouvement Visible.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
