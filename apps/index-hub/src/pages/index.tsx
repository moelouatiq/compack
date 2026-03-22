import Head from 'next/head';
import { motion } from 'framer-motion';

const SITES = [
  {
    name: 'SOLATERA',
    tagline: 'Énergie Solaire & Habitat Durable',
    description:
      'Solutions solaires innovantes pour habitats et entreprises. Dômes solaires, panneaux intégrés, autonomie énergétique complète.',
    href: process.env.NEXT_PUBLIC_SOLATERA_URL || 'https://solatera.compack.io',
    color: '#2d6a4f',
    accent: '#52b788',
    icon: '☀️',
  },
  {
    name: 'CARBON',
    tagline: 'Compensation Carbone & Reforestation',
    description:
      'Projets de reforestation avec Paulownia. Compensation carbone certifiée, investissements verts, impact environnemental mesurable.',
    href: process.env.NEXT_PUBLIC_CARBON_URL || 'https://carbon.compack.io',
    color: '#1c2b3a',
    accent: '#4a9eff',
    icon: '🌿',
  },
  {
    name: 'MARKET',
    tagline: 'Marketplace Écologique',
    description:
      'Produits durables, matériaux écologiques, équipements verts. La marketplace du groupe COMPACK.',
    href: '#',
    color: '#2d1b4e',
    accent: '#9b59b6',
    icon: '🛒',
    comingSoon: true,
  },
  {
    name: 'ASSOCIATION',
    tagline: 'Impact Social & Communauté',
    description:
      'Initiatives sociales, éducation environnementale, communauté engagée pour un avenir durable.',
    href: '#',
    color: '#4a1942',
    accent: '#e91e8c',
    icon: '🤝',
    comingSoon: true,
  },
  {
    name: 'HOLDING',
    tagline: 'Stratégie & Investissement',
    description:
      'Structure financière du groupe. Investissements stratégiques, partenariats, développement international.',
    href: '#',
    color: '#1a1a2e',
    accent: '#c9a84c',
    icon: '💎',
    comingSoon: true,
  },
];

const STATS = [
  { value: '5', label: 'Piliers', unit: '' },
  { value: '100+', label: 'Projets', unit: '' },
  { value: '50k', label: 'Tonnes CO₂', unit: 'compensées' },
  { value: '2030', label: 'Objectif', unit: 'net-zéro' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>COMPACK Group — Écosystème Durable</title>
        <meta
          name="description"
          content="COMPACK Group — Énergie solaire, compensation carbone, marketplace écologique. Un écosystème complet pour un avenir durable."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* HERO */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-[#c9a84c]/10 via-transparent to-transparent pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#c9a84c] text-sm tracking-[0.4em] uppercase mb-4 font-medium">
              Bienvenue dans l&apos;écosystème
            </p>
            <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-6">
              COMPACK
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Un groupe dédié à la transition écologique. Énergie solaire, carbone neutre,
              économie circulaire — ensemble vers un avenir durable.
            </p>
            <motion.a
              href="#piliers"
              className="inline-block px-10 py-4 border border-[#c9a84c] text-[#c9a84c] rounded-full text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Découvrir nos piliers
            </motion.a>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="py-20 px-6 border-y border-white/10">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-black text-[#c9a84c]">{stat.value}</p>
                <p className="text-white font-semibold mt-1">{stat.label}</p>
                {stat.unit && <p className="text-gray-500 text-sm">{stat.unit}</p>}
              </motion.div>
            ))}
          </div>
        </section>

        {/* PILIERS */}
        <section id="piliers" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">
                Notre groupe
              </p>
              <h2 className="text-5xl font-black">Les 5 piliers COMPACK</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SITES.map((site, i) => (
                <motion.div
                  key={site.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <a
                    href={site.href}
                    target={site.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`block p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full ${site.comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
                    onClick={site.comingSoon ? (e) => e.preventDefault() : undefined}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                      style={{ backgroundColor: `${site.accent}20`, border: `1px solid ${site.accent}40` }}
                    >
                      {site.icon}
                    </div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-black" style={{ color: site.accent }}>
                        {site.name}
                      </h3>
                      {site.comingSoon && (
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400 border border-white/10">
                          Bientôt
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-3 font-medium">{site.tagline}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{site.description}</p>
                    {!site.comingSoon && (
                      <p className="mt-6 text-sm font-semibold" style={{ color: site.accent }}>
                        Visiter le site →
                      </p>
                    )}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PHILOSOPHIE */}
        <section className="py-32 px-6 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6">
                Notre vision
              </p>
              <h2 className="text-4xl font-black mb-8">
                Construire l&apos;économie de demain, aujourd&apos;hui.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                COMPACK Group rassemble des entreprises et initiatives partageant une conviction commune :
                la croissance économique et la responsabilité écologique ne s&apos;opposent pas —
                elles se renforcent mutuellement. Chaque pilier du groupe contribue à un écosystème
                cohérent, durable et porteur d&apos;avenir.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-6 text-center text-gray-600 text-sm">
          <p className="text-2xl font-black text-white mb-4">COMPACK</p>
          <p className="mb-6">Écosystème Durable — {new Date().getFullYear()}</p>
          <div className="flex justify-center gap-8 text-gray-500">
            <a href={process.env.NEXT_PUBLIC_SOLATERA_URL || '#'} className="hover:text-white transition-colors">
              SOLATERA
            </a>
            <a href={process.env.NEXT_PUBLIC_CARBON_URL || '#'} className="hover:text-white transition-colors">
              CARBON
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
