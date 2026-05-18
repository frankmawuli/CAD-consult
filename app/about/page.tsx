// ─── About Us page ────────────────────────────────────────────────────────────
// Hero + company overview + "Our Core Values" three-panel grid.
// Navbar and Footer are rendered by app/layout.tsx.

const CORE_VALUES = [
  {
    heading: "Core Objectives",
    body: "CAD Consult GH is a wholly Ghanaian-owned engineering and surveying company incorporated in March 2001, with offices located at the Tycan Office Complex, off Achimota School Road, Accra. For over two decades, we have grown to become a leading provider of innovative positioning solutions and applications software to clients across Ghana and the wider West Africa region.",
  },
  {
    heading: "Our Mission",
    body: "CAD Consult GH is a wholly Ghanaian-owned engineering and surveying company incorporated in March 2001, with offices located at the Tycan Office Complex, off Achimota School Road, Accra. For over two decades, we have grown to become a leading provider of innovative positioning solutions and applications software to clients across Ghana and the wider West Africa region.",
  },
  {
    heading: "Our Vision",
    body: "CAD Consult GH is a wholly Ghanaian-owned engineering and surveying company incorporated in March 2001, with offices located at the Tycan Office Complex, off Achimota School Road, Accra. For over two decades, we have grown to become a leading provider of innovative positioning solutions and applications software to clients across Ghana and the wider West Africa region.",
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[75vh]">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/[0.67]" />

        <div className="relative z-10 text-center px-5 sm:px-8 pt-[68px] lg:pt-[90px] pb-14 sm:pb-24">
          <h1 className="text-white font-semibold text-[clamp(2.5rem,10vw,10.3rem)] tracking-[-0.04em] leading-[1.05]">
            About Us
          </h1>
          <p className="text-white text-[clamp(0.875rem,1.15vw,1.25rem)] max-w-4xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            Our team of professional engineers, technicians, and support staff brings deep expertise
            and hands-on experience both locally and internationally. We have proudly served clients
            including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
            of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among
            many others.
          </p>
        </div>
      </section>

      {/* ── CAD Consult Ghana ────────────────────────────────────────────── */}
      <section className="bg-white py-14 lg:py-20 px-5 sm:px-10 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-semibold text-[#0e3874] text-[1.75rem] sm:text-[2rem] lg:text-[2.4rem] leading-[1.1] mb-5 lg:mb-7">
            CAD Consult Ghana
          </h2>
          <div className="space-y-5 lg:space-y-6 text-black text-justify text-[1rem] lg:text-[1.1rem] leading-[1.47]">
            <p>
              CAD Consult GH is a wholly Ghanaian-owned engineering and surveying company incorporated
              in March 2001, with offices located at the Tycan Office Complex, off Achimota School
              Road, Accra. For over two decades, we have grown to become a leading provider of
              innovative positioning solutions and applications software to clients across Ghana and
              the wider West Africa region.
            </p>
            <p>
              Our operations span three core divisions: Engineering &amp; Consulting Services,
              covering technical feasibility studies, land/aerial/hydrographic surveying, and road
              design; Surveying Equipment Sales &amp; Training, as the authorized Trimble and CHC
              distributor in Ghana and selected West African countries, as well as authorized reseller
              for Autodesk and Eagle Point Software; and Equipment Repair &amp; Maintenance, operating
              a Trimble-certified Level 3 Laboratory — the highest certification level for Trimble
              distributors worldwide.
            </p>
            <p>
              Our team of professional engineers, technicians, and support staff brings deep expertise
              and hands-on experience both locally and internationally. We have proudly served clients
              including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the
              Ministry of Lands and Natural Resources, KNUST, and the Millennium Development
              Authority, among many others.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Core Values ──────────────────────────────────────────────── */}
      <section className="bg-white pb-14 lg:pb-24 px-5 sm:px-10 lg:px-24">
        {/* Section heading */}
        <h2 className="font-semibold text-black text-[clamp(1.75rem,4vw,3.9rem)] tracking-[-0.03em] text-center mb-10 lg:mb-16">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 xl:gap-x-20 gap-y-10 lg:gap-y-14 max-w-[1400px] mx-auto">
          {CORE_VALUES.map(({ heading, body }) => (
            <div key={heading}>
              <h3 className="font-semibold text-[#0e3874] text-[1.5rem] sm:text-[1.9rem] lg:text-[2.4rem] leading-[1.1] mb-4 lg:mb-5">
                {heading}
              </h3>
              <p className="text-black text-justify text-[1rem] lg:text-[1.1rem] leading-[1.47]">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
