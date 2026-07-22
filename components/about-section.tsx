export function AboutSection() {
  return (
    <section className="bg-white py-11 lg:py-16 px-4 sm:px-8 mt-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="bg-[#d9d9d9] w-full aspect-595/900 flex items-center justify-center">
          <img
            src="/images/about-placeholder.png"
            alt="About CAD Consult"
            className="w-2/3 h-2/3 object-contain opacity-40"
          />
        </div>

        <div className="pt-0 lg:pt-3">
          <h2 className="font-semibold text-[#0e3874] text-[1.52rem] sm:text-[1.84rem] lg:text-[2.2rem] leading-[1.1] mb-4 lg:mb-5 text-center lg:text-left">
            CAD Consult Gh
          </h2>
          <p className="text-black text-justify text-[0.8rem] lg:text-[0.88rem] leading-relaxed mb-4">
            CAD Consult GH is a wholly Ghanaian-owned engineering and surveying company incorporated
            in March 2001, with offices located at the Tycan Office Complex, off Achimota School Road,
            Accra. For over two decades, we have grown to become a leading provider of innovative
            positioning solutions and applications software to clients across Ghana and the wider
            West Africa region.
          </p>
          <p className="text-black text-justify text-[0.8rem] lg:text-[0.88rem] leading-relaxed mb-6 lg:mb-8">
            Our team of professional engineers, technicians, and support staff brings deep expertise
            and hands-on experience both locally and internationally. We have proudly served clients
            including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
            of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
          </p>
          <div className="flex lg:justify-end justify-center">
            <button className="bg-[#ffc425] text-[#0e3874] font-medium text-[0.9rem] lg:text-[1rem] px-6 lg:px-8 py-2.5 lg:py-3 hover:bg-[#0e3874] hover:text-white transition-colors">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
