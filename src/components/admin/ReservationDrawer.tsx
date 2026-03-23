'use client'

import { useEffect } from 'react'
import { Reservation, STATUS_LABELS } from './AdminDashboard'

interface Props {
  reservation: Reservation | null
  onClose: () => void
  onStatusChange: (id: number, status: string) => Promise<void>
  onDelete: (id: number) => Promise<void>
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4 py-2.5 border-b border-black/[0.06] last:border-0">
      <span className="text-gray-400 text-sm shrink-0">{label}</span>
      <span className="text-[#1a0e0b] text-sm font-semibold text-right">{value}</span>
    </div>
  )
}

function fmt(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default function ReservationDrawer({ reservation: r, onClose, onStatusChange, onDelete }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      {r && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          r ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {r && (
          <>
            {/* Header */}
            <div className="bg-[#1a0e0b] px-6 py-5 flex items-start justify-between">
              <div>
                <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">
                  Réservation #{String(r.id).padStart(4, '0')}
                </div>
                <h2 className="text-white font-black text-xl">{r.nom}</h2>
                <div className="mt-2">
                  <span
                    className="inline-block text-xs font-black px-3 py-1 rounded-full"
                    style={{
                      color: STATUS_LABELS[r.status]?.color || '#999',
                      background: STATUS_LABELS[r.status]?.bg || '#99999920',
                    }}
                  >
                    {STATUS_LABELS[r.status]?.label || r.status}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="cursor-pointer w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors mt-0.5"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">

              {/* Contact */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">Contact</h3>
                <div className="bg-gray-50 rounded-2xl px-4">
                  <Row label="✉️ Email" value={r.email} />
                  <Row label="📞 Téléphone" value={r.phone || '—'} />
                </div>
              </div>

              {/* Séjour */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">Séjour</h3>
                <div className="bg-gray-50 rounded-2xl px-4">
                  <Row label="🏠 Hébergement" value={r.domeLabel} />
                  <Row label="📅 Arrivée" value={fmt(r.arrival)} />
                  <Row label="📅 Départ" value={fmt(r.departure)} />
                  <Row label="🌙 Durée" value={`${r.nights} nuit${r.nights > 1 ? 's' : ''}`} />
                  <Row label="👥 Personnes" value={String(r.persons)} />
                  <Row label="📦 Forfait" value={r.packageLabel} />
                </div>
              </div>

              {/* Prix */}
              <div className="bg-[#1a0e0b] rounded-2xl p-5 flex items-center justify-between">
                <span className="text-white/60 font-semibold">Total estimé</span>
                <span className="text-[#d4a574] font-black text-3xl">{r.totalPrice.toFixed(0)}€</span>
              </div>

              {/* Message */}
              {r.message && (
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">Message client</h3>
                  <div className="bg-amber-50 border border-amber-200/60 rounded-2xl p-4 text-sm text-gray-700 leading-relaxed italic">
                    "{r.message}"
                  </div>
                </div>
              )}

              {/* Dates système */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">Informations</h3>
                <div className="bg-gray-50 rounded-2xl px-4">
                  <Row label="Créé le" value={new Date(r.createdAt).toLocaleString('fr-FR')} />
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="border-t border-black/5 p-5 space-y-3 bg-white">
              {/* Status actions */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => onStatusChange(r.id, 'confirmé')}
                  disabled={r.status === 'confirmé'}
                  className="cursor-pointer py-2.5 rounded-xl text-sm font-black transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20"
                >
                  ✓ Confirmer
                </button>
                <button
                  onClick={() => onStatusChange(r.id, 'en_attente')}
                  disabled={r.status === 'en_attente'}
                  className="cursor-pointer py-2.5 rounded-xl text-sm font-black transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-amber-50 text-amber-500 hover:bg-amber-100"
                >
                  ⏳ Attente
                </button>
                <button
                  onClick={() => onStatusChange(r.id, 'annulé')}
                  disabled={r.status === 'annulé'}
                  className="cursor-pointer py-2.5 rounded-xl text-sm font-black transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-red-50 text-red-500 hover:bg-red-100"
                >
                  ✗ Annuler
                </button>
              </div>
              {/* Quick reply */}
              <a
                href={`mailto:${r.email}?subject=Réservation SOLATERA #${String(r.id).padStart(4,'0')}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#c4623d] hover:bg-[#d4754f] text-white font-black rounded-xl transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Répondre par email
              </a>
              {/* Delete */}
              <button
                onClick={() => onDelete(r.id)}
                className="cursor-pointer w-full py-2.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl text-sm font-semibold transition-all"
              >
                Supprimer cette réservation
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
