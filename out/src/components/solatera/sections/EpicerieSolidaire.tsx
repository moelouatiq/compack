'use client'

import { motion } from 'framer-motion'

const principles = [
  { icon: '💶', title: 'Prix réduits', desc: 'Produits frais et épicerie à des prix inférieurs au marché grâce aux partenariats avec producteurs locaux.' },
  { icon: '🎁', title: 'Dons alimentaires', desc: 'Les invendus du restaurant et les excédents de nos serres sont redistribués chaque semaine.' },
  { icon: '🌱', title: '100% local & bio', desc: 'Légumes de nos serres, miel de nos ruches, produits artisanaux marocains de qualité.' },
  { icon: '🤝', title: 'Solidarité active', desc: 'Accès prioritaire aux familles démunies et bénéficiaires de l\'association.' },
]

export default function EpicerieSolidaire() {
  return (
    <section id="epicerie" className="py-24 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="bg-gradient-to-br from-[#1d6e4a] to-[#155438] rounded-3xl p-8 text-white">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>L'Épicerie Solidaire</h3>
              <p className="text-white/80 leading-relaxed mb-5">
                Un lieu chaleureux où chacun peut faire ses courses dans la dignité.
                Ouvert à tous, priorité aux personnes en difficulté.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/15 rounded-2xl p-3 text-center">
                  <div className="font-black text-xl text-[#d4a574]">−40%</div>
                  <div className="text-white/60 text-xs">Prix moyen</div>
                </div>
                <div className="bg-white/15 rounded-2xl p-3 text-center">
                  <div className="font-black text-xl text-[#d4a574]">100%</div>
                  <div className="text-white/60 text-xs">Local & bio</div>
                </div>
                <div className="bg-white/15 rounded-2xl p-3 text-center">
                  <div className="font-black text-xl text-[#d4a574]">7j/7</div>
                  <div className="text-white/60 text-xs">Ouverture</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: principles */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="inline-block bg-[#1d6e4a]/10 text-[#1d6e4a] text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Épicerie Solidaire
            </span>
            <h2 className="text-4xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Faire ses Courses Autrement
            </h2>
            <p className="text-[#2d3436]/70 leading-relaxed mb-6">
              L'épicerie solidaire de SOLATERA propose des produits locaux et biologiques
              à prix réduits, avec des dons réguliers pour les familles dans le besoin.
            </p>
            <div className="space-y-4">
              {principles.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm">
                  <span className="text-2xl flex-shrink-0">{p.icon}</span>
                  <div>
                    <h3 className="font-bold text-[#2d3436] mb-1">{p.title}</h3>
                    <p className="text-[#2d3436]/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
