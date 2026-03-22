'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'
import { Zap, Leaf, Droplets, Shield, Coins, Sprout } from 'lucide-react'
import SectionLabel from '@/components/SectionLabel'

const characteristics = [
  {
    icon: Zap,
    title: 'Croissance Ultra-Rapide',
    stats: '3 mètres/an | 13–15m en 6–8 ans',
    desc: 'La croissance la plus rapide au monde',
  },
  {
    icon: Leaf,
    title: 'Absorption CO₂ Exceptionnelle',
    stats: 'Plus forte absorption mondiale',
    desc: "Maximum d'oxygène généré par photosynthèse",
  },
  {
    icon: Droplets,
    title: "Consommation d'Eau Minimale",
    stats: '2 litres/jour seulement',
    desc: 'Vs 25 litres pour autres variétés',
  },
  {
    icon: Shield,
    title: 'Ultra-Résistant',
    stats: 'Barrière anti-incendie (426°C)',
    desc: 'Résistant parasites & maladies',
  },
  {
    icon: Coins,
    title: 'Bois Précieux',
    stats: '550€/m³',
    desc: 'Valeur économique exceptionnelle',
  },
  {
    icon: Sprout,
    title: 'Améliore le Sol',
    stats: 'Saturation en azote',
    desc: "Prévient l'érosion, enrichit terrains",
  },
]

const timeline = [
  { year: '1 an', height: "Jusqu'à 5m" },
  { year: '2 ans', height: '8–10m' },
  { year: '3 ans', height: '10–12m' },
  { year: '5 ans', height: '15–18m' },
  { year: '7 ans', height: '20m+' },
]

const keyFigures = [
  { value: '6–8 ans', label: 'Cycle complet' },
  { value: '3m/an', label: 'Croissance moyenne' },
  { value: '550€/m³', label: 'Valeur du bois' },
  { value: '2L/jour', label: 'Consommation eau' },
  { value: '825', label: 'Arbres/hectare' },
  { value: '1 000+', label: 'Commande minimum' },
]

const galleryImages = [
  { src: IMAGES.paulowniaPlants, alt: 'Jeunes plants en plantation', label: 'Jeunes Plants' },
  { src: IMAGES.paulowniaDetail, alt: 'Détails plantation', label: 'Plantation' },
  { src: IMAGES.paulowniaPanorama, alt: 'Panorama champ de Paulownia', label: 'Panorama' },
]

export default function PaulowniaPhenix() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section ref={ref} id="paulownia" className="bg-white section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel label="Paulownia Phénix One®" color="emerald" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-3 text-balance">
            L'Arbre de la Reforestation
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            La variété hybride la plus performante au monde pour la séquestration de CO₂ et la création de valeur économique.
          </p>
        </motion.div>

        {/* Two-column layout: Image left, Text right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Main image + gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Hero image */}
            <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lg group">
              <Image
                src={IMAGES.paulowniaHero}
                alt="Paulownia Phénix One - Croissance complète"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/40 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="text-white font-heading font-semibold text-sm bg-emerald-custom/80 px-3 py-1 rounded-full">
                  Paulownia Phénix One®
                </span>
              </div>
            </div>

            {/* Gallery thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((img, i) => (
                <button
                  key={img.label}
                  onClick={() => setActiveImage(i)}
                  className="relative h-24 sm:h-28 rounded-2xl overflow-hidden shadow cursor-pointer group focus:outline-none focus:ring-2 focus:ring-emerald-custom"
                  aria-label={`Voir image: ${img.label}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      activeImage === i ? 'scale-105' : 'group-hover:scale-105'
                    }`}
                    loading="lazy"
                    sizes="(max-width: 640px) 33vw, 16vw"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      activeImage === i
                        ? 'bg-emerald-custom/30'
                        : 'bg-emerald-dark/20 group-hover:bg-emerald-custom/20'
                    }`}
                  />
                  <div className="absolute bottom-1.5 left-2">
                    <span className="text-white font-semibold text-xs">{img.label}</span>
                  </div>
                  {activeImage === i && (
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-golden" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Text + characteristics */}
          <div className="space-y-6">
            {/* Title block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="font-heading font-bold text-2xl text-emerald-dark">
                PAULOWNIA PHENIX ONE®
              </h3>
              <p className="text-terracotta font-semibold text-sm mt-1">
                L'arbre révolutionnaire pour la reforestation
              </p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Le Paulownia Phénix One® est une variété hybride révolutionnaire combinant{' '}
                <span className="font-semibold text-emerald-custom">Paulownia elongata</span> et{' '}
                <span className="font-semibold text-emerald-custom">Paulownia fortunei</span>. C'est l'arbre à la plus forte croissance au monde, avec une absorption exceptionnelle de CO₂ et une production maximale d'oxygène par photosynthèse.
              </p>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Spécialement sélectionné pour les régions chaudes comme le Maroc, cet arbre développe un diamètre de tronc imposant en très peu de temps, idéal pour les cycles de récolte rapides.
              </p>
            </motion.div>

            {/* Characteristics grid */}
            <div className="grid grid-cols-2 gap-3">
              {characteristics.map((card, i) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                    className="bg-cream rounded-2xl p-3.5 border border-emerald-custom/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/20 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-terracotta" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-heading font-bold text-xs text-emerald-dark leading-tight">
                          {card.title}
                        </p>
                        <p className="text-emerald-custom font-semibold text-xs mt-0.5">
                          {card.stats}
                        </p>
                        <p className="text-gray-500 text-xs mt-0.5 leading-tight">{card.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Growth Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-emerald-custom rounded-3xl p-6 sm:p-8 mb-12"
        >
          <h3 className="font-heading font-bold text-xl text-white text-center mb-6">
            Timeline de Croissance
          </h3>
          {/* Desktop horizontal timeline */}
          <div className="hidden sm:flex items-end justify-between gap-4">
            {timeline.map((step, i) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="flex flex-col items-center flex-1"
              >
                {/* Bar */}
                <div
                  className="bg-white/20 rounded-t-xl w-full flex items-end justify-center pb-2 transition-all duration-500"
                  style={{ height: `${40 + i * 28}px` }}
                >
                  <span className="text-golden font-bold text-sm">{step.height}</span>
                </div>
                {/* Connector */}
                <div className="w-0.5 h-3 bg-white/40" />
                {/* Dot */}
                <div className="w-3 h-3 rounded-full bg-golden" />
                {/* Year label */}
                <p className="text-white/80 text-sm font-semibold mt-2">{step.year}</p>
              </motion.div>
            ))}
          </div>
          {/* Mobile vertical timeline */}
          <div className="sm:hidden space-y-3">
            {timeline.map((step, i) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-4 bg-white/10 rounded-2xl px-4 py-3"
              >
                <div className="w-3 h-3 rounded-full bg-golden flex-shrink-0" />
                <span className="text-white font-semibold text-sm w-16">{step.year}</span>
                <span className="text-golden font-bold text-sm">{step.height}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key figures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-heading font-bold text-2xl text-emerald-dark text-center mb-6">
            Par les Chiffres
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyFigures.map((fig, i) => (
              <motion.div
                key={fig.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.06 }}
                className="bg-cream rounded-2xl p-4 text-center border border-emerald-custom/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <p className="font-heading font-bold text-xl text-emerald-custom">{fig.value}</p>
                <p className="text-gray-500 text-xs mt-1">{fig.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-light text-white font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Leaf className="w-4 h-4" />
            En savoir plus sur le Paulownia
          </a>
        </motion.div>
      </div>
    </section>
  )
}
