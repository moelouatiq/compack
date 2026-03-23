'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FINANCIAL_DATA } from '@/lib/carbon/constants'
import { Euro } from 'lucide-react'
import SectionLabel from '@/components/carbon/SectionLabel'

export default function DonneesFinancieres() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="finances" className="bg-stone-100 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel label="Finances" color="emerald" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-3">
            Sources de Revenus
          </h2>
          <p className="text-gray-500 mt-3 font-medium text-lg">
            Dès 2027,{' '}
            <span className="text-emerald-custom font-bold">1.7M€</span> de revenus stables
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-x-auto rounded-3xl shadow-lg border border-gray-200"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-custom text-white">
                <th className="text-left px-5 py-4 font-heading font-semibold rounded-tl-3xl">
                  Source
                </th>
                <th className="text-left px-4 py-4 font-heading font-semibold hidden sm:table-cell">
                  Type
                </th>
                <th className="text-right px-4 py-4 font-heading font-semibold hidden md:table-cell">
                  Volume
                </th>
                <th className="text-right px-4 py-4 font-heading font-semibold hidden md:table-cell">
                  Prix
                </th>
                <th className="text-right px-5 py-4 font-heading font-semibold">
                  Revenu
                </th>
                <th className="text-center px-4 py-4 font-heading font-semibold rounded-tr-3xl">
                  Année
                </th>
              </tr>
            </thead>
            <tbody>
              {FINANCIAL_DATA.map((row, i) => (
                <motion.tr
                  key={row.source}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  className={`border-t border-gray-100 ${
                    i % 2 === 0 ? 'bg-white' : 'bg-stone-50'
                  } hover:bg-emerald-custom/5 transition-colors duration-150`}
                >
                  <td className="px-5 py-4 font-medium text-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-custom flex-shrink-0" />
                      {row.source}
                    </div>
                  </td>
                  <td className="px-4 py-4 hidden sm:table-cell">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        row.type === 'Commercial'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right text-gray-600 hidden md:table-cell">
                    {row.volume}
                  </td>
                  <td className="px-4 py-4 text-right text-gray-600 hidden md:table-cell">
                    {row.prix}
                  </td>
                  <td className="px-5 py-4 text-right font-heading font-bold text-emerald-custom">
                    {row.revenu}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="bg-golden/30 text-amber-800 font-semibold text-xs px-3 py-1 rounded-full">
                      {row.annee}
                    </span>
                  </td>
                </motion.tr>
              ))}
              {/* Total row */}
              <tr className="bg-emerald-custom text-white border-t-2 border-emerald-dark">
                <td className="px-5 py-4 font-heading font-bold rounded-bl-3xl" colSpan={2}>
                  <div className="flex items-center gap-2">
                    <Euro className="w-4 h-4" />
                    TOTAL Revenus 2027+
                  </div>
                </td>
                <td className="hidden md:table-cell" colSpan={2} />
                <td className="px-5 py-4 text-right font-heading font-bold text-golden text-lg">
                  1 785 000€
                </td>
                <td className="px-4 py-4 text-center font-semibold rounded-br-3xl">2027</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Mobile note */}
        <p className="text-center text-xs text-gray-400 mt-3 md:hidden">
          Faites défiler horizontalement pour voir tous les détails
        </p>
      </div>
    </section>
  )
}
