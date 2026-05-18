"use client"

import { useState, useEffect } from "react"

const PROJECTS = [
  {
    src: "/images/project1.jpg",
    alt: "Construction workers",
  },
  {
    src: "/images/project2.jpg",
    alt: "Excavator",
  },
  {
    src: "/images/project3.jpg",
    alt: "Survey team",
  },
]

function NavButton({
  onClick,
  flipped,
}: {
  onClick: () => void
  flipped?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-50
      w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#0E3874] flex items-center justify-center
      ${flipped ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}
      `}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className={flipped ? "rotate-180" : ""}
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export function ProjectsSection() {
  const [active, setActive] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)")
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? PROJECTS.length - 1 : prev - 1
    )
  }

  const next = () => {
    setActive((prev) =>
      prev === PROJECTS.length - 1 ? 0 : prev + 1
    )
  }

  const offset = isMobile ? 200 : 360

  return (
    <section className="py-16 lg:py-24 bg-[#f7f7f7] overflow-hidden">
      <h2 className="font-semibold text-black text-[clamp(1.75rem,3.5vw,3.8rem)] tracking-[-0.04em] text-center mb-10 lg:mb-14 px-5">
        Projects We&apos;ve Delivered
      </h2>

      <div className="relative max-w-7xl mx-auto h-[280px] sm:h-[420px] lg:h-[480px] flex items-center justify-center">

        <NavButton onClick={prev} />
        <NavButton onClick={next} flipped />

        {PROJECTS.map((project, index) => {
          let position = index - active

          // loop handling
          if (position < -1) position = 2
          if (position > 1) position = -2

          const isCenter = position === 0

          return (
            <div
              key={project.src}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `
                  translateX(${position * offset}px)
                  scale(${isCenter ? 1 : 0.82})
                `,
                zIndex: isCenter ? 30 : 10,
                opacity: Math.abs(position) > 1 ? 0 : 1,
              }}
            >
              <div
                className={`
                  overflow-hidden
                  bg-white
                  shadow-xl
                  transition-all duration-500
                  ${isCenter
                    ? "w-[280px] h-[200px] sm:w-[520px] sm:h-[340px] lg:w-[680px] lg:h-[480px]"
                    : "w-[240px] h-[170px] sm:w-[460px] sm:h-[300px] lg:w-[720px] lg:h-[340px]"
                  }
                `}
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === active ? "bg-[#0e3874]" : "bg-[#0e3874]/30"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
