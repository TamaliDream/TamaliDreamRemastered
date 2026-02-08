import { useEffect, useState } from "react"
import { Hearts } from "../components/san-valentin/hearts"
import { CelebrationView } from "../components/san-valentin/si-se-hizo"
import { ValentineQuestion } from "../components/san-valentin/pregunta"

const STORAGE_KEY = "valentine-accepted"

export default function SanValentin() {
  const [accepted, setAccepted] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "true") {
      setAccepted(true)
    }
    setLoaded(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "true")
    document.cookie = `${STORAGE_KEY}=true; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
    setAccepted(true)
  }

  if (!loaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-rose-300 border-t-rose-600" />
      </main>
    )
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <Hearts />

      {accepted ? (
        <CelebrationView />
      ) : (
        <ValentineQuestion onAccept={handleAccept} />
      )}
    </main>
  )
}
