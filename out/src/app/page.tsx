'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

/* ─── animation variants ─── */
const fadeUp   = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } }
const fadeIn   = { hidden: { opacity: 0 },         visible: { opacity: 1, transition: { duration: 0.8 } } }
const stagger  = { visible: { transition: { staggerChildren: 0.12 } } }
const scaleIn  = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }

/* ─── data ─── */
const PILIERS = [
  { icon: '🌿', name: 'SOLATERA',    sub: 'Éco-village & Tourisme',     color: '#c4623d', border: 'rgba(196,98,61,0.3)',  href: '/solatera' },
  { icon: '🌲', name: 'CARBON',      sub: 'Crédits Carbone & Forêts',   color: '#1d6e4a', border: 'rgba(29,110,74,0.3)',  href: '/carbon'   },
  { icon: '🛒', name: 'MARKET',      sub: 'Marketplace Saisonnière',    color: '#d4a574', border: 'rgba(212,165,116,0.3)',href: '#market'   },
  { icon: '🤝', name: 'ASSOCIATION', sub: 'Impact Social & Éducation',  color: '#2563eb', border: 'rgba(37,99,235,0.3)',  href: '#association' },
  { icon: '🏛️', name: 'HOLDING',    sub: 'Gouvernance & Stratégie',    color: '#7c3aed', border: 'rgba(124,58,237,0.3)', href: '#holding'  },
]

const SOLATERA_DOMES = [
  { id: 'studio',   title: 'Dôme Studio',   capacity: '2 personnes', size: '35 m²', price: '150€', image: '/images/architecture/ecodomes-dakhla-1.jpg',     features: ['Terrasse privée', 'Salle de bain luxe', 'WiFi & TV', 'Climatisation'] },
  { id: 'famille',  title: 'Dôme Famille',  capacity: '4–6 personnes', size: '65 m²', price: '280€', image: '/images/ocre-domes/domes-ocre-village-1.jpg',    features: ['2 chambres + salon', 'Cuisine équipée', '2 salles de bain', 'Vue jardin'] },
  { id: 'prestige', title: 'Dôme Prestige', capacity: '2 personnes', size: '50 m²', price: '350€', image: '/images/white-domes/domes-white-lazy-1.jpg',      features: ['Jacuzzi privé', 'Vue 360°', 'Service 24h/24', 'Minibar inclus'] },
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
  { year: '2026', label: '1,3 M€', pct: 50 },
  { year: '2027', label: '1,8 M€', pct: 68 },
  { year: '2028', label: '2,2 M€', pct: 83 },
  { year: '2029', label: '2,6 M€', pct: 100 },
  { year: '2030', label: '2,6 M€', pct: 100 },
]

const CARBON_SOURCES = [
  { label: 'Vente Biochar',           volume: '1 500T',    prix: '400€/T',   revenu: '600 000€', icon: '⚗️' },
  { label: 'Crédits Carbone Biochar', volume: '4 500 CO₂', prix: '158€/CO₂', revenu: '711 000€', icon: '📜' },
  { label: 'Enfouissement bois',      volume: '3 000 CO₂', prix: '158€/CO₂', revenu: '474 000€', icon: '🌳' },
  { label: 'Reboisement',             volume: '2 500 CO₂', prix: '158€/CO₂', revenu: '395 000€', icon: '🌲' },
]

const MARKET_PRODUCTS = [
  { season: 'Printemps', icon: '🌸', color: '#f472b6', bg: 'rgba(244,114,182,0.08)', products: ['Miel de fleurs', 'Plants bio', 'Herbes aromatiques', 'Légumes primeurs', "Bougies cire d'abeille"] },
  { season: 'Été',       icon: '☀️', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)',  products: ['Tomates bio', 'Courgettes', 'Figues fraîches', 'Eau purifiée', 'Huiles essentielles'] },
  { season: 'Automne',   icon: '🍂', color: '#c4623d', bg: 'rgba(196,98,61,0.08)',   products: ['Olives & huile', 'Dattes', 'Courges', 'Conserves maison', 'Savons naturels'] },
  { season: 'Hiver',     icon: '❄️', color: '#2563eb', bg: 'rgba(37,99,235,0.08)',   products: ['Agrumes bio', "Miel d'hiver", 'Tisanes séchées', 'Biochar amendement', 'Mobilier recyclé'] },
]

const ASSOCIATION_PROJETS = [
  { icon: '🌿', tag: 'Projet 01', title: 'Éco-Village Inclusif SOLATERA', desc: 'Éco-village de 7 hectares à Marrakech, accessible à tous. Un modèle unique d\'inclusivité et de respect de la nature.', color: '#c4623d', href: '/solatera' },
  { icon: '♻️', tag: 'Projet 02', title: 'Écologie & Recyclage',          desc: 'Économie circulaire, zéro plastique, agriculture durable, régénération forestière via Paulownias.', color: '#1d6e4a', href: '/carbon' },
  { icon: '🤲', tag: 'Projet 03', title: 'Aide aux Réfugiés',             desc: 'Produits de première nécessité, apprentissage du crochet, concerts et moments de partage.', color: '#2563eb', href: '#association' },
  { icon: '🎓', tag: 'Projet 04', title: 'Formations Jeunes',             desc: 'Programmes de formation pour acquérir des compétences d\'avenir. 100 jeunes formés par an.', color: '#7c3aed', href: '#association' },
]

const ASSOCIATION_STATS = [
  { value: '500k€', label: 'Euros collectés', icon: '💰' },
  { value: '5',     label: 'Pays en Afrique', icon: '🌍' },
  { value: '4 000', label: 'Réfugiés soutenus', icon: '🤲' },
  { value: '100',   label: 'Jeunes formés/an', icon: '🎓' },
  { value: '1er',   label: 'Éco-village inclusif Marrakech', icon: '🌿' },
  { value: '10T',   label: 'Tonnes plastique collectées', icon: '♻️' },
]

const TEAM = [
  { name: 'Alexandre BAROUZDIN', role: 'Fondateur & CEO',       img: '/images/team/alexandre-barouzdin.jpg' },
  { name: 'David KHADOCH',       role: 'Directeur Opérationnel',img: '/images/team/david-khadoch.jpg' },
  { name: 'Moussa HASSIMI',      role: 'Expert Terrain',        img: '/images/team/moussa-hassimi.jpg' },
  { name: 'Ilyes ATHAMI',        role: 'Développement',         img: '/images/team/ilyes-athami.jpg' },
  { name: 'Matthew CRITCHLOW',   role: 'International',         img: '/images/team/matthew-critchlow.jpg' },
  { name: 'Florian PRADELLE',    role: 'Finance & Stratégie',   img: '/images/team/florian-pradelle.jpg' },
]

const ROADMAP = [
  { year: '2024',    status: 'done',   label: 'Création du groupe COMPACK', icon: '✅' },
  { year: '2025',    status: 'done',   label: 'Acquisition terrain 7ha Marrakech + lancement études', icon: '✅' },
  { year: 'T1 2026', status: 'active', label: 'Début construction SOLATERA Phase 1 (30 dômes)', icon: '🔨' },
  { year: 'T2 2026', status: 'active', label: 'Premier puits de carbone certifié Puro.earth', icon: '🔨' },
  { year: 'T3 2026', status: 'future', label: 'Ouverture SOLATERA — 30 premiers dômes', icon: '🏠' },
  { year: '2027',    status: 'future', label: 'SOLATERA Phase 2 (60 dômes) + MARKET launch', icon: '🚀' },
  { year: '2028',    status: 'future', label: 'Déploiement 2e éco-village + candidature UNESCO', icon: '🌍' },
  { year: '2030',    status: 'future', label: 'Réseau SOLATERA panafricain — Grande Muraille Verte', icon: '🌟' },
]

const STATS = [
  { value: '7 ha',   label: 'Terrain SOLATERA',       icon: '🗺️', color: '#c4623d' },
  { value: '60',     label: 'Éco-dômes à Marrakech',  icon: '🏠', color: '#c4623d' },
  { value: '4 500T', label: 'CO₂ séquestré/an',       icon: '♻️', color: '#1d6e4a' },
  { value: '2,6 M€', label: 'Revenus Carbon 2029',    icon: '💰', color: '#1d6e4a' },
  { value: '4 000',  label: 'Réfugiés soutenus',      icon: '🤲', color: '#2563eb' },
  { value: '8 000km',label: 'Grande Muraille Verte',  icon: '🌍', color: '#1d6e4a' },
]

const PARTNERS = [
  { name: 'Puro.earth',     sub: 'Certification crédits carbone', icon: '📜' },
  { name: 'Grade Zero',     sub: 'Reconditionnement numérique',   icon: '📱' },
  { name: 'UNESCO',         sub: 'Ambition reconnaissance',       icon: '🏛️' },
  { name: 'Great Green Wall', sub: 'Projet panafricain 8000 km', icon: '🌍' },
  { name: '3000 EcoMen',    sub: 'Construction superadobe',       icon: '🏗️' },
  { name: 'NASA / ONU',     sub: 'Validation tech superadobe',    icon: '🚀' },
]

/* ─── section wrapper ─── */
function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
    >
      {children}
    </motion.section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] overflow-x-hidden">

      {/* ══ HERO — no image, animated dark background ══════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#120a07]">

        {/* Animated orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(196,98,61,0.18) 0%, transparent 70%)', top: '-10%', left: '-10%' }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(29,110,74,0.14) 0%, transparent 70%)', bottom: '-5%', right: '-5%' }}
          animate={{ x: [0, -35, 0], y: [0, -25, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.10) 0%, transparent 70%)', top: '40%', right: '20%' }}
          animate={{ x: [0, 20, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            {/* Badge */}
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10">
              <span className="w-2 h-2 rounded-full bg-[#c4623d] animate-pulse" />
              <span className="text-white/60 text-xs font-semibold tracking-[0.25em] uppercase">Groupe COMPACK · Fondé 2024</span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(4rem,14vw,11rem)] font-black leading-none tracking-tighter mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              <span style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #d4a574 40%, #c4623d 70%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                COMPACK
              </span>
            </motion.h1>

            {/* Divider with animation */}
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-[#c4623d] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: '160px' }}
                transition={{ duration: 1.2, delay: 0.6 }}
              />
              <span className="text-[#d4a574] text-xs tracking-[0.4em] uppercase font-semibold whitespace-nowrap">Écologie · Inclusion · Carbone</span>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-[#c4623d] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: '160px' }}
                transition={{ duration: 1.2, delay: 0.6 }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p variants={fadeUp} className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              Un groupe qui prouve qu'il existe une troisième voie — l'alliance entre{' '}
              <span className="text-white/80 font-medium">progrès, nature et impact humain</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/solatera"
                className="group relative overflow-hidden bg-[#c4623d] text-white font-black px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c4623d]/40 flex items-center gap-2"
              >
                <span className="relative z-10">🌿 SOLATERA</span>
                <span className="relative z-10 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4754f] to-[#c4623d] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/carbon"
                className="group relative overflow-hidden bg-[#1d6e4a] text-white font-black px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#1d6e4a]/40 flex items-center gap-2"
              >
                <span className="relative z-10">🌲 CARBON</span>
                <span className="relative z-10 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#27ae60] to-[#1d6e4a] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <a href="#vision"
                className="bg-white/8 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                Notre vision ↓
              </a>
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-white/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </section>

      {/* ══ VISION ════════════════════════════════════════════ */}
      <Section id="vision" className="py-28 px-6 bg-[#1a0e0b]">
        <div className="max-w-5xl mx-auto">
          <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.35em] uppercase text-[#c4623d] font-semibold mb-5">Notre Raison d'Être</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-white text-center leading-tight mb-6">
            "Plus qu'un groupe,{' '}
            <span style={{ background: 'linear-gradient(90deg, #d4a574, #c4623d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              un mouvement
            </span>"
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-white/50 leading-relaxed text-center max-w-3xl mx-auto mb-16">
            Trop souvent, on nous demande de choisir : le progrès ou la nature ?{' '}
            <strong className="text-white/80">COMPACK est né pour prouver qu'il existe une troisième voie.</strong>
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: '🌿', title: 'Éco-construction', desc: "Dômes superadobe — validés NASA & ONU. Résistants aux séismes, 100% locaux, 0 béton.", accent: '#c4623d' },
              { icon: '♻️', title: 'Économie circulaire', desc: "Déchets → ressources. Plastique → mobilier. Forêts brûlées → crédits carbone.", accent: '#1d6e4a' },
              { icon: '🤝', title: 'Impact social réel', desc: "Formation, inclusion, santé, éducation. Chaque activité génère un bénéfice direct.", accent: '#2563eb' },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative bg-white/[0.04] border border-white/8 rounded-2xl p-7 overflow-hidden group cursor-default"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${c.accent}18 0%, transparent 60%)` }} />
                <span className="text-4xl block mb-4">{c.icon}</span>
                <h3 className="text-white font-black mb-2 text-lg">{c.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{c.desc}</p>
                <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: c.accent }} />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══ 5 PILIERS ═════════════════════════════════════════ */}
      <Section className="py-28 px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto">
          <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.35em] uppercase text-[#c4623d] font-semibold mb-3">Notre Écosystème</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-[#1a0e0b] text-center mb-3">Les 5 Piliers</motion.h2>
          <motion.p variants={fadeUp} className="text-center text-[#2d3436]/50 mb-16 max-w-xl mx-auto">Cinq entités complémentaires, une seule gouvernance, un seul impact.</motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PILIERS.map((p, i) => (
              <motion.div key={p.name} variants={fadeUp} custom={i}>
                <a href={p.href} className="group flex flex-col rounded-2xl p-6 bg-white border-2 border-transparent hover:border-opacity-60 transition-all duration-400 hover:-translate-y-3 hover:shadow-2xl cursor-pointer block"
                  style={{ '--hover-border': p.border } as React.CSSProperties}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = p.border)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform group-hover:scale-110 duration-300"
                    style={{ background: p.color + '18' }}>
                    {p.icon}
                  </div>
                  <div className="font-black text-sm tracking-wider mb-1.5" style={{ color: p.color }}>{p.name}</div>
                  <div className="text-xs text-[#2d3436]/55 leading-snug flex-1">{p.sub}</div>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5" style={{ color: p.color }}>
                    Découvrir <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══ SOLATERA ══════════════════════════════════════════ */}
      <Section id="solatera" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <motion.p variants={fadeUp} className="text-xs tracking-[0.35em] uppercase text-[#c4623d] font-semibold mb-2">Pilier 01</motion.p>
              <motion.h2 variants={fadeUp} className="text-5xl sm:text-7xl font-black text-[#1a0e0b] leading-none">SOLATERA</motion.h2>
              <motion.p variants={fadeUp} className="text-[#c4623d] font-semibold mt-2">Village Écologique · Marrakech · Livraison 2026</motion.p>
            </div>
            <motion.div variants={fadeIn}>
              <Link href="/solatera" className="group inline-flex items-center gap-2 bg-[#c4623d] hover:bg-[#d4754f] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#c4623d]/20 text-sm">
                Tout voir <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.p variants={fadeUp} className="text-[#2d3436]/65 leading-relaxed mb-12 max-w-3xl text-lg">
            Un éco-village touristique de 7 hectares à 14 km de Marrakech. 60 dômes en superadobe, énergie 100% solaire, eau purifiée par osmose inverse.
          </motion.p>

          {/* Domes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {SOLATERA_DOMES.map((d, i) => (
              <motion.div key={d.id} variants={scaleIn} custom={i}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group rounded-3xl overflow-hidden bg-[#f5f1e8] shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={d.image} alt={d.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e0b]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <div className="text-white font-black text-lg leading-tight">{d.title}</div>
                      <div className="text-white/70 text-xs">{d.capacity} · {d.size}</div>
                    </div>
                    <div className="bg-[#c4623d] text-white text-sm font-black px-3 py-1.5 rounded-xl">
                      {d.price}<span className="text-white/70 font-normal text-xs">/nuit</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  {d.features.map(f => (
                    <div key={f} className="flex items-center gap-2 py-1.5 border-b border-black/[0.05] last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c4623d] shrink-0" />
                      <span className="text-xs text-[#2d3436]/65">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infrastructure chips */}
          <motion.div variants={fadeIn} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {SOLATERA_INFRA.map(item => (
              <div key={item.label} className="flex items-center gap-3 bg-[#f5f1e8] hover:bg-[#c4623d]/8 rounded-2xl p-4 border border-black/[0.04] transition-colors">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <div className="text-xs font-bold text-[#1a0e0b] leading-tight">{item.label}</div>
                  <div className="text-xs text-[#2d3436]/45">{item.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Key specs */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gradient-to-r from-[#c4623d]/8 to-[#d4a574]/8 rounded-3xl p-8 border border-[#c4623d]/15">
            {[{ v: '7 ha', l: 'Terrain acquis' }, { v: '60', l: 'Éco-dômes' }, { v: '14 km', l: 'Centre Marrakech' }, { v: 'Fin 2026', l: 'Livraison' }].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black text-[#c4623d] mb-1">{s.v}</div>
                <div className="text-xs text-[#2d3436]/55 font-medium">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ══ CARBON ════════════════════════════════════════════ */}
      <Section id="carbon" className="py-28 px-6 bg-[#0d1f16]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <motion.p variants={fadeUp} className="text-xs tracking-[0.35em] uppercase text-[#27ae60] font-semibold mb-2">Pilier 02</motion.p>
              <motion.h2 variants={fadeUp} className="text-5xl sm:text-7xl font-black text-white leading-none">CARBON</motion.h2>
              <motion.p variants={fadeUp} className="text-[#27ae60] font-semibold mt-2">Crédits Carbone Certifiés · Chefchaouen · Puro.earth</motion.p>
            </div>
            <motion.div variants={fadeIn}>
              <Link href="/carbon" className="group inline-flex items-center gap-2 bg-[#1d6e4a] hover:bg-[#27ae60] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#1d6e4a]/30 text-sm">
                Tout voir <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            {/* Photo */}
            <motion.div variants={scaleIn} className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/carbon/paulownia-panorama-champ.jpg" alt="Paulownia Carbon" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f16]/90 via-[#0d1f16]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-black text-xl mb-1">Paulownia Phénix</div>
                <div className="text-white/60 text-sm">Croissance record : 8–10m en 18 mois · Absorption CO₂ maximale</div>
              </div>
            </motion.div>

            {/* Revenue chart */}
            <motion.div variants={fadeUp} className="bg-white/[0.05] border border-white/10 rounded-3xl p-7">
              <div className="text-xs tracking-widest uppercase text-[#27ae60] font-bold mb-6">Projection Revenus 2026–2030</div>
              <div className="space-y-4">
                {CARBON_REVENUS.map((r, i) => (
                  <motion.div key={r.year}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { delay: i * 0.1 } } }}
                    className="flex items-center gap-4"
                  >
                    <div className="text-white/50 text-xs font-bold w-14 shrink-0">{r.year}</div>
                    <div className="flex-1 bg-white/5 rounded-full h-7 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full flex items-center justify-end pr-3"
                        style={{ background: 'linear-gradient(90deg, #1d6e4a, #27ae60)' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${r.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                      >
                        <span className="text-white text-[10px] font-black">{r.label}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Revenue sources */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CARBON_SOURCES.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} custom={i}
                className="bg-white/[0.05] border border-white/8 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors"
              >
                <span className="text-3xl block mb-3">{s.icon}</span>
                <div className="text-white/90 font-bold text-sm mb-1">{s.label}</div>
                <div className="text-white/40 text-xs mb-3">{s.volume} · {s.prix}</div>
                <div className="text-[#27ae60] font-black text-lg">{s.revenu}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══ MARKET ════════════════════════════════════════════ */}
      <Section id="market" className="py-28 px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto">
          <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.35em] uppercase text-[#d4a574] font-semibold mb-3">Pilier 03</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-[#1a0e0b] text-center mb-3">COMPACK Market</motion.h2>
          <motion.p variants={fadeUp} className="text-center text-[#2d3436]/50 mb-16 max-w-xl mx-auto">Produits biologiques issus de l'éco-village, disponibles selon les saisons.</motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MARKET_PRODUCTS.map((s, i) => (
              <motion.div key={s.season} variants={fadeUp} custom={i}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl p-6 border border-black/[0.06] hover:shadow-xl transition-all duration-300"
                style={{ background: s.bg }}
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="font-black text-base mb-4" style={{ color: s.color }}>{s.season}</div>
                <div className="space-y-2">
                  {s.products.map(p => (
                    <div key={p} className="flex items-center gap-2 text-xs text-[#2d3436]/65">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                      {p}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-[#d4a574]/15 border border-[#d4a574]/30 rounded-full px-6 py-3">
              <span className="w-2 h-2 rounded-full bg-[#d4a574] animate-pulse" />
              <span className="text-[#1a0e0b] text-sm font-semibold">Marketplace en cours de développement — Lancement 2027</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ══ ASSOCIATION ═══════════════════════════════════════ */}
      <Section id="association" className="py-28 px-6 bg-[#1a0e0b]">
        <div className="max-w-6xl mx-auto">
          <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.35em] uppercase text-[#2563eb] font-semibold mb-3">Pilier 04</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-white text-center mb-3">L'Association</motion.h2>
          <motion.p variants={fadeUp} className="text-center text-white/45 mb-6 max-w-xl mx-auto">RNA : W751154531 · SIREN : 101474419 · Loi 1901</motion.p>
          <motion.div variants={fadeIn} className="flex justify-center mb-16">
            <a href="mailto:contact@compack.io?subject=Don COMPACK"
              className="group inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-500 text-white font-black px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#2563eb]/30">
              💝 Faire un don
            </a>
          </motion.div>

          {/* Projets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
            {ASSOCIATION_PROJETS.map((p, i) => (
              <motion.div key={p.tag} variants={fadeUp} custom={i}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white/[0.04] border border-white/8 rounded-3xl p-7 overflow-hidden hover:border-opacity-40 transition-all duration-300 cursor-pointer"
                style={{ '--accent': p.color } as React.CSSProperties}
                onMouseEnter={e => (e.currentTarget.style.borderColor = p.color + '40')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 20% 50%, ${p.color}15, transparent 60%)` }} />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0" style={{ background: p.color + '20' }}>{p.icon}</div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: p.color }}>{p.tag}</div>
                      <h3 className="text-white font-black text-lg leading-tight">{p.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-14">
            {ASSOCIATION_STATS.map((s, i) => (
              <motion.div key={s.label} variants={scaleIn} custom={i}
                className="bg-white/[0.04] border border-white/8 rounded-2xl p-5 text-center hover:bg-white/[0.07] transition-colors"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-white/40 text-xs leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div variants={fadeIn} className="bg-white/[0.04] border border-white/8 rounded-3xl p-8 mb-10 relative overflow-hidden">
            <div className="absolute top-4 left-6 text-7xl text-[#c4623d]/20 font-serif leading-none">"</div>
            <blockquote className="text-white text-xl font-light italic leading-relaxed max-w-2xl relative z-10 mb-4 pl-4">
              COMPACK a transformé ma vie. Grâce à leur soutien, j'ai trouvé un nouvel espoir.
            </blockquote>
            <p className="text-white/35 text-sm pl-4">— Amina, Réfugiée</p>
          </motion.div>
        </div>
      </Section>

      {/* ══ HOLDING ═══════════════════════════════════════════ */}
      <Section id="holding" className="py-28 px-6 bg-[#f5f1e8]">
        <div className="max-w-5xl mx-auto">
          <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.35em] uppercase text-[#7c3aed] font-semibold mb-3">Pilier 05</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-[#1a0e0b] text-center mb-3">COMPACK Holding</motion.h2>
          <motion.p variants={fadeUp} className="text-center text-[#2d3436]/50 mb-16 max-w-xl mx-auto">Gouvernance unifiée — déploiement panafricain. Une holding française, 4 filiales opérationnelles.</motion.p>

          <motion.div variants={fadeIn} className="flex flex-col items-center">
            {/* Top */}
            <div className="bg-[#1a0e0b] text-white rounded-2xl px-12 py-5 shadow-2xl text-center mb-0 z-10 relative">
              <div className="text-xs tracking-widest uppercase text-white/40 mb-1">Gouvernance</div>
              <div className="font-black text-xl tracking-wide">COMPACK HOLDING</div>
              <div className="text-white/50 text-xs mt-1">Paris, France · SIREN 101474419</div>
            </div>

            {/* Vertical line */}
            <div className="w-px h-10 bg-gradient-to-b from-[#1a0e0b] to-[#7c3aed]/50" />

            {/* Horizontal line */}
            <div className="relative w-full max-w-3xl">
              <div className="h-px bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent" />
              {/* Branches */}
              <div className="absolute top-0 left-0 right-0 flex justify-between">
                {[{}, {}, {}, {}].map((_, i) => (
                  <div key={i} className="w-px h-8 bg-[#7c3aed]/30 translate-y-px" style={{ marginLeft: i === 0 ? '12.5%' : '', marginRight: i === 3 ? '12.5%' : '' }} />
                ))}
              </div>
            </div>

            {/* Filiales */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl mt-8">
              {[
                { name: 'SOLATERA SAS', sub: 'Tourisme · Marrakech', color: '#c4623d', icon: '🌿' },
                { name: 'CARBON SAS',   sub: 'Forêts · Chefchaouen', color: '#1d6e4a', icon: '🌲' },
                { name: 'MARKET SAS',   sub: 'Commerce · Digital',   color: '#d4a574', icon: '🛒' },
                { name: 'ASSO COMPACK', sub: 'Impact · Social',       color: '#2563eb', icon: '🤝' },
              ].map((f, i) => (
                <motion.div key={f.name} variants={scaleIn} custom={i}
                  className="rounded-2xl p-5 text-center border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: f.color + '30', background: f.color + '08' }}
                >
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <div className="font-black text-sm text-[#1a0e0b] leading-tight">{f.name}</div>
                  <div className="text-[#2d3436]/50 text-xs mt-1">{f.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ══ STATS ══════════════════════════════════════════════ */}
      <Section className="py-24 px-6 bg-[#1a0e0b]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-white text-center mb-16">COMPACK en chiffres</motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {STATS.map((s, i) => (
              <motion.div key={s.label} variants={scaleIn} custom={i}
                className="group relative bg-white/[0.04] border border-white/8 rounded-2xl p-7 overflow-hidden hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${s.color}15, transparent 70%)` }} />
                <div className="relative">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <div className="text-4xl font-black mb-2" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-white/40 text-sm">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══ GRANDE MURAILLE VERTE ══════════════════════════════ */}
      <Section className="py-28 px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-[#1d6e4a]/10 border border-[#1d6e4a]/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm">🌍</span>
                <span className="text-[#1d6e4a] text-xs font-bold uppercase tracking-wider">Initiative Panafricaine</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-[#1a0e0b] leading-tight mb-5">
                La Grande<br /><span className="text-[#1d6e4a]">Muraille Verte</span>
              </h2>
              <p className="text-[#2d3436]/65 leading-relaxed mb-8 text-lg">
                COMPACK participe à l'initiative africaine de reforestation qui s'étend sur 8 000 km du Sénégal à Djibouti, traversant 11 pays pour lutter contre la désertification.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: '8 000 km', l: 'de reforestation' },
                  { v: '11',       l: 'pays traversés' },
                  { v: '100M ha',  l: 'terres à restaurer' },
                  { v: '10 M',     l: 'emplois créés' },
                ].map(s => (
                  <div key={s.l} className="bg-white rounded-2xl p-4 border border-black/[0.05]">
                    <div className="text-xl font-black text-[#1d6e4a]">{s.v}</div>
                    <div className="text-xs text-[#2d3436]/55 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/carbon/Reboisement-des-zones.jpg" alt="Grande Muraille Verte" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d6e4a]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                <div className="text-white font-black text-sm mb-1">🌱 Camp de base COMPACK</div>
                <div className="text-white/70 text-xs">Chefchaouen, Maroc · Reforestation active</div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ══ ÉQUIPE ═════════════════════════════════════════════ */}
      <Section className="py-28 px-6 bg-[#1a0e0b]">
        <div className="max-w-5xl mx-auto">
          <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.35em] uppercase text-[#c4623d] font-semibold mb-3">Les Fondateurs</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-white text-center mb-3">L'Équipe</motion.h2>
          <motion.p variants={fadeUp} className="text-center text-white/40 mb-16 max-w-lg mx-auto">25+ ans d'expérience collective en événementiel, innovation et développement communautaire.</motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {TEAM.map((m, i) => (
              <motion.div key={m.name} variants={fadeUp} custom={i}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group text-center cursor-default"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3 shadow-lg">
                  <Image src={m.img} alt={m.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#c4623d]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-white font-black text-xs leading-tight">{m.name}</div>
                <div className="text-white/40 text-[10px] mt-0.5">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══ ROADMAP ════════════════════════════════════════════ */}
      <Section className="py-28 px-6 bg-[#f5f1e8]">
        <div className="max-w-4xl mx-auto">
          <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.35em] uppercase text-[#c4623d] font-semibold mb-3">Vision</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-[#1a0e0b] text-center mb-16">Roadmap 2024–2030</motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c4623d] via-[#d4a574]/40 to-transparent" />

            <div className="space-y-6">
              {ROADMAP.map((item, i) => (
                <motion.div key={item.year} variants={fadeUp} custom={i}
                  className={`relative flex gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-start sm:items-center`}
                >
                  {/* Dot */}
                  <div className={`absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm z-10 ${
                    item.status === 'done'   ? 'bg-[#1d6e4a] border-[#27ae60] shadow-lg shadow-[#1d6e4a]/40' :
                    item.status === 'active' ? 'bg-[#c4623d] border-[#d4754f] shadow-lg shadow-[#c4623d]/40 animate-pulse' :
                    'bg-[#f5f1e8] border-[#2d3436]/20'
                  }`}>
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div className={`ml-16 sm:ml-0 sm:w-[45%] bg-white border border-black/[0.06] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? '' : 'sm:text-right'}`}>
                    <div className={`text-xs font-bold mb-1 ${
                      item.status === 'done'   ? 'text-[#1d6e4a]' :
                      item.status === 'active' ? 'text-[#c4623d]' : 'text-[#2d3436]/35'
                    }`}>{item.year}</div>
                    <div className="text-sm font-semibold text-[#1a0e0b] leading-snug">{item.label}</div>
                  </div>

                  {/* Spacer (other side) */}
                  <div className="hidden sm:block sm:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ══ PARTENAIRES ═══════════════════════════════════════ */}
      <Section className="py-24 px-6 bg-[#1a0e0b]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl font-black text-white text-center mb-14">Ils soutiennent COMPACK</motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNERS.map((p, i) => (
              <motion.div key={p.name} variants={scaleIn} custom={i}
                whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                className="bg-white/[0.05] border border-white/8 rounded-2xl p-5 text-center hover:bg-white/[0.09] transition-colors"
              >
                <div className="text-3xl mb-2">{p.icon}</div>
                <div className="text-white font-black text-xs leading-tight">{p.name}</div>
                <div className="text-white/35 text-[10px] mt-1">{p.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══ PHILOSOPHIE ═══════════════════════════════════════ */}
      <Section className="py-32 px-6 bg-[#f5f1e8]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeIn} className="text-7xl text-[#c4623d]/20 font-serif leading-none mb-4">"</motion.div>
          <motion.blockquote variants={fadeUp} className="text-2xl sm:text-4xl font-black text-[#1a0e0b] leading-tight mb-8">
            Construire un monde où la réussite économique se mesure aussi à l'impact humain et à la préservation de la nature.
          </motion.blockquote>
          <motion.p variants={fadeUp} className="text-[#c4623d] font-bold mb-14">— Alexandre BAROUZDIN, Fondateur COMPACK</motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <Link href="/solatera" className="bg-[#c4623d] hover:bg-[#d4754f] text-white font-black px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#c4623d]/25">🌿 Voir SOLATERA</Link>
            <Link href="/carbon"   className="bg-[#1d6e4a] hover:bg-[#27ae60] text-white font-black px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#1d6e4a]/25">🌲 Voir CARBON</Link>
          </motion.div>
        </div>
      </Section>

      {/* ══ CONTACT ═══════════════════════════════════════════ */}
      <Section id="contact" className="py-28 px-6 bg-[#1a0e0b]">
        <div className="max-w-4xl mx-auto">
          <motion.p variants={fadeUp} className="text-center text-xs tracking-[0.35em] uppercase text-[#c4623d] font-semibold mb-3">Nous contacter</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white text-center mb-4">Parlons de votre projet</motion.h2>
          <motion.p variants={fadeUp} className="text-center text-white/45 mb-16 max-w-xl mx-auto text-lg">Partenariat, investissement, presse, don — notre équipe répond sous 24h.</motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="lg:col-span-1 space-y-4">
              {[
                { icon: '✉️', label: 'Email', value: 'contact@compack.io', href: 'mailto:contact@compack.io' },
                { icon: '📞', label: 'Téléphone', value: '+33 7 88 31 58 52', href: 'tel:+33788315852' },
                { icon: '📍', label: 'Paris', value: '15 rue Réaumur, 75003', href: null },
                { icon: '🌍', label: 'Marrakech', value: 'Maroc — SOLATERA', href: null },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4 bg-white/[0.04] border border-white/8 rounded-2xl p-4 hover:bg-white/[0.07] transition-colors">
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
              <div className="flex gap-3">
                {[{ label: 'Instagram', icon: '📸' }, { label: 'LinkedIn', icon: '💼' }, { label: 'Facebook', icon: '👥' }].map(s => (
                  <a key={s.label} href="#" className="flex-1 flex flex-col items-center gap-1 bg-white/[0.04] hover:bg-white/[0.08] border border-white/8 rounded-xl py-3 transition-all cursor-pointer">
                    <span className="text-lg">{s.icon}</span>
                    <span className="text-white/35 text-xs">{s.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-2 bg-white/[0.05] border border-white/8 rounded-3xl p-8">
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ══ FOOTER ════════════════════════════════════════════ */}
      <footer className="bg-[#0d0705] pt-16 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            <Link href="/solatera" className="group flex items-center gap-5 bg-white/[0.04] hover:bg-[#c4623d]/15 border border-white/8 hover:border-[#c4623d]/30 rounded-2xl p-6 transition-all duration-300">
              <span className="text-4xl">🌿</span>
              <div>
                <div className="text-white font-black text-lg">SOLATERA</div>
                <div className="text-white/40 text-sm">Village Écologique · Marrakech</div>
              </div>
              <span className="ml-auto text-[#c4623d] text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="/carbon" className="group flex items-center gap-5 bg-white/[0.04] hover:bg-[#1d6e4a]/15 border border-white/8 hover:border-[#1d6e4a]/30 rounded-2xl p-6 transition-all duration-300">
              <span className="text-4xl">🌲</span>
              <div>
                <div className="text-white font-black text-lg">CARBON</div>
                <div className="text-white/40 text-sm">Crédits Carbone · Chefchaouen</div>
              </div>
              <span className="ml-auto text-[#1d6e4a] text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-white/8 pt-8">
            <div>
              <div className="text-white font-black text-2xl mb-1">COMPACK<span className="text-[#c4623d]">®</span></div>
              <div className="text-white/35 text-sm">contact@compack.io · +33 7 88 31 58 52</div>
              <div className="text-white/20 text-xs mt-1">Marrakech, Maroc · Paris, France</div>
              <div className="text-white/15 text-xs mt-0.5">RNA : W751154531 · SIREN : 101474419</div>
            </div>
            <div className="text-white/25 text-xs text-right">
              <div className="text-white/45 font-semibold mb-2">www.compack.io</div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 justify-end mb-2">
                <span className="hover:text-white/50 cursor-pointer transition-colors">Mentions légales</span>
                <span className="hover:text-white/50 cursor-pointer transition-colors">Confidentialité</span>
                <span className="hover:text-white/50 cursor-pointer transition-colors">CGV</span>
              </div>
              <div>© {new Date().getFullYear()} COMPACK Group · Tous droits réservés</div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  )
}
