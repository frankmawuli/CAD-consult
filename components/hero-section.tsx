import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/[0.67]" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-5 sm:px-8 pt-[68px] lg:pt-[90px]">
        <h1 className="text-white font-semibold text-[clamp(2rem,5vw,5.3rem)] leading-[1.1] tracking-[-0.04em] max-w-5xl">
          Cutting edge positioning solutions{" "}
          and applications software
        </h1>
        <p className="text-white text-[clamp(0.875rem,1.15vw,1.25rem)] max-w-4xl mt-6 lg:mt-8 leading-relaxed">
          Our team of professional engineers, technicians, and support staff brings deep expertise
          and hands-on experience both locally and internationally. We have proudly served clients
          including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
          of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 lg:mt-16 mb-16 lg:mb-32 w-full sm:w-auto">
          <button className="bg-white text-[#0e3874] text-[1rem] lg:text-[1.4rem] px-10 lg:px-16 py-4 lg:py-5 hover:bg-[#ffc425] transition-colors">
            Explore
          </button>
          <button className="border-[3px] border-white text-white text-[1rem] lg:text-[1.4rem] px-8 lg:px-14 py-4 lg:py-5 hover:bg-white hover:text-[#0e3874] transition-colors">
            About us
          </button>
        </div>
      </div>
    </section>
  )
}
