"use client"

import { useEffect, useState } from "react"

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export function CountdownTimer() {
  const [seconds, setSeconds] = useState(8 * 60)

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60

  return (
    <div className="flex items-center justify-center gap-3">
      <TimeBox value={pad(minutes)} label="Minutos" />
      <span className="font-heading text-3xl font-bold text-primary">:</span>
      <TimeBox value={pad(secs)} label="Segundos" />
    </div>
  )
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="flex min-w-[64px] items-center justify-center rounded-2xl bg-primary px-3 py-2 font-heading text-3xl font-bold text-primary-foreground tabular-nums sm:text-4xl">
        {value}
      </span>
      <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
    </div>
  )
}
