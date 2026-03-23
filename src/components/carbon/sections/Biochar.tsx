'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/lib/carbon/images'
import { Truck, Leaf, BarChart3 } from 'lucide-react'
import SectionLabel from '@/components/carbon/SectionLabel'

const benefits = [
  {
    icon: Truck,
    title: 'Réduction de l\'empreinte carbone',
    desc: 'En traitant la biomasse sur place, nous éliminons les transports coûteux et polluants.',
  },
  {
    icon: Leaf,
    title: 'Création de valeur et d\'impact',
    desc: 'Le biochar produit sera réintégré dans nos sols. 1 tonne biochar = 3 tCO₂ séquestrées.',
  },
  {
    icon: BarChart3,
    title: 'Séquestration du carbone',
    desc: 'Le biochar a la capacité de stocker le carbone de manière stable et durable.',
  },
]

export default function Biochar() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="biochar" className="bg-orange-50/60 section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images stacked */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row lg:flex-col gap-4"
          >
            <div className="h-72 rounded-3xl overflow-hidden shadow-lg relative">
              <img
                src={IMAGES.pyrolyseMachine}
                alt="Machine pyrolyse mobile - Biochar"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-terracotta text-white text-xs font-semibold px-3 py-1 rounded-full">
                Pyrolyse Mobile
              </div>
            </div>
            <div className="h-52 rounded-3xl overflow-hidden shadow-lg relative">
              <img
                src={IMAGES.biocharTexture}
                alt="Texture biochar - Charbon végétal"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Biochar Produit
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <div>
              <SectionLabel label="Innovation" color="terracotta" />
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-2 leading-tight text-balance">
                BIOCHAR — Pyrolyse mobile
              </h2>
              <p className="text-gray-500 font-medium mt-1">Valoriser les résidus de bois</p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Afin de valoriser nos résidus de bois, nous allons investir dans une{' '}
              <strong className="text-emerald-custom">solution de pyrolyse mobile</strong>. Ce système,
              hautement performant, nous permettra de transformer directement sur le terrain les branches
              d'un diamètre inférieur à 10 cm, issues de nos parcelles.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm">
              L'objectif est de produire du <strong>biochar</strong>, un charbon végétal aux multiples vertus.
              Ce procédé n'est pas une simple combustion, mais une décomposition thermique sans oxygène,
              ce qui le rend particulièrement respectueux de l'environnement.
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              <p className="font-heading font-semibold text-gray-800">Bénéfices :</p>
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <div className="w-8 h-8 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-terracotta" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{b.title}</p>
                      <p className="text-gray-500 text-sm">{b.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Key equation highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="bg-terracotta/10 border-2 border-terracotta/20 rounded-2xl p-5"
            >
              <p className="font-heading font-bold text-center text-emerald-dark mb-1">Équation clé</p>
              <p className="text-center text-terracotta font-semibold">
                1 tonne de bois brûlé = 300 kg de biochar = 0,9 tCO₂ évitées
              </p>
            </motion.div>

            {/* Puro.earth highlight */}
            <div className="bg-emerald-custom/10 border border-emerald-custom/20 rounded-2xl p-4 text-center">
              <p className="font-heading font-bold text-emerald-dark text-lg">
                1 tonne de biochar = 3 tCO₂ séquestrées
              </p>
              <p className="text-emerald-custom text-sm font-semibold mt-1">Source: PURO.EARTH</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
