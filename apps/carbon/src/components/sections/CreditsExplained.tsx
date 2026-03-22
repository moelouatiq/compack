'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, TrendingUp, Building2 } from 'lucide-react'
import SectionLabel from '@/components/SectionLabel'

const cards = [
  {
    icon: Lightbulb,
    title: "QU'EST-CE QUE C'EST?",
    bgClass: 'bg-blue-50',
    iconClass: 'bg-blue-100 text-blue-600',
    borderClass: 'border-blue-100',
    points: [
      'CORCs sur plateforme Puro.earth',
      'Représentent 1 tonne CO₂ retirée PERMANENTE',
      'Vs crédits évitement: Agissent directement réduire CO₂',
      'Séquestration: Centaines à milliers d\'années',
    ],
  },
  {
    icon: TrendingUp,
    title: 'MARCHÉ & PRIX',
    bgClass: 'bg-green-50',
    iconClass: 'bg-green-100 text-green-600',
    borderClass: 'border-green-100',
    points: [
      'Demande forte: Entreprises Net Zero',
      'Prix moyen: 158€/tonne CO₂ (août 2025)',
      'Tendance: HAUSSE SIGNIFICATIVE ATTENDUE',
      'Rareté + certification rigoureuse',
    ],
    highlight: '158€/tCO₂',
  },
  {
    icon: Building2,
    title: 'ACHETEURS',
    bgClass: 'bg-orange-50',
    iconClass: 'bg-orange-100 text-orange-600',
    borderClass: 'border-orange-100',
    points: [
      'Grands groupes tech, manufacture, finance, transport',
      'Neutraliser émissions résiduelles',
      'Créer produits/services carboneutres certifiés',
      'Démontrer leadership climatique',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function CreditsExplained() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-cream section-padding" id="credits">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel label="Crédits Carbone" color="blue" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-3">
            Crédits de Séquestration
          </h2>
          <p className="text-gray-500 mt-2 font-medium">Carbon Removal Certificates</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className={`${card.bgClass} border ${card.borderClass} rounded-3xl p-7 card-hover`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${card.iconClass}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-lg text-emerald-dark mb-4">
                  {card.title}
                </h3>

                {card.highlight && (
                  <div className="mb-4 text-center bg-white rounded-2xl py-3 border border-green-100">
                    <span className="font-heading font-bold text-2xl text-emerald-custom">
                      {card.highlight}
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">Prix moyen marché</p>
                  </div>
                )}

                <ul className="space-y-2.5">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-custom mt-1.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
