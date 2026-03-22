'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'
import { AlertTriangle, TrendingUp } from 'lucide-react'
import SectionLabel from '@/components/SectionLabel'

const consequences = [
  'Libération massive de CO₂',
  'Potentiel reprise de feu',
  'Destruction de la biodiversité',
  'Impact sur les communautés locales',
]

export default function Problematique() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-cream section-padding" id="problematique">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={IMAGES.fireProblem}
                alt="Forêts ravagées par les incendies - Problématique écologique"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta/30 to-transparent" />
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 border border-terracotta/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-terracotta/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <p className="font-heading font-bold text-lg text-terracotta">Urgence</p>
                  <p className="text-xs text-gray-500">Écologique & économique</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="space-y-6"
          >
            <div>
              <SectionLabel label="Le Problème" color="terracotta" />
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-2 leading-tight text-balance">
                Face aux incendies, une urgence écologique et économique
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Chaque année, des milliers d'hectares de forêts sont ravagés par les incendies,
              créant une catastrophe écologique et économique sans précédent.
            </p>

            {/* Consequences */}
            <div className="bg-terracotta/5 border border-terracotta/15 rounded-2xl p-5">
              <p className="font-heading font-semibold text-gray-800 mb-3">Conséquences :</p>
              <ul className="space-y-2">
                {consequences.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-terracotta" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Market opportunity */}
            <div className="bg-emerald-custom/5 border border-emerald-custom/15 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-custom/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-emerald-custom" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-emerald-dark mb-1">Marché</p>
                  <p className="text-gray-600 leading-relaxed">
                    Un marché des crédits carbone en forte croissance, mais une pénurie de projets
                    de haute qualité, mesurables et certifiés.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
