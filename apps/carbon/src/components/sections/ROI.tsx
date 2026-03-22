'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, CheckCircle, Award } from 'lucide-react'
import SectionLabel from '@/components/SectionLabel'

function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setValue(target)
      return
    }

    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target, duration])

  return value
}

const guarantees = [
  'Prix carbone bloqué 158€/tCO₂ via contrats PURO.EARTH',
  '50% des coûts couverts par subventions ANEF (Maroc)',
  'Financement 2M€ pour projet 500ha Chefchaouen',
]

const metrics = [
  {
    icon: TrendingUp,
    value: '1.7M',
    suffix: '€',
    label: 'Revenus annuels DÈS 2027',
    detail: 'Crédits carbone: 1.18M€ | Biochar: 600k€',
    numericTarget: 17,
  },
  {
    icon: CheckCircle,
    value: '2027',
    suffix: '',
    label: 'Cash-flow POSITIF',
    detail: 'Dès la 2e année d\'opération',
    numericTarget: 2027,
  },
  {
    icon: Award,
    value: '2028',
    suffix: '',
    label: 'ROI COMPLET',
    detail: '< 2 ans — Revenus couvrent investissement total',
    numericTarget: 2028,
  },
]

export default function ROI() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-cream-dark section-padding" id="roi">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel label="ROI" color="emerald" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-emerald-dark mt-3">
            Retour sur Investissement
          </h2>
          <p className="text-gray-500 mt-2">Garanties et Projections</p>
        </motion.div>

        {/* Metrics */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * i, duration: 0.6 }}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-custom/10 text-center card-hover"
              >
                <div className="w-12 h-12 bg-emerald-custom/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-emerald-custom" />
                </div>
                <div className="font-heading font-bold text-3xl sm:text-4xl text-emerald-custom mb-2">
                  {metric.value}
                  <span className="text-golden">{metric.suffix}</span>
                </div>
                <h3 className="font-heading font-semibold text-emerald-dark mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-500 text-sm">{metric.detail}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Guarantees box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-emerald-custom/5 border-2 border-emerald-custom/20 rounded-3xl p-6 sm:p-8"
        >
          <h3 className="font-heading font-bold text-xl text-emerald-dark mb-5 text-center">
            Garanties du projet
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {guarantees.map((guarantee, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-emerald-custom/10"
              >
                <div className="w-6 h-6 bg-emerald-custom rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{guarantee}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
