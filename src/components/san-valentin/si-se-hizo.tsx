"use client"

import { Heart, CalendarHeart, Sparkles } from "lucide-react"

export function CelebrationView() {
  return (
    <div className="relative z-10 flex flex-col items-center gap-6 px-4 animate-celebration">
      <div className="flex items-center gap-3">
        <Sparkles className="text-amber-400 fill-amber-400" size={32} />
        <Heart
          className="text-rose-500 fill-rose-500 drop-shadow-lg"
          size={72}
          strokeWidth={1.5}
        />
        <Sparkles className="text-amber-400 fill-amber-400" size={32} />
      </div>

      <h1 className="font-serif text-5xl md:text-7xl font-bold text-rose-600 text-center text-balance leading-tight">
        {"Feliz san Valentín ratona"}
      </h1>

      <div className="mt-4 rounded-3xl bg-white/70 backdrop-blur-sm border border-rose-200 p-8 md:p-10 max-w-md w-full shadow-xl">
        <div className="flex flex-col items-center gap-5">
          <CalendarHeart className="text-rose-500" size={48} />

          <p className="text-2xl md:text-3xl font-bold text-rose-600 text-center font-serif">
            {"Te espero el 14 de febrero"}
          </p>

          <div className="w-16 h-px bg-rose-300" />

          <p className="text-lg md:text-xl text-rose-500 text-center font-medium leading-relaxed">
            {"Ponte bien bonita"}
          </p>

          <div className="flex items-center gap-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={`celebration-heart-${i}`}
                className="text-rose-400 fill-rose-400"
                size={16 + i * 3}
                style={{
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0.6 + i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
