'use client'

import { motion } from 'framer-motion'

const pathways = [
  {
    num: '01',
    title: 'Accueil & Évaluation',
    desc: 'Entretien personnalisé pour identifier les besoins, compétences et objectifs de chaque personne.',
    color: '#c4623d',
  },
  {
    num: '02',
    title: 'Formation & Montée en Compétences',
    desc: 'Accès aux formations FAB Lab, reconditionnement numérique, agriculture, langues et métiers verts.',
    color: '#1d6e4a',
  },
  {
    num: '03',
    title: 'Accompagnement Socio-Professionnel',
    desc: 'Soutien administratif, aide au logement, accès aux droits, coaching et suivi personnalisé.',
    color: '#2563eb',
  },
  {
    num: '04',
    title: 'Insertion & Autonomie',
    desc: 'Mise en relation avec employeurs partenaires, création d\'activité, suivi post-insertion 6 mois.',
    color: '#d4a574',
  },
]

const publics = [
  'Migrants & réfugiés',
  'Jeunes sans emploi',
  'Personnes isolées',
  'Sortants de prison',
  'Familles en difficulté',
  'Personnes sans abri',
]

export default function Reinsertion() {
  return (
    <section id="reinsertion" className="py-24 bg-[#2d3436]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-white/15 text-white text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Réinsertion Sociale
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Accompagnement & Réinsertion
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            SOLATERA crée des parcours de réinsertion sur mesure pour redonner confiance,
            compétences et opportunités à ceux qui en ont besoin.
          </p>
        </motion.div>

        {/* Pathway */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pathways.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-white/10 border border-white/15 rounded-3xl p-5 relative overflow-hidden">
              <div className="font-black text-5xl text-white/5 absolute top-3 right-4 leading-none">{p.num}</div>
              <div className="font-black text-2xl mb-3" style={{ color: p.color }}>{p.num}</div>
              <h3 className="font-bold text-white mb-2">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Publics */}
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/10 border border-white/15 rounded-2xl p-6">
            <h3 className="font-bold text-white text-lg mb-4">Publics accompagnés</h3>
            <div className="flex flex-wrap gap-2">
              {publics.map((p) => (
                <span key={p} className="bg-white/15 text-white/80 text-sm px-3 py-1.5 rounded-full">{p}</span>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#c4623d]/20 border border-[#c4623d]/30 rounded-2xl p-6">
            <div className="text-4xl text-[#c4623d]/40 mb-3" style={{ fontFamily: 'Georgia, serif' }}>"</div>
            <blockquote className="text-white/85 italic leading-relaxed mb-4">
              Personne n'est condamné à rester là où la vie l'a mis.
              SOLATERA est un tremplin, pas une fin en soi.
            </blockquote>
            <cite className="text-[#d4a574] text-sm font-semibold not-italic">— Équipe SOLATERA Association</cite>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
