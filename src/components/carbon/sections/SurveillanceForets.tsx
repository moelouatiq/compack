'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/lib/carbon/images'
import { Radio, Users, BarChart3, Shield, FileText } from 'lucide-react'
import SectionLabel from '@/components/carbon/SectionLabel'

const cards = [
  {
    icon: Radio,
    image: IMAGES.droneFlight,
    title: 'DRONES',
    description:
      'Caméras haute résolution + capteurs multispectraux. Relevés aériens cartographient zones rapidement. Créent cartes détaillées état projet.',
    feature: 'Range: 50m–1500m',
    badgeColor: 'bg-sky-500',
  },
  {
    icon: Users,
    image: IMAGES.teamField,
    title: 'ÉQUIPES TERRAIN',
    description:
      'Essentielles pour données précises. GPS géolocalisation, comptes plants, mesure croissance. Valident données drones.',
    feature: 'Sampling: Systématique',
    badgeColor: 'bg-emerald-custom',
  },
  {
    icon: BarChart3,
    image: null,
    title: 'ANALYSE DONNÉES',
    description:
      'Conversion en data mesurables: Taux survie (arbres vivants/total), Croissance (modèles 3D photogrammétrie), Résilience (capteurs multispectraux détectent stress).',
    feature: '3D Models, 4 KPIs',
    badgeColor: 'bg-blue-600',
  },
  {
    icon: Shield,
    image: IMAGES.guardianSystem,
    title: 'GUARDIAN MICROPHONES',
    description:
      'Partenariat Guardian protège forêts + faune. Capteurs acoustiques solaires dans cimes. Détecte exploitation illégale, braconnage.',
    feature: 'IA embarquée, alertes temps réel',
    badgeColor: 'bg-terracotta',
  },
  {
    icon: FileText,
    image: null,
    title: 'REPORTING TRANSPARENT',
    description:
      'Rapports réguliers: chiffres clés, graphiques, photos avant/après. Site internet: visualisation directe. Caméras temps réel.',
    feature: 'Web + Reports + Live Stream',
    badgeColor: 'bg-violet-600',
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

export default function SurveillanceForets() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-white section-padding" id="surveillance">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel label="Surveillance" color="emerald" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-3">
            Surveillance des Forêts
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">
            Observer en données précises et transparentes grâce à une combinaison de technologies avancées et d'équipes de terrain expertes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden card-hover group"
              >
                {/* Image (if available) */}
                {card.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                  </div>
                )}

                {/* No-image placeholder */}
                {!card.image && (
                  <div className={`h-24 ${card.badgeColor} flex items-center justify-center`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    {card.image && (
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white ${card.badgeColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    )}
                    <span className={`text-xs font-bold text-white ${card.badgeColor} px-3 py-1 rounded-full ml-auto`}>
                      {card.feature}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-emerald-dark mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
