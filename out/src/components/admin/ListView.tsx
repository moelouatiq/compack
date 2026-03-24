'use client'

import { useState } from 'react'
import { Reservation, STATUS_LABELS } from './AdminDashboard'

interface Props {
  reservations: Reservation[]
  onSelect: (r: Reservation) => void
  onStatusChange: (id: number, status: string) => Promise<void>
}

const STATUSES = ['en_attente', 'confirmé', 'annulé']

function fmt(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function ListView({ reservations, onSelect, onStatusChange }: Props) {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [updating, setUpdating] = useState<number | null>(null)

  const filtered = reservations
    .filter(r => filter === 'all' || r.status === filter)
    .filter(r => {
      if (!search) return true
      const q = search.toLowerCase()
      return r.nom.toLowerCase().includes(q) ||
             r.email.toLowerCase().includes(q) ||
             r.domeLabel.toLowerCase().includes(q)
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const handleStatus = async (e: React.MouseEvent, id: number, status: string) => {
    e.stopPropagation()
    setUpdating(id)
    await onStatusChange(id, status)
    setUpdating(null)
  }

  if (reservations.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-16 text-center">
        <div className="text-5xl mb-4">📋</div>
        <p className="text-gray-400 font-semibold">Aucune réservation</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Status filter */}
        <div className="flex bg-white rounded-xl border border-black/10 p-1 shadow-sm gap-1 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`cursor-pointer px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${filter === 'all' ? 'bg-[#1a0e0b] text-white' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Tous ({reservations.length})
          </button>
          {STATUSES.map(s => {
            const meta = STATUS_LABELS[s]
            const count = reservations.filter(r => r.status === s).length
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`cursor-pointer px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${filter === s ? 'text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
                style={filter === s ? { background: meta.color } : {}}
              >
                {meta.label} ({count})
              </button>
            )
          })}
        </div>
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Rechercher nom, email, dôme…"
            className="w-full bg-white border border-black/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c4623d]/30 focus:border-[#c4623d] shadow-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full" style={{ minWidth: '800px' }}>
            <thead className="border-b border-black/5">
              <tr>
                {['#', 'Client', 'Hébergement', 'Arrivée', 'Départ', 'Nuits', 'Total', 'Statut', 'Actions'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={9} className="text-center py-12 text-gray-400 font-semibold">Aucun résultat</td></tr>
              ) : filtered.map((r, idx) => {
                const meta = STATUS_LABELS[r.status] || STATUS_LABELS.en_attente
                return (
                  <tr
                    key={r.id}
                    onClick={() => onSelect(r)}
                    className={`border-b border-black/[0.04] hover:bg-gray-50 cursor-pointer transition-colors ${idx % 2 === 0 ? '' : 'bg-gray-50/30'}`}
                  >
                    <td className="px-4 py-3 text-gray-400 font-bold text-xs">
                      #{String(r.id).padStart(4, '0')}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-bold text-[#1a0e0b] text-sm">{r.nom}</div>
                      <div className="text-gray-400 text-xs">{r.email}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-gray-700 text-sm">{r.domeLabel}</div>
                      <div className="text-gray-400 text-xs">{r.persons} pers. · {r.packageLabel}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{fmt(r.arrival)}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{fmt(r.departure)}</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-700">{r.nights}n</td>
                    <td className="px-4 py-3 text-sm font-black" style={{ color: '#c4623d' }}>{r.totalPrice.toFixed(0)}€</td>
                    <td className="px-4 py-3">
                      <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap" style={{ color: meta.color, background: meta.bg }}>
                        {meta.label}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {updating === r.id ? (
                        <svg className="w-4 h-4 animate-spin text-gray-400" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                      ) : (
                        <div className="flex gap-1.5" onClick={e => e.stopPropagation()}>
                          {r.status !== 'confirmé' && (
                            <button
                              onClick={e => handleStatus(e, r.id, 'confirmé')}
                              className="cursor-pointer text-[10px] font-bold px-2 py-1 rounded-lg bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20 transition-colors whitespace-nowrap"
                            >✓ Confirmer</button>
                          )}
                          {r.status !== 'annulé' && (
                            <button
                              onClick={e => handleStatus(e, r.id, 'annulé')}
                              className="cursor-pointer text-[10px] font-bold px-2 py-1 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors whitespace-nowrap"
                            >✗ Annuler</button>
                          )}
                          {r.status !== 'en_attente' && (
                            <button
                              onClick={e => handleStatus(e, r.id, 'en_attente')}
                              className="cursor-pointer text-[10px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-500 hover:bg-amber-100 transition-colors whitespace-nowrap"
                            >⏳</button>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
