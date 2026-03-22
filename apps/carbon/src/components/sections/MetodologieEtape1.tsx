'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'
import { Microscope, Scale, FlaskConical } from 'lucide-react'
import SectionLabel from '@/components/SectionLabel'

const steps = [
  {
    icon: Scale,
    title: 'Mesure de la biomasse',
    desc: 'On utilise des méthodes scientifiques pour évaluer le volume et le poids du bois et des résidus végétaux. Des équations allométriques spécifiques à chaque essence d\'arbre et à chaque région sont employées pour convertir des mesures simples (diamètre, hauteur) en estimations de biomasse totale.',
  },
  {
    icon: Microscope,
    title: 'Calcul du Carbone',
    desc: 'Le carbone représente environ 50% de la masse sèche d\'un arbre. Une fois la masse de la biomasse estimée, la quantité de carbone qu\'elle contient est calculée.',
  },
  {
    icon: FlaskConical,
    title: 'Protocole d\'Échantillonnage',
    desc: 'Des échantillons de bois sont prélevés et analysés en laboratoire pour confirmer la teneur en carbone et garantir la précision du calcul.',
  },
]

export default function MetodologieEtape1() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="methodologie" className="bg-sky-50/80 section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.biomasse}
                alt="Collecte et mesure de la biomasse"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-blue-900/20" />
            </div>

            {/* Formula badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 border border-blue-100"
            >
              <p className="font-heading font-bold text-emerald-custom text-sm">50% de carbone</p>
              <p className="text-xs text-gray-500">dans la masse sèche d'un arbre</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <div>
              <SectionLabel label="Méthodologie" color="blue" />
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-2 leading-tight text-balance">
                Quantification Initiale du Carbone dans la Biomasse
              </h2>
            </div>

            <div className="space-y-4">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="flex gap-4 p-4 bg-white rounded-2xl border border-blue-100 shadow-sm"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-gray-900 mb-1">
                        {i + 1}) {step.title}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
