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
      w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#0E3874]
      flex items-center justify-center shadow-lg transition-all
      ${
        flipped
          ? "right-[-2rem] sm:right-[-3rem] lg:right-[-2rem]"
          : "left-[-2rem] sm:left-[-3rem] lg:left-[-2rem]"
      }`}
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
  const [offset, setOffset] = useState(360)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setOffset(200)
      else if (w < 768) setOffset(240)
      else if (w < 1024) setOffset(300)
      else setOffset(360)
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
    <section className="py-16 lg:py-24 bg-white overflow-hidden ">
      <h2 className="font-semibold text-black text-[clamp(1.75rem,2.5vw,2.8rem)] tracking-[-0.04em] text-center mb-10 lg:mb-32 px-5">
        Projects We&apos;ve Delivered
      </h2>

      <div className="relative max-w-[90rem] mx-auto h-[280px] sm:h-90 md:h-105 lg:h-120 flex items-center justify-center">

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
                      ? "w-[280px] h-[200px] sm:w-100 sm:h-67.5 md:w-125 md:h-85 lg:w-160 lg:h-140"
                      : "w-[240px] h-[170px] sm:w-85 sm:h-57.5 md:w-110 md:h-72.5 lg:w-180 lg:h-96"
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