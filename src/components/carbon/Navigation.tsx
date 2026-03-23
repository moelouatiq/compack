'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Leaf } from 'lucide-react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/carbon/constants'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-emerald-custom/10 border border-emerald-custom/10'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-emerald-custom rounded-xl flex items-center justify-center group-hover:bg-emerald-dark transition-colors duration-200">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-heading font-bold text-emerald-custom text-sm leading-none block">
                Compack Carbon
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-custom hover:bg-emerald-custom/5 rounded-xl transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:flex items-center gap-1 px-3 py-2 text-xs font-medium text-gray-500 hover:text-emerald-custom hover:bg-emerald-custom/5 rounded-xl transition-all duration-200"
            >
              ← COMPACK
            </Link>
            <Link
              href="/solatera"
              className="hidden sm:flex items-center gap-1 px-3 py-2 text-xs font-medium text-gray-500 hover:text-[#c4623d] hover:bg-[#c4623d]/5 rounded-xl transition-all duration-200"
            >
              🌿 SOLATERA
            </Link>
            <a
              href="#contact"
              className="hidden sm:block px-4 py-2 bg-emerald-custom text-white text-sm font-semibold rounded-xl hover:bg-emerald-dark transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              Nous contacter
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-emerald-custom hover:bg-emerald-custom/5 rounded-xl transition-all duration-200 cursor-pointer"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-custom hover:bg-emerald-custom/5 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 bg-emerald-custom text-white text-sm font-semibold rounded-xl text-center hover:bg-emerald-dark transition-all duration-200 cursor-pointer"
              >
                Nous contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
