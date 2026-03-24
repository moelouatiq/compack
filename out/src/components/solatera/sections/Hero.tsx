'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import ReservationModal from '../ReservationModal'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <>
      <section ref={ref} id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero/hero-marrakech.jpg')" }}
          />
          {/* Overlay gradient terracotta */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c4623d]/80 via-[#1a0e0b]/60 to-[#1d6e4a]/50" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto"
          style={{ opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Logo badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4a574] animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase">Association à Impact — Marrakech</span>
          </motion.div>

          {/* Main logo */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl sm:text-8xl md:text-9xl font-black text-white mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            SOLATERA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-white/90 font-light mb-4 max-w-2xl mx-auto"
          >
            Plus qu'un éco-village, un modèle de civilisation
          </motion.p>

          {/* Tag line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/70 mb-10 text-base sm:text-lg tracking-wide"
          >
            SOLEIL&nbsp;•&nbsp;TERRE&nbsp;•&nbsp;AVENIR — Énergie solaire&nbsp;•&nbsp;Architecture superadobe&nbsp;•&nbsp;Impact social
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="btn-pulse cursor-pointer bg-[#c4623d] hover:bg-[#a84e2e] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Réserver un dôme
            </button>
            <a
              href="#domes"
              className="cursor-pointer bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white border border-white/30 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              En savoir plus
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/50 text-xs tracking-widest uppercase">Découvrir</span>
            <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
