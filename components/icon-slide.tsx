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
  { src: "/images/logos/Nikon Logo.svg", alt: "Nikon" },
  { src: "/images/logos/Trimble Logo.svg", alt: "Trimble" },
  {
    src: "/images/logos/Spectra Logo.svg",
    alt: "Spectra Geospatial",
  },
  { src: "/images/logos/Autodesk Logo.svg", alt: "Autodesk" },
  { src: "/images/logos/Delaair Logo.svg", alt: "Delair" },
  { src: "/images/logos/Seco Logo.svg", alt: "Seco" },
  { src: "/images/logos/CHCNAV.svg", alt: "CHHCNAV" },
]

function LogoItem({ logo }: { logo: Logo }) {
  if (logo.crop) {
    const { containerW, imgH, topOffset } = logo.crop
    return (
      <div
        className="relative mx-auto flex-shrink-0 overflow-hidden"
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
      width={160}
      height={56}
      className="m-auto h-14 w-auto max-w-full object-contain"
    />
  )
}

export function IconSlider() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 1000,
      animationTimingFunc: "linear",
      perView: 5,
      gap: 48,
      breakpoints: {
        1024: { perView: 4 },
        768: { perView: 3 },
        640: { perView: 2, gap: 32 },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <section className="mt-24 w-full overflow-hidden bg-white py-10 lg:my-42">
      <h2 className="mb-10 px-5 text-center text-[clamp(1.75rem,2.5vw,2.8rem)] font-semibold tracking-[-0.04em] text-black lg:mb-28">
        Authorized Distributors
      </h2>
      <div className="glide-09 relative w-full px-[5%]">
        <div data-glide-el="track">
          <ul className="relative flex w-full [touch-action:pan-Y] overflow-hidden p-0 [will-change:transform] [backface-visibility:hidden] [transform-style:preserve-3d]">
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
