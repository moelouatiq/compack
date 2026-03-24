'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BioCultures() {
  return (
    <section id="cultures" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#1d6e4a]/10 text-[#1d6e4a] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Agriculture Durable
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Serres et Cultures Bio
            </h2>
            <p className="text-[#2d3436]/70 text-lg mb-3">Production locale & Formation agricole</p>

            <div className="space-y-4 mb-8">
              {[
                "Au cœur de chaque village SOLATERA, nos serres et cultures BIO sont dédiées à la production de nos propres légumes frais.",
                "Ces cultures fourniront la majeure partie des produits pour le restaurant, garantissant une alimentation locale, saine et respectueuse de l'environnement.",
                "Mais ces serres seront bien plus qu'un simple outil de production : elles deviendront un véritable espace d'apprentissage pour former de jeunes agriculteurs.",
                "En cultivant la terre, nous cultiverons aussi le savoir, pour que l'impact positif de SOLATERA s'étende bien au-delà du village.",
              ].map((t, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-[#2d3436]/70 leading-relaxed"
                >
                  {t}
                </motion.p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1d6e4a] rounded-2xl p-5 text-white text-center">
                <div className="font-black text-2xl mb-1">100%</div>
                <div className="text-white/80 text-sm">Produits biologiques</div>
              </div>
              <div className="bg-[#d4a574] rounded-2xl p-5 text-[#2d3436] text-center">
                <div className="font-black text-2xl mb-1">Formation</div>
                <div className="text-[#2d3436]/70 text-sm">Jeunes agriculteurs</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/amenagements/amenagements.jpg"
                alt="Serres bio SOLATERA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d6e4a]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 rounded-2xl p-4">
                <div className="font-bold text-[#2d3436] mb-1">Impact local durable</div>
                <div className="text-[#2d3436]/60 text-sm">Formation + alimentation + revenus</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
