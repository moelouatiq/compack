'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const activities = [
  'Agriculture raisonnée (plantation à récolte)',
  'Recyclage du plastique',
  "Apiculture (fascination du travail des abeilles)",
  'Fab Lab & Low-Tech (expérimentations)',
  'Ramassage des déchets (zones côtières)',
  'Activités écologiques ludiques',
  'Fabrication de bougies',
  'Balades en vélos',
  "Initiations au sport",
]

export default function EcoSchool() {
  return (
    <section id="ecoschool" className="py-24 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/camp-school/camp-school.jpg"
                alt="Éco-School SOLATERA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3436]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 rounded-2xl p-4">
                  <div className="font-bold text-[#2d3436] mb-1">Hébergement immersif</div>
                  <div className="text-[#2d3436]/60 text-sm">Tentes dédiées pour cohésion de groupe</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-[#1d6e4a]/10 text-[#1d6e4a] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Éducation Environnementale
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Éco-School — Groupes Scolaires & Orphelinats
            </h2>
            <p className="text-[#2d3436]/65 leading-relaxed mb-4">
              L'éco-village SOLATERA ouvre ses portes aux établissements scolaires et aux orphelinats
              pour une immersion unique dans le monde de l'écologie.
            </p>
            <p className="text-[#2d3436]/65 leading-relaxed mb-8">
              Nos sites offrent une opportunité concrète pour les jeunes de se connecter à la nature
              et comprendre les enjeux environnementaux de manière ludique et éducative.
            </p>

            <h3 className="font-bold text-[#2d3436] mb-4">Programme riche en découvertes :</h3>
            <div className="grid grid-cols-1 gap-2 mb-8">
              {activities.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 text-sm text-[#2d3436]/75"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1d6e4a] flex-shrink-0" />
                  {a}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#1d6e4a] text-white rounded-xl px-4 py-2 text-sm font-semibold">Tous les âges</div>
              <a
                href="mailto:contact@compack.io?subject=Organisation sortie scolaire"
                className="cursor-pointer bg-[#c4623d] hover:bg-[#a84e2e] text-white font-semibold px-6 py-2 rounded-full text-sm transition-all hover:scale-105"
              >
                Organiser une sortie
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
