import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Compack Carbon - De la restauration des forêts brûlées à la création de crédits carbone',
  description: 'Transformer les menaces climatiques en opportunités économiques et sociales. Biochar, puits de carbone certifiés, reboisement au Maroc.',
  keywords: 'crédits carbone, biochar, reboisement, forêts, Maroc, Chefchaouen, séquestration carbone, Puro.earth',
  authors: [{ name: 'Alexandre BAROUZDIN', url: 'https://compack.io' }],
  openGraph: {
    title: 'Compack Carbon - Crédits Carbone Certifiés',
    description: 'Restauration des forêts brûlées, biochar, et crédits carbone de haute qualité au Maroc.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Compack Carbon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compack Carbon',
    description: 'De la restauration des forêts brûlées à la création de crédits carbone certifiés.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-body bg-cream text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
