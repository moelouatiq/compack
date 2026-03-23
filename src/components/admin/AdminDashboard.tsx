'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import PlanningView from './PlanningView'
import ListView from './ListView'
import ReservationDrawer from './ReservationDrawer'

export interface Reservation {
  id: number
  nom: string
  email: string
  phone: string | null
  domeType: string
  domeLabel: string
  arrival: string
  departure: string
  nights: number
  persons: number
  packageType: string
  packageLabel: string
  totalPrice: number
  message: string | null
  status: string
  createdAt: string
}

type View = 'planning' | 'liste'

const STATUS_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  en_attente: { label: 'En attente', color: '#f59e0b', bg: '#f59e0b20' },
  confirmé:   { label: 'Confirmé',   color: '#10b981', bg: '#10b98120' },
  annulé:     { label: 'Annulé',     color: '#ef4444', bg: '#ef444420' },
}

export { STATUS_LABELS }

export default function AdminDashboard() {
  const router = useRouter()
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<View>('planning')
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date()
    return { year: now.getFullYear(), month: now.getMonth() }
  })
  const [selected, setSelected] = useState<Reservation | null>(null)

  const fetchReservations = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/reservations')
      if (res.status === 401) { router.push('/admin'); return }
      const data = await res.json()
      setReservations(data)
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => { fetchReservations() }, [fetchReservations])

  const updateStatus = async (id: number, status: string) => {
    await fetch(`/api/admin/reservations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    setReservations(prev => prev.map(r => r.id === id ? { ...r, status } : r))
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : null)
  }

  const deleteReservation = async (id: number) => {
    if (!confirm('Supprimer cette réservation ?')) return
    await fetch(`/api/admin/reservations/${id}`, { method: 'DELETE' })
    setReservations(prev => prev.filter(r => r.id !== id))
    setSelected(null)
  }

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  const prevMonth = () => setCurrentMonth(({ year, month }) =>
    month === 0 ? { year: year - 1, month: 11 } : { year, month: month - 1 }
  )
  const nextMonth = () => setCurrentMonth(({ year, month }) =>
    month === 11 ? { year: year + 1, month: 0 } : { year, month: month + 1 }
  )

  // Stats
  const stats = {
    total: reservations.length,
    en_attente: reservations.filter(r => r.status === 'en_attente').length,
    confirmé: reservations.filter(r => r.status === 'confirmé').length,
    annulé: reservations.filter(r => r.status === 'annulé').length,
    revenue: reservations.filter(r => r.status === 'confirmé').reduce((s, r) => s + r.totalPrice, 0),
  }

  const monthLabel = new Date(currentMonth.year, currentMonth.month, 1)
    .toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })

  // Reservations overlapping current month — pure string comparison to avoid timezone issues
  const monthStartStr = `${currentMonth.year}-${String(currentMonth.month + 1).padStart(2, '0')}-01`
  const monthEndStr   = `${currentMonth.year}-${String(currentMonth.month + 1).padStart(2, '0')}-${String(new Date(currentMonth.year, currentMonth.month + 1, 0).getDate()).padStart(2, '0')}`
  const monthReservations = reservations.filter(r =>
    r.arrival.slice(0, 10) <= monthEndStr && r.departure.slice(0, 10) > monthStartStr
  )

  return (
    <div className="min-h-screen bg-[#f0ede8] font-sans">
      {/* Top bar */}
      <header className="bg-[#1a0e0b] border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-white font-black text-xl">
            COMPACK<span className="text-[#c4623d]">®</span>
          </div>
          <span className="text-white/20 hidden sm:block">|</span>
          <span className="text-white/60 text-sm hidden sm:block">Administration · Réservations</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" className="text-white/40 hover:text-white/70 text-sm transition-colors hidden sm:block cursor-pointer">
            ← Site public
          </a>
          <button
            onClick={logout}
            className="cursor-pointer flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white/70 hover:text-white px-4 py-2 rounded-lg text-sm transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Déconnexion
          </button>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {[
            { label: 'Total', value: stats.total, color: '#6b7280', icon: '📋' },
            { label: 'En attente', value: stats.en_attente, color: '#f59e0b', icon: '⏳' },
            { label: 'Confirmé', value: stats.confirmé, color: '#10b981', icon: '✅' },
            { label: 'Annulé', value: stats.annulé, color: '#ef4444', icon: '❌' },
            { label: 'Revenus conf.', value: `${stats.revenue.toFixed(0)}€`, color: '#c4623d', icon: '💰' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
              <div className="text-lg mb-1">{s.icon}</div>
              <div className="text-2xl font-black" style={{ color: s.color }}>{s.value}</div>
              <div className="text-gray-500 text-xs font-semibold mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          {/* Month nav */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevMonth}
              className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-black/10 hover:bg-[#c4623d] hover:text-white hover:border-[#c4623d] transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <span className="font-black text-[#1a0e0b] text-lg capitalize min-w-[160px] text-center">{monthLabel}</span>
            <button
              onClick={nextMonth}
              className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-black/10 hover:bg-[#c4623d] hover:text-white hover:border-[#c4623d] transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            <span className="text-gray-400 text-sm ml-2">({monthReservations.length} réservation{monthReservations.length !== 1 ? 's' : ''})</span>
          </div>

          {/* View toggle */}
          <div className="flex bg-white rounded-xl border border-black/10 p-1 shadow-sm">
            {(['planning', 'liste'] as View[]).map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`cursor-pointer px-5 py-2 rounded-lg text-sm font-bold transition-all capitalize ${
                  view === v
                    ? 'bg-[#1a0e0b] text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {v === 'planning' ? '📅 Planning' : '📋 Liste'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-32">
            <svg className="w-8 h-8 animate-spin text-[#c4623d]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          </div>
        ) : view === 'planning' ? (
          <PlanningView
            reservations={monthReservations}
            currentMonth={currentMonth}
            onSelect={setSelected}
          />
        ) : (
          <ListView
            reservations={reservations}
            onSelect={setSelected}
            onStatusChange={updateStatus}
          />
        )}
      </div>

      {/* Drawer */}
      <ReservationDrawer
        reservation={selected}
        onClose={() => setSelected(null)}
        onStatusChange={updateStatus}
        onDelete={deleteReservation}
      />
    </div>
  )
}
