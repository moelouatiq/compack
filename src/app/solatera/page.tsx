'use client'
import { useState } from 'react'

import Hero from "@/components/solatera/sections/Hero"
import Welcome from "@/components/solatera/sections/Welcome"
import VisionMission from "@/components/solatera/sections/VisionMission"

// Tab 1 — Village Vacances
import Domes from "@/components/solatera/sections/Domes"
import ReservationSystem from "@/components/solatera/sections/ReservationSystem"
import Activities from "@/components/solatera/sections/Activities"
import FitnessWellness from "@/components/solatera/sections/FitnessWellness"
import Sophrologie from "@/components/solatera/sections/Sophrologie"
import EPAD from "@/components/solatera/sections/EPAD"
import AccessibilityPMR from "@/components/solatera/sections/AccessibilityPMR"

// Tab 2 — Social & Solidarité
import AssociationIntro from "@/components/solatera/sections/AssociationIntro"
import Evenementiel from "@/components/solatera/sections/Evenementiel"
import SolidaryCafe from "@/components/solatera/sections/SolidaryCafe"
import EpicerieSolidaire from "@/components/solatera/sections/EpicerieSolidaire"
import EcoleMCM from "@/components/solatera/sections/EcoleMCM"
import DigitalRecycling from "@/components/solatera/sections/DigitalRecycling"
import Reinsertion from "@/components/solatera/sections/Reinsertion"

// Éco-Village & Vision (partagés)
import Divider1 from "@/components/solatera/sections/Divider1"
import Technique from "@/components/solatera/sections/Technique"
import SolarEnergy from "@/components/solatera/sections/SolarEnergy"
import WaterPotable from "@/components/solatera/sections/WaterPotable"
import Composting from "@/components/solatera/sections/Composting"
import BioCultures from "@/components/solatera/sections/BioCultures"
import Beekeeping from "@/components/solatera/sections/Beekeeping"
import HealthPole from "@/components/solatera/sections/HealthPole"
import EcoSchool from "@/components/solatera/sections/EcoSchool"
import PlasticRecycling from "@/components/solatera/sections/PlasticRecycling"
import CrisisManagement from "@/components/solatera/sections/CrisisManagement"
import MediaTV from "@/components/solatera/sections/MediaTV"
import UNESCO from "@/components/solatera/sections/UNESCO"
import GreenWall from "@/components/solatera/sections/GreenWall"
import Team from "@/components/solatera/sections/Team"
import ProjectDetails from "@/components/solatera/sections/ProjectDetails"
import Donation from "@/components/solatera/sections/Donation"
import Footer from "@/components/solatera/sections/Footer"

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

export default function SolateraPage() {
  const [tab, setTab] = useState<Tab>('vacances')

  return (
    <main>
      {/* ── INTRO ── */}
      <Hero />
      <Welcome />
      <VisionMission />

      {/* ── BARRE D'ONGLETS ── */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            {TABS.map((t) => {
              const isActive = tab === t.id
              return (
                <button
                  key={t.id}
                  onClick={() => { setTab(t.id); window.scrollTo({ top: 0 }) }}
                  className={`
                    relative flex-1 flex items-center gap-4 px-8 py-5 text-left
                    transition-all duration-200 cursor-pointer border-0 outline-none
                    ${isActive ? 'bg-white' : 'bg-stone-50 hover:bg-stone-100'}
                  `}
                >
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#c4623d]" />
                  )}
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <div className={`font-bold text-base leading-tight ${isActive ? 'text-[#c4623d]' : 'text-stone-500'}`}>
                      {t.label}
                    </div>
                    <div className="text-xs text-stone-400 mt-0.5 font-medium">{t.sublabel}</div>
                  </div>
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
      {tab === 'vacances' && (
        <>
          <Domes />
          <ReservationSystem />
          <Activities />
          <FitnessWellness />
          <Sophrologie />
          <EPAD />
          <AccessibilityPMR />
        </>
      )}

      {/* ── TAB 2 — SOCIAL & SOLIDARITÉ ── */}
      {tab === 'social' && (
        <>
          <AssociationIntro />
          <Evenementiel />
          <SolidaryCafe />
          <EpicerieSolidaire />
          <EcoleMCM />
          <DigitalRecycling />
          <Reinsertion />
        </>
      )}

      {/* ── ÉCO-VILLAGE & AUTONOMIE (partagé) ── */}
      <Divider1 />
      <Technique />
      <SolarEnergy />
      <WaterPotable />
      <Composting />
      <BioCultures />
      <Beekeeping />
      <HealthPole />
      <EcoSchool />

      {/* ── VISION MONDIALE ── */}
      <PlasticRecycling />
      <CrisisManagement />
      <MediaTV />
      <UNESCO />
      <GreenWall />

      {/* ── ÉQUIPE & PROJET ── */}
      <Team />
      <ProjectDetails />
      <Donation />
      <Footer />
    </main>
  )
}
