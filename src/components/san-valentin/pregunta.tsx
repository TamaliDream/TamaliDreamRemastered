"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Heart } from "lucide-react"

export function ValentineQuestion({ onAccept }: { onAccept: () => void }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [yesScale, setYesScale] = useState(1)
  const [hasMoved, setHasMoved] = useState(false)
  const noButtonRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const moveNoButton = useCallback(() => {
    if (!containerRef.current) return

    const container = containerRef.current.getBoundingClientRect()
    const buttonWidth = 120
    const maxX = container.width - buttonWidth - 20
    const maxY = 200

    const newX = Math.random() * maxX - maxX / 2
    const newY = Math.random() * maxY - maxY / 2

    setNoPosition({ x: newX, y: newY })
    setHasMoved(true)
    setYesScale((prev) => Math.min(prev + 0.15, 2.2))
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!noButtonRef.current) return
      const rect = noButtonRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distance = Math.sqrt(
        (e.clientX - centerX) ** 2 + (e.clientY - centerY) ** 2
      )

      if (distance < 120) {
        moveNoButton()
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [moveNoButton])

  return (
    <div
      ref={containerRef}
      className="relative z-10 flex flex-col items-center gap-8 px-4"
    >
      <div className="animate-float-in flex flex-col items-center gap-3">
        <Heart
          className="text-rose-500 fill-rose-500 drop-shadow-lg"
          size={64}
          strokeWidth={1.5}
        />
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-rose-600 text-center text-balance leading-tight drop-shadow-sm">
          {"¿Quieres ser mi San Valentin?"}
        </h1>
      </div>

      <div className="flex flex-col items-center gap-6 mt-4 min-h-[200px]">
        <button
          type="button"
          onClick={onAccept}
          className="animate-pulse-glow rounded-2xl bg-rose-500 px-10 py-4 text-xl font-bold text-white transition-all duration-300 hover:bg-rose-600 active:scale-95 cursor-pointer"
          style={{
            transform: `scale(${yesScale})`,
            transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {"Si"}
        </button>

        <div className="relative h-14 flex items-center justify-center">
          <button
            ref={noButtonRef}
            type="button"
            onTouchStart={moveNoButton}
            className="rounded-2xl border-2 border-rose-300 bg-white/80 px-8 py-3 text-base font-semibold text-rose-400 transition-all duration-300 hover:border-rose-400 cursor-pointer select-none whitespace-nowrap"
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              transition:
                "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              position: hasMoved ? "absolute" : "relative",
            }}
          >
            {"No, come cola"}
          </button>
        </div>
      </div>
    </div>
  )
}
