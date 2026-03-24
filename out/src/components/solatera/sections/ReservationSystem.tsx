'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ReservationModal from '../ReservationModal'

export default function ReservationSystem() {
  const [modalOpen, setModalOpen] = useState(false)

  const features = [
    { icon: '🗓', label: 'Disponibilité temps réel', desc: 'Vérifiez les dates disponibles instantanément' },
    { icon: '💶', label: 'Prix calculé automatiquement', desc: 'Court terme, long terme, ou forfait annuel' },
    { icon: '🔒', label: 'Paiement sécurisé', desc: 'Transactions cryptées et protégées' },
    { icon: '✈️', label: 'Annulation flexible', desc: 'Annulation gratuite jusqu\'à 48h avant' },
  ]

  return (
    <>
      <section id="reservation" className="py-24 bg-gradient-to-br from-[#c4623d] to-[#a84e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-white/20 text-white text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                Réservation en ligne
              </span>
              <h2
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Réservation Simple et Sécurisée
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Réservez votre séjour en quelques clics. Choisissez votre dôme, vos dates, et votre forfait.
                Nous confirmons votre réservation sous 24h.
              </p>

              <div className="space-y-4 mb-10">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4"
                  >
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <div className="font-semibold text-white">{f.label}</div>
                      <div className="text-white/70 text-sm">{f.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="btn-pulse cursor-pointer bg-white text-[#c4623d] hover:bg-[#f5f1e8] font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Réserver maintenant
              </button>
            </motion.div>

            {/* Right: Forfaits */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-white/90 font-semibold text-lg mb-5">Nos forfaits disponibles</h3>
              {[
                { label: 'Location à la journée', duration: '1 jour', desc: 'Week-end, escapade, découverte', from: 'à partir de 150€/j', highlight: false },
                { label: 'Location à la semaine', duration: '7 jours', desc: 'Vacances en famille ou entre amis', from: 'à partir de 900€/sem', highlight: false },
                { label: 'Location au mois', duration: '1 mois', desc: 'Tarif préférentiel, −15% garanti', from: 'à partir de 2 800€/mois', highlight: false },
                { label: 'Location à l\'année', duration: '12 mois', desc: 'Résidence longue durée, −35%', from: 'à partir de 28 000€/an', highlight: false },
                { label: 'Formule Tout Compris', duration: 'Au choix', desc: 'Hébergement + repas + activités + spa', from: 'Sur devis', highlight: true },
              ].map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  className={`rounded-2xl p-5 border cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                    pkg.highlight
                      ? 'bg-[#d4a574] border-[#d4a574] text-[#2d3436]'
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/15'
                  }`}
                  onClick={() => setModalOpen(true)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className={`font-bold text-lg ${pkg.highlight ? 'text-[#2d3436]' : 'text-white'}`}>{pkg.label}</div>
                      <div className={`text-sm ${pkg.highlight ? 'text-[#2d3436]/70' : 'text-white/70'}`}>{pkg.duration}</div>
                      <div className={`text-sm mt-1 ${pkg.highlight ? 'text-[#2d3436]/80' : 'text-white/80'}`}>{pkg.desc}</div>
                    </div>
                    <div className={`text-right text-sm font-semibold ${pkg.highlight ? 'text-[#c4623d]' : 'text-[#d4a574]'}`}>
                      {pkg.from}
                    </div>
                  </div>
                  {pkg.highlight && (
                    <span className="inline-block mt-2 bg-[#c4623d] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Meilleur rapport qualité/prix
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
