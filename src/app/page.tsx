'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

/* ─── animation helpers ─── */
const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const fadeIn  = { hidden: { opacity: 0 },        visible: { opacity: 1, transition: { duration: 0.7 } } }
const stagger = { visible: { transition: { staggerChildren: 0.11 } } }

/* ─── data ─── */
const PILIERS = [
  { icon: '🌿', name: 'SOLATERA',    sub: 'Éco-village & Tourisme',        color: '#c4623d', bg: '#c4623d15', href: '/solatera' },
  { icon: '🌲', name: 'CARBON',      sub: 'Crédits Carbone & Forêts',      color: '#1d6e4a', bg: '#1d6e4a15', href: '/carbon'   },
  { icon: '🛒', name: 'MARKET',      sub: 'Marketplace Saisonnière',       color: '#d4a574', bg: '#d4a57415', href: '#market'   },
  { icon: '🤝', name: 'ASSOCIATION', sub: 'Impact Social & Éducation',     color: '#2563eb', bg: '#2563eb15', href: '#association' },
  { icon: '🏛️', name: 'HOLDING',   sub: 'Gouvernance & Stratégie',       color: '#7c3aed', bg: '#7c3aed15', href: '#holding'  },
]

const SOLATERA_DOMES = [
  {
    id: 'studio', title: 'Dôme Studio', capacity: '2 personnes', size: '35 m²',
    price: '150€ / nuit', image: '/images/architecture/ecodomes-dakhla-1.jpg',
    features: ['Terrasse privée', 'Salle de bain luxe', 'WiFi & TV', 'Climatisation'],
  },
  {
    id: 'famille', title: 'Dôme Famille', capacity: '4–6 personnes', size: '65 m²',
    price: '280€ / nuit', image: '/images/ocre-domes/domes-ocre-village-1.jpg',
    features: ['2 chambres + salon', 'Cuisine équipée', '2 salles de bain', 'Vue jardin'],
  },
  {
    id: 'prestige', title: 'Dôme Prestige', capacity: '2 personnes', size: '50 m²',
    price: '350€ / nuit', image: '/images/white-domes/domes-white-lazy-1.jpg',
    features: ['Jacuzzi privé', 'Vue panoramique 360°', 'Service 24h/24', 'Minibar inclus'],
  },
]

const SOLATERA_INFRA = [
  { icon: '🏠', label: '60 éco-dômes', sub: 'dont 10 PMR' },
  { icon: '🌊', label: 'Lazy river & piscine', sub: 'espace bien-être' },
  { icon: '🧖', label: 'Hamam Spa', sub: 'sauna & massages' },
  { icon: '🥗', label: 'Solar kitchen', sub: 'cuisine solaire' },
  { icon: '🌱', label: 'Serres biologiques', sub: 'production locale' },
  { icon: '🐝', label: '20 ruches', sub: '400L miel/an' },
  { icon: '🏫', label: 'Éco-school', sub: 'groupes scolaires' },
  { icon: '💻', label: 'Fab Lab & CoWork', sub: 'numérique & formation' },
]

const CARBON_REVENUS = [
  { year: '2026', label: '1 311 000€', pct: 50 },
  { year: '2027', label: '1 785 000€', pct: 68 },
  { year: '2028', label: '2 192 500€', pct: 83 },
  { year: '2029', label: '2 631 000€', pct: 100 },
  { year: '2030', label: '2 631 000€', pct: 100 },
]

const CARBON_SOURCES = [
  { label: 'Vente Biochar',           volume: '1 500T',    prix: '400€/T',   revenu: '600 000€', icon: '⚗️' },
  { label: 'Crédits Carbone Biochar', volume: '4 500 CO₂', prix: '158€/CO₂', revenu: '711 000€', icon: '📜' },
  { label: 'Enfouissement bois',      volume: '3 000 CO₂', prix: '158€/CO₂', revenu: '474 000€', icon: '🌳' },
  { label: 'Reboisement',             volume: '2 500 CO₂', prix: '158€/CO₂', revenu: '395 000€', icon: '🌲' },
]

const MARKET_PRODUCTS = [
  { season: 'Printemps', icon: '🌸', color: '#f472b6', products: ['Miel de fleurs', 'Plants bio', 'Herbes aromatiques', 'Légumes primeurs', 'Bougies cire d\'abeille'] },
  { season: 'Été',       icon: '☀️', color: '#f59e0b', products: ['Tomates bio', 'Courgettes', 'Figues fraîches', 'Eau purifiée', 'Huiles essentielles'] },
  { season: 'Automne',   icon: '🍂', color: '#c4623d', products: ['Olives & huile', 'Dattes', 'Courges', 'Conserves maison', 'Savons naturels'] },
  { season: 'Hiver',     icon: '❄️', color: '#2563eb', products: ['Agrumes bio', 'Miel d\'hiver', 'Tisanes séchées', 'Biochar amendement', 'Mobilier recyclé'] },
]

const ASSOCIATION_PROJETS = [
  {
    icon: '🌿',
    tag: 'Projet 01',
    title: 'Construction Éco-Village Inclusif SOLATERA',
    desc: 'Bienvenue dans notre projet d\'éco-village inclusif à Marrakech, s\'étendant sur 7 hectares. Nous créons un espace accessible à tous, où chacun peut se sentir chez soi. Un modèle d\'inclusivité et de respect de la nature.',
    color: '#c4623d',
    cta: 'Découvrir le projet',
    href: '/solatera',
  },
  {
    icon: '♻️',
    tag: 'Projet 02',
    title: 'Écologie & Recyclage',
    desc: 'Économie circulaire (recyclage plastique), innovation zéro plastique (gobelets & plateaux dentaires), agriculture durable (hydroretenteurs naturels), régénération forestière (Paulownias & bois mort).',
    color: '#1d6e4a',
    cta: 'En savoir plus',
    href: '/carbon',
  },
  {
    icon: '🤲',
    tag: 'Projet 03',
    title: 'Aide aux Réfugiés',
    desc: 'Produits de première nécessité dans les camps. Programme d\'apprentissage du crochet pour créer des opportunités de travail. Notre camion scène apporte concerts et moments de bonheur et de partage.',
    color: '#2563eb',
    cta: 'En savoir plus',
    href: '#association',
  },
  {
    icon: '🎓',
    tag: 'Projet 04',
    title: 'Formations',
    desc: 'Nous aidons les jeunes à se développer grâce à nos programmes de formations. Avec nos cours, ils acquièrent des compétences qui les prépareront pour l\'avenir. 100 jeunes formés par an.',
    color: '#7c3aed',
    cta: 'Participer maintenant',
    href: '#association',
  },
]

const ASSOCIATION_STATS = [
  { value: '500k€',  label: 'Euros collectés',              icon: '💰' },
  { value: '5',      label: 'Pays en Afrique',              icon: '🌍' },
  { value: '4 000',  label: 'Réfugiés soutenus',            icon: '🤲' },
  { value: '100',    label: 'Jeunes formés par an',         icon: '🎓' },
  { value: '1er',    label: 'Éco-village inclusif Marrakech', icon: '🌿' },
  { value: '10T',    label: 'Tonnes de plastique collectées', icon: '♻️' },
]

const TEAM = [
  { name: 'Alexandre BAROUZDIN', role: 'Fondateur & CEO', img: '/images/team/alexandre-barouzdin.jpg' },
  { name: 'David KHADOCH',       role: 'Directeur Opérationnel', img: '/images/team/david-khadoch.jpg' },
  { name: 'Moussa HASSIMI',      role: 'Expert Terrain', img: '/images/team/moussa-hassimi.jpg' },
  { name: 'Ilyes ATHAMI',        role: 'Développement', img: '/images/team/ilyes-athami.jpg' },
  { name: 'Matthew CRITCHLOW',   role: 'International', img: '/images/team/matthew-critchlow.jpg' },
  { name: 'Florian PRADELLE',    role: 'Finance & Stratégie', img: '/images/team/florian-pradelle.jpg' },
]

const ROADMAP = [
  { year: '2024', status: 'done',    label: 'Création du groupe COMPACK', icon: '✅' },
  { year: '2025', status: 'done',    label: 'Acquisition terrain 7ha Marrakech + lancement études', icon: '✅' },
  { year: 'T1 2026', status: 'active', label: 'Début construction SOLATERA Phase 1 (30 dômes)', icon: '🔨' },
  { year: 'T2 2026', status: 'active', label: 'Premier puits de carbone certifié Puro.earth', icon: '🔨' },
  { year: 'T3 2026', status: 'future', label: 'Ouverture SOLATERA — 30 premiers dômes', icon: '🏠' },
  { year: '2027',    status: 'future', label: 'SOLATERA Phase 2 (60 dômes) + MARKET launch', icon: '🚀' },
  { year: '2028',    status: 'future', label: 'Déploiement 2e éco-village + candidature UNESCO', icon: '🌍' },
  { year: '2030',    status: 'future', label: 'Réseau SOLATERA panafricain — Grande Muraille Verte', icon: '🌟' },
]

const STATS = [
  { value: '7 ha',    label: 'Terrain SOLATERA',           icon: '🗺️', color: '#c4623d' },
  { value: '60',      label: 'Éco-dômes à Marrakech',      icon: '🏠', color: '#c4623d' },
  { value: '14 km',   label: 'du centre de Marrakech',     icon: '📍', color: '#c4623d' },
  { value: '4 500T',  label: 'CO₂ séquestré/an',           icon: '♻️', color: '#1d6e4a' },
  { value: '2,6 M€',  label: 'Revenus Carbon 2029',        icon: '💰', color: '#1d6e4a' },
  { value: '8 000 km',label: 'Grande Muraille Verte',      icon: '🌍', color: '#1d6e4a' },
  { value: '300K',    label: 'Appareils reconditionnés',   icon: '📱', color: '#2563eb' },
  { value: '20',      label: 'Ruches — 400L miel/an',      icon: '🍯', color: '#d4a574' },
]

const PARTNERS = [
  { name: 'Puro.earth',     sub: 'Certification crédits carbone', icon: '📜' },
  { name: 'Grade Zero',     sub: 'Reconditionnement numérique',   icon: '📱' },
  { name: 'UNESCO',         sub: 'Ambition reconnaissance',       icon: '🏛️' },
  { name: 'Great Green Wall', sub: 'Projet panafricain 8000 km', icon: '🌍' },
  { name: '3000 EcoMen',    sub: 'Construction superadobe',       icon: '🏗️' },
  { name: 'NASA / ONU',     sub: 'Validation tech superadobe',    icon: '🚀' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image src="/images/hero/hero-marrakech.jpg" alt="COMPACK Group" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e0b]/75 via-[#1a0e0b]/55 to-[#1a0e0b]/85" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs tracking-[0.4em] uppercase text-[#d4a574] font-semibold mb-4">Groupe COMPACK · Fondé 2024</motion.p>
            <motion.h1 variants={fadeUp} className="text-6xl sm:text-9xl font-black text-white tracking-tight leading-none mb-2">COMPACK</motion.h1>
            <motion.p variants={fadeUp} className="text-lg sm:text-2xl text-[#d4a574] font-light tracking-widest mb-6">ÉCOLOGIE · INCLUSION · CARBONE</motion.p>
            <motion.div variants={fadeUp} className="h-px w-28 bg-[#c4623d] mx-auto mb-8" />
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              Un groupe qui prouve qu'il existe une troisième voie — celle de l'Alliance entre progrès, nature et impact humain. 5 piliers. Un seul objectif : construire le monde de demain.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/solatera" className="bg-[#c4623d] hover:bg-[#d4754f] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl">🌿 SOLATERA</Link>
              <Link href="/carbon"   className="bg-[#1d6e4a] hover:bg-[#27ae60] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl">🌲 CARBON</Link>
              <a href="#vision"      className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm">Notre Vision ↓</a>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2.5 bg-white/50 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ══ VISION / INTRO ════════════════════════════════════ */}
      <section id="vision" className="py-24 px-6 bg-[#1a0e0b]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-[#c4623d] font-semibold mb-6">Notre Raison d'Être</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-white leading-tight mb-8">
              "Plus qu'un groupe, <span className="text-[#d4a574]">un mouvement</span>"
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto mb-12">
              Trop souvent, on nous demande de choisir : le progrès ou la nature ? La technologie ou la tradition ? La performance économique ou l'impact social ? <strong className="text-white">COMPACK est né pour prouver qu'il existe une troisième voie.</strong>
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: '🌿', title: 'Éco-construction', desc: 'Dômes superadobe — technique validée par la NASA et l\'ONU. Résistants aux séismes, 100% locaux.' },
                { icon: '♻️', title: 'Économie circulaire', desc: 'Déchets → ressources. Plastique → mobilier. Forêts brûlées → crédits carbone. Rien ne se perd.' },
                { icon: '🤝', title: 'Impact social réel', desc: 'Formation, inclusion, santé, éducation. Chaque activité génère un bénéfice direct pour les communautés.' },
              ].map(c => (
                <motion.div key={c.title} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-7 text-left hover:bg-white/8 transition-colors">
                  <span className="text-4xl block mb-4">{c.icon}</span>
                  <h3 className="text-white font-black mb-2">{c.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ 5 PILIERS ═════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.3em] uppercase text-[#c4623d] font-semibold mb-3">Notre Écosystème</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-[#1a0e0b] text-center mb-3">Les 5 Piliers COMPACK</motion.h2>
            <motion.p variants={fadeUp} className="text-center text-[#2d3436]/60 mb-14 max-w-xl mx-auto">Cinq entités complémentaires, une seule gouvernance, un seul impact.</motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {PILIERS.map((p) => (
                <motion.div key={p.name} variants={fadeUp}>
                  <a href={p.href} className="group block rounded-2xl p-7 border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer" style={{ background: p.bg }}>
                    <span className="text-5xl block mb-4">{p.icon}</span>
                    <div className="font-black text-base tracking-wide mb-1" style={{ color: p.color }}>{p.name}</div>
                    <div className="text-xs text-[#2d3436]/60 leading-snug">{p.sub}</div>
                    <div className="mt-4 text-xs font-bold group-hover:gap-2 flex items-center gap-1 transition-all" style={{ color: p.color }}>
                      En savoir + <span>→</span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SOLATERA ══════════════════════════════════════════ */}
      <section id="solatera" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-[#c4623d] font-semibold mb-2">Pilier 01</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-[#1a0e0b] mb-3">SOLATERA</motion.h2>
            <motion.p variants={fadeUp} className="text-[#c4623d] font-semibold mb-3">Village Écologique Inclusif · Marrakech, Maroc · Livraison 2026</motion.p>
            <motion.p variants={fadeUp} className="text-[#2d3436]/70 leading-relaxed mb-12 max-w-3xl">
              SOLATERA est un éco-village touristique de 7 hectares à 14 km de Marrakech. 60 dômes en superadobe, énergie 100% solaire, eau purifiée par osmose inverse. Un lieu de vie, de bien-être et d'impact social où se mêlent vacances, formation et solidarité.
            </motion.p>

            {/* Domes */}
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {SOLATERA_DOMES.map((d) => (
                <motion.div key={d.id} variants={fadeUp} className="group rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-[#f5f1e8]">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={d.image} alt={d.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-3 right-3 bg-[#c4623d] text-white text-xs font-bold px-3 py-1.5 rounded-full">{d.price}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-[#1a0e0b] mb-1">{d.title}</h3>
                    <p className="text-xs text-[#c4623d] font-semibold mb-3">{d.capacity} · {d.size}</p>
                    <ul className="space-y-1">
                      {d.features.map(f => (
                        <li key={f} className="text-xs text-[#2d3436]/60 flex items-center gap-2">
                          <span className="text-[#c4623d]">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Infrastructure */}
            <motion.div variants={fadeUp} className="mb-10">
              <h3 className="font-black text-[#1a0e0b] text-lg mb-5">Infrastructures complètes</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SOLATERA_INFRA.map(item => (
                  <div key={item.label} className="flex items-center gap-3 bg-[#f5f1e8] rounded-xl p-4 border border-black/5">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-[#1a0e0b] leading-snug">{item.label}</div>
                      <div className="text-xs text-[#2d3436]/50">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Project specs */}
            <motion.div variants={fadeUp} className="bg-[#c4623d]/8 border border-[#c4623d]/20 rounded-2xl p-6 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { v: '7 ha', l: 'Terrain acquis' }, { v: '60', l: 'Éco-dômes' },
                { v: '14 km', l: 'Centre Marrakech' }, { v: 'Fin 2026', l: 'Livraison' },
              ].map(s => (
                <div key={s.l}>
                  <div className="text-2xl font-black text-[#c4623d]">{s.v}</div>
                  <div className="text-xs text-[#2d3436]/60 mt-0.5">{s.l}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/solatera" className="inline-flex items-center gap-2 bg-[#c4623d] hover:bg-[#d4754f] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                Découvrir SOLATERA en détail →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ CARBON ════════════════════════════════════════════ */}
      <section id="carbon" className="py-24 px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-[#1d6e4a] font-semibold mb-2">Pilier 02</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-[#1a0e0b] mb-3">COMPACK CARBON</motion.h2>
            <motion.p variants={fadeUp} className="text-[#1d6e4a] font-semibold mb-3">Crédits Carbone Certifiés · Chefchaouen, Maroc · Certifié Puro.earth</motion.p>
            <motion.p variants={fadeUp} className="text-[#2d3436]/70 leading-relaxed mb-12 max-w-3xl">
              COMPACK Carbon restaure les forêts brûlées via le biochar et la plantation de Paulownia. Chaque tonne de CO₂ séquestrée devient un crédit carbone certifié Puro.earth, vendable à des entreprises cherchant à compenser leurs émissions.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
              {/* Photo */}
              <motion.div variants={fadeUp} className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/carbon/paulownia-panorama-champ.jpg" alt="Paulownia Carbon" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#164f36]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white font-black text-xl mb-1">Paulownia Phénix</div>
                  <div className="text-white/70 text-sm">Croissance record : 8–10m en 18 mois · Absorption CO₂ maximale</div>
                </div>
              </motion.div>

              {/* Revenue projection */}
              <motion.div variants={fadeUp} className="flex flex-col justify-center">
                <h3 className="font-black text-[#1a0e0b] text-lg mb-5">Projection des revenus</h3>
                <div className="space-y-3">
                  {CARBON_REVENUS.map(r => (
                    <div key={r.year} className="flex items-center gap-4">
                      <div className="w-12 text-xs font-bold text-[#1d6e4a] shrink-0">{r.year}</div>
                      <div className="flex-1 bg-[#1d6e4a]/10 rounded-full h-7 relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${r.pct}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          viewport={{ once: true }}
                          className="h-full bg-[#1d6e4a] rounded-full"
                        />
                      </div>
                      <div className="w-28 text-xs font-bold text-[#1d6e4a] text-right shrink-0">{r.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#2d3436]/50 mt-4">Revenus consolidés Biochar + Crédits Carbone + Reboisement</p>
              </motion.div>
            </div>

            {/* Sources de revenus */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {CARBON_SOURCES.map(s => (
                <div key={s.label} className="bg-white rounded-2xl p-5 border border-black/5 hover:shadow-md transition-all duration-300">
                  <span className="text-3xl block mb-3">{s.icon}</span>
                  <div className="font-black text-sm text-[#1a0e0b] mb-2 leading-snug">{s.label}</div>
                  <div className="text-xs text-[#2d3436]/60 mb-1">{s.volume} · {s.prix}</div>
                  <div className="text-sm font-black text-[#1d6e4a]">{s.revenu}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#1d6e4a]/8 border border-[#1d6e4a]/20 rounded-2xl p-6 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { v: '4 500T', l: 'CO₂ séquestré/an' }, { v: 'Puro.earth', l: 'Certification' },
                { v: '2,6 M€', l: 'Revenus 2029' }, { v: '250 ha', l: 'Crédits biodiversité' },
              ].map(s => (
                <div key={s.l}>
                  <div className="text-xl font-black text-[#1d6e4a]">{s.v}</div>
                  <div className="text-xs text-[#2d3436]/60 mt-0.5">{s.l}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/carbon" className="inline-flex items-center gap-2 bg-[#1d6e4a] hover:bg-[#27ae60] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                Découvrir CARBON en détail →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ MARKET ════════════════════════════════════════════ */}
      <section id="market" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.3em] uppercase text-[#d4a574] font-semibold mb-3">Pilier 03</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-[#1a0e0b] text-center mb-3">COMPACK Market</motion.h2>
            <motion.p variants={fadeUp} className="text-center text-[#2d3436]/60 mb-14 max-w-xl mx-auto">Les produits issus de nos éco-villages, récoltés au fil des saisons — bio, locaux, traçables et certifiés.</motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {MARKET_PRODUCTS.map((s) => (
                <motion.div key={s.season} variants={fadeUp}>
                  <div className="rounded-2xl p-6 border border-black/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#f5f1e8]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{s.icon}</span>
                      <div className="font-black text-[#1a0e0b]">{s.season}</div>
                    </div>
                    <ul className="space-y-2">
                      {s.products.map(p => (
                        <li key={p} className="text-sm text-[#2d3436]/70 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="bg-[#d4a574]/10 border border-[#d4a574]/30 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <div className="font-black text-[#1a0e0b] mb-1">🛒 Marketplace en développement</div>
                <p className="text-sm text-[#2d3436]/60">Vente directe producteur → consommateur, zéro intermédiaire. Livraison depuis les éco-villages COMPACK.</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block bg-[#d4a574] text-white font-bold px-6 py-3 rounded-full text-sm">Bientôt disponible</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ ASSOCIATION ═══════════════════════════════════════ */}
      <section id="association" className="py-24 px-6 bg-[#1a0e0b]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

            {/* Header */}
            <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.3em] uppercase text-[#c4623d] font-semibold mb-3">Pilier 04</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white text-center mb-4">L'Association COMPACK</motion.h2>
            <motion.p variants={fadeUp} className="text-center text-[#d4a574] font-semibold text-lg mb-3">
              "Projets positifs et innovants pour les humains et la nature !"
            </motion.p>
            <motion.p variants={fadeUp} className="text-center text-white/50 mb-6 max-w-xl mx-auto">
              L'association COMPACK porte actuellement quatre projets écologiques et solidaires.
            </motion.p>

            {/* Bouton don */}
            <motion.div variants={fadeUp} className="flex justify-center mb-16">
              <a
                href="mailto:contact@compack.io?subject=Don COMPACK"
                className="inline-flex items-center gap-2 bg-[#c4623d] hover:bg-[#d4754f] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                💝 Faire un don
              </a>
            </motion.div>

            {/* 4 Projets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {ASSOCIATION_PROJETS.map((p) => (
                <motion.div key={p.title} variants={fadeUp}>
                  <div className="bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-3xl p-7 h-full transition-all duration-300 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{p.icon}</span>
                      <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: p.color, background: p.color + '22' }}>
                        {p.tag}
                      </span>
                    </div>
                    <h3 className="text-white font-black text-lg mb-3 leading-snug">{p.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>
                    <a
                      href={p.href}
                      className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-200 hover:gap-3"
                      style={{ color: p.color }}
                    >
                      {p.cta} →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chiffres clés */}
            <motion.div variants={fadeUp} className="mb-14">
              <h3 className="text-white font-black text-2xl text-center mb-10">COMPACK en quelques chiffres</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {ASSOCIATION_STATS.map((s) => (
                  <div key={s.label} className="text-center bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors">
                    <span className="text-3xl block mb-2">{s.icon}</span>
                    <div className="text-2xl font-black text-[#c4623d] leading-none mb-1">{s.value}</div>
                    <div className="text-xs text-white/50 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Témoignage */}
            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">
              <div className="text-5xl text-[#c4623d] mb-4">"</div>
              <blockquote className="text-white text-xl font-light italic leading-relaxed mb-5 max-w-2xl">
                COMPACK a transformé ma vie. Grâce à leur soutien, j'ai trouvé un nouvel espoir.
              </blockquote>
              <p className="text-white/40 text-sm font-semibold">— Amina, Réfugiée</p>
            </motion.div>

            {/* Contact & Legal */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-white font-black mb-4">Nous contacter</h4>
                <div className="space-y-2 text-sm text-white/60">
                  <div>📍 15 rue Réaumur, 75003 Paris</div>
                  <div>📞 +33 7 88 31 58 52</div>
                  <div>✉️ contact@compack.io</div>
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">Facebook</a>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-white font-black mb-4">Organisme caritatif</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { v: 'RNA', d: 'W751154531' },
                    { v: 'SIREN', d: '101474419' },
                    { v: 'Statut', d: 'Loi 1901' },
                    { v: 'Siège', d: 'Paris, France' },
                  ].map(i => (
                    <div key={i.v} className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-white/40 text-xs mb-0.5">{i.v}</div>
                      <div className="text-white font-bold text-sm">{i.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ══ HOLDING & ORGANIGRAMME ════════════════════════════ */}
      <section id="holding" className="py-24 px-6 bg-[#f5f1e8]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.3em] uppercase text-[#7c3aed] font-semibold mb-3">Pilier 05</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-[#1a0e0b] text-center mb-3">COMPACK Holding</motion.h2>
            <motion.p variants={fadeUp} className="text-center text-[#2d3436]/60 mb-14 max-w-xl mx-auto">Gouvernance unifiée — déploiement panafricain. Une holding française, 4 filiales opérationnelles.</motion.p>
            <motion.div variants={fadeUp} className="flex flex-col items-center">
              {/* Top */}
              <div className="bg-[#1a0e0b] text-white rounded-2xl px-10 py-5 shadow-xl text-center mb-0">
                <div className="font-black text-xl tracking-wide">COMPACK HOLDING</div>
                <div className="text-white/50 text-xs mt-1">Société Mère · Paris, France</div>
              </div>
              {/* Connector */}
              <div className="w-px h-8 bg-[#1a0e0b]/20" />
              <div className="w-full max-w-3xl h-px bg-[#1a0e0b]/15" />
              {/* Children */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl mt-0">
                {[
                  { name: 'SOLATERA SAS', color: '#c4623d', sub: 'Tourisme · Éco-village', icon: '🌿', detail: 'Marrakech · 7 ha' },
                  { name: 'CARBON SAS',   color: '#1d6e4a', sub: 'Crédits carbone',        icon: '🌲', detail: 'Chefchaouen · Puro.earth' },
                  { name: 'MARKET SAS',   color: '#d4a574', sub: 'Marketplace bio',         icon: '🛒', detail: 'E-commerce · Saisons' },
                  { name: 'ASSO COMPACK', color: '#2563eb', sub: 'Impact social · Loi 1901',icon: '🤝', detail: 'RNA W751154531' },
                ].map((node) => (
                  <div key={node.name} className="flex flex-col items-center">
                    <div className="w-px h-6 bg-[#1a0e0b]/15" />
                    <div className="rounded-2xl p-5 text-center text-white shadow-md w-full border-2 border-white" style={{ background: node.color }}>
                      <span className="text-2xl block mb-1">{node.icon}</span>
                      <div className="font-black text-xs leading-snug">{node.name}</div>
                      <div className="text-white/70 text-xs mt-1 leading-snug">{node.sub}</div>
                      <div className="text-white/50 text-xs mt-2 font-mono">{node.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center text-sm text-[#2d3436]/50 max-w-lg">
                Structure juridique française — déploiement Afrique du Nord & Subsaharienne, en partenariat avec les institutions locales, l'UNESCO et le programme Grande Muraille Verte.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ STATS GLOBALES ════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-[#1a0e0b] text-center mb-14">COMPACK en chiffres</motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {STATS.map((s) => (
                <motion.div key={s.label} variants={fadeUp}>
                  <div className="text-center bg-[#f5f1e8] rounded-2xl p-6 border border-black/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl mb-3">{s.icon}</div>
                    <div className="text-2xl sm:text-3xl font-black leading-none mb-2" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-xs text-[#2d3436]/60 leading-snug">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ GRANDE MURAILLE VERTE ════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1d6e4a]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <p className="text-xs tracking-[0.3em] uppercase text-[#d4a574] font-semibold mb-3">Vision Panafricaine</p>
              <h2 className="text-4xl font-black text-white mb-4">Grande Muraille Verte</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                SOLATERA s'intègre dans le projet <strong className="text-white">GREAT GREEN WALL</strong> — un projet panafricain qui s'étend sur plus de <strong className="text-[#d4a574]">8 000 km</strong> du Sénégal à Djibouti, pour lutter contre la désertification et le changement climatique.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Les villages SOLATERA seront des <strong className="text-white">camps de base</strong> : support logistique, formation en gestion durable des terres, énergie renouvelable et accès à l'eau pour les populations locales.
              </p>
              <div className="flex flex-wrap gap-3">
                {['🌍 Sénégal → Djibouti', '8 000 km', '11 pays', 'Camp de base SOLATERA'].map(t => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-white/15 text-white font-medium">{t}</span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="relative h-72 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/carbon/Reboisement-des-zones.jpg" alt="Grande Muraille Verte" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#1d6e4a]/40" />
              <div className="absolute bottom-6 left-6">
                <div className="text-white font-black text-lg">Reboisement actif</div>
                <div className="text-white/70 text-sm">Maroc · Programme national</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ ÉQUIPE ════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.3em] uppercase text-[#c4623d] font-semibold mb-3">Qui sommes-nous</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-[#1a0e0b] text-center mb-3">L'Équipe Fondatrice</motion.h2>
            <motion.p variants={fadeUp} className="text-center text-[#2d3436]/60 mb-14 max-w-xl mx-auto">
              Un collectif d'entrepreneurs chevronnés — 25+ ans d'expérience dans l'événementiel, l'innovation et la création de communautés.
            </motion.p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {TEAM.map((m) => (
                <motion.div key={m.name} variants={fadeUp}>
                  <div className="text-center group">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3 bg-[#e8e2d6]">
                      <Image src={m.img} alt={m.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="font-black text-[#1a0e0b] text-xs leading-snug">{m.name}</div>
                    <div className="text-[#c4623d] text-xs mt-0.5">{m.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-10 text-center text-sm text-[#2d3436]/50">
              Experts en conception de projets à grande échelle · Gestion de clubs emblématiques (Metropolis, Duplex) · Organisation de festivals · Créateurs du phénomène Tecktonik®
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ ROADMAP / TIMELINE ════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.3em] uppercase text-[#c4623d] font-semibold mb-3">Calendrier</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-[#1a0e0b] text-center mb-14">Roadmap COMPACK</motion.h2>
            <div className="relative">
              <div className="absolute left-16 sm:left-1/2 top-0 bottom-0 w-px bg-[#1a0e0b]/10 -translate-x-px" />
              <div className="space-y-8">
                {ROADMAP.map((step, i) => (
                  <motion.div key={step.year} variants={fadeUp}
                    className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'} pl-24 sm:pl-0`}>
                      <div className={`inline-block rounded-2xl px-5 py-4 ${
                        step.status === 'done'   ? 'bg-[#1d6e4a]/10 border border-[#1d6e4a]/20' :
                        step.status === 'active' ? 'bg-[#c4623d]/10 border border-[#c4623d]/20' :
                                                   'bg-[#f5f1e8] border border-black/5'}`}>
                        <div className={`text-xs font-bold mb-1 ${
                          step.status === 'done' ? 'text-[#1d6e4a]' : step.status === 'active' ? 'text-[#c4623d]' : 'text-[#2d3436]/40'}`}>
                          {step.year}
                        </div>
                        <div className="text-sm font-semibold text-[#1a0e0b]">{step.label}</div>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-14 sm:left-1/2 sm:-translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-base shrink-0 border-4 border-white shadow-md bg-white">
                      {step.icon}
                    </div>
                    <div className="flex-1 hidden sm:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ PARTENAIRES & CERTIFICATIONS ═════════════════════ */}
      <section className="py-20 px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.3em] uppercase text-[#c4623d] font-semibold mb-3">Partenaires & Certifications</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl font-black text-[#1a0e0b] text-center mb-12">Ils soutiennent COMPACK</motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {PARTNERS.map((p) => (
                <motion.div key={p.name} variants={fadeUp}>
                  <div className="bg-white rounded-2xl p-5 text-center border border-black/5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                    <span className="text-3xl block mb-2">{p.icon}</span>
                    <div className="font-black text-xs text-[#1a0e0b] mb-1">{p.name}</div>
                    <div className="text-xs text-[#2d3436]/50 leading-snug">{p.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ PHILOSOPHIE ═══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a0e0b]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-[#c4623d] font-semibold mb-6">Notre Philosophie</motion.p>
            <motion.blockquote variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white leading-tight mb-8">
              "Ici, les murs sont en terre, mais l'eau est purifiée par la science. Ici, le soleil alimente nos foyers, mais c'est la chaleur humaine qui illumine nos vies."
            </motion.blockquote>
            <motion.div variants={fadeUp} className="h-px w-24 bg-[#c4623d] mx-auto mb-8" />
            <motion.p variants={fadeUp} className="text-base text-white/60 leading-relaxed max-w-2xl mx-auto mb-4">
              COMPACK est né pour prouver qu'il existe une troisième voie — celle de l'Alliance. Nos forêts brûlées deviennent des puits de carbone. Nos déchets deviennent ressources. Nos villages deviennent des laboratoires vivants pour les communautés de demain.
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm text-[#d4a574] font-semibold">— Alexandre BAROUZDIN, Fondateur COMPACK</motion.p>
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4 justify-center">
              <Link href="/solatera" className="bg-[#c4623d] hover:bg-[#d4754f] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">🌿 Voir SOLATERA</Link>
              <Link href="/carbon"   className="bg-[#1d6e4a] hover:bg-[#27ae60] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">🌲 Voir CARBON</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ CONTACT ═══════════════════════════════════════════ */}
      <section id="contact" className="py-24 px-6 bg-[#1a0e0b]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.3em] uppercase text-[#c4623d] font-semibold mb-3">
              Nous contacter
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white text-center mb-4">
              Parlons de votre projet
            </motion.h2>
            <motion.p variants={fadeUp} className="text-center text-white/50 mb-14 max-w-xl mx-auto text-lg">
              Partenariat, investissement, presse, don — notre équipe répond sous 24h.
            </motion.p>

            {/* Info cards + Form */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Left — info */}
              <motion.div variants={fadeUp} className="lg:col-span-1 space-y-5">
                {[
                  { icon: '✉️', label: 'Email', value: 'contact@compack.io', href: 'mailto:contact@compack.io' },
                  { icon: '📞', label: 'Téléphone', value: '+33 7 88 31 58 52', href: 'tel:+33788315852' },
                  { icon: '📍', label: 'Paris', value: '15 rue Réaumur, 75003', href: null },
                  { icon: '🌍', label: 'Marrakech', value: 'Maroc — SOLATERA', href: null },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-white font-semibold text-sm hover:text-[#c4623d] transition-colors">{item.value}</a>
                      ) : (
                        <div className="text-white font-semibold text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Social */}
                <div className="flex gap-3 pt-2">
                  {[
                    { label: 'Instagram', icon: '📸' },
                    { label: 'LinkedIn', icon: '💼' },
                    { label: 'Facebook', icon: '👥' },
                  ].map(s => (
                    <a key={s.label} href="#" className="flex-1 flex flex-col items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 transition-all cursor-pointer">
                      <span className="text-lg">{s.icon}</span>
                      <span className="text-white/40 text-xs">{s.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Right — form */}
              <motion.div variants={fadeUp} className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">
                <ContactForm />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════ */}
      <footer className="bg-[#120a07] pt-16 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Nav cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            <Link href="/solatera" className="group flex items-center gap-5 bg-white/5 hover:bg-[#c4623d]/20 border border-white/10 hover:border-[#c4623d]/40 rounded-2xl p-6 transition-all duration-300">
              <span className="text-4xl">🌿</span>
              <div>
                <div className="text-white font-black text-lg">SOLATERA</div>
                <div className="text-white/50 text-sm">Village Écologique · Marrakech · 26 sections</div>
              </div>
              <span className="ml-auto text-[#c4623d] text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="/carbon" className="group flex items-center gap-5 bg-white/5 hover:bg-[#1d6e4a]/20 border border-white/10 hover:border-[#1d6e4a]/40 rounded-2xl p-6 transition-all duration-300">
              <span className="text-4xl">🌲</span>
              <div>
                <div className="text-white font-black text-lg">CARBON</div>
                <div className="text-white/50 text-sm">Crédits Carbone · Chefchaouen · 18 sections</div>
              </div>
              <span className="ml-auto text-[#1d6e4a] text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-white/10 pt-8">
            <div>
              <div className="text-white font-black text-2xl mb-1">COMPACK<span className="text-[#c4623d]">®</span></div>
              <div className="text-white/40 text-sm">contact@compack.io · +33 7 88 31 58 52</div>
              <div className="text-white/30 text-xs mt-1">Marrakech, Maroc · Paris, France</div>
              <div className="text-white/20 text-xs mt-1">RNA : W751154531 · SIREN : 101474419</div>
            </div>
            <div className="text-white/30 text-xs text-right">
              <div className="text-white/50 font-semibold mb-2">www.compack.io</div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 justify-end mb-2">
                <span className="hover:text-white/60 cursor-pointer transition-colors">Mentions légales</span>
                <span className="hover:text-white/60 cursor-pointer transition-colors">Confidentialité</span>
                <span className="hover:text-white/60 cursor-pointer transition-colors">CGV</span>
              </div>
              <div>© {new Date().getFullYear()} COMPACK Group · Tous droits réservés</div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  )
}
