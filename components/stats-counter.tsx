"use client"

import { useEffect, useState, useRef } from "react"

export default function StatsCounter({
  label,
  startValue,
  endValue,
  duration = 2000,
  suffix = "",
  prefix = "",
  color = "text-primary",
}: {
  label: string
  startValue: number
  endValue: number
  duration?: number
  suffix?: string
  prefix?: string
  color?: string
}) {
  const [count, setCount] = useState(startValue)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const step = Math.max(1, Math.floor((endValue - startValue) / (duration / 50)))
    let current = startValue
    const timer = setInterval(() => {
      current += step
      if (current >= endValue) {
        setCount(endValue)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 50)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      clearInterval(timer)
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [startValue, endValue, duration])

  return (
    <div ref={counterRef} className="text-center stats-counter p-4 glass-card rounded-xl">
      <div className={`text-3xl md:text-4xl font-bold ${color} mb-2`}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}
