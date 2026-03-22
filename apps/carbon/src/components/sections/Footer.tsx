'use client'

import { motion } from 'framer-motion'
import { Leaf, Mail, Phone, Linkedin, Twitter, Instagram, Download } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn Compack Carbon' },
  { icon: Twitter, href: '#', label: 'Twitter Compack Carbon' },
  { icon: Instagram, href: '#', label: 'Instagram Compack Carbon' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-emerald-dark text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-white/80 mb-6">
              <Leaf className="w-4 h-4 text-golden" />
              Rejoignez la transition carbone
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 text-balance">
              Prêt à transformer les menaces{' '}
              <span className="text-golden">en opportunités</span>?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Investissez dans un projet certifié, rentable dès 2027, avec un impact environnemental mesurable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta hover:bg-terracotta-light text-white font-semibold rounded-2xl transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Nous contacter
              </a>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-2xl transition-all duration-200 cursor-pointer">
                <Download className="w-4 h-4" />
                Télécharger la brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
                <Leaf className="w-4 h-4 text-golden" />
              </div>
              <div>
                <span className="font-heading font-bold text-white text-sm block">
                  {BRAND.name}
                </span>
                <span className="text-white/50 text-xs">{BRAND.tagline}</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Transformer les forêts brûlées en puits de carbone certifiés. Biochar, BCRS, reboisement — un impact mesurable pour les entreprises net zéro.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-golden" />
                </div>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-sm hover:text-golden transition-colors duration-200 cursor-pointer"
                >
                  {BRAND.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-golden" />
                </div>
                <a
                  href={`tel:${BRAND.whatsapp}`}
                  className="text-sm hover:text-golden transition-colors duration-200 cursor-pointer"
                >
                  {BRAND.whatsapp}
                </a>
              </div>
              <div className="mt-4 pl-11">
                <p className="text-white font-semibold text-sm">{BRAND.founder}</p>
                <p className="text-white/50 text-xs">{BRAND.founderTitle}</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Certifications</h3>
            <div className="space-y-2">
              {['Puro.earth CORC', 'BCRS — Biomass Carbon Removal', 'VCS Verified Carbon Standard', 'ANEF Maroc Subventionné'].map(
                (cert) => (
                  <div key={cert} className="flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-golden flex-shrink-0" />
                    {cert}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Socials + copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Compack Carbon. Tous droits réservés.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-white/40 text-xs">Suivez-nous</span>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-golden transition-all duration-200 cursor-pointer"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-white/30 text-xs">Merci pour votre soutien!</p>
        </div>
      </div>
    </footer>
  )
}
