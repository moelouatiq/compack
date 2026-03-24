'use client'

import { Reservation, STATUS_LABELS } from './AdminDashboard'

interface Props {
  reservations: Reservation[]
  currentMonth: { year: number; month: number }
  onSelect: (r: Reservation) => void
}

const DOME_COLORS: Record<string, string> = {
  studio:   '#c4623d',
  family:   '#1d6e4a',
  premium:  '#7c3aed',
  villa:    '#d4a574',
}

export default function PlanningView({ reservations, currentMonth, onSelect }: Props) {
  const { year, month } = currentMonth
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const today = new Date()

  if (reservations.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-16 text-center">
        <div className="text-5xl mb-4">📅</div>
        <p className="text-gray-400 font-semibold">Aucune réservation ce mois</p>
      </div>
    )
  }

  // Sort by arrival
  const sorted = [...reservations].sort((a, b) => a.arrival.localeCompare(b.arrival))

  // Build YYYY-MM-DD string for a given day (avoids timezone issues)
  const dayStr = (d: number) =>
    `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  return (
    <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
      {/* Legend */}
      <div className="flex items-center gap-6 px-6 py-4 border-b border-black/5 flex-wrap">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Légende :</span>
        {Object.entries(STATUS_LABELS).map(([key, s]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm" style={{ background: s.color }} />
            <span className="text-xs text-gray-600 font-semibold">{s.label}</span>
          </div>
        ))}
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-blue-200" />
          <span className="text-xs text-gray-600 font-semibold">Aujourd&apos;hui</span>
        </div>
      </div>

      {/* Scrollable table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ minWidth: `${180 + daysInMonth * 36}px` }}>
          <thead>
            <tr className="border-b border-black/5">
              {/* Info column */}
              <th className="sticky left-0 bg-white z-10 w-44 min-w-44 px-4 py-3 text-left border-r border-black/5">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Réservation</span>
              </th>
              {/* Day columns */}
              {days.map(d => {
                const ds = dayStr(d)
                const date = new Date(year, month, d)
                const isToday = ds === todayStr
                const isWeekend = date.getDay() === 0 || date.getDay() === 6
                return (
                  <th
                    key={d}
                    className={`w-9 min-w-9 px-0 py-2 text-center text-xs font-bold border-r border-black/[0.04] ${
                      isToday ? 'bg-blue-50 text-blue-600' :
                      isWeekend ? 'bg-gray-50 text-gray-400' : 'text-gray-400'
                    }`}
                  >
                    <div>{d}</div>
                    <div className="text-[9px] font-normal opacity-60">
                      {date.toLocaleDateString('fr-FR', { weekday: 'narrow' })}
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r, idx) => {
              const statusMeta = STATUS_LABELS[r.status] || STATUS_LABELS.en_attente
              const domeColor = DOME_COLORS[r.domeType] || '#6b7280'
              // Normalize arrival/departure to YYYY-MM-DD (strip time)
              const arrival   = r.arrival.slice(0, 10)
              const departure = r.departure.slice(0, 10)

              return (
                <tr
                  key={r.id}
                  className={`border-b border-black/[0.04] hover:bg-gray-50/80 cursor-pointer transition-colors ${idx % 2 === 0 ? '' : 'bg-gray-50/30'}`}
                  onClick={() => onSelect(r)}
                >
                  {/* Info cell */}
                  <td className="sticky left-0 bg-inherit z-10 px-4 py-2.5 border-r border-black/5">
                    <div className="flex items-start gap-2">
                      <div className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0" style={{ background: domeColor }} />
                      <div className="min-w-0">
                        <div className="font-bold text-[#1a0e0b] text-sm truncate leading-tight">{r.nom}</div>
                        <div className="text-xs text-gray-400 truncate">{r.domeLabel}</div>
                        <div className="mt-0.5">
                          <span className="inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ color: statusMeta.color, background: statusMeta.bg }}>
                            {statusMeta.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Day cells */}
                  {days.map(d => {
                    const ds = dayStr(d)
                    const date = new Date(year, month, d)
                    const isToday = ds === todayStr
                    const isWeekend = date.getDay() === 0 || date.getDay() === 6

                    // arrival inclusive, departure exclusive — pure string comparison
                    const inRange = ds >= arrival && ds < departure
                    const isFirst = ds === arrival
                    const isLast  = dayStr(d + 1) === departure

                    return (
                      <td
                        key={d}
                        className={`w-9 min-w-9 h-10 border-r border-black/[0.04] p-0.5 ${
                          isToday ? 'bg-blue-50/50' : isWeekend ? 'bg-gray-50/50' : ''
                        }`}
                      >
                        {inRange && (
                          <div
                            className="h-7 flex items-center justify-center text-white text-[10px] font-bold"
                            style={{
                              background: statusMeta.color,
                              borderRadius: isFirst && isLast ? '6px' :
                                           isFirst ? '6px 0 0 6px' :
                                           isLast  ? '0 6px 6px 0' : '0',
                              opacity: r.status === 'annulé' ? 0.4 : 0.85,
                            }}
                          >
                            {isFirst && r.nights <= 3 ? '↔' : isFirst ? `${r.nights}n` : ''}
                          </div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
