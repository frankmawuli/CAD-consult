function ServicePanel({
  imageUrl,
  heading,
  items,
  imageLeft = true,
}: {
  imageUrl: string
  heading: string
  items: string[]
  imageLeft?: boolean
}) {
  const imageBlock = (
    <div className={`relative min-h-[272px] sm:min-h-[368px] lg:min-h-[524px] ${!imageLeft ? "order-first lg:order-last" : ""}`}>
      <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(48deg, rgba(21,40,72,0.97) 7%, rgba(29,48,79,0.52) 55%, rgba(41,60,91,0) 100%)",
        }}
      />
      <ul className="relative z-10 h-full flex flex-col justify-center pl-5 sm:pl-8 lg:pl-11 pr-4 sm:pr-6 lg:pr-8 py-8 lg:py-11 gap-2.5 lg:gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 lg:gap-3">
            <span className="mt-[5px] shrink-0 w-[9px] h-[9px] lg:w-[10px] lg:h-[10px] rounded-full bg-[#ffc425]" />
            <span className="text-white font-medium text-[0.76rem] lg:text-[0.88rem] leading-snug tracking-tight">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )

  const textBlock = (
    <div className="flex items-center justify-center min-h-[176px] sm:min-h-[240px] lg:min-h-[524px] px-6 py-8 lg:p-10 bg-white">
      <h3 className="font-semibold text-[#0e3874] text-[clamp(1.44rem,3.2vw,3.84rem)] leading-[1.05] tracking-[-0.03em] whitespace-pre-line">
        {heading}
      </h3>
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {imageBlock}
      {textBlock}
    </div>
  )
}

export function ServicesSection() {
  return (
    <section className="px-[5%] lg:my-16">
      <div className="bg-white py-16 px-8 text-center my-16">
        <h2 className="font-semibold text-black text-[clamp(1.75rem,3.2vw,3.5rem)] leading-[1.1] tracking-[-0.04em]">
          A Wide Range Of What We Do
        </h2>
      </div>

      <ServicePanel
        imageUrl="/images/engineering-bg.jpg"
        heading={"ENGINEERING AND\nCONSULTING\nSERVICES"}
        items={[
          "Bathymetric Surveying and Hydrographic Surveying",
          "Mining Surveying",
          "Land, Aerial, and Topographical Surveying",
          "Cadastral Surveys for land acquisition and title ownership",
          "Setting out and Geometric Design of Roads",
          "Construction Supervision (bridges, roads)",
          "Project Management",
          "Technical feasibility studies",
        ]}
        imageLeft
      />

      <ServicePanel
        imageUrl="/images/equipment-bg.jpg"
        heading={"EQUIPMENT\nHIRING SERVICES\nAND SALES"}
        items={[
          "Total Stations (Robotic, Autolock, Mechanical)",
          "GPS/GNSS RTK Systems Spectra Precision / Nikon Survey Products",
          "Echo Sounders, Single and Multi-Beam, LiDAR and Aerial Imaging Drones Unmanned Surface Vehicles (USV)",
          "Softwares (AutoCAD, Civil 3D, Map 3D, Agrisoft, Eagle Point Software)",
          "Digital and Automatic Levelling Instruments",
          "CHC GPS and Positioning Equipment",
        ]}
        imageLeft={false}
      />

      <ServicePanel
        imageUrl="/images/lab-bg.jpg"
        heading={"EQUIPMENT\nLABORATORY\nSERVICES"}
        items={[
          "Servicing of Digital/Electric Theodolites",
          "Quarterly Instrument Calibration of Total Stations for Mining Companies",
          "Repairs on Trimble R4 Dual Frequency GPS Receivers",
          "Servicing of Dual Frequency GPS Receivers",
          "Repairs on Handheld GPS devices",
        ]}
        imageLeft
      />
    </section>
  )
}
