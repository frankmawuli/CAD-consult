export type ProductSpec = {
  group: string
  items: { label: string; value: string }[]
}

export type Product = {
  slug: string
  name: string
  fullName: string
  image: string
  category: string
  specs?: ProductSpec[]
}

export const products: Product[] = [
  {
    slug: "trimble-r10-ppk-kit",
    name: "Trimble R10\nPPK Kit",
    fullName: "Trimble R10 PPK Kit",
    image: "/images/products/trimble-r10-ppk-kit.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "GNSS",
        items: [
          { label: "Channels",          value: "440 channels (dual Trimble Maxwell 6 chips)" },
          { label: "Systems",           value: "GPS, GLONASS, BDS, Galileo, QZSS, SBAS" },
          { label: "Positioning mode",  value: "Post-Processed Kinematic (PPK)" },
          { label: "Tilt compensation", value: "SurePoint, up to 15° pole tilt" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Weight",     value: "1.12 kg" },
          { label: "Dimensions", value: "11.9 cm x 13.6 cm" },
          { label: "IP rating",  value: "IP67" },
          { label: "Operating temp", value: "-40°C to +65°C" },
        ],
      },
    ],
  },
  {
    slug: "trimble-r10-internal-batteries",
    name: "Trimble R10\nInternal Batteries",
    fullName: "Trimble R10 Internal Batteries",
    image: "/images/products/trimble-r10-internal-batteries.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "Power",
        items: [
          { label: "Battery type", value: "Removable smart Li-ion" },
          { label: "Voltage / capacity", value: "7.4 V, 3.7 Ah (27.3 Wh)" },
          { label: "Runtime", value: "~3.7-5.5 hours per battery (rover mode)" },
          { label: "Charge time", value: "~3 hours" },
          { label: "Compatibility", value: "Trimble R10 / R12 / R12i GNSS receivers" },
        ],
      },
    ],
  },
  {
    slug: "spectra-precision-receiver",
    name: "Spectra Precision\nReceiver",
    fullName: "Spectra Precision Receiver",
    image: "/images/products/spectra-precision-receiver.jpg",
    category: "gnss-sensors",
    specs: [
      {
        group: "GNSS",
        items: [
          { label: "Technology", value: "Z-Blade GNSS-centric, 240-channel 6G chipset" },
          { label: "Systems",  value: "GPS, GLONASS, BDS, Galileo, QZSS, SBAS (6 systems)" },
          { label: "RTK",      value: "Network and base/rover RTK" },
        ],
      },
      {
        group: "Connectivity & Power",
        items: [
          { label: "Communications", value: "3.5G GSM/UMTS modem, Wi-Fi, Bluetooth, optional UHF radio" },
          { label: "Battery", value: "Hot-swappable, ~10 hours runtime" },
          { label: "Security", value: "Anti-theft motion/tamper alert via SMS/email" },
        ],
      },
    ],
  },
  {
    slug: "zephyr-geodetic-mark2-antenna-kit",
    name: "Zephyr Geodetic\nMark II Antenna Kit",
    fullName: "Zephyr Geodetic Mark II Antenna Kit",
    image: "/images/products/zephyr-geodetic-mark2-antenna-kit.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "Antenna",
        items: [
          { label: "Type",        value: "Geodetic GNSS antenna (Trimble Zephyr Geodetic Model 2)" },
          { label: "Frequencies", value: "L1/L2/L5/G1/G2/E1/E2/E5ab/E6/L-Band" },
          { label: "Systems",     value: "GPS, GLONASS, Galileo, SBAS, OmniSTAR" },
          { label: "Dimensions",  value: "34.3 cm dia x 7.9 cm height, 1.36 kg" },
          { label: "Mount",       value: "5/8\"-11 UNC thread, TNC connector" },
          { label: "Operating temp", value: "-40°C to +70°C" },
          { label: "Use case",    value: "Reference / base station surveying" },
        ],
      },
    ],
  },
  {
    slug: "choke-ring-antenna",
    name: "Choke Ring\nAntenna",
    fullName: "Choke Ring Antenna",
    image: "/images/products/choke-ring-antenna.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "Antenna",
        items: [
          { label: "Type",       value: "Choke ring GNSS antenna (Trimble GNSS-Ti V2)" },
          { label: "Accuracy",   value: "<=2 mm phase-center accuracy, <1 mm repeatability" },
          { label: "Gain",       value: "50 dB antenna gain, 13 dB LNA margin" },
          { label: "Power",      value: "3.5-20 VDC, 440 mW max (via coax from receiver)" },
          { label: "Systems",    value: "GPS, GLONASS, Galileo, BDS, QZSS, IRNSS, SBAS, OmniSTAR, RTX" },
          { label: "Benefit",    value: "JPL 1/4-wave choke ring ground plane reduces multipath" },
        ],
      },
    ],
  },
  {
    slug: "gnss-antenna-trimble",
    name: "GNSS Antenna\n– Trimble",
    fullName: "GNSS Antenna – Trimble",
    image: "/images/products/gnss-antenna-trimble.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "Antenna",
        items: [
          { label: "Model",  value: "Trimble Zephyr 3 Rover (representative model)" },
          { label: "Type",   value: "Lightweight GNSS rover antenna" },
          { label: "Dimensions", value: "16.5 cm dia x 7.6 cm height, 0.64 kg" },
          { label: "Systems", value: "GPS, GLONASS, Galileo, BDS, QZSS, IRNSS, SBAS, MSS" },
          { label: "Mount",  value: "5/8\"-11 thread" },
          { label: "Gain",   value: "50 dB LNA signal gain" },
        ],
      },
    ],
  },
  {
    slug: "trimble-gnss-empty-cases-1",
    name: "Trimble GNSS\nEmpty Case",
    fullName: "Trimble GNSS Empty Case",
    image: "/images/products/trimble-gnss-empty-cases-1.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Material", value: "Hard-shell protective case" },
          { label: "Use",       value: "Storage and transport for GNSS equipment" },
        ],
      },
    ],
  },
  {
    slug: "trimble-catalyst-da1",
    name: "Trimble Catalyst\nDA1",
    fullName: "Trimble Catalyst DA1",
    image: "/images/products/trimble-catalyst-da1.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "GNSS",
        items: [
          { label: "Type",        value: "Software-defined GNSS smart antenna" },
          { label: "Connectivity", value: "Bluetooth to Android device (Trimble Catalyst app)" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Dimensions", value: "130 mm x 60 mm" },
          { label: "Weight",     value: "300 g" },
          { label: "Mount",      value: "5/8\" thread or 1 1/4\" pole" },
          { label: "Operating temp", value: "-20°C to +60°C" },
          { label: "Humidity",   value: "95%, condensing-proof" },
        ],
      },
    ],
  },
  {
    slug: "trimble-external-antenna",
    name: "Trimble External\nAntenna",
    fullName: "Trimble External Antenna",
    image: "/images/products/trimble-external-antenna.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "Antenna",
        items: [
          { label: "Model", value: "Trimble AV33 (representative model)" },
          { label: "Type",  value: "Compact external GNSS antenna" },
          { label: "Dimensions", value: "21 mm (H) x 89 mm (D), 200 g" },
          { label: "Systems", value: "GPS, GLONASS, Galileo, BDS (L1), SBAS" },
          { label: "Mount", value: "4-hole bulkhead or 5/8\" pole bracket" },
          { label: "Connector", value: "TNC female" },
        ],
      },
    ],
  },
  {
    slug: "trimble-gnss-empty-cases-2",
    name: "Trimble GNSS\nEmpty Case",
    fullName: "Trimble GNSS Empty Case",
    image: "/images/products/trimble-gnss-empty-cases-2.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Material", value: "Hard-shell protective case" },
          { label: "Use",       value: "Storage and transport for GNSS equipment" },
        ],
      },
    ],
  },
  {
    slug: "trimble-gnss-empty-cases-3",
    name: "Trimble GNSS\nEmpty Case",
    fullName: "Trimble GNSS Empty Case",
    image: "/images/products/trimble-gnss-empty-cases-3.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Material", value: "Hard-shell protective case" },
          { label: "Use",       value: "Storage and transport for GNSS equipment" },
        ],
      },
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
