export function AboutSection() {
  return (
    <section className="bg-white py-14 lg:py-20 px-5 sm:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="bg-[#d9d9d9] w-full aspect-[595/571] flex items-center justify-center">
          <img
            src="/images/about-placeholder.png"
            alt="About CAD Consult"
            className="w-2/3 h-2/3 object-contain opacity-40"
          />
        </div>

        <div className="pt-0 lg:pt-4">
          <h2 className="font-semibold text-[#0e3874] text-[1.9rem] sm:text-[2.3rem] lg:text-[2.75rem] leading-[1.1] mb-5 lg:mb-6">
            CAD Consult Gh
          </h2>
          <p className="text-black text-justify text-[1rem] lg:text-[1.1rem] leading-relaxed mb-5">
            CAD Consult GH is a wholly Ghanaian-owned engineering and surveying company incorporated
            in March 2001, with offices located at the Tycan Office Complex, off Achimota School Road,
            Accra. For over two decades, we have grown to become a leading provider of innovative
            positioning solutions and applications software to clients across Ghana and the wider
            West Africa region.
          </p>
          <p className="text-black text-justify text-[1rem] lg:text-[1.1rem] leading-relaxed mb-8 lg:mb-10">
            Our team of professional engineers, technicians, and support staff brings deep expertise
            and hands-on experience both locally and internationally. We have proudly served clients
            including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
            of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
          </p>
          <button className="bg-[#ffc425] text-[#0e3874] font-medium text-lg lg:text-xl px-8 lg:px-10 py-3 lg:py-4 hover:bg-[#0e3874] hover:text-white transition-colors">
            Read more
          </button>
        </div>
      </div>
    </section>
  )
}
