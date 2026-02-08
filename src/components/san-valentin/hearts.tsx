import { useEffect, useState } from "react"
import { Heart } from "../../types/interfaces"

const HEART_COLORS = [
  "text-rose-400",
  "text-rose-500",
  "text-pink-400",
  "text-pink-500",
  "text-red-400",
  "text-red-300",
]

export function Hearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 14,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.5 + 0.3,
      swayDuration: Math.random() * 3 + 3,
      color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-heart-sway"
          style={{
            left: `${heart.left}%`,
            top: "-5%",
            animationDuration: `${heart.swayDuration}s`,
            animationDelay: `${heart.delay * 0.3}s`,
          }}
        >
          <svg
            className={`animate-heart-fall ${heart.color}`}
            style={{
              width: heart.size,
              height: heart.size,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
              opacity: heart.opacity,
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
