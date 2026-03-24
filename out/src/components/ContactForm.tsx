'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1
  const b = Math.floor(Math.random() * 10) + 1
  return { a, b, result: a + b }
}

export default function ContactForm() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [sujet, setSujet] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, result: 0 })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    setCaptcha(generateCaptcha())
  }, [])

  const resetCaptcha = () => {
    setCaptcha(generateCaptcha())
    setCaptchaAnswer('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom, email, sujet, message,
          honeypot,
          captchaAnswer: Number(captchaAnswer),
          captchaResult: captcha.result,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erreur serveur')
      setStatus('success')
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Erreur inconnue')
      setStatus('error')
      resetCaptcha()
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-[#1d6e4a] rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-white mb-2">Message envoyé !</h3>
        <p className="text-white/60 mb-6">Nous vous répondrons dans les plus brefs délais.</p>
        <button
          onClick={() => {
            setStatus('idle')
            setNom(''); setEmail(''); setSujet(''); setMessage('')
            resetCaptcha()
          }}
          className="cursor-pointer bg-[#c4623d] hover:bg-[#d4754f] text-white font-bold px-8 py-3 rounded-full transition-colors"
        >
          Envoyer un autre message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — caché visuellement, piège les bots */}
      <input
        type="text"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: 'none' }}
        autoComplete="off"
      />

      {/* Nom + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/70 text-sm font-semibold mb-1.5">Nom complet *</label>
          <input
            type="text"
            value={nom}
            onChange={e => setNom(e.target.value)}
            placeholder="Prénom Nom"
            required
            className="w-full bg-white/10 border border-white/20 focus:border-[#c4623d] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c4623d]/40 transition-all"
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm font-semibold mb-1.5">Email *</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="votre@email.com"
            required
            className="w-full bg-white/10 border border-white/20 focus:border-[#c4623d] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c4623d]/40 transition-all"
          />
        </div>
      </div>

      {/* Sujet */}
      <div>
        <label className="block text-white/70 text-sm font-semibold mb-1.5">Sujet</label>
        <select
          value={sujet}
          onChange={e => setSujet(e.target.value)}
          className="w-full bg-white/10 border border-white/20 focus:border-[#c4623d] rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#c4623d]/40 transition-all cursor-pointer"
        >
          <option value="" className="bg-[#1a0e0b]">Choisir un sujet…</option>
          <option value="Partenariat" className="bg-[#1a0e0b]">🤝 Partenariat</option>
          <option value="Investissement" className="bg-[#1a0e0b]">💰 Investissement</option>
          <option value="Presse / Média" className="bg-[#1a0e0b]">📰 Presse / Média</option>
          <option value="SOLATERA" className="bg-[#1a0e0b]">🌿 SOLATERA — Réservation</option>
          <option value="CARBON" className="bg-[#1a0e0b]">🌲 CARBON — Crédits carbone</option>
          <option value="Association" className="bg-[#1a0e0b]">❤️ Association — Don / Bénévolat</option>
          <option value="Autre" className="bg-[#1a0e0b]">💬 Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-white/70 text-sm font-semibold mb-1.5">Message *</label>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={5}
          placeholder="Décrivez votre demande…"
          required
          className="w-full bg-white/10 border border-white/20 focus:border-[#c4623d] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c4623d]/40 transition-all resize-none"
        />
      </div>

      {/* Captcha */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
        <label className="block text-white/70 text-sm font-semibold mb-3">
          Vérification anti-robot *
        </label>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="bg-[#c4623d]/20 border border-[#c4623d]/40 rounded-xl px-5 py-3 flex items-center gap-3">
            <span className="text-white font-black text-xl tabular-nums">{captcha.a}</span>
            <span className="text-[#c4623d] font-black text-xl">+</span>
            <span className="text-white font-black text-xl tabular-nums">{captcha.b}</span>
            <span className="text-white/50 font-bold text-xl">=</span>
            <span className="text-white/50">?</span>
          </div>
          <input
            type="number"
            value={captchaAnswer}
            onChange={e => setCaptchaAnswer(e.target.value)}
            placeholder="Réponse"
            required
            min={0}
            max={20}
            className="w-28 bg-white/10 border border-white/20 focus:border-[#c4623d] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c4623d]/40 transition-all text-center font-bold text-lg"
          />
          <button
            type="button"
            onClick={resetCaptcha}
            className="cursor-pointer text-white/40 hover:text-white/70 text-sm transition-colors flex items-center gap-1"
            title="Nouveau captcha"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Nouveau
          </button>
        </div>
      </div>

      {/* Error */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-300 text-sm"
          >
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="cursor-pointer w-full bg-[#c4623d] hover:bg-[#d4754f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-black py-4 rounded-full text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#c4623d]/30"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Envoi en cours…
          </span>
        ) : (
          'Envoyer le message →'
        )}
      </button>

      <p className="text-center text-white/30 text-xs">
        Vos données ne sont utilisées que pour traiter votre demande.
      </p>
    </form>
  )
}
