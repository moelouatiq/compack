import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import Equipe from '@/components/sections/Equipe'
import Problematique from '@/components/sections/Problematique'
import Solution from '@/components/sections/Solution'
import ExemplesPuits from '@/components/sections/ExemplesPuits'
import MetodologieEtape1 from '@/components/sections/MetodologieEtape1'
import MetodologieEtape2 from '@/components/sections/MetodologieEtape2'
import Certification from '@/components/sections/Certification'
import Biochar from '@/components/sections/Biochar'
import BiocharApplications from '@/components/sections/BiocharApplications'
import PlanReboisement from '@/components/sections/PlanReboisement'
import PaulowniaPhenix from '@/components/sections/PaulowniaPhenix'
import SurveillanceForets from '@/components/sections/SurveillanceForets'
import DonneesFinancieres from '@/components/sections/DonneesFinancieres'
import PhasageRevenus from '@/components/sections/PhasageRevenus'
import CreditsExplained from '@/components/sections/CreditsExplained'
import ROI from '@/components/sections/ROI'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Problematique />
      <Solution />
      <ExemplesPuits />
      <MetodologieEtape1 />
      <MetodologieEtape2 />
      <Certification />
      <Biochar />
      <BiocharApplications />
      <PlanReboisement />
      <PaulowniaPhenix />
      <SurveillanceForets />
      <DonneesFinancieres />
      <PhasageRevenus />
      <CreditsExplained />
      <ROI />
      <Equipe />
      <Footer />
    </main>
  )
}
