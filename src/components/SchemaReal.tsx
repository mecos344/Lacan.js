import { useMemo, useRef, useEffect } from 'react'

interface SchemaRealProps {
  isExpanded?: boolean
}

export default function SchemaReal({ isExpanded = false }: SchemaRealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full p-2">
      {/* 标题 */}
      <div className="text-center mb-2">
        <span className={`font-light tracking-widest text-white/40 ${isExpanded ? 'text-xl' : 'text-base'}`}>
          The Real
        </span>
      </div>
      {/* 内容 */}
      <div className="flex-1 w-full flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <p className="text-white/70 mb-4">The Real order is the realm of the impossible, the traumatic, and the unsymbolizable.</p>
          <p className="text-white/50 mb-6">It is that which resists symbolization and cannot be fully represented.</p>
          <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mb-4">
            <span className="text-4xl font-light text-white/60">R</span>
          </div>
          <p className="text-white/40 text-sm">"The Real is that which is always in excess of any representation."</p>
        </div>
      </div>
    </div>
  )
}