'use client'

import { motion } from 'framer-motion'

const impacts = [
  { icon: '🎓', title: 'Formation Professionnelle', desc: 'Formerons les jeunes aux techniques de reconditionnement, du diagnostic à la revente.' },
  { icon: '💰', title: 'Impact Économique', desc: 'Créera une source de revenus pour les participants et des appareils à prix accessible.' },
  { icon: '♻️', title: 'Bénéfice Écologique', desc: 'Prolongera la durée de vie des appareils et réduira les déchets électroniques.' },
]

export default function DigitalRecycling() {
  return (
    <section id="numerique" className="py-24 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Partenariat Stratégique
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Reconditionnement Numérique
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            Grade Zero — L'économie circulaire au service de la jeunesse
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
          {/* Partner info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#2563eb] flex items-center justify-center text-white font-bold text-xl">G0</div>
                <div>
                  <div className="font-bold text-[#2d3436] text-lg">Grade Zero</div>
                  <div className="text-[#2d3436]/60 text-sm">Partenaire reconditionnement</div>
                </div>
              </div>
              <p className="text-[#2d3436]/70 leading-relaxed">
                La société française Grade Zero a reconditionné plus de 300 000 smartphones depuis 2012,
                en suivant un processus écologique strict.
              </p>
              <div className="mt-4 bg-[#2563eb]/10 rounded-xl px-4 py-3">
                <span className="font-black text-2xl text-[#2563eb]">300K+</span>
                <span className="text-[#2d3436]/60 text-sm ml-2">appareils reconditionnés depuis 2012</span>
              </div>
            </div>
            <p className="text-[#2d3436]/65 leading-relaxed">
              Son président, Karim Foughali, a été séduit par notre projet et nous accompagnera
              pour former les jeunes aux métiers du reconditionnement numérique.
            </p>
          </motion.div>

          {/* Impacts */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-4">
            {impacts.map((im, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
                <span className="text-3xl">{im.icon}</span>
                <div>
                  <h3 className="font-bold text-[#2d3436] mb-1">{im.title}</h3>
                  <p className="text-[#2d3436]/65 text-sm leading-relaxed">{im.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div className="bg-[#2563eb] rounded-3xl p-8 text-white text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
            Un véritable tremplin professionnel pour la jeunesse
          </h3>
          <p className="text-white/80">En alliant le modèle éprouvé de Grade Zero à la mission sociale de SOLATERA</p>
        </motion.div>
      </div>
    </section>
  )
}
