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
    image: "/images/products/spectra-precision-receiver.png",
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

  // GNSS Sensors (additional antennas)
  {
    slug: "base-station-antenna",
    name: "Base Station\nAntenna",
    fullName: "Base Station Antenna",
    image: "/images/products/base-station-antenna.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-high-gain-antenna-kit",
    name: "Trimble High Gain\nAntenna Kit",
    fullName: "Trimble High Gain Antenna Kit",
    image: "/images/products/trimble-high-gain-antenna-kit.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-whip-antenna",
    name: "Trimble Whip\nAntenna",
    fullName: "Trimble Whip Antenna",
    image: "/images/products/trimble-whip-antenna.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-r10-ppk",
    name: "Trimble R10\nPPK",
    fullName: "Trimble R10 PPK",
    image: "/images/products/trimble-r10-ppk.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-antenna",
    name: "Trimble\nAntenna",
    fullName: "Trimble Antenna",
    image: "/images/products/trimble-antenna.png",
    category: "gnss-sensors",
  },

  // Radios
  {
    slug: "trimble-survey-radio-430-450mhz",
    name: "Trimble Survey\n430-450 MHz Unity Elev Feed",
    fullName: "Trimble Survey 430-450 MHz Unity Elev Feed",
    image: "/images/products/trimble-survey-radio-430-450mhz.png",
    category: "gnss-sensors",
  },
  {
    slug: "pacific-crest-radio-adl-vantage-35",
    name: "Pacific Crest External\nRadio 430-473MHz (ADL Vantage 35)",
    fullName: "Pacific Crest External Radio 430-473MHz (ADL Vantage 35)",
    image: "/images/products/pacific-crest-radio-adl-vantage-35.png",
    category: "gnss-sensors",
  },
  {
    slug: "spectra-geospatial-rangers",
    name: "Spectra Geospatial\nRangers",
    fullName: "Spectra Geospatial Rangers",
    image: "/images/products/spectra-geospatial-rangers.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-tdl-radio-450",
    name: "Trimble TDL\nRadio 450",
    fullName: "Trimble TDL Radio 450",
    image: "/images/products/trimble-tdl-radio-450.png",
    category: "gnss-sensors",
  },
  {
    slug: "refurbished-fru-tdl-radio",
    name: "Refurbished FRU,\nTDL, 450 Hx Radio",
    fullName: "Refurbished - FRU, TDL, 450 Hx Radio",
    image: "/images/products/refurbished-fru-tdl-radio.png",
    category: "gnss-sensors",
  },

  // Data Collectors / Controllers
  {
    slug: "trimble-gis-yuma2-128gb",
    name: "Trimble GIS\nYuma 2, 128GB",
    fullName: "Trimble GIS Yuma 2, 128GB",
    image: "/images/products/trimble-gis-yuma2-128gb.png",
    category: "gnss-sensors",
  },
  {
    slug: "comnav-controller-lt35",
    name: "ComNav Controller\n(LT35)",
    fullName: "ComNav Controller (LT35)",
    image: "/images/products/comnav-controller-lt35.png",
    category: "gnss-sensors",
  },
  {
    slug: "comnav-t30-rtk-set",
    name: "ComNav T30\nRTK Set",
    fullName: "ComNav T30 RTK Set",
    image: "/images/products/comnav-t30-rtk-set.png",
    category: "gnss-sensors",
  },
  {
    slug: "sp80-office-power-kit",
    name: "SP80 Office\nPower Kit",
    fullName: "SP80 Office Power Kit",
    image: "/images/products/sp80-office-power-kit.png",
    category: "gnss-sensors",
  },
  {
    slug: "tdc6-handheld-data-collector",
    name: "TDC6 Handheld\nData Collector",
    fullName: "TDC6 Handheld Data Collector",
    image: "/images/products/tdc6-handheld-data-collector.png",
    category: "gnss-sensors",
  },
  {
    slug: "data-logger",
    name: "Data\nLogger",
    fullName: "Data Logger",
    image: "/images/products/data-logger.png",
    category: "gnss-sensors",
  },

  // Total Stations
  {
    slug: "trimble-s9-hp",
    name: "Trimble\nS9 HP",
    fullName: "Trimble S9 HP",
    image: "/images/products/trimble-s9-hp.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-s5",
    name: "Trimble\nS5",
    fullName: "Trimble S5",
    image: "/images/products/trimble-s5.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-c3",
    name: "Trimble\nC3",
    fullName: "Trimble C3",
    image: "/images/products/trimble-c3.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-c5",
    name: "Trimble\nC5",
    fullName: "Trimble C5",
    image: "/images/products/trimble-c5.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-c7x-750",
    name: "Trimble\nC7X 750",
    fullName: "Trimble C7X 750",
    image: "/images/products/trimble-c7x-750.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-tscu5-total-station",
    name: "Trimble TSCU5\nTotal Station",
    fullName: "Trimble TSCU5 Total Station",
    image: "/images/products/trimble-tscu5-total-station.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-digital-theodolite",
    name: "Trimble Digital\nTheodolite",
    fullName: "Trimble Digital Theodolite",
    image: "/images/products/trimble-digital-theodolite.png",
    category: "gnss-sensors",
  },
  {
    slug: "nikon-electronic-digital-theodolite",
    name: "Nikon Electronic\nDigital Theodolite",
    fullName: "Nikon Electronic Digital Theodolite",
    image: "/images/products/nikon-electronic-digital-theodolite.png",
    category: "gnss-sensors",
  },

  // Levels
  {
    slug: "nikon-auto-level-ac2x",
    name: "Nikon Auto\nLevel (AC2X)",
    fullName: "Nikon Auto Level (AC2X)",
    image: "/images/products/nikon-auto-level-ac2x.png",
    category: "land-levelling",
  },
  {
    slug: "nikon-auto-level-ap8",
    name: "Nikon Auto\nLevel (AP8)",
    fullName: "Nikon Auto Level (AP8)",
    image: "/images/products/nikon-auto-level-ap8.png",
    category: "land-levelling",
  },
  {
    slug: "runner-levelling-instrument",
    name: "Runner Levelling\nInstrument",
    fullName: "Runner Levelling Instrument",
    image: "/images/products/runner-levelling-instrument.png",
    category: "land-levelling",
  },
  {
    slug: "inclinometer",
    name: "Inclinometer",
    fullName: "Inclinometer",
    image: "/images/products/inclinometer.png",
    category: "gnss-sensors",
  },

  // Testing Equipment
  {
    slug: "digital-rebound-hammer",
    name: "Digital Rebound\nHammer",
    fullName: "Digital Rebound Hammer",
    image: "/images/products/digital-rebound-hammer.png",
    category: "gnss-sensors",
  },
  {
    slug: "analogue-rebound-hammer",
    name: "Analogue Rebound\nHammer",
    fullName: "Analogue Rebound Hammer",
    image: "/images/products/analogue-rebound-hammer.png",
    category: "gnss-sensors",
  },

  // Accessories / Batteries
  {
    slug: "trimble-m3-batteries",
    name: "Trimble M3\nBatteries",
    fullName: "Trimble M3 Batteries",
    image: "/images/products/trimble-m3-batteries.png",
    category: "gnss-sensors",
  },
  {
    slug: "spectra-precision-mm60",
    name: "Spectra Precision\nMM60",
    fullName: "Spectra Precision MM60",
    image: "/images/products/spectra-precision-mm60.png",
    category: "machine-control",
  },
  {
    slug: "spectra-precision-mm10",
    name: "Spectra Precision\nMM10",
    fullName: "Spectra Precision MM10",
    image: "/images/products/spectra-precision-mm10.png",
    category: "machine-control",
  },
  {
    slug: "trimble-sps85-park-out-kit",
    name: "Trimble SPS 85\nPark Out Kit",
    fullName: "Trimble SPS 85 Park Out Kit",
    image: "/images/products/trimble-sps85-park-out-kit.png",
    category: "machine-control",
  },

  // Surveying Software
  {
    slug: "trimble-business-center-base",
    name: "Trimble Business\nCenter Base",
    fullName: "Trimble Business Center Base",
    image: "/images/products/trimble-business-center-base.png",
    category: "surveying-software",
  },
  {
    slug: "trimble-business-center-dongle",
    name: "Trimble Business\nCenter Dongle",
    fullName: "Trimble Business Center Dongle",
    image: "/images/products/trimble-business-center-dongle.png",
    category: "surveying-software",
  },

  // Field Accessories
  {
    slug: "compass",
    name: "Compass",
    fullName: "Compass",
    image: "/images/products/compass.png",
    category: "manual-guidance",
  },
  {
    slug: "optical-square",
    name: "Optical\nSquare",
    fullName: "Optical Square",
    image: "/images/products/optical-square.png",
    category: "manual-guidance",
  },
  {
    slug: "manual-measuring-wheel",
    name: "Manual Measuring\nWheel",
    fullName: "Manual Measuring Wheel",
    image: "/images/products/manual-measuring-wheel.png",
    category: "manual-guidance",
  },
  {
    slug: "digital-measuring-wheel",
    name: "Digital Measuring\nWheel",
    fullName: "Digital Measuring Wheel",
    image: "/images/products/digital-measuring-wheel.png",
    category: "manual-guidance",
  },

  // Measuring Tapes
  {
    slug: "trimble-steel-tape",
    name: "Trimble\nSteel Tape",
    fullName: "Trimble Steel Tape",
    image: "/images/products/trimble-steel-tape.png",
    category: "manual-guidance",
  },
  {
    slug: "50m-fibre-tape",
    name: "50M Fibre\nTape",
    fullName: "50M Fibre Tape",
    image: "/images/products/50m-fibre-tape.png",
    category: "manual-guidance",
  },
  {
    slug: "50m-steel-coated-measuring-tape",
    name: "50M Steel Coated\nMeasuring Tape",
    fullName: "50M Steel Coated Measuring Tape",
    image: "/images/products/50m-steel-coated-measuring-tape.png",
    category: "manual-guidance",
  },
  {
    slug: "50m-nylon-tape-fibre",
    name: "50M Nylon\nTape (Fibre)",
    fullName: "50M Nylon Tape (Fibre)",
    image: "/images/products/50m-nylon-tape-fibre.png",
    category: "manual-guidance",
  },
  {
    slug: "100m-steel-tape",
    name: "100M\nSteel Tape",
    fullName: "100M Steel Tape",
    image: "/images/products/100m-steel-tape.png",
    category: "manual-guidance",
  },
  {
    slug: "30m-steel-tape-nylon-coated",
    name: "30M Steel Tape\nNylon Coated",
    fullName: "30M Steel Tape Nylon Coated",
    image: "/images/products/30m-steel-tape-nylon-coated.png",
    category: "manual-guidance",
  },
  {
    slug: "30m-fibre-glass-tape",
    name: "30M Fibre\nGlass Tape",
    fullName: "30M Fibre Glass Tape",
    image: "/images/products/30m-fibre-glass-tape.png",
    category: "manual-guidance",
  },
  {
    slug: "30m-long-steel-tape",
    name: "30M Long\nSteel Tape",
    fullName: "30M Long Steel Tape",
    image: "/images/products/30m-long-steel-tape.png",
    category: "manual-guidance",
  },
  {
    slug: "50m-steel-tape",
    name: "50M\nSteel Tape",
    fullName: "50M Steel Tape",
    image: "/images/products/50m-steel-tape.png",
    category: "manual-guidance",
  },
  {
    slug: "seco-100m-nylon-steel-tape",
    name: "Seco 100M\nNylon Steel Tape",
    fullName: "Seco 100M Nylon Steel Tape",
    image: "/images/products/seco-100m-nylon-steel-tape.png",
    category: "manual-guidance",
  },
  {
    slug: "seco-60m-steel-tape",
    name: "Seco 60M\nSteel Tape",
    fullName: "Seco 60M Steel Tape",
    image: "/images/products/seco-60m-steel-tape.png",
    category: "manual-guidance",
  },
  {
    slug: "33-inch-seco-measuring-tape",
    name: '33" Seco\nMeasuring Tape',
    fullName: '33" Seco Measuring Tape',
    image: "/images/products/33-inch-seco-measuring-tape.png",
    category: "manual-guidance",
  },
  {
    slug: "12-inch-seco-measuring-tape",
    name: '12" Seco\nMeasuring Tape',
    fullName: '12" Seco Measuring Tape',
    image: "/images/products/12-inch-seco-measuring-tape.png",
    category: "manual-guidance",
  },
  {
    slug: "3-meter-tapes",
    name: "3 Meter\nTapes",
    fullName: "3 Meter Tapes",
    image: "/images/products/3-meter-tapes.png",
    category: "manual-guidance",
  },

  // Levelling Staffs
  {
    slug: "5m-aluminium-levelling-staff",
    name: "5.0M Aluminium\nLevelling Staff",
    fullName: "5.0M Aluminium Levelling Staff",
    image: "/images/products/5m-aluminium-levelling-staff.png",
    category: "land-levelling",
  },
  {
    slug: "5m-level-staff-with-bubble",
    name: "5M Level Staff\nWith Bubble",
    fullName: "5M Level Staff With Bubble",
    image: "/images/products/5m-level-staff-with-bubble.png",
    category: "land-levelling",
  },

  // Traverse & Survey Kits
  {
    slug: "traverse-kit",
    name: "Traverse\nKit",
    fullName: "Traverse Kit",
    image: "/images/products/traverse-kit.png",
    category: "gnss-sensors",
  },
  {
    slug: "seco-traverse-kit",
    name: "Seco Traverse\nKit",
    fullName: "Seco Traverse Kit",
    image: "/images/products/seco-traverse-kit.png",
    category: "gnss-sensors",
  },
  {
    slug: "trimble-traverse-kit-sx-s-series",
    name: "Trimble Traverse Kit\nFor SX And S Series",
    fullName: "Trimble Traverse Kit For SX And S Series",
    image: "/images/products/trimble-traverse-kit-sx-s-series.png",
    category: "gnss-sensors",
  },
  {
    slug: "marking-pin-set",
    name: "Marking\nPin Set",
    fullName: "Marking Pin Set",
    image: "/images/products/marking-pin-set.png",
    category: "manual-guidance",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
