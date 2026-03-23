// SOLATERA — Constants & Configuration

export const COLORS = {
  terracotta: '#c4623d',
  terracottaLight: '#d4754f',
  terracottaDark: '#a84e2e',
  earthGreen: '#1d6e4a',
  earthGreenLight: '#27ae60',
  golden: '#d4a574',
  cream: '#f5f1e8',
  creamDark: '#ede8dc',
  darkText: '#2d3436',
  darkBg: '#1a0e0b',
}

export const CONTACT = {
  email: 'contact@compack.io',
  whatsapp: '+33 7 88 31 58 52',
  address: 'Marrakech, Maroc',
  hours: 'Lun-Dim, 7h-22h',
  name: 'Alexandre BAROUZDIN',
  website: 'www.compack.io',
  rna: 'W751154531',
  siren: '101474419',
}

export const DOME_TYPES = [
  { id: 'studio', label: 'Dôme Studio', capacity: 2, pricePerNight: 150 },
  { id: 'famille', label: 'Dôme Famille', capacity: 6, pricePerNight: 280 },
  { id: 'prestige', label: 'Dôme Prestige', capacity: 2, pricePerNight: 350 },
]

export const DOMES = [
  {
    id: 'studio',
    title: 'Dôme Studio',
    description: 'Parfait pour 2 personnes. Balcon privé, salle de bain luxe, chauffage/climatisation.',
    image: '/images/architecture/ecodomes-dakhla-1.jpg',
    specs: { capacity: '2 personnes', size: '35m²', equipment: 'WiFi, TV, Mini-bar', extra: 'Terrasse privée' },
    priceFrom: 150,
  },
  {
    id: 'famille',
    title: 'Dôme Famille',
    description: '2 chambres + 1 salon. Idéal pour familles ou groupes. Cuisine équipée.',
    image: '/images/ocre-domes/domes-ocre-village-1.jpg',
    specs: { capacity: '4-6 personnes', size: '65m²', equipment: 'Cuisine, WiFi, Climatisation', extra: '2 salles de bain' },
    priceFrom: 280,
  },
  {
    id: 'prestige',
    title: 'Dôme Prestige',
    description: 'Luxe absolu. Jacuzzi privé, vue panoramique, terrasse vue village.',
    image: '/images/white-domes/domes-white-lazy-1.jpg',
    specs: { capacity: '2 personnes', size: '50m²', equipment: 'Jacuzzi, Minibar, Vue 360°', extra: 'Service 24h/24' },
    priceFrom: 350,
  },
]

export const NAV_LINKS = [
  { label: 'Hébergement', href: '#domes' },
  { label: 'Écologie', href: '#technique' },
  { label: 'Bien-être', href: '#wellness' },
  { label: 'Social', href: '#association' },
  { label: 'Vision', href: '#unesco' },
]

export const PROJECT_STATS = [
  { value: '7 ha', label: 'Terrain acquis' },
  { value: '60', label: 'Éco-dômes prévus' },
  { value: '14 km', label: 'Centre Marrakech' },
  { value: '2026', label: 'Livraison cible' },
]
