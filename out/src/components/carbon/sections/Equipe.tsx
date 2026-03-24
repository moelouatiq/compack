'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import SectionLabel from '@/components/carbon/SectionLabel'

const members = [
  {
    name: 'Alexandre BAROUZDIN',
    role: 'Fondateur COMPACK®',
    specialty: 'Chef de projet événementiel',
    image: '/images/team/alexandre-barouzdin.jpg',
    accent: 'emerald',
  },
  {
    name: 'Dr. Moussa HASSIMI',
    role: 'Docteur en sciences environnementales',
    specialty: 'Expert écosystèmes & séquestration',
    image: '/images/team/moussa-hassimi.jpg',
    accent: 'blue',
  },
  {
    name: 'Ilyes ATHAMI',
    role: 'Responsable Communications & Marketing',
    specialty: 'Stratégie digitale & développement de marque',
    image: '/images/team/ilyes-athami.jpg',
    accent: 'terracotta',
  },
  {
    name: 'Matthew CRITCHLOW',
    role: 'Ex Directeur Général Climat Partner France',
    specialty: 'Spécialiste crédits carbone',
    image: '/images/team/matthew-critchlow.jpg',
    accent: 'terracotta',
  },
  {
    name: 'David KHADOCH',
    role: 'Responsable Financier & Partenariats',
    specialty: 'Structuration financière & investisseurs',
    image: '/images/team/david-khadoch.jpg',
    accent: 'amber',
  },
  {
    name: 'Florian PRADELLE',
    role: 'Responsable Simulation feux de forêts',
    specialty: 'Modélisation & prévention incendies',
    image: '/images/team/florian-pradelle.jpg',
    accent: 'emerald',
  },
]

const accentMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  emerald:    { border: 'border-emerald-custom/30', bg: 'from-emerald-custom/10', text: 'text-emerald-custom', badge: 'bg-emerald-custom' },
  terracotta: { border: 'border-terracotta/30',     bg: 'from-terracotta/10',     text: 'text-terracotta',    badge: 'bg-terracotta' },
  blue:       { border: 'border-blue-400/30',       bg: 'from-blue-400/10',       text: 'text-blue-600',      badge: 'bg-blue-500' },
  amber:      { border: 'border-amber-400/30',      bg: 'from-amber-400/10',      text: 'text-amber-600',     badge: 'bg-amber-500' },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Equipe() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="equipe" className="bg-white section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel label="Notre Équipe" color="emerald" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-2 text-balance">
            Les experts derrière Compack Carbon
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Une équipe pluridisciplinaire alliant expertise scientifique, financière et terrain pour des projets carbone de haute qualité.
          </p>
        </motion.div>

        {/* ── Alexandre — Featured card ── */}
        {(() => {
          const founder = members[0]
          const a = accentMap[founder.accent]
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-xl mb-8 border border-emerald-custom/20"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-custom via-emerald-dark to-emerald-dark" />
              {/* Decorative circles */}
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5" />

              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-8 p-8 sm:p-10">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img
                      src={founder.image}
                      alt={`Photo de ${founder.name}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent && !parent.querySelector('.fallback-avatar')) {
                          const div = document.createElement('div')
                          div.className = 'fallback-avatar w-full h-full flex items-center justify-center bg-white/20 text-white font-heading font-bold text-4xl'
                          div.textContent = 'AB'
                          parent.appendChild(div)
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center sm:text-left">
                  {/* Founder badge */}
                  <span className="inline-flex items-center gap-2 bg-golden/20 border border-golden/30 text-golden text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-golden" />
                    Fondateur
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-golden font-semibold text-base mb-1">{founder.role}</p>
                  <p className="text-white/60 text-sm">{founder.specialty}</p>

                  {/* Divider */}
                  <div className="mt-5 pt-5 border-t border-white/10 flex flex-wrap justify-center sm:justify-start gap-3">
                    {['Vision stratégique', 'Développement projets', 'Leadership'].map((tag) => (
                      <span key={tag} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })()}

        {/* Cards grid — remaining members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {members.slice(1).map((member) => {
            const a = accentMap[member.accent]
            return (
              <motion.div
                key={member.name}
                variants={cardVariants}
                className={`group relative bg-white border ${a.border} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1`}
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-full ${a.badge}`} />

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${a.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative p-6">
                  {/* Photo */}
                  <div className="relative mb-5">
                    <div className={`w-20 h-20 rounded-2xl overflow-hidden border-2 ${a.border} shadow-md`}>
                      <img
                        src={member.image}
                        alt={`Photo de ${member.name}`}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent && !parent.querySelector('.fallback-avatar')) {
                            const div = document.createElement('div')
                            div.className = `fallback-avatar w-full h-full flex items-center justify-center ${a.badge} text-white font-heading font-bold text-2xl`
                            div.textContent = member.name.split(' ').map((n: string) => n[0]).slice(0, 2).join('')
                            parent.appendChild(div)
                          }
                        }}
                      />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full ${a.badge} border-2 border-white`} />
                  </div>

                  <h3 className="font-heading font-bold text-base text-emerald-dark leading-snug mb-1">
                    {member.name}
                  </h3>
                  <p className={`font-semibold text-sm ${a.text} mb-1`}>{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{member.specialty}</p>
                </div>
              </motion.div>
            )
          })}

          {/* "Join us" card */}
          <motion.div
            variants={cardVariants}
            className="border-2 border-dashed border-emerald-custom/20 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-emerald-custom/40 transition-colors duration-300 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-custom/5 group-hover:bg-emerald-custom/10 transition-colors duration-300 flex items-center justify-center">
              <span className="text-3xl font-heading font-bold text-emerald-custom/40 group-hover:text-emerald-custom/70 transition-colors duration-300">+</span>
            </div>
            <div>
              <p className="font-heading font-bold text-emerald-dark text-sm">Rejoignez l'équipe</p>
              <p className="text-gray-400 text-xs mt-1">contact@compack.io</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
