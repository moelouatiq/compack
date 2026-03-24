'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useState, useEffect } from 'react'

const BENEFITS = [
  { title: 'Gestion du stress', desc: 'Techniques éprouvées pour dissoudre les tensions accumulées' },
  { title: 'Bien-être global', desc: 'Harmonisation du corps et de l\'esprit en profondeur' },
  { title: 'Équilibre émotionnel', desc: 'Retrouvez la stabilité intérieure et la clarté mentale' },
  { title: 'Sérénité durable', desc: 'Ancrez des habitudes de calme qui perdurent au quotidien' },
]

const INFOS = [
  { label: 'Durée', value: '30 – 45 min' },
  { label: 'Horaires', value: 'Matin & soir' },
  { label: 'Niveau', value: 'Tous niveaux' },
  { label: 'Tarif', value: 'Inclus résidents' },
]

// Breathing phase: 0 = inhale, 1 = hold, 2 = exhale
function useBreathCycle(reduced: boolean | null) {
  const [phase, setPhase] = useState<0 | 1 | 2>(0)

  useEffect(() => {
    if (reduced) return
    const durations = [4000, 1000, 4000] // inhale, hold, exhale (ms)
    let t: ReturnType<typeof setTimeout>
    const next = (current: 0 | 1 | 2) => {
      const nextPhase = ((current + 1) % 3) as 0 | 1 | 2
      t = setTimeout(() => { setPhase(nextPhase); next(nextPhase) }, durations[current])
    }
    next(0)
    return () => clearTimeout(t)
  }, [reduced])

  return phase
}

export default function Sophrologie() {
  const reduced = useReducedMotion()
  const phase = useBreathCycle(reduced)

  const isInhale = phase === 0
  const isHold   = phase === 1

  const circleVariants = {
    inhale:  { scale: 1.28, opacity: 1 },
    hold:    { scale: 1.28, opacity: 1 },
    exhale:  { scale: 1,    opacity: 0.65 },
  }

  const ringVariants = {
    inhale:  { scale: 1.55, opacity: 0.25 },
    hold:    { scale: 1.55, opacity: 0.25 },
    exhale:  { scale: 1,    opacity: 0 },
  }

  const outerVariants = {
    inhale:  { scale: 1.85, opacity: 0.12 },
    hold:    { scale: 1.85, opacity: 0.12 },
    exhale:  { scale: 1,    opacity: 0 },
  }

  const currentState = isInhale ? 'inhale' : isHold ? 'hold' : 'exhale'
  const easing = [0.4, 0, 0.2, 1] as const
  const dur = isHold ? 0.3 : 3.8

  return (
    <section className="py-24 bg-[#f5f1e8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-[#4a90e2]/12 text-[#2a6cb0] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5 border border-[#4a90e2]/20">
            Sophrologie
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Détente &amp; Sérénité Profonde
          </h2>
          <p className="text-[#2d3436]/55 text-lg max-w-xl mx-auto leading-relaxed">
            Respirez. Recentrez-vous. Retrouvez l'équilibre.
          </p>
        </motion.div>

        {/* 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Breathing animation */}
          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Circle stage */}
            <div className="relative flex items-center justify-center w-[260px] h-[260px]">

              {/* Outer pulse ring */}
              <motion.div
                className="absolute rounded-full border border-[#4a90e2]/30"
                style={{ width: 200, height: 200 }}
                animate={reduced ? {} : outerVariants[currentState]}
                transition={{ duration: dur, ease: easing }}
              />

              {/* Mid ring */}
              <motion.div
                className="absolute rounded-full border border-[#4a90e2]/40"
                style={{ width: 200, height: 200 }}
                animate={reduced ? {} : ringVariants[currentState]}
                transition={{ duration: dur, ease: easing }}
              />

              {/* Core circle */}
              <motion.div
                className="relative rounded-full flex items-center justify-center"
                style={{
                  width: 160,
                  height: 160,
                  background: 'radial-gradient(circle at 40% 35%, #7bb3e8, #4a90e2)',
                  boxShadow: '0 8px 40px rgba(74,144,226,0.35)',
                }}
                animate={reduced ? {} : circleVariants[currentState]}
                transition={{ duration: dur, ease: easing }}
              >
                {/* Inner glow */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.35), transparent 65%)' }}
                />
                {/* Breath SVG icon */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 4C12 4 8 7 8 11C8 13.2 9.8 15 12 15C14.2 15 16 13.2 16 11C16 7 12 4 12 4Z" fill="rgba(255,255,255,0.9)"/>
                  <path d="M8 15C6 15 4 16.5 4 18.5C4 19.9 5.1 21 6.5 21H17.5C18.9 21 20 19.9 20 18.5C20 16.5 18 15 16 15" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </motion.div>
            </div>

            {/* Breath text */}
            <div className="h-10 flex items-center justify-center" aria-live="polite" aria-label="Guide de respiration">
              <motion.p
                key={phase}
                className="text-xl font-semibold tracking-wide"
                style={{ color: isInhale ? '#c4623d' : isHold ? '#d4a574' : '#1d6e4a' }}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.5 }}
              >
                {isInhale ? 'Inspirer…' : isHold ? 'Retenir…' : 'Expirer…'}
              </motion.p>
            </div>

            {/* Session info pills */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {INFOS.map((info) => (
                <div key={info.label} className="bg-white rounded-xl px-4 py-3 text-center shadow-sm border border-stone-100">
                  <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#2d3436]/40 mb-0.5">{info.label}</div>
                  <div className="text-sm font-bold text-[#2d3436]">{info.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3
              className="text-3xl font-bold text-[#2d3436] mb-5 leading-snug"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              La Sophrologie<br />
              <span className="text-[#c4623d]">à SOLATERA</span>
            </h3>

            <p className="text-[#2d3436]/65 text-base leading-[1.85] mb-8">
              La sophrologie est une discipline de relaxation profonde qui allie
              respiration consciente, visualisation positive et techniques de détente
              du corps et de l'esprit. À SOLATERA, nos sessions guidées par des
              professionnels certifiés vous offrent un espace de reconnexion totale,
              dans le silence naturel de notre éco-village.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#4a90e2]/15 border border-[#4a90e2]/30 flex-shrink-0 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5L4 7L8 3" stroke="#4a90e2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#2d3436] text-sm mb-0.5">{b.title}</div>
                    <div className="text-[#2d3436]/55 text-xs leading-relaxed">{b.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note certifiée */}
            <div className="flex items-center gap-3 bg-[#4a90e2]/8 border border-[#4a90e2]/20 rounded-xl px-4 py-3 mb-8">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
                <circle cx="12" cy="12" r="9" stroke="#4a90e2" strokeWidth="1.5"/>
                <path d="M12 8v4M12 16h.01" stroke="#4a90e2" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p className="text-[#2a6cb0] text-sm font-medium">
                Sessions quotidiennes animées par des sophrologues certifiés
              </p>
            </div>

            {/* CTA */}
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 bg-[#c4623d] hover:bg-[#d4754f] text-white font-bold text-sm px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4623d]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="1.8"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Réserver une session de sophrologie
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
