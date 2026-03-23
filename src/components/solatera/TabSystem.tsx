'use client'
import { useState } from 'react'

// Tab 1 — Village Vacances
import Domes from './sections/Domes'
import ReservationSystem from './sections/ReservationSystem'
import Activities from './sections/Activities'
import FitnessWellness from './sections/FitnessWellness'
import EPAD from './sections/EPAD'
import AccessibilityPMR from './sections/AccessibilityPMR'

// Tab 2 — Social & Solidarité
import AssociationIntro from './sections/AssociationIntro'
import Evenementiel from './sections/Evenementiel'
import SolidaryCafe from './sections/SolidaryCafe'
import EpicerieSolidaire from './sections/EpicerieSolidaire'
import EcoleMCM from './sections/EcoleMCM'
import DigitalRecycling from './sections/DigitalRecycling'
import Reinsertion from './sections/Reinsertion'

type Tab = 'vacances' | 'social'

const TABS: { id: Tab; label: string; sublabel: string; icon: string }[] = [
  {
    id: 'vacances',
    label: 'Village Vacances',
    sublabel: 'Hébergement · Activités · Bien-être · PMR · Séniors',
    icon: '🏡',
  },
  {
    id: 'social',
    label: 'Engagement Social',
    sublabel: 'Café · Épicerie · École · FAB Lab · Événementiel',
    icon: '🤝',
  },
]

export default function TabSystem() {
  const [active, setActive] = useState<Tab>('vacances')

  return (
    <div>
      {/* ── STICKY TAB NAV ── */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            {TABS.map((tab) => {
              const isActive = active === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`
                    relative flex-1 flex items-center gap-4 px-8 py-5 text-left
                    transition-all duration-200 cursor-pointer
                    ${isActive ? 'bg-white' : 'bg-stone-50 hover:bg-stone-100'}
                  `}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#c4623d]" />
                  )}

                  {/* Icon */}
                  <span className="text-2xl">{tab.icon}</span>

                  {/* Labels */}
                  <div>
                    <div
                      className={`font-bold text-base leading-tight ${
                        isActive ? 'text-[#c4623d]' : 'text-stone-500'
                      }`}
                    >
                      {tab.label}
                    </div>
                    <div className="text-xs text-stone-400 mt-0.5 font-medium">
                      {tab.sublabel}
                    </div>
                  </div>

                  {/* Active badge */}
                  {isActive && (
                    <span className="ml-auto text-[10px] font-bold tracking-widest uppercase text-[#c4623d] bg-[#c4623d]/10 px-3 py-1 rounded-full">
                      Actif
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── TAB 1 — VILLAGE VACANCES ── */}
      {active === 'vacances' && (
        <div>
          <Domes />
          <ReservationSystem />
          <Activities />
          <FitnessWellness />
          <EPAD />
          <AccessibilityPMR />
        </div>
      )}

      {/* ── TAB 2 — SOCIAL & SOLIDARITÉ ── */}
      {active === 'social' && (
        <div>
          <AssociationIntro />
          <Evenementiel />
          <SolidaryCafe />
          <EpicerieSolidaire />
          <EcoleMCM />
          <DigitalRecycling />
          <Reinsertion />
        </div>
      )}
    </div>
  )
}
