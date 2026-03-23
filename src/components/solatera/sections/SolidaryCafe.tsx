'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const workshops = [
  'Apprendre la langue française',
  'Apprendre l\'anglais',
  'Apprendre à lire ou à écrire',
  'Enrichir son vocabulaire',
  'Améliorer conjugaison/grammaire',
  'Échanger avec des gens du monde entier',
]

export default function SolidaryCafe() {
  return (
    <section id="cafe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-[#c4623d]/10 text-[#c4623d] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Solidarité & Partage
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Café Solidaire — Espace Piscine
            </h2>
            <p className="text-[#2d3436]/65 leading-relaxed mb-4">
              Véritable lieu de partage intergénérationnel, de création de liens, d'accueil,
              d'accompagnement et d'activités. Situé autour de la piscine centrale du village.
            </p>
            <p className="text-[#2d3436]/65 leading-relaxed mb-6">
              Animés par des bénévoles résidents des éco-villages, des ateliers sont proposés chaque jour.
            </p>

            <h3 className="font-bold text-[#2d3436] mb-4">Ateliers disponibles :</h3>
            <div className="grid sm:grid-cols-2 gap-2 mb-8">
              {workshops.map((w, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex items-center gap-2 text-sm text-[#2d3436]/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c4623d] flex-shrink-0" />
                  {w}
                </motion.div>
              ))}
            </div>

            <div className="bg-[#c4623d]/10 border border-[#c4623d]/20 rounded-2xl px-5 py-4">
              <p className="text-[#c4623d] font-bold">100% des bénéfices à l'éducation</p>
              <p className="text-[#2d3436]/60 text-sm mt-1">
                Prendre un café, c'est faire une bonne action — les bénéfices financent les activités éducatives.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/medina/medina-dome.jpg" alt="Café Solidaire SOLATERA" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3436]/40 to-transparent" />
            </div>
            <motion.div className="absolute -bottom-5 -left-5 bg-[#c4623d] text-white rounded-2xl shadow-xl p-5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, type: 'spring' }}>
              <div className="font-bold">Bénévoles résidents</div>
              <div className="text-white/70 text-xs">Ateliers quotidiens</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
