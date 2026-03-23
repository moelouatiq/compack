'use client'

import { motion } from 'framer-motion'

const benefits = [
  { title: 'Reconnaissance Internationale', desc: 'Validation de SOLATERA® comme projet d\'intérêt mondial, aligné sur les priorités UNESCO en matière de dialogue interculturel et développement durable.' },
  { title: 'Accès à des Réseaux Stratégiques', desc: 'Attirerait l\'attention des gouvernements, ONG et donateurs internationaux, ouvrant la voie à des partenariats et collaborations institutionnelles.' },
  { title: 'Mobilisation des États Membres', desc: 'L\'UNESCO inviterait ses États membres à \'participer au développement\' de SOLATERA®, garantissant un soutien diplomatique, logistique et financier.' },
]

export default function UNESCO() {
  return (
    <section id="unesco" className="py-24 bg-gradient-to-br from-[#1d6e4a] to-[#155438]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-white/20 text-white text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Vision Mondiale
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ambition UNESCO — L'Auroville Africaine
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            En cherchant à reproduire le succès d'Auroville en Inde, SOLATERA® ambitionne de devenir
            un nouveau modèle unique de villages sur le continent africain.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
          {/* Quote */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="bg-white/10 border border-white/20 rounded-3xl p-8">
              <div className="text-5xl text-white/30 mb-4" style={{ fontFamily: 'Georgia, serif' }}>"</div>
              <blockquote className="text-white/90 text-lg leading-relaxed italic mb-6">
                Ce ne serait pas un simple symbole, mais un véritable catalyseur pour notre succès.
                Un modèle d'harmonie et d'unité, un laboratoire vivant pour les communautés de demain.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d4a574] flex items-center justify-center text-[#2d3436] font-bold">AB</div>
                <div>
                  <div className="text-white font-semibold">Alexandre BAROUZDIN</div>
                  <div className="text-white/60 text-sm">Fondateur SOLATERA</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white/15 rounded-2xl p-4 text-center">
                <div className="font-black text-xl text-[#d4a574]">UNESCO</div>
                <div className="text-white/60 text-xs">Objectif</div>
              </div>
              <div className="bg-white/15 rounded-2xl p-4 text-center">
                <div className="font-black text-xl text-[#d4a574]">2026</div>
                <div className="text-white/60 text-xs">Début</div>
              </div>
              <div className="bg-white/15 rounded-2xl p-4 text-center">
                <div className="font-black text-xl text-[#d4a574]">Global</div>
                <div className="text-white/60 text-xs">Impact</div>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-5">
            <h3 className="text-white font-bold text-xl mb-6">Les avantages d'un appui UNESCO :</h3>
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-white/10 border border-white/15 rounded-2xl p-5">
                <h4 className="font-bold text-white mb-2">{b.title}</h4>
                <p className="text-white/65 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div className="bg-[#d4a574] rounded-2xl p-6 text-[#2d3436] text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <div className="font-bold text-lg">Référence : Auroville (Inde)</div>
          <div className="text-[#2d3436]/70 text-sm">Modèle de village international reconnu par l'UNESCO depuis 1966</div>
        </motion.div>
      </div>
    </section>
  )
}
