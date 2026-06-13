"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "25+", label: "Years of Operation" },
  { value: "900+", label: "Km Of Roads Surveyed" },
  { value: "30+", label: "Road & Survey Projects" },
]

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  return match ? { num: parseInt(match[1], 10), suffix: match[2] } : { num: 0, suffix: "" }
}

function CountUp({ value, duration = 1800 }: { value: string; duration?: number }) {
  const { num, suffix } = parseValue(value)
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.round(eased * num))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [num, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function AboutStats() {
  return (
    <section className="bg-[#f1f1f1] px-[5%] py-12 lg:py-20">
      <div className="max-w-[1728px] mx-auto text-center">
        <p className="font-semibold text-[#0e3874] text-[clamp(0.8rem,1.2vw,1.95rem)] mb-2 tracking-wide uppercase">
          IMPACT
        </p>
        <h2 className="font-semibold text-black text-[clamp(1.6rem,3.2vw,3.05rem)] tracking-[-0.04em] mb-11 lg:mb-16">
          CAD Consult GH In Numbers
        </h2>

        <div className="flex flex-wrap justify-center gap-5 lg:gap-8">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-[#0e3874] rounded-[8px] flex flex-col items-center justify-center px-8 py-6 min-w-[208px] flex-1 max-w-[328px]"
            >
              <span className="text-white font-semibold text-[clamp(2rem,3.2vw,3.05rem)] tracking-[-0.04em] leading-tight">
                <CountUp value={value} />
              </span>
              <span className="text-[#ffc425] font-medium text-[clamp(0.7rem,1.04vw,1.05rem)] mt-1.5">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
