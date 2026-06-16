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
    slug: "delair-tech-ux5-hp",
    name: "Delair-Tech UX5-HP\nAerial Imaging Drone",
    fullName: "Delair-Tech UX5-HP Aerial Imaging Drone",
    image: "/images/products/drone-delair.jpg",
    category: "machine-control",
    specs: [
      {
        group: "Flight Performance",
        items: [
          { label: "Max flight time",    value: "50 minutes"       },
          { label: "Max range",          value: "50 km"            },
          { label: "Cruise speed",       value: "90 km/h"          },
          { label: "Wind resistance",    value: "up to 45 km/h"    },
        ],
      },
      {
        group: "Camera & Imaging",
        items: [
          { label: "Sensor resolution",  value: "42 MP"            },
          { label: "Ground resolution",  value: "2.5 cm/px @ 120m" },
          { label: "Image format",       value: "JPEG / RAW"       },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Wingspan",           value: "1000 mm"          },
          { label: "Weight",             value: "1.5 kg"           },
          { label: "Operating temp",     value: "-10°C to +45°C"   },
        ],
      },
    ],
  },
  {
    slug: "chcnav-i85",
    name: "CHCNAV i85",
    fullName: "CHCNAV i85 GNSS Receiver",
    image: "/images/products/chcnav-i85.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "GNSS",
        items: [
          { label: "Channels",           value: "672 channels"     },
          { label: "Systems",            value: "GPS, GLONASS, BDS, Galileo, QZSS" },
          { label: "RTK accuracy (Hz)",  value: "8 mm + 1 ppm"     },
          { label: "RTK accuracy (V)",   value: "15 mm + 1 ppm"    },
        ],
      },
      {
        group: "Communication",
        items: [
          { label: "Internal radio",     value: "UHF 410–470 MHz"  },
          { label: "Bluetooth",          value: "4.2"              },
          { label: "4G LTE",             value: "Supported"        },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Weight",             value: "1.08 kg"          },
          { label: "Battery life",       value: "up to 10 hours"   },
          { label: "IP rating",          value: "IP67"             },
        ],
      },
    ],
  },
  {
    slug: "chcnav-vili-i100",
    name: "CHCNAV ViLi i100",
    fullName: "CHCNAV ViLi i100 Mobile Laser Scanner",
    image: "/images/products/chcnav-vili-i100.png",
    category: "hydrographic",
    specs: [
      {
        group: "Scanning",
        items: [
          { label: "Scan rate",          value: "320,000 pts/sec"  },
          { label: "Range",              value: "0.5 m – 100 m"    },
          { label: "Range accuracy",     value: "±2 cm"            },
          { label: "Field of view",      value: "360° × 270°"      },
        ],
      },
      {
        group: "Positioning",
        items: [
          { label: "GNSS systems",       value: "GPS, GLONASS, BDS, Galileo" },
          { label: "IMU update rate",    value: "200 Hz"           },
          { label: "Point accuracy",     value: "3 cm @ 50 m"      },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Weight",             value: "2.1 kg"           },
          { label: "Battery life",       value: "up to 4 hours"    },
          { label: "IP rating",          value: "IP54"             },
        ],
      },
    ],
  },
  {
    slug: "chcnav-ibase",
    name: "CHCNAV iBase",
    fullName: "CHCNAV iBase GNSS Reference Station",
    image: "/images/products/chcnav-ibase.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "GNSS",
        items: [
          { label: "Channels",           value: "800 channels"     },
          { label: "Systems",            value: "GPS, GLONASS, BDS, Galileo, QZSS, SBAS" },
          { label: "Position accuracy",  value: "1.5 m CEP"        },
        ],
      },
      {
        group: "Communication",
        items: [
          { label: "Ethernet",           value: "10/100 Base-T"    },
          { label: "4G LTE",             value: "Supported"        },
          { label: "UHF radio",          value: "410–470 MHz"      },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Weight",             value: "2.2 kg"           },
          { label: "Power input",        value: "9–28 V DC"        },
          { label: "IP rating",          value: "IP67"             },
        ],
      },
    ],
  },
  {
    slug: "chcnav-cgi-830",
    name: "CHCNAV CGI-830",
    fullName: "CHCNAV CGI-830 Machine Control System",
    image: "/images/products/chcnav-cgi830.png",
    category: "machine-control",
    specs: [
      {
        group: "GNSS",
        items: [
          { label: "Systems",            value: "GPS, GLONASS, BDS, Galileo" },
          { label: "RTK accuracy (Hz)",  value: "10 mm + 1 ppm"    },
          { label: "RTK accuracy (V)",   value: "20 mm + 1 ppm"    },
        ],
      },
      {
        group: "Display & Control",
        items: [
          { label: "Screen size",        value: '7" touchscreen'   },
          { label: "Resolution",         value: "1024×600"         },
          { label: "OS",                 value: "Android 9"        },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Weight",             value: "1.35 kg"          },
          { label: "Battery life",       value: "up to 8 hours"    },
          { label: "IP rating",          value: "IP65"             },
        ],
      },
    ],
  },
  {
    slug: "autodesk-civil-3d",
    name: "Autodesk Civil 3D:\nInfrastructure Design Software",
    fullName: "Autodesk Civil 3D: Infrastructure Design Software",
    image: "/images/products/software-cgo2.png",
    category: "surveying-software",
    specs: [
      {
        group: "Design Capabilities",
        items: [
          { label: "Road design",        value: "Alignments, profiles, corridors" },
          { label: "Drainage",           value: "Pipe networks & grading"         },
          { label: "Survey tools",       value: "Points, figures, surfaces"       },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "BIM integration",    value: "Autodesk BIM 360"  },
          { label: "File formats",       value: "DWG, LandXML, SHP" },
          { label: "Platform",           value: "Windows 10/11 64-bit" },
        ],
      },
      {
        group: "System Requirements",
        items: [
          { label: "RAM",                value: "16 GB minimum, 32 GB recommended" },
          { label: "Storage",            value: "10 GB for installation"           },
          { label: "GPU",                value: "4 GB VRAM, DirectX 11"           },
        ],
      },
    ],
  },
  {
    slug: "autocad-map-3d",
    name: "AutoCAD Map 3D",
    fullName: "AutoCAD Map 3D",
    image: "/images/products/software-cgo2.png",
    category: "surveying-software",
    specs: [
      {
        group: "GIS Capabilities",
        items: [
          { label: "Data access",        value: "SHP, GeoJSON, WMS, WFS"   },
          { label: "Coordinate systems", value: "3,000+ supported"         },
          { label: "Topology tools",     value: "Included"                 },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "File formats",       value: "DWG, SHP, GML, KML"       },
          { label: "FDO data stores",    value: "Oracle, SQL Server, MySQL" },
          { label: "Platform",           value: "Windows 10/11 64-bit"      },
        ],
      },
      {
        group: "System Requirements",
        items: [
          { label: "RAM",                value: "8 GB minimum, 16 GB recommended" },
          { label: "Storage",            value: "6 GB for installation"           },
          { label: "GPU",                value: "1 GB VRAM, DirectX 11"          },
        ],
      },
    ],
  },
  {
    slug: "chcnav-apache-3",
    name: "CHCNAV APACHE 3",
    fullName: "CHCNAV APACHE 3 UAV",
    image: "/images/products/chcnav-apache3.png",
    category: "machine-control",
    specs: [
      {
        group: "Flight Performance",
        items: [
          { label: "Max flight time",    value: "35 minutes"       },
          { label: "Max speed",          value: "72 km/h"          },
          { label: "Max altitude",       value: "4500 m AMSL"      },
          { label: "Wind resistance",    value: "up to 12 m/s"     },
        ],
      },
      {
        group: "Payload",
        items: [
          { label: "Max payload",        value: "1.5 kg"           },
          { label: "Camera mount",       value: "3-axis gimbal"    },
          { label: "Supported sensors",  value: "RGB, multispectral, LiDAR" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Wheelbase",          value: "960 mm"           },
          { label: "Weight (no payload)", value: "4.2 kg"          },
          { label: "IP rating",          value: "IP43"             },
        ],
      },
    ],
  },
  {
    slug: "chcnav-cts-a100",
    name: "CHCNAV CTS-A100",
    fullName: "CHCNAV CTS-A100 Android-Powered Total Station for Surveying and Engineering",
    image: "/images/products/chcnav-cts-a100.png",
    category: "manual-guidance",
    specs: [
      {
        group: "Measurement",
        items: [
          { label: "Range with prism",    value: "5000m max" },
          { label: "Reflectorless range", value: "1500 max"  },
        ],
      },
      {
        group: "Display",
        items: [
          { label: "Screen size",       value: '3.1"'         },
          { label: "Screen resolution", value: "LCD, 240×160" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Weight",       value: "5.6 kg"         },
          { label: "Dimensions",   value: "200×200×355 mm" },
          { label: "Battery life", value: "up to 8 hours"  },
        ],
      },
    ],
  },
  {
    slug: "chcnav-cts-m100",
    name: "CHCNAV CTS-M100",
    fullName: "CHCNAV CTS-M100 Motorised Total Station",
    image: "/images/products/chcnav-cts-m100.png",
    category: "machine-control",
    specs: [
      {
        group: "Measurement",
        items: [
          { label: "Angular accuracy",   value: "1\""              },
          { label: "Range with prism",   value: "6000 m"           },
          { label: "Reflectorless range", value: "1000 m"          },
          { label: "Measuring time",     value: "2.4 sec"          },
        ],
      },
      {
        group: "Motorisation",
        items: [
          { label: "Drive type",         value: "Servo motor"      },
          { label: "Search speed",       value: "180°/sec"         },
          { label: "Auto-tracking",      value: "Supported"        },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Weight",             value: "5.9 kg"           },
          { label: "Dimensions",         value: "210×190×360 mm"   },
          { label: "Battery life",       value: "up to 9 hours"    },
          { label: "IP rating",          value: "IP54"             },
        ],
      },
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
