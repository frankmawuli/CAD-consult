"use client"

import Image from "next/image"

interface Logo {
  src: string
  alt: string
}

const logos: Logo[] = [
  { src: "/images/logos/Nikon Logo.svg", alt: "Nikon" },
  { src: "/images/logos/Trimble Logo.svg", alt: "Trimble" },
  { src: "/images/logos/Spectra Logo.svg", alt: "Spectra Geospatial" },
  { src: "/images/logos/Autodesk Logo.svg", alt: "Autodesk" },
  { src: "/images/logos/Delaair Logo.svg", alt: "Delair" },
  { src: "/images/logos/Seco Logo.svg", alt: "Seco" },
  { src: "/images/logos/chcnav.svg", alt: "CHC Navigation" },
]

export default function IconSlider() {
  return (
    <section className="py-36 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
        <h2 className="font-semibold text-black text-[clamp(1.75rem,2.5vw,2.8rem)] tracking-[-0.04em] text-center mb-10 lg:mb-24 px-5">
        Authorized Distributors 
      </h2>
      </div>

      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex min-w-max animate-marquee items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="shrink-0 w-[38vw] sm:w-[22vw] lg:w-[18vw] flex items-center justify-center h-20 px-4 sm:px-6 lg:px-8 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={48}
                  unoptimized
                  className="object-contain w-full h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
