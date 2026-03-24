import Navigation from '@/components/carbon/Navigation'
import Hero from '@/components/carbon/sections/Hero'
import Equipe from '@/components/carbon/sections/Equipe'
import Problematique from '@/components/carbon/sections/Problematique'
import Solution from '@/components/carbon/sections/Solution'
import ExemplesPuits from '@/components/carbon/sections/ExemplesPuits'
import MetodologieEtape1 from '@/components/carbon/sections/MetodologieEtape1'
import MetodologieEtape2 from '@/components/carbon/sections/MetodologieEtape2'
import Certification from '@/components/carbon/sections/Certification'
import Biochar from '@/components/carbon/sections/Biochar'
import BiocharApplications from '@/components/carbon/sections/BiocharApplications'
import PlanReboisement from '@/components/carbon/sections/PlanReboisement'
import PaulowniaPhenix from '@/components/carbon/sections/PaulowniaPhenix'
import SurveillanceForets from '@/components/carbon/sections/SurveillanceForets'
import DonneesFinancieres from '@/components/carbon/sections/DonneesFinancieres'
import PhasageRevenus from '@/components/carbon/sections/PhasageRevenus'
import CreditsExplained from '@/components/carbon/sections/CreditsExplained'
import ROI from '@/components/carbon/sections/ROI'
import Footer from '@/components/carbon/sections/Footer'

export const metadata = {
  title: 'Compack Carbon — Crédits Carbone Certifiés',
  description: 'Restauration des forêts brûlées, biochar et crédits carbone de haute qualité au Maroc.',
}

export default function CarbonPage() {
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
