'use client'

interface SectionLabelProps {
  label: string
  color?: 'emerald' | 'terracotta' | 'blue' | 'amber'
}

const colorMap = {
  emerald: {
    gradient: 'from-emerald-custom to-emerald-light',
    glow: 'shadow-emerald-custom/20',
    dot: 'bg-emerald-custom',
    line: 'from-transparent via-emerald-custom/40 to-transparent',
  },
  terracotta: {
    gradient: 'from-terracotta to-terracotta-light',
    glow: 'shadow-terracotta/20',
    dot: 'bg-terracotta',
    line: 'from-transparent via-terracotta/40 to-transparent',
  },
  blue: {
    gradient: 'from-blue-600 to-blue-400',
    glow: 'shadow-blue-500/20',
    dot: 'bg-blue-500',
    line: 'from-transparent via-blue-400/40 to-transparent',
  },
  amber: {
    gradient: 'from-amber-600 to-amber-400',
    glow: 'shadow-amber-500/20',
    dot: 'bg-amber-500',
    line: 'from-transparent via-amber-400/40 to-transparent',
  },
}

export default function SectionLabel({ label, color = 'emerald' }: SectionLabelProps) {
  const c = colorMap[color]

  return (
    <div className="flex flex-col items-center gap-3 mb-8">
      {/* Top line */}
      <div className={`h-px w-16 bg-gradient-to-r ${c.line}`} />

      {/* Main badge */}
      <div className={`relative inline-flex items-center gap-2.5 px-5 py-2 rounded-xl shadow-lg ${c.glow}`}>
        {/* Gradient background */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${c.gradient} opacity-10`} />
        {/* Border */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${c.gradient} opacity-20`}
          style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}
        />

        {/* Dot */}
        <div className="relative flex items-center justify-center">
          <div className={`w-2 h-2 rounded-full ${c.dot} opacity-80`} />
          <div className={`absolute w-4 h-4 rounded-full ${c.dot} opacity-20 animate-ping`}
            style={{ animationDuration: '2.5s' }}
          />
        </div>

        {/* Text */}
        <span
          className={`relative font-heading font-black text-lg sm:text-xl tracking-[0.2em] uppercase bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent`}
        >
          {label}
        </span>

        {/* Dot right */}
        <div className={`relative w-2 h-2 rounded-full ${c.dot} opacity-80`} />
      </div>

      {/* Bottom line */}
      <div className={`h-px w-16 bg-gradient-to-r ${c.line}`} />
    </div>
  )
}
