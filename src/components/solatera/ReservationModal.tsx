'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DOME_TYPES } from '@/lib/solatera/constants'

interface Props {
  isOpen: boolean
  onClose: () => void
  preselectedDome?: string
}

const PACKAGES = [
  { id: 'court', label: 'Court séjour', desc: '1-7 jours', discount: 0 },
  { id: 'long', label: 'Long séjour', desc: '1 mois+', discount: 10 },
  { id: 'annee', label: 'Séjour annuel', desc: 'Réduction 30%', discount: 30 },
  { id: 'tout-compris', label: 'Tout compris', desc: 'Forfait complet', discount: 5 },
]

function todayStr() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
function tomorrowStr() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export default function ReservationModal({ isOpen, onClose, preselectedDome }: Props) {
  const [domeType, setDomeType] = useState(preselectedDome || 'studio')
  const [arrival, setArrival] = useState(todayStr)
  const [departure, setDeparture] = useState(tomorrowStr)
  const [persons, setPersons] = useState(2)
  const [packageType, setPackageType] = useState('court')
  const [nom, setNom] = useState('Sebastian Dubois')
  const [email, setEmail] = useState('seb.dubois@monemail.com')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Sync dome selection when modal opens with a preselected dome
  useEffect(() => {
    if (preselectedDome) setDomeType(preselectedDome)
  }, [preselectedDome])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Prevent scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const dome = DOME_TYPES.find(d => d.id === domeType) || DOME_TYPES[0]
  const pkg = PACKAGES.find(p => p.id === packageType) || PACKAGES[0]

  const calcNights = () => {
    if (!arrival || !departure) return 0
    const diff = new Date(departure).getTime() - new Date(arrival).getTime()
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
  }

  const nights = calcNights()
  const basePrice = dome.pricePerNight * nights
  const discount = basePrice * pkg.discount / 100
  const total = basePrice - discount

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom, email, phone,
          domeType, domeLabel: dome.label,
          arrival, departure, nights, persons,
          packageType, packageLabel: pkg.label,
          totalPrice: total,
          message,
        }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Erreur serveur')
      }
      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-[#f5f1e8] rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#c4623d] rounded-t-3xl px-6 py-5 flex items-center justify-between z-10">
              <div>
                <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Réservation Simple & Sécurisée
                </h2>
                <p className="text-white/80 text-sm">Disponibilité en temps réel • Paiement sécurisé</p>
              </div>
              <button
                onClick={onClose}
                className="cursor-pointer w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {submitted ? (
              <div className="p-10 text-center">
                <div className="w-16 h-16 bg-[#1d6e4a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2d3436] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Demande envoyée !
                </h3>
                <p className="text-[#2d3436]/70 mb-6">Nous vous contacterons dans les 24h pour confirmer votre réservation.</p>
                <button
                  onClick={() => { setSubmitted(false); onClose() }}
                  className="cursor-pointer bg-[#c4623d] hover:bg-[#a84e2e] text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Dome type */}
                <div>
                  <label className="block text-sm font-semibold text-[#2d3436] mb-2">Type de dôme</label>
                  <select
                    value={domeType}
                    onChange={e => setDomeType(e.target.value)}
                    className="w-full border border-[#d4a574]/40 bg-white rounded-xl px-4 py-3 text-[#2d3436] focus:outline-none focus:ring-2 focus:ring-[#c4623d] cursor-pointer"
                  >
                    {DOME_TYPES.map(d => (
                      <option key={d.id} value={d.id}>{d.label} — à partir de {d.pricePerNight}€/nuit</option>
                    ))}
                  </select>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="arrival" className="block text-sm font-semibold text-[#2d3436] mb-2 cursor-pointer">Date d'arrivée</label>
                    <input
                      id="arrival"
                      type="date"
                      value={arrival}
                      onChange={e => setArrival(e.target.value)}
                      min={todayStr()}
                      className="w-full border border-[#d4a574]/40 bg-white rounded-xl px-4 py-3 text-[#2d3436] focus:outline-none focus:ring-2 focus:ring-[#c4623d] cursor-pointer"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="departure" className="block text-sm font-semibold text-[#2d3436] mb-2 cursor-pointer">Date de départ</label>
                    <input
                      id="departure"
                      type="date"
                      value={departure}
                      onChange={e => setDeparture(e.target.value)}
                      min={arrival || todayStr()}
                      className="w-full border border-[#d4a574]/40 bg-white rounded-xl px-4 py-3 text-[#2d3436] focus:outline-none focus:ring-2 focus:ring-[#c4623d] cursor-pointer"
                      required
                    />
                  </div>
                </div>

                {/* Persons counter */}
                <div>
                  <label className="block text-sm font-semibold text-[#2d3436] mb-2">Nombre de personnes</label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setPersons(p => Math.max(1, p - 1))}
                      className="cursor-pointer w-10 h-10 rounded-full bg-[#c4623d] text-white font-bold text-lg flex items-center justify-center hover:bg-[#a84e2e] transition-colors"
                    >−</button>
                    <span className="text-2xl font-bold text-[#2d3436] w-8 text-center">{persons}</span>
                    <button
                      type="button"
                      onClick={() => setPersons(p => Math.min(dome.capacity, p + 1))}
                      className="cursor-pointer w-10 h-10 rounded-full bg-[#c4623d] text-white font-bold text-lg flex items-center justify-center hover:bg-[#a84e2e] transition-colors"
                    >+</button>
                    <span className="text-sm text-[#2d3436]/60">max {dome.capacity} personnes</span>
                  </div>
                </div>

                {/* Package */}
                <div>
                  <label className="block text-sm font-semibold text-[#2d3436] mb-2">Forfait</label>
                  <div className="grid grid-cols-2 gap-2">
                    {PACKAGES.map(p => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPackageType(p.id)}
                        className={`cursor-pointer text-left px-4 py-3 rounded-xl border-2 transition-all ${
                          packageType === p.id
                            ? 'border-[#c4623d] bg-[#c4623d]/10'
                            : 'border-[#d4a574]/30 bg-white hover:border-[#c4623d]/50'
                        }`}
                      >
                        <div className="font-semibold text-sm text-[#2d3436]">{p.label}</div>
                        <div className="text-xs text-[#2d3436]/60">{p.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price summary */}
                {nights > 0 && (
                  <div className="bg-white rounded-xl p-4 border border-[#d4a574]/30">
                    <div className="flex justify-between text-sm text-[#2d3436]/70 mb-1">
                      <span>{nights} nuit(s) × {dome.pricePerNight}€</span>
                      <span>{basePrice}€</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm text-[#1d6e4a] mb-1">
                        <span>Réduction {pkg.discount}%</span>
                        <span>−{discount.toFixed(0)}€</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-[#c4623d] text-lg border-t border-[#d4a574]/30 pt-2 mt-2">
                      <span>Total estimé</span>
                      <span>{total.toFixed(0)}€</span>
                    </div>
                  </div>
                )}

                {/* Contact */}
                <div>
                  <label className="block text-sm font-semibold text-[#2d3436] mb-2">Nom complet</label>
                  <input
                    type="text"
                    value={nom}
                    onChange={e => setNom(e.target.value)}
                    placeholder="Prénom Nom"
                    className="w-full border border-[#d4a574]/40 bg-white rounded-xl px-4 py-3 text-[#2d3436] focus:outline-none focus:ring-2 focus:ring-[#c4623d]"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#2d3436] mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full border border-[#d4a574]/40 bg-white rounded-xl px-4 py-3 text-[#2d3436] focus:outline-none focus:ring-2 focus:ring-[#c4623d]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2d3436] mb-2">Téléphone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+33 6 00 00 00 00"
                      className="w-full border border-[#d4a574]/40 bg-white rounded-xl px-4 py-3 text-[#2d3436] focus:outline-none focus:ring-2 focus:ring-[#c4623d]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#2d3436] mb-2">Message spécial (optionnel)</label>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Demandes particulières, allergies, anniversaire..."
                    className="w-full border border-[#d4a574]/40 bg-white rounded-xl px-4 py-3 text-[#2d3436] focus:outline-none focus:ring-2 focus:ring-[#c4623d] resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full bg-[#c4623d] hover:bg-[#a84e2e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  {loading ? 'Envoi en cours…' : 'Confirmer la réservation'}
                </button>

                <p className="text-center text-xs text-[#2d3436]/50">
                  Paiement sécurisé • Confirmation sous 24h • Annulation gratuite
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
