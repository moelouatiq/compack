'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const materials = [
  'Long boyau de polypropylène (sac blanc)',
  'Produits locaux (terre, sable)',
  'Ciment (environ 10%)',
  'Fil barbelé',
]

const advantages = [
  'Résistant aux séismes',
  'Résistant aux fortes températures',
  'Imputrescible',
  'Matériaux 100% locaux',
  'Construction soutenue par NASA & ONU',
]

export default function Technique() {
  return (
    <section id="technique" className="py-24 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#c4623d]/10 text-[#c4623d] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Architecture Innovante
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            TECHNIQUE — L'Architecture Superadobe
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            Une technologie soutenue par la NASA et l'ONU
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <h3 className="font-bold text-[#c4623d] mb-3">L'association 3000 EcoMen</h3>
              <p className="text-[#2d3436]/75 leading-relaxed text-sm">
                L'association 3000 EcoMen est un organisme français spécialisé dans la promotion
                et la transmission des techniques d'éco-construction.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "La technique superadobe est à la portée de tous : remplir des sacs d'un mélange de terre crue, un peu de ciment et de l'eau, empilés les uns sur les autres avant de sécher.",
                "Cette technique est un dérivé de l'architecture traditionnelle en terre. Elle utilise les dômes et les voûtes typiques des constructions sub-sahariennes tout en prenant en compte les exigences actuelles de sécurité.",
                "Pour protéger la maison des intempéries, on la recouvre d'un enduit, mélange de terre et de chaux. Il est même possible de végétaliser la partie supérieure pour des qualités thermiques optimales.",
              ].map((t, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-[#2d3436]/75 leading-relaxed"
                >
                  {t}
                </motion.p>
              ))}
            </div>

            {/* Materials */}
            <div className="bg-[#2d3436] rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-white mb-4">Matériaux utilisés</h3>
              <ul className="space-y-2">
                {materials.map((m, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574] flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image + Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl mb-6">
              <Image
                src="/images/architecture/ecodomes-dakhla-3.jpg"
                alt="Architecture superadobe SOLATERA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3436]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-[#c4623d] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Architecture superadobe — Marrakech
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1d6e4a] to-[#27ae60] rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Avantages certifiés
              </h3>
              <ul className="space-y-2">
                {advantages.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2 text-white/90 text-sm font-medium"
                  >
                    <svg className="w-4 h-4 text-[#d4a574] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {a}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                <div className="font-black text-2xl text-[#c4623d]">NASA</div>
                <div className="text-[#2d3436]/60 text-xs">Technologie soutenue</div>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                <div className="font-black text-2xl text-[#1d6e4a]">ONU</div>
                <div className="text-[#2d3436]/60 text-xs">Validée internationalement</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
