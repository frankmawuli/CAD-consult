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

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6 pt-[54px] lg:pt-[72px]">
        <h1 className="text-white font-semibold text-[clamp(1.2rem,4vw,4.24rem)] lg:text-[clamp(3.2rem,4vw,4.24rem)] leading-[1.1] tracking-[-0.04em] max-w-[1500px]">
          Cutting edge positioning solutions{" "}
          and applications software
        </h1>
        <p className="text-white text-[clamp(0.7rem,0.92vw,1rem)] 2xl:text-[0.84rem] max-w-4xl mt-5 lg:mt-6 leading-relaxed ">
          Our team of professional engineers, technicians, and support staff brings deep expertise
          and hands-on experience both locally and internationally. We have proudly served clients
          including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
          of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8 lg:mt-12 mb-12 lg:mb-24 w-full sm:w-auto">
          <button className="bg-white text-[#0e3874] text-[0.8rem] lg:text-[1.12rem] px-8 lg:px-12 py-3 lg:py-4 hover:bg-[#ffc425] transition-colors">
            Explore
          </button>
          <button className="border-[2px] border-white text-white text-[0.8rem] lg:text-[1.12rem] px-6 lg:px-11 py-3 lg:py-4 hover:bg-white hover:text-[#0e3874] transition-colors">
            About us
          </button>
        </div>
      </div>
    </section>
  )
}
