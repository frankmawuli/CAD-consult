import Image from "next/image"

export function AboutCompany() {
  return (
    <section className="bg-[#f1f1f1] px-[5%] py-16 lg:py-32">
      <div className="max-w-[1728px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Text */}
        <div>
          <h2 className="text-[#0e3874] font-semibold text-[clamp(1.5rem,2.5vw,2.4375rem)] mb-6">
            CAD Consult Ghana
          </h2>
          <div className="space-y-5 text-black text-[clamp(0.95rem,1.15vw,1.3125rem)] leading-[1.47] text-justify">
            <p>
              CAD Consult GH is a wholly Ghanaian-owned engineering and surveying company
              incorporated in March 2001, with offices located at the Tycan Office Complex,
              off Achimota School Road, Accra. For over two decades, we have grown to become
              a leading provider of innovative positioning solutions and applications software
              to clients across Ghana and the wider West Africa region.
            </p>
            <p>
              Our operations span three core divisions: Engineering &amp; Consulting Services,
              covering technical feasibility studies, land/aerial/hydrographic surveying, and
              road design; Surveying Equipment Sales &amp; Training, as the authorized Trimble
              and CHC distributor in Ghana and selected West African countries, as well as
              authorized reseller for Autodesk and Eagle Point Software; and Equipment Repair
              &amp; Maintenance, operating a Trimble-certified Level 3 Laboratory — the highest
              certification level for Trimble distributors worldwide.
            </p>
            <p>
              Our team of professional engineers, technicians, and support staff brings deep
              expertise and hands-on experience both locally and internationally. We have
              proudly served clients including the Ghana Highway Authority, Newmont Ghana Gold,
              Anglogold Ashanti, the Ministry of Lands and Natural Resources, KNUST, and the
              Millennium Development Authority, among many others.
            </p>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="bg-[#d9d9d9] rounded-sm flex items-center justify-center aspect-[4/3] w-full">
          <Image
            src="/images/about-placeholder.png"
            alt="CAD Consult office"
            width={419}
            height={500}
            className="w-2/3 h-auto object-contain opacity-50"
          />
        </div>
      </div>
    </section>
  )
}
