'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const pillars = [
  { label: 'Formation des migrants', icon: '📚' },
  { label: 'Insertion socio-professionnelle', icon: '💼' },
  { label: 'Soutien aux familles démunies', icon: '🤝' },
  { label: 'Apprentissage vivre-ensemble', icon: '🌍' },
  { label: 'Entrepreneuriat local', icon: '🚀' },
]

export default function AssociationIntro() {
  return (
    <section className="py-24 bg-[#1d6e4a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/20 text-white text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Notre Mission Sociale
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              SOLATERA Association — Notre Engagement Social
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              SOLATERA n'est pas qu'un village vacances. C'est aussi un projet social ambitieux qui
              croit en la force du collectif et de la solidarité pour construire un monde meilleur.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Au-delà de l'hébergement, un projet social inclusif qui soutient les personnes en difficulté,
              favorise l'intégration et crée des opportunités pour tous.
            </p>

            <div className="space-y-3 mb-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3"
                >
                  <span className="text-xl">{p.icon}</span>
                  <span className="text-white font-medium">{p.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white/15 rounded-2xl px-6 py-4 border border-white/20">
              <p className="text-white font-bold text-lg">100% des bénéfices réinvestis</p>
              <p className="text-white/70 text-sm">dans les projets sociaux de l'association</p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/riads-tech/riads-tech.jpg"
                alt="SOLATERA Association - Engagement social"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1d6e4a]/40 to-transparent" />
            </div>

            {/* Floating stats */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5"
              initial={{ scale: 0, rotate: -5 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: 'spring' }}
            >
              <div className="text-[#1d6e4a] font-black text-3xl">+5</div>
              <div className="text-[#2d3436]/70 text-sm">projets sociaux actifs</div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-[#c4623d] rounded-2xl shadow-xl p-5 text-white"
              initial={{ scale: 0, rotate: 5 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: 'spring' }}
            >
              <div className="font-black text-3xl">2020</div>
              <div className="text-white/80 text-sm">Année de création</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
