'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, MapPin, Award } from 'lucide-react'
import SectionLabel from '@/components/SectionLabel'

const cards = [
  {
    icon: ShieldCheck,
    title: 'Audit de la Méthodologie',
    description:
      'Un certificateur comme Puro.earth, ReforestAction ou VCS examine notre protocole. Il s\'assure que nos calculs (étape 1) et notre méthode d\'enfouissement (étape 2) respectent leurs normes strictes. Ils vérifient que la séquestration est réelle, additionnelle et permanente.',
    bgClass: 'bg-blue-50',
    iconClass: 'bg-blue-100 text-blue-600',
    borderClass: 'border-blue-100',
  },
  {
    icon: MapPin,
    title: 'Vérification sur Site',
    description:
      'Des vérificateurs indépendants se rendent sur le terrain pour auditer l\'exécution du projet. Ils confirment que les quantités de biomasse déclarées sont exactes et que l\'enfouissement est réalisé conformément au protocole.',
    bgClass: 'bg-green-50',
    iconClass: 'bg-green-100 text-green-600',
    borderClass: 'border-green-100',
  },
  {
    icon: Award,
    title: 'Délivrance des Crédits Carbone',
    description:
      'Une fois le protocole validé et les données vérifiées, le certificateur émet les crédits carbone. Ces crédits sont enregistrés dans un registre public, garantissant leur traçabilité et leur unicité.',
    bgClass: 'bg-orange-50',
    iconClass: 'bg-orange-100 text-orange-600',
    borderClass: 'border-orange-100',
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

export default function Certification() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-cream section-padding" id="certification">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel label="Certification" color="blue" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-3 leading-tight text-balance">
            Vérification par un Tiers et Certification
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Un processus rigoureux en 3 étapes garantit la qualité et la traçabilité de chaque crédit carbone.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className={`${card.bgClass} border ${card.borderClass} rounded-3xl p-6 sm:p-8 card-hover`}
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.iconClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-bold text-3xl text-gray-100">0{i + 1}</span>
                </div>

                <h3 className="font-heading font-bold text-xl text-emerald-dark mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>

                {/* Certifiers badge for card 1 */}
                {i === 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Puro.earth', 'ReforestAction', 'VCS'].map((cert) => (
                      <span key={cert} className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
