'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sprout, Beef, Building2, Zap } from 'lucide-react'
import SectionLabel from '@/components/carbon/SectionLabel'

const sectors = [
  {
    icon: Sprout,
    title: 'AGRICULTURE',
    bgClass: 'bg-green-50',
    iconClass: 'bg-green-100 text-green-700',
    borderClass: 'border-green-100',
    points: [
      'Amendement de sol: Améliore structure, rétention nutriments, activité microbienne',
      'Substrat de culture: Pépinières, cultures serre',
    ],
  },
  {
    icon: Beef,
    title: 'ÉLEVAGE',
    bgClass: 'bg-amber-50',
    iconClass: 'bg-amber-100 text-amber-700',
    borderClass: 'border-amber-100',
    points: [
      'Propriétés détoxifiantes, anti-odeurs, régulatrices d\'humidité',
      'Additif alimentaire: Absorbe toxines, améliore digestion',
      'Additif de litière: Contrôle odeurs, réduit ammoniac',
    ],
  },
  {
    icon: Building2,
    title: 'CONSTRUCTION',
    bgClass: 'bg-gray-50',
    iconClass: 'bg-gray-200 text-gray-700',
    borderClass: 'border-gray-100',
    points: [
      'Matériaux de construction: Béton, briques, mortier — isolation, contrôle humidité',
      'Matériaux de chaussée: Asphalte — durabilité, rétention eau',
    ],
  },
  {
    icon: Zap,
    title: 'ÉNERGIE',
    bgClass: 'bg-orange-50',
    iconClass: 'bg-orange-100 text-orange-700',
    borderClass: 'border-orange-100',
    points: [
      'Carburant pour production d\'énergie: Fours industriels, chaudières bioénergie',
      'Réducteur métallurgique: Fusion acier, alliages',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function BiocharApplications() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-white section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel label="Biochar" color="terracotta" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-3">
            Applications du Biochar
          </h2>
          <p className="text-gray-500 mt-2 font-medium">4 secteurs d'utilisation</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {sectors.map((sector) => {
            const Icon = sector.icon
            return (
              <motion.div
                key={sector.title}
                variants={cardVariants}
                className={`${sector.bgClass} border ${sector.borderClass} rounded-3xl p-6 card-hover flex flex-col`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${sector.iconClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-base text-emerald-dark mb-4">
                  {sector.title}
                </h3>
                <ul className="space-y-2 flex-1">
                  {sector.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-custom mt-2 flex-shrink-0" />
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
