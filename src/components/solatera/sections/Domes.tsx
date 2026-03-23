'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { DOMES } from '@/lib/solatera/constants'
import ReservationModal from '../ReservationModal'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
}

export default function Domes() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDome, setSelectedDome] = useState<string | undefined>()

  const openModal = (domeId: string) => {
    setSelectedDome(domeId)
    setModalOpen(true)
  }

  return (
    <>
      <section id="domes" className="py-24 bg-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-[#c4623d]/10 text-[#c4623d] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Hébergement Exclusif
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Nos Dômes
            </h2>
            <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
              Architecturalement unique, entièrement équipé, éco-conçu
            </p>
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-[#d4a574]" />
              <div className="w-2 h-2 rounded-full bg-[#c4623d]" />
              <div className="h-px w-16 bg-[#d4a574]" />
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOMES.map((dome, i) => (
              <motion.article
                key={dome.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dome.image}
                    alt={dome.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#c4623d] text-white text-xs font-bold px-3 py-1 rounded-full">
                      À partir de {dome.priceFrom}€/nuit
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3
                    className="text-xl font-bold text-[#2d3436] mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {dome.title}
                  </h3>
                  <p className="text-[#2d3436]/65 text-sm mb-5 leading-relaxed">{dome.description}</p>

                  {/* Specs */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {Object.entries(dome.specs).map(([key, val]) => (
                      <li key={key} className="flex items-center gap-2 text-sm text-[#2d3436]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c4623d] flex-shrink-0" />
                        {val}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openModal(dome.id)}
                    className="cursor-pointer w-full bg-[#c4623d] hover:bg-[#a84e2e] text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-[1.02] mt-auto"
                  >
                    Réserver ce dôme
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA bottom */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => setModalOpen(true)}
              className="cursor-pointer inline-flex items-center gap-2 bg-transparent border-2 border-[#c4623d] text-[#c4623d] hover:bg-[#c4623d] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Voir la disponibilité
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} preselectedDome={selectedDome} />
    </>
  )
}
