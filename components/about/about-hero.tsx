import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-5">
      <Image
        src="/images/about/about-hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/[0.67]" />

      <div className="relative z-10 flex flex-col items-center pt-[80px] lg:pt-[100px] pb-16">
        <h1 className="text-white font-semibold text-[clamp(3rem,10vw,10.3rem)] leading-[1.1] tracking-[-0.04em]">
          About Us
        </h1>
        <p className="text-white text-[clamp(0.875rem,1.15vw,1.25rem)] max-w-6xl mt-6 lg:mt-8 leading-relaxed">
          Our team of professional engineers, technicians, and support staff brings deep expertise
          and hands-on experience both locally and internationally. We have proudly served clients
          including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
          of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
        </p>
      </div>
    </section>
  )
}
