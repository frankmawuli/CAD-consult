"use client"

import { useEffect } from "react"
import Glide from "@glidejs/glide"
import Image from "next/image"

type Logo = {
  src: string
  alt: string
  /** For images that need CSS cropping (e.g. Spectra — stored as 1920×1080 screenshot) */
  crop?: { containerW: number; imgH: number; topOffset: number }
}

// Spectra crop math (from Figma): container 358×94, image h=214.23% of 94=201.4px, top=-59.77% of 94=-56.2px
// Scale to slider h=56px: factor = 56/94 = 0.596
const SPECTRA_SCALE = 56 / 94

const logos: Logo[] = [
  { src: "/images/logos/nikon.svg",   alt: "Nikon" },
  { src: "/images/logos/trimble.svg", alt: "Trimble" },
  {
    src: "/images/logos/spectra.png",
    alt: "Spectra Geospatial",
    crop: {
      containerW: Math.round(358 * SPECTRA_SCALE),
      imgH:       Math.round(201.4 * SPECTRA_SCALE),
      topOffset:  Math.round(-56.2 * SPECTRA_SCALE),
    },
  },
  { src: "/images/logos/chcnav.svg",  alt: "CHCNAV" },
  { src: "/images/logos/delair.png",  alt: "Delair" },
  { src: "/images/logos/logo5.svg",   alt: "Partner" },
  { src: "/images/logos/logo6.svg",   alt: "Partner" },
]

function LogoItem({ logo }: { logo: Logo }) {
  if (logo.crop) {
    const { containerW, imgH, topOffset } = logo.crop
    return (
      <div
        className="relative overflow-hidden flex-shrink-0 mx-auto"
        style={{ width: containerW, height: 56 }}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={containerW}
          height={imgH}
          style={{ position: "absolute", top: topOffset }}
        />
      </div>
    )
  }

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      className="m-auto h-14 w-auto max-w-full object-contain"
    />
  )
}

export function IconSlider() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 5,
      gap: 48,
      breakpoints: {
        1024: { perView: 4 },
        768:  { perView: 3 },
        640:  { perView: 2, gap: 32 },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <section className="w-full overflow-hidden bg-white py-10 border-y border-gray-100 mt-24">
      <div className="glide-09 relative w-full px-[5%]">
        <div data-glide-el="track">
          <ul className="[backface-visibility:hidden] [transform-style:preserve-3d] [touch-action:pan-Y] [will-change:transform] relative flex w-full overflow-hidden p-0">
            {logos.map((logo, i) => (
              <li key={i} className="flex items-center justify-center">
                <LogoItem logo={logo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
