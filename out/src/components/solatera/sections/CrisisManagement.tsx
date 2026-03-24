'use client'

import { motion } from 'framer-motion'

const deployments = [
  {
    num: '01',
    title: 'Le Dôme Décisionnel (Fixe)',
    desc: 'Salle de crise haute définition pour simuler des scénarios complexes.',
    scenarios: ['Feux de forêt', 'Accidents industriels majeurs', 'Gestion de foules', 'Menaces NRBC'],
  },
  {
    num: '02',
    title: 'L\'Unité de Simulation Itinérante (Mobile)',
    desc: 'Module projetable sur l\'ensemble du territoire pour former les unités au plus près.',
    scenarios: ['Casernes', 'Préfectures', 'Sites sensibles'],
  },
]

const missions = ['MCO: Maintien en Condition Opérationnelle', 'Interopérabilité des différents services', 'Décision sous Stress — Leadership en environnement dégradé']

export default function CrisisManagement() {
  return (
    <section id="crise" className="py-24 bg-[#2d3436]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-white/15 text-white text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Sécurité & Souveraineté
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Pôle d'Excellence en Gestion de Crise
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Centre de Simulation Tactique — COMPACK SIMULATION CENTER
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {deployments.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-white/10 border border-white/15 rounded-3xl p-7">
              <div className="font-black text-4xl text-[#c4623d] mb-3">{d.num}</div>
              <h3 className="font-bold text-white text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>{d.title}</h3>
              <p className="text-white/65 text-sm mb-4 leading-relaxed">{d.desc}</p>
              <div className="flex flex-wrap gap-2">
                {d.scenarios.map((s, j) => (
                  <span key={j} className="bg-white/15 text-white/80 text-xs px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#c4623d]/20 border border-[#c4623d]/30 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">Partenaires cibles</h3>
            <div className="flex flex-wrap gap-2">
              {['Gendarmerie Royale', 'DGSN', 'Protection Civile', 'Grands groupes'].map((p) => (
                <span key={p} className="bg-[#c4623d]/30 text-white text-sm px-3 py-1 rounded-full">{p}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/10 border border-white/15 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">3 Missions clés</h3>
            <ul className="space-y-2">
              {missions.map((m, i) => (
                <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574] mt-1.5 flex-shrink-0" />{m}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.blockquote className="text-center mt-10 text-white/80 italic text-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          "Apprendre par l'erreur virtuelle pour ne plus faillir dans la réalité."
        </motion.blockquote>
      </div>
    </section>
  )
}
