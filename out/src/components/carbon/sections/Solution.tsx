'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/lib/carbon/images'
import { Trees, Factory, Sprout } from 'lucide-react'
import SectionLabel from '@/components/carbon/SectionLabel'

const cards = [
  {
    image: 'woodCollection',
    icon: Trees,
    step: '01',
    title: 'Collecte du bois mort',
    description:
      'Nous collectons le bois mort des zones brûlées pour empêcher de futures réémissions de carbone.',
    color: 'emerald',
  },
  {
    image: 'bcrsEquipment',
    icon: Factory,
    step: '02',
    title: 'Transformation en biochar',
    description:
      'Cette biomasse est transformée en biochar ou enfouie selon un processus scientifique pour séquestrer le carbone de manière permanente.',
    color: 'terracotta',
  },
  {
    image: '/images/carbon/Reboisement-des-zones.jpg',
    icon: Sprout,
    step: '03',
    title: 'Reboisement des zones',
    description:
      'Nous reboisondes zones dégradées en utilisant une combinaison de technologies (drones) et de main-d\'œuvre locale pour un impact maximal.',
    color: 'golden',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Solution() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="solution" className="bg-white section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel label="Solution" color="emerald" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-3 max-w-3xl mx-auto leading-tight text-balance">
            De la biomasse carbonée aux puits de carbone certifiés
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card) => {
            const Icon = card.icon
            const borderColor =
              card.color === 'emerald'
                ? 'border-emerald-custom/20 hover:border-emerald-custom/40'
                : card.color === 'terracotta'
                ? 'border-terracotta/20 hover:border-terracotta/40'
                : 'border-golden/20 hover:border-golden/40'

            const iconBg =
              card.color === 'emerald'
                ? 'bg-emerald-custom/10 text-emerald-custom'
                : card.color === 'terracotta'
                ? 'bg-terracotta/10 text-terracotta'
                : 'bg-golden/20 text-amber-700'

            return (
              <motion.div
                key={card.step}
                variants={cardVariants}
                className={`bg-white border-2 ${borderColor} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl card-hover group`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image.startsWith('/') ? card.image : IMAGES[card.image as keyof typeof IMAGES]}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Step badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1">
                    <span className="font-heading font-bold text-sm text-gray-500">Étape {card.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-emerald-dark mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{card.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
