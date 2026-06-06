import Image from "next/image"

export default function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <Image
        src="/images/products/hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/67" />
      <div className="relative z-10 pt-16 pb-12">
        <h1 className="text-white font-semibold text-[clamp(2.4rem,8vw,8.24rem)] leading-[1.1] tracking-[-0.04em]">
          SALES
        </h1>
        <p className="text-white text-[clamp(0.7rem,0.92vw,1.25rem)] max-w-4xl mt-5 leading-relaxed mx-auto 2xl:max-w-6xl">
          Our team of professional engineers, technicians, and support staff brings deep expertise
          and hands-on experience both locally and internationally. We have proudly served clients
          including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
          of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
        </p>
      </div>
    </section>
  )
}
