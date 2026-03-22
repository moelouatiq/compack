'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'
import { Trees, Layers, Tractor, Calendar } from 'lucide-react'
import SectionLabel from '@/components/SectionLabel'

const treeTypes = [
  { category: 'Essences indigènes & fruitières', trees: 'Olivier, caroubier, figuier, amandier' },
  { category: 'Essences forestières natives', trees: 'Cèdre de l\'Atlas, arganier, chêne vert, chêne-liège, Sapin du Maroc, pin d\'Alep, pin maritime' },
]

const techniques = [
  {
    icon: Trees,
    title: 'Framework Tree Planting (75% zone)',
    desc: 'Mix essences croissance rapide + lente. Développent rapidement structure forêt. Créent écosystème favorable à régénération naturelle.',
  },
  {
    icon: Layers,
    title: 'Nucléation / Assisted Natural Regeneration (25% zone)',
    desc: 'Régénération naturelle assistée. Planter arbres à endroits stratégiques. Favoriser succession arbres existants.',
  },
]

const images = [
  { src: IMAGES.carobTree, alt: 'Caroubier - Essence fruitière résistante', label: 'Caroubier' },
  { src: IMAGES.pineAlep, alt: "Pin d'Alep - Essence forestière native", label: "Pin d'Alep" },
  { src: IMAGES.cedarAtlas, alt: "Cèdre de l'Atlas - Emblème Maroc", label: "Cèdre de l'Atlas" },
]

export default function PlanReboisement() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="reboisement" className="bg-cream section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel label="Reboisement" color="emerald" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-3 text-balance">
            Plan de reboisement
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Créer des écosystèmes forestiers résilients grâce à une approche scientifique et locale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: content */}
          <div className="space-y-6">
            {/* Step 1: Species */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-custom/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-emerald-custom rounded-xl flex items-center justify-center">
                  <Trees className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-emerald-dark">
                  1) Choisir les bonnes espèces
                </h3>
              </div>
              <div className="space-y-3">
                {treeTypes.map((type) => (
                  <div key={type.category} className="bg-emerald-custom/5 rounded-2xl p-4">
                    <p className="font-semibold text-emerald-custom text-sm mb-1">{type.category}</p>
                    <p className="text-gray-600 text-sm">{type.trees}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Step 2: Agroforesterie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-custom/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-golden/70 rounded-xl flex items-center justify-center">
                  <Tractor className="w-5 h-5 text-amber-800" />
                </div>
                <h3 className="font-heading font-bold text-lg text-emerald-dark">
                  2) Agroforesterie — Approche intégrée
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Plutôt que monocultures, favoriser mélange d\'arbres et cultures',
                  'Améliore qualité des sols',
                  'Augmente productivité',
                  'Crée écosystèmes plus sains et résilients',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-golden flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Step 3: Techniques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-custom/10"
            >
              <h3 className="font-heading font-bold text-lg text-emerald-dark mb-4">
                3) Techniques plantation
              </h3>
              <div className="space-y-4">
                {techniques.map((t) => {
                  const Icon = t.icon
                  return (
                    <div key={t.title} className="flex gap-3 items-start">
                      <div className="w-8 h-8 bg-emerald-custom/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-emerald-custom" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm mb-0.5">{t.title}</p>
                        <p className="text-gray-500 text-sm">{t.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Step 4: Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="bg-emerald-custom text-white rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-golden" />
                <h3 className="font-heading font-bold text-lg">4) Timeline</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-golden" />
                  Novembre à mars (après pluies)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-golden" />
                  Chaque année pendant 3 ans
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right: images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="relative h-44 sm:h-36 lg:h-52 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-white font-semibold text-sm">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
