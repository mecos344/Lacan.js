import { useMemo, useRef, useEffect } from 'react'

interface SchemaIProps {
  isExpanded?: boolean
}

export default function SchemaI({ isExpanded = false }: SchemaIProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full p-2">
      {/* 标题 */}
      <div className="text-center mb-2">
        <span className={`font-light tracking-widest text-white/40 ${isExpanded ? 'text-xl' : 'text-base'}`}>
          The Imaginary
        </span>
      </div>
      {/* 内容 */}
      <div className="flex-1 w-full flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <p className="text-white/70 mb-4">The Imaginary order represents the realm of images, identification, and the ego.</p>
          <p className="text-white/50 mb-6">It is the stage of the mirror where the subject forms its identity through reflection.</p>
          <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mb-4">
            <span className="text-4xl font-light text-white/60">i</span>
          </div>
          <p className="text-white/40 text-sm">"The imaginary is the order of identification with the image."</p>
        </div>
      </div>
    </div>
  )
}