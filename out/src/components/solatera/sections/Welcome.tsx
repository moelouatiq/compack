'use client'

import { motion } from 'framer-motion'

const lines = [
  "Imaginez un lieu inclusif qui réconcilie enfin ce que l'époque a divisé.",
  "Trop souvent, on nous demande de choisir : le progrès ou la nature ? La technologie ou la tradition ? La performance économique ou l'impact social ?",
  "SOLATERA est né pour prouver qu'il existe une troisième voie : celle de l'Alliance.",
  "Plus qu'un éco-village, un modèle de civilisation.",
  "Nous bâtissons des oasis de vie autonomes, inspirées par la sagesse des anciens et propulsées par l'audace technologique de la GreenTech.",
  "Ici, les murs sont en terre, mais l'eau est purifiée par la science. Ici, le soleil alimente nos foyers, mais c'est la chaleur humaine qui illumine nos vies.",
  "C'est un laboratoire où l'on lutte contre le plastique, où l'on forme la jeunesse de demain, et où l'on brise la solitude autour d'une table partagée.",
  "Ce n'est pas seulement la présentation d'un projet immobilier ou touristique. C'est une invitation à découvrir un mouvement.",
  "Un mouvement qui part de la terre rouge d'Afrique pour inspirer le monde entier.",
]

export default function Welcome() {
  return (
    <section id="bienvenue" className="py-24 bg-[#f5f1e8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-[#1d6e4a]/10 text-[#1d6e4a] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Le message du fondateur
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#2d3436]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Bienvenue à SOLATERA
          </h2>
        </motion.div>

        {/* Quote block */}
        <div className="relative">
          {/* Big quote mark */}
          <div
            className="absolute -top-8 -left-4 text-[10rem] leading-none text-[#c4623d]/10 select-none"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            "
          </div>

          <div className="space-y-6 relative z-10">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`leading-relaxed ${
                  i === 2 || i === 3
                    ? 'text-xl sm:text-2xl font-bold text-[#c4623d]'
                    : i === 8
                    ? 'text-lg font-semibold text-[#1d6e4a] italic'
                    : 'text-[#2d3436]/80 text-lg'
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex items-center gap-5"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c4623d] to-[#d4a574] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            AB
          </div>
          <div>
            <div className="font-bold text-[#2d3436] text-lg">Alexandre BAROUZDIN</div>
            <div className="text-[#2d3436]/60 text-sm">Fondateur de SOLATERA</div>
          </div>
        </motion.div>

        {/* Final invite */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 text-center"
        >
          <p
            className="text-2xl font-bold text-[#c4623d]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Bienvenue chez vous. Bienvenue à SOLATERA.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
