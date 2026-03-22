'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { REVENUE_TIMELINE } from '@/lib/constants'
import SectionLabel from '@/components/SectionLabel'

const formatEuro = (value: number) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value)

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-emerald-custom/20 rounded-2xl shadow-xl p-4">
        <p className="font-heading font-bold text-emerald-dark">{label}</p>
        <p className="text-emerald-custom font-semibold mt-1">{formatEuro(payload[0].value)}</p>
      </div>
    )
  }
  return null
}

export default function PhasageRevenus() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-white section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel label="Projections" color="emerald" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-3">
            Phasage des Revenus 2026–2030
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Revenue milestone cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {REVENUE_TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-4 bg-stone-50 rounded-2xl px-4 py-3 border border-stone-100"
              >
                <div className="w-14 text-center">
                  <span className="font-heading font-bold text-emerald-custom text-sm">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${(item.revenue / 2631000) * 100}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    className="bg-emerald-custom h-2 rounded-full"
                  />
                </div>
                <div className="w-28 text-right">
                  <span className="font-heading font-semibold text-gray-800 text-sm">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 bg-stone-50 rounded-3xl p-6 border border-stone-100"
          >
            <h3 className="font-heading font-semibold text-emerald-dark mb-6 text-center">
              Croissance des revenus (€)
            </h3>
            <div className="h-72" aria-label="Graphique des revenus annuels 2026-2030">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={REVENUE_TIMELINE}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: '#6b7280', fontSize: 13, fontFamily: 'Outfit' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M€`}
                    tick={{ fill: '#6b7280', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1d6e4a10' }} />
                  <Bar dataKey="revenue" radius={[8, 8, 0, 0]} maxBarSize={80}>
                    {REVENUE_TIMELINE.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === REVENUE_TIMELINE.length - 1 ? '#d4a574' : '#1d6e4a'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Table alternative for accessibility */}
            <details className="mt-4 text-xs text-gray-400">
              <summary className="cursor-pointer hover:text-gray-600 transition-colors duration-150">
                Voir les données du graphique (accessibilité)
              </summary>
              <table className="mt-2 w-full text-xs">
                <thead>
                  <tr>
                    <th className="text-left py-1 text-gray-500">Année</th>
                    <th className="text-right py-1 text-gray-500">Revenus</th>
                  </tr>
                </thead>
                <tbody>
                  {REVENUE_TIMELINE.map((r) => (
                    <tr key={r.year}>
                      <td className="py-1 text-gray-600">{r.year}</td>
                      <td className="py-1 text-right text-gray-600">{r.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
