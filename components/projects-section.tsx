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
      className={`absolute top-1/2 -translate-y-1/2
      w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#0E3874]
      flex items-center justify-center shadow-lg transition-all
      ${
        flipped
          ? "right-[-2rem] sm:right-[-3rem] lg:right-[-2rem]"
          : "left-[-2rem] sm:left-[-3rem] lg:left-[-2rem]"
      }`}
    >
      <svg
        width="14"
        height="14"
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
  const [offset, setOffset] = useState(288)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setOffset(160)
      else if (w < 768) setOffset(192)
      else if (w < 1024) setOffset(240)
      else setOffset(288)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
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

  return (
    <section className="py-12 lg:py-20 bg-white overflow-hidden">
      <h2 className="font-semibold text-black text-[clamp(1.4rem,2vw,2.24rem)] tracking-[-0.04em] text-center mb-8 lg:mb-[6.4rem] px-4">
        Projects We&apos;ve Delivered
      </h2>

      <div className="relative max-w-[90rem] mx-auto h-[224px] sm:h-72 md:h-[21rem] lg:h-96 flex items-center justify-center">

        <NavButton onClick={prev} />
        <NavButton onClick={next} flipped />

        {PROJECTS.map((project, index) => {
          let position = index - active

          if (position < -1) position = 2
          if (position > 1) position = -2

          const isCenter = position === 0

          return (
            <div
              key={project.src}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${position * offset}px) scale(${
                  isCenter ? 1 : 0.82
                })`,
                zIndex: isCenter ? 30 : 10,
                opacity: Math.abs(position) > 1 ? 0 : 1,
              }}
            >
              <div
                className={`overflow-hidden bg-white shadow-xl transition-all duration-500
                  ${
                    isCenter
                      ? "w-[224px] h-[160px] sm:w-80 sm:h-54 md:w-100 md:h-[17rem] lg:w-[32rem] lg:h-[28rem]"
                      : "w-[192px] h-[136px] sm:w-[17rem] sm:h-[11.5rem] md:w-[22rem] md:h-[14.5rem] lg:w-[36rem] lg:h-[19.2rem]"
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
    </section>
  )
}
