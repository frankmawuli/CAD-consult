import Image from "next/image"

export default function TrainingPage() {
  return (
    <main>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 mb-32">
        <Image
          src="/images/training.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/59" />

        <div className="relative z-10 flex flex-col items-center w-full pt-16 lg:pt-20 pb-12 lg:pb-20">
          <h1 className="text-white font-semibold text-[clamp(2.4rem,8vw,8.24rem)] leading-[1.1] tracking-[-0.04em] whitespace-nowrap">
            COMING SOON
          </h1>

          <p className="text-white text-[clamp(0.7rem,0.92vw,1.25rem)] max-w-4xl mt-5 leading-relaxed mx-auto 2xl:max-w-6xl">
            Our team of professional engineers, technicians, and support staff brings deep expertise
            and hands-on experience both locally and internationally. We have proudly served clients
            including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
            of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
          </p>

          <div className="mt-4 lg:mt-8 border-[2px] border-white px-8 lg:px-12 py-3 lg:py-4 text-white hover:bg-white hover:text-[#0e3874] transition-colors">
            <span className="text-[clamp(0.8rem,1.44vw,1.55rem)] font-normal">
              CAD Consult Training Centre
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
