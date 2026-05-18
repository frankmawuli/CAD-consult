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
    <div className={`relative min-h-[340px] sm:min-h-[460px] lg:min-h-[655px] ${!imageLeft ? "order-first lg:order-last" : ""}`}>
      <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(48deg, rgba(21,40,72,0.97) 7%, rgba(29,48,79,0.52) 55%, rgba(41,60,91,0) 100%)",
        }}
      />
      <ul className="relative z-10 h-full flex flex-col justify-center pl-6 sm:pl-10 lg:pl-14 pr-5 sm:pr-8 lg:pr-10 py-10 lg:py-14 gap-3 lg:gap-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 lg:gap-4">
            <span className="mt-[6px] flex-shrink-0 w-[11px] h-[11px] lg:w-[13px] lg:h-[13px] rounded-full bg-[#ffc425]" />
            <span className="text-white font-medium text-[0.95rem] lg:text-[1.1rem] leading-snug tracking-tight">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )

  const textBlock = (
    <div className="flex items-center justify-center min-h-[220px] sm:min-h-[300px] lg:min-h-[655px] px-8 py-10 lg:p-12 bg-white">
      <h3 className="font-semibold text-[#0e3874] text-[clamp(1.8rem,4vw,4.8rem)] leading-[1.05] tracking-[-0.03em] whitespace-pre-line">
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
    <section>
      <div className="bg-white py-20 px-10 text-center">
        <h2 className="font-semibold text-black text-[clamp(2.2rem,4vw,4.375rem)] leading-[1.1] tracking-[-0.04em]">
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
          "Echo Sounders, LiDAR and Aerial Imaging Drones",
          "Unmanned Surface Vehicles (USV)",
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
