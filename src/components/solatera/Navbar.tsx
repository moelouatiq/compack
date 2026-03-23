'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import ReservationModal from './ReservationModal'

const links = [
  { label: 'Hébergement', href: '#domes' },
  { label: 'Activités', href: '#activites' },
  { label: 'Bien-être', href: '#wellness' },
  { label: 'Événements', href: '#evenementiel' },
  { label: 'Association', href: '#association' },
  { label: 'Projet', href: '#projet' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#1a0e0b]/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-[#c4623d] flex items-center justify-center text-white font-black text-sm group-hover:bg-[#d4a574] transition-colors">S</div>
            <span
              className="text-white font-black text-xl tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              SOLATERA
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="cursor-pointer text-white/75 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:flex items-center gap-1 text-white/60 hover:text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              ← COMPACK
            </Link>
            <Link
              href="/carbon"
              className="hidden sm:flex items-center gap-1 text-white/60 hover:text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              🌲 CARBON
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="hidden sm:block cursor-pointer bg-[#c4623d] hover:bg-[#d4a574] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              Réserver
            </button>

            {/* Burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden cursor-pointer w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 right-0 z-40 bg-[#1a0e0b]/98 backdrop-blur-md pt-20 pb-6 px-4 shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 mb-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-white/80 hover:text-white text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => { setMenuOpen(false); setModalOpen(true) }}
              className="cursor-pointer w-full bg-[#c4623d] hover:bg-[#d4a574] text-white font-bold py-4 rounded-full transition-colors"
            >
              Réserver un dôme
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
