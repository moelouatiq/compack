'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: '🏡',
    title: 'Hébergement adapté senior',
    desc: 'Dômes de plain-pied, équipements adaptés, urgence disponible 24h/24.',
  },
  {
    icon: '🍽️',
    title: 'Restauration & nutrition',
    desc: 'Menus équilibrés élaborés avec des diététiciens, cuisine locale et bio.',
  },
  {
    icon: '🧘',
    title: 'Bien-être & activités douces',
    desc: 'Yoga senior, marche, aquagym, jardinage thérapeutique, ateliers créatifs.',
  },
  {
    icon: '🤝',
    title: 'Lien social & vie communautaire',
    desc: 'Sorties culturelles, ateliers intergénérationnels, café solidaire.',
  },
  {
    icon: '🏥',
    title: 'Suivi médical de proximité',
    desc: 'Pôle santé sur site, téléconsultations, coordination avec médecins référents.',
  },
  {
    icon: '🚗',
    title: 'Transport & logistique',
    desc: 'Navettes aéroport, transferts médicaux, véhicule adapté à disposition.',
  },
]

const formulas = [
  { label: 'Séjour découverte', duration: '1 semaine', price: 'dès 980€/sem', tag: '' },
  { label: 'Séjour mensuel', duration: '1 mois', price: 'dès 2 800€/mois', tag: '' },
  { label: 'Résidence longue durée', duration: '6-12 mois', price: 'sur devis', tag: 'Populaire' },
  { label: 'Tout compris EPAD', duration: 'Flexible', price: 'sur devis', tag: 'Recommandé' },
]

export default function EPAD() {
  return (
    <section id="epad" className="py-24 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-[#d4a574]/30 text-[#c4623d] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Service Séniors
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            EPAD — Résidence pour Retraités
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            Un cadre de vie exceptionnel pour nos aînés — nature, soleil, communauté et soins à portée de main.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-[#2d3436] mb-2">{s.title}</h3>
              <p className="text-[#2d3436]/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Formulas */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <h3 className="font-bold text-[#2d3436] text-xl mb-5 text-center">Formules disponibles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {formulas.map((f, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 relative ${f.tag === 'Recommandé' ? 'border-[#c4623d] bg-white' : f.tag === 'Populaire' ? 'border-[#1d6e4a] bg-white' : 'border-[#2d3436]/10 bg-white'}`}>
                {f.tag && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full text-white ${f.tag === 'Recommandé' ? 'bg-[#c4623d]' : 'bg-[#1d6e4a]'}`}>{f.tag}</span>
                )}
                <div className="font-bold text-[#2d3436] mb-1">{f.label}</div>
                <div className="text-[#2d3436]/50 text-sm mb-3">{f.duration}</div>
                <div className="font-black text-[#c4623d]">{f.price}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-10 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-2xl p-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <p className="font-bold text-[#2d3436] text-lg mb-1">Vieillez bien, vivez pleinement.</p>
          <p className="text-[#2d3436]/60 text-sm">Renseignements et visites sur rendez-vous — <a href="mailto:contact@compack.io" className="text-[#c4623d] underline underline-offset-2">contact@compack.io</a></p>
        </motion.div>
      </div>
    </section>
  )
}
