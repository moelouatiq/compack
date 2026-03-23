'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/lib/carbon/images'
import SectionLabel from '@/components/carbon/SectionLabel'

const pits = [
  { src: IMAGES.carbonPit2, alt: 'Puits carbone - Vue aérienne forêt', label: 'Site Pilote 2' },
  { src: IMAGES.bcrsEquipment, alt: 'Équipement BCRS sur site', label: 'Équipement BCRS' },
]

export default function ExemplesPuits() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-cream-dark section-padding" id="exemples-puits">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel label="Nos Réalisations" color="emerald" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-3 leading-tight">
            Exemples puits carbone certifiés
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pits.map((pit, i) => (
            <motion.div
              key={pit.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="relative h-64 sm:h-72">
                <Image
                  src={pit.src}
                  alt={pit.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-emerald-dark font-semibold text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {pit.label}
                </span>
              </div>
              {/* Always-visible badge */}
              <div className="absolute top-4 left-4 bg-emerald-custom/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {pit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
