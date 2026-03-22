'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'
import { Lock, Clock, Layers } from 'lucide-react'
import SectionLabel from '@/components/SectionLabel'

const points = [
  {
    icon: Lock,
    text: 'Au lieu de laisser le bois mort se décomposer (libérant du CO₂), nous l\'enfouissons dans des conditions contrôlées et anoxiques (sans oxygène).',
  },
  {
    icon: Clock,
    text: 'Cela permet de verrouiller le carbone pour des centaines, voire des milliers d\'années, créant ainsi des crédits carbone à la fois durables et de haute qualité.',
  },
  {
    icon: Layers,
    text: 'Ce système est un complément puissant à la reforestation, car il séquestre le carbone immédiatement tout en préparant le terrain pour de nouvelles plantations.',
  },
]

export default function MetodologieEtape2() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-white section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text LEFT on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div>
              <SectionLabel label="Méthodologie" color="terracotta" />
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-2 leading-tight text-balance">
                Le Rôle de la Méthode de Stockage (BCRS)
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Pour le stockage du carbone, nous nous appuyons sur un processus appelé{' '}
              <strong className="text-emerald-custom">
                "Biomass Carbon Removal and Storage" (BCRS)
              </strong>
              , une méthode validée par des recherches scientifiques.
            </p>

            {/* Points */}
            <div className="space-y-4">
              {points.map((point, i) => {
                const Icon = point.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="flex gap-4 p-4 border-l-4 border-terracotta bg-terracotta/3 rounded-r-2xl"
                  >
                    <div className="w-9 h-9 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-terracotta" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{point.text}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-custom/5 border border-emerald-custom/20 rounded-2xl p-5">
              <p className="text-gray-700 leading-relaxed text-sm">
                En associant la sélection intelligente des sites à des techniques de stockage de carbone
                scientifiquement prouvées, nous nous assurons que chaque projet a un impact{' '}
                <strong className="text-emerald-custom">mesurable et de long terme</strong>.
              </p>
            </div>
          </motion.div>

          {/* Image RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-80 sm:h-96 lg:h-[460px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.bcrsEquipment}
                alt="Équipement BCRS - Biomass Carbon Removal and Storage"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-dark/20 to-transparent" />
            </div>

            {/* BCRS badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-5 -left-4 sm:-left-6 bg-emerald-custom text-white rounded-2xl shadow-xl p-4"
            >
              <p className="font-heading font-bold text-sm">BCRS Certifié</p>
              <p className="text-xs text-emerald-light">1000+ ans de séquestration</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
