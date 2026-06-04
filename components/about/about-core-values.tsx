export function AboutCoreValues() {
  return (
    <section className="bg-[#f1f1f1] px-[5%] pb-16 lg:pb-32">
      <div className="max-w-[1728px] mx-auto">

        {/* Heading */}
        <h2 className="font-semibold text-black text-[clamp(2rem,4vw,3.9375rem)] tracking-[-0.03em] text-center mb-14 lg:mb-20">
          Our Core Values
        </h2>

        {/* Core Objectives + Our Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
          <div>
            <h3 className="text-[#0e3874] font-semibold text-[clamp(1.2rem,2vw,2.4375rem)] mb-4">
              Core Objectives
            </h3>
            <p className="text-black text-[clamp(0.95rem,1.15vw,1.3125rem)] leading-[1.47] text-justify">
              CAD Consult GH is a wholly Ghanaian-owned engineering and surveying company
              incorporated in March 2001, with offices located at the Tycan Office Complex,
              off Achimota School Road, Accra. For over two decades, we have grown to become
              a leading provider of innovative positioning solutions and applications software
              to clients across Ghana and the wider West Africa region.
            </p>
          </div>
          <div>
            <h3 className="text-[#0e3874] font-semibold text-[clamp(1.2rem,2vw,2.4375rem)] mb-4">
              Our Vision
            </h3>
            <p className="text-black text-[clamp(0.95rem,1.15vw,1.3125rem)] leading-[1.47] text-justify">
              CAD Consult GH is a wholly Ghanaian-owned engineering and surveying company
              incorporated in March 2001, with offices located at the Tycan Office Complex,
              off Achimota School Road, Accra. For over two decades, we have grown to become
              a leading provider of innovative positioning solutions and applications software
              to clients across Ghana and the wider West Africa region.
            </p>
          </div>
        </div>

        {/* Our Mission + Download */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h3 className="text-[#0e3874] font-semibold text-[clamp(1.2rem,2vw,2.4375rem)] mb-4">
              Our Mission
            </h3>
            <p className="text-black text-[clamp(0.95rem,1.15vw,1.3125rem)] leading-[1.47] text-justify">
              CAD Consult GH is a wholly Ghanaian-owned engineering and surveying company
              incorporated in March 2001, with offices located at the Tycan Office Complex,
              off Achimota School Road, Accra. For over two decades, we have grown to become
              a leading provider of innovative positioning solutions and applications software
              to clients across Ghana and the wider West Africa region.
            </p>
          </div>

          {/* Download Profile button */}
      
        </div>
      </div>
    </section>
  )
}
