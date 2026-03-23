'use client'

import { motion } from 'framer-motion'

const events = [
  {
    icon: '💍',
    title: 'Mariages & Cérémonies',
    desc: 'Un cadre féérique unique pour le plus beau jour de votre vie. Dômes illuminés, jardins fleuris, cuisine gastronomique.',
    items: ['Jusqu\'à 500 invités', 'Décoration sur mesure', 'Traiteur & carte des vins', 'Animation & DJ', 'Nuit de noces offerte'],
    color: '#d4a574',
    bg: 'from-[#d4a574]/20 to-[#c4623d]/10',
  },
  {
    icon: '🎤',
    title: 'Concerts & Spectacles',
    desc: 'Une scène naturelle exceptionnelle pour des performances live inoubliables sous les étoiles de Marrakech.',
    items: ['Scène extérieure 500m²', 'Son & lumière professionnel', 'Loges artistes', 'Billetterie en ligne', 'Partenariats médias'],
    color: '#c4623d',
    bg: 'from-[#c4623d]/20 to-[#2d3436]/10',
  },
  {
    icon: '🏢',
    title: 'Séminaires & Team Building',
    desc: 'Ressourcez vos équipes dans un environnement inspirant. Nature, créativité et cohésion garanties.',
    items: ['Salles de réunion équipées', 'WiFi haut débit', 'Activités team building', 'Hébergement groupe', 'Restauration sur place'],
    color: '#1d6e4a',
    bg: 'from-[#1d6e4a]/20 to-[#1d6e4a]/5',
  },
  {
    icon: '🎉',
    title: 'Anniversaires & Fêtes',
    desc: 'Célébrez vos moments précieux dans un cadre hors du commun. Chaque fête devient un souvenir éternel.',
    items: ['Privatisation partielle ou totale', 'Animation enfants & adultes', 'Buffet & cocktails', 'Photobooth & déco', 'Hébergement invités'],
    color: '#2563eb',
    bg: 'from-blue-500/15 to-blue-500/5',
  },
]

export default function Evenementiel() {
  return (
    <section id="evenementiel" className="py-24 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-[#d4a574]/30 text-[#c4623d] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Événementiel
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Organisez Vos Événements
          </h2>
          <p className="text-[#2d3436]/60 text-lg max-w-2xl mx-auto">
            SOLATERA est le lieu idéal pour vos mariages, concerts, séminaires et fêtes privées.
            Un cadre de rêve à 14 km du cœur de Marrakech.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {events.map((ev, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className={`bg-gradient-to-br ${ev.bg} border border-[#2d3436]/10 rounded-3xl p-6`}>
              <div className="text-4xl mb-3">{ev.icon}</div>
              <h3 className="font-bold text-[#2d3436] text-xl mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>{ev.title}</h3>
              <p className="text-[#2d3436]/65 text-sm leading-relaxed mb-4">{ev.desc}</p>
              <ul className="space-y-1.5">
                {ev.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-[#2d3436]/75 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ev.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div className="bg-gradient-to-br from-[#c4623d] to-[#d4a574] rounded-2xl p-6 text-white text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <p className="font-bold text-xl mb-2">Demandez votre devis personnalisé</p>
          <p className="text-white/80 text-sm mb-4">Notre équipe événementielle vous répond sous 24h et prépare une proposition sur mesure.</p>
          <a href="mailto:contact@compack.io?subject=Demande événementiel SOLATERA" className="inline-block bg-white text-[#c4623d] font-bold px-7 py-3 rounded-full hover:bg-[#f5f1e8] transition-colors cursor-pointer">
            Demander un devis
          </a>
        </motion.div>
      </div>
    </section>
  )
}
