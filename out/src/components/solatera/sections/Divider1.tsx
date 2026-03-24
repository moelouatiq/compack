'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Divider1() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} id="association" className="relative py-20 bg-[#2d3436] overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4623d 0px, #c4623d 1px, transparent 1px, transparent 50px)' }} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-8 text-center">
        <motion.div className="flex items-center justify-center gap-4 mb-8" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}>
          <motion.div className="h-px bg-[#d4a574]" initial={{ width: 0 }} animate={inView ? { width: 80 } : {}} transition={{ duration: 1, delay: 0.3 }} />
          <div className="w-2 h-2 rounded-full bg-[#c4623d]" />
          <motion.div className="h-px bg-[#d4a574]" initial={{ width: 0 }} animate={inView ? { width: 80 } : {}} transition={{ duration: 1, delay: 0.3 }} />
        </motion.div>
        <motion.p className="text-[#d4a574] text-sm font-semibold tracking-[0.3em] uppercase mb-4" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }}>
          Au-delà du projet
        </motion.p>
        <motion.h2 className="text-3xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }}>
          Découvrez Notre Engagement Social
        </motion.h2>
        <motion.p className="text-white/60 text-lg max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.7 }}>
          SOLATERA, c'est aussi un mouvement social ancré dans la communauté.
        </motion.p>
      </div>
    </div>
  )
}
