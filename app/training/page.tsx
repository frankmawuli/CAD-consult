import Image from "next/image"

export default function TrainingPage() {
  return (
    <main>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-8">
        <Image
          src="/images/lab-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/[0.59]" />

        <div className="relative z-10 flex flex-col items-center w-full pt-[80px] lg:pt-[100px] pb-16 lg:pb-24">
          <h1 className="text-white font-semibold text-[clamp(3rem,10vw,10.3rem)] leading-[1.1] tracking-[-0.04em] whitespace-nowrap">
            COMING SOON
          </h1>

          <p className="text-white text-[clamp(0.875rem,1.15vw,1.25rem)] max-w-4xl mt-8 lg:mt-12 leading-relaxed">
            Our team of professional engineers, technicians, and support staff brings deep expertise
            and hands-on experience both locally and internationally. We have proudly served clients
            including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
            of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
          </p>

          <div className="mt-10 lg:mt-14 border-[3px] border-white px-10 lg:px-16 py-4 lg:py-5">
            <span className="text-white text-[clamp(1rem,1.8vw,1.9375rem)] font-normal">
              CAD Consult Training Centre
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
