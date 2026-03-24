'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  { icon: '♿', title: 'Accès Universel', desc: 'Rampes d\'accès et chemins stabilisés sur l\'ensemble du village.' },
  { icon: '🛁', title: 'Salles de Bain Adaptées', desc: 'Douches à l\'italienne, barres d\'appui, espaces de transfert.' },
  { icon: '🏥', title: 'Personnel Formé', desc: 'Équipe qualifiée en accompagnement des personnes à mobilité réduite.' },
  { icon: '🌿', title: 'Activités Adaptées', desc: 'Programme d\'activités entièrement accessible : spa, jardins, ateliers.' },
]

export default function AccessibilityPMR() {
  return (
    <section id="pmr" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-[#1d6e4a]/10 text-[#1d6e4a] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Accessibilité & Inclusivité
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              10 Dômes PMR
            </h2>
            <p className="text-[#2d3436]/70 leading-relaxed mb-6">
              SOLATERA® est entièrement accessible. Nos 10 dômes PMR ont été spécialement conçus
              pour accueillir les personnes en situation de handicap dans des conditions de confort et de dignité optimales.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#f5f1e8] rounded-2xl p-4">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-bold text-[#2d3436] text-sm mb-1">{f.title}</h3>
                  <p className="text-[#2d3436]/60 text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#1d6e4a] rounded-2xl p-5 text-white mb-6">
              <div className="font-bold mb-2">Services inclus dans les forfaits PMR :</div>
              <ul className="space-y-1.5">
                {['Transport aéroport adapté', 'Accompagnant gratuit', 'Personnel médical disponible', 'Tarifs réduits pour groupes'].map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574] flex-shrink-0" />{s}
                  </li>
                ))}
              </ul>
            </div>

            <a href="mailto:contact@compack.io" className="inline-block bg-[#c4623d] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#b5532e] transition-colors cursor-pointer">
              Demander un séjour inclusif
            </a>
          </motion.div>

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/architecture/ecodomes-dakhla-2.jpg"
                alt="Dôme PMR accessible SOLATERA"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d6e4a]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="font-bold text-2xl">10 Dômes PMR</div>
                <div className="text-white/80 text-sm">Entièrement équipés pour l'accessibilité universelle</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
