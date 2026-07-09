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
    slug: "plumb-bob",
    name: "Plumb Bob",
    fullName: "Plumb Bob",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/plumb-bob.png",
    category: "accessories",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Body Material", value: "Solid brass, machined, polished and lacquered" },
          { label: "Point Material", value: "Hardened steel, replaceable" },
          { label: "Weight Options", value: "Commonly available from 8 oz up to 32 oz (e.g., 8, 12, 14, 16, 18, 24, 32 oz)" },
          { label: "Example Dimensions (12 oz)", value: "Bob length 5 in, bob width 1-3/8 in" },
        ],
      },
      {
        group: "Cord",
        items: [
          { label: "Example Cord Length", value: "10 ft" },
          { label: "Example Cord Diameter", value: "5/64 in" },
        ],
      },
      {
        group: "Standards & Design",
        items: [
          { label: "Specification Compliance", value: "Conforms to U.S. Government Specification GGG-P-501e" },
          { label: "Point Accuracy", value: "Accurate to within 1/100 inch" },
          { label: "Design Features", value: "Self-centering screw-on cap for cord replacement; storage compartment for spare replaceable point on some models" },
        ],
      },
    ],
  },
  {
    slug: "trimble-tsc5-internal-battery",
    name: "Trimble TSC5\nInternal Battery",
    fullName: "Trimble TSC5 Internal Battery",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/trimble-tsc5-internal-battery.png",
    category: "data-collectors",
    specs: [
      {
        group: "Power",
        items: [
          { label: "Capacity / Voltage", value: "4530 mAh / 7.2V (32.6 Wh) nominal" },
          { label: "Chemistry", value: "Lithium-Ion (Li-Ion)" },
          { label: "Charge Time (Full)", value: "3.5 hours" },
          { label: "Charge Time (50%)", value: "~1.5 hours" },
          { label: "Charging Input", value: "USB Power Delivery, 5V/9V @ 3A via USB-C" },
        ],
      },
      {
        group: "Runtime",
        items: [
          { label: "Typical Use (RTS workflow)", value: "~16 hours" },
          { label: "Typical Use (GNSS workflow)", value: "~18 hours" },
          { label: "Sleep State (full charge)", value: "Up to 7.2 days" },
          { label: "Powered Off State", value: "Over 175 days" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Fits", value: "Trimble TSC5 controller / Ranger 5 data collector" },
          { label: "Serviceability", value: "Internal battery is not user-replaceable (factory/service center only)" },
          { label: "Extended Use Option", value: "Optional removable Li-35 accessory battery pack adds 34.85 Wh" },
        ],
      },
    ],
  },
  {
    slug: "trimble-tsc5-batteries",
    name: "Trimble TSC5\nBatteries",
    fullName: "Trimble TSC5 Batteries",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/trimble-tsc5-batteries.png",
    category: "data-collectors",
    specs: [
      {
        group: "Power",
        items: [
          { label: "Chemistry / Rating", value: "Li-Ion, 4.8Ah / 7.26V" },
          { label: "Runtime (typical use)", value: "Up to 36 hours" },
          { label: "Runtime (sleep mode)", value: "Up to 14 days" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Part Number", value: "120200 (Li-35 extended-use accessory battery pack)" },
          { label: "Fits", value: "Trimble TSC5 controller / Ranger 5 data collector" },
          { label: "Installation", value: "Installs in the controller's dedicated spare/accessory battery compartment, in addition to the internal battery" },
          { label: "Type", value: "User-installable/removable accessory pack (not hot-swappable independent of internal battery)" },
        ],
      },
    ],
  },
  {
    slug: "trimble-tsc2-batteries",
    name: "Trimble TSC2\nBatteries",
    fullName: "Trimble TSC2 Batteries",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/trimble-tsc2-batteries.png",
    category: "data-collectors",
    specs: [
      {
        group: "Power",
        items: [
          { label: "Chemistry", value: "Lithium-Ion (Li-Ion)" },
          { label: "Voltage", value: "3.8V" },
          { label: "Capacity", value: "6600 mAh" },
          { label: "Estimated Runtime", value: "Up to 12 hours per charge" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Dimensions", value: "104.00 x 88.70 x 34.20 mm" },
          { label: "Weight", value: "230.8 g" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Commonly-referenced replacement part number", value: "53701-00" },
          { label: "Fits", value: "Trimble TSC2 controller, TDS Ranger 300 and Ranger 500 data collectors" },
          { label: "Swap Type", value: "Hot-swappable" },
        ],
      },
    ],
  },
  {
    slug: "trimble-tsc3-keypad",
    name: "Trimble TSC3\nKeypad",
    fullName: "Trimble TSC3 Keypad",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/trimble-tsc3-keypad.png",
    category: "data-collectors",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Layout Options", value: "Available in QWERTY layout or ABCDE (alpha-numeric) layout" },
          { label: "Panel Size", value: "Matches TSC3's 4.2 inch controller form factor" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Fits", value: "Trimble TSC3 data collector and Spectra Precision Ranger 3 (shared hardware platform)" },
        ],
      },
    ],
  },
  {
    slug: "trimble-tsc7-batteries",
    name: "Trimble TSC7\nBatteries",
    fullName: "Trimble TSC7 Batteries",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/trimble-tsc7-batteries.png",
    category: "data-collectors",
    specs: [
      {
        group: "Power",
        items: [
          { label: "Chemistry", value: "Lithium-Ion (Li-Ion)" },
          { label: "Voltage", value: "7.27V (also listed as 7.4V nominal by some resellers)" },
          { label: "Capacity", value: "3100 mAh minimum (22.5-22.94 Wh) / 3150 mAh nominal (22.9 Wh)" },
          { label: "Full Charge Time", value: "3.5 hours" },
          { label: "Fast Charge (80%)", value: "~1.75 hours" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Dimensions", value: "74.65 x 44.75 x 33.00 mm" },
          { label: "Weight", value: "127.0 g" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Part Number", value: "121300 (single battery)" },
          { label: "Fits", value: "Trimble TSC7 / T7 tablet controller, Ranger 7" },
          { label: "Configuration", value: "Controller holds 2 removable, hot-swappable batteries in the handle" },
          { label: "Charge Indicator", value: "Onboard charge LED indicator" },
        ],
      },
    ],
  },
  {
    slug: "tsc3-front-cover-platinum",
    name: "TSC3 Front\nCover Platinum",
    fullName: "TSC3 Front Cover Platinum",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/tsc3-front-cover-platinum.png",
    category: "data-collectors",
  },
  {
    slug: "trimble-tsc7-batteries-2",
    name: "Trimble TSC7\nBatteries",
    fullName: "Trimble TSC7 Batteries",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/trimble-tsc7-batteries-2.png",
    category: "data-collectors",
    specs: [
      {
        group: "Power",
        items: [
          { label: "Chemistry", value: "Lithium-Ion (Li-Ion)" },
          { label: "Voltage", value: "7.27V" },
          { label: "Capacity", value: "3100 mAh minimum (22.5-22.94 Wh) / 3150 mAh nominal (22.9 Wh)" },
          { label: "Full Charge Time", value: "3.5 hours" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Dimensions", value: "74.65 x 44.75 x 33.00 mm" },
          { label: "Weight", value: "127.0 g" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Part Number (2-pack)", value: "121320-01-1" },
          { label: "Part Number (single, cross-ref)", value: "121300" },
          { label: "Fits", value: "Trimble TSC7 / T7 tablet controller, Ranger 7" },
        ],
      },
    ],
  },
  {
    slug: "tsc3-front-case-yellow",
    name: "TSC3 Front\nCase Yellow",
    fullName: "TSC3 Front Case Yellow",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/tsc3-front-case-yellow.png",
    category: "data-collectors",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Housing material", value: "Polycarbonate case with Hytrel overmold" },
          { label: "Color", value: "Yellow (hi-vis)" },
          { label: "Part type", value: "Front housing/cover shell replacement" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Fits", value: "Trimble TSC3 data collector front housing assembly (shared platform with Spectra Precision Ranger 3 series)" },
        ],
      },
    ],
  },
  {
    slug: "trimble-tsc3-y0-modules",
    name: "Trimble TSC3\nY0 Modules",
    fullName: "Trimble TSC3 Y0 Modules",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/trimble-tsc3-y0-modules.png",
    category: "data-collectors",
  },
  {
    slug: "tsc3-lite-range-pole-bracket",
    name: "TSC3 Lite Range\nPole Bracket",
    fullName: "TSC3 Lite Range Pole Bracket",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/tsc3-lite-range-pole-bracket.png",
    category: "accessories",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Material", value: "Corrosion-resistant anodized aluminum with stainless steel screws" },
          { label: "OEM part number", value: "82758-10 (\"TSC3 Lightweight Range Pole Bracket\"), dealer SKU 500303" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Fits", value: "Trimble TSC3 controller, mounts to a GNSS range pole" },
          { label: "Official status", value: "Listed as an official optional accessory in Trimble's TSC3 datasheet" },
        ],
      },
    ],
  },
  {
    slug: "trimble-tsc5",
    name: "Trimble TSC5",
    fullName: "Trimble TSC5",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/trimble-tsc5.png",
    category: "data-collectors",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Dimensions", value: "287.1 x 175.6 x 43.9 mm (11.3 x 6.9 x 1.7 in)" },
          { label: "Weight", value: "934 g (2.06 lb), excluding optional removable battery" },
        ],
      },
      {
        group: "Display & Computing",
        items: [
          { label: "Screen", value: "5-inch HD landscape display, 1280 x 720, 365 cd/m² sunlight-readable; multi-touch (finger, stylus, glove)" },
          { label: "OS", value: "Android 10" },
          { label: "Processor", value: "Qualcomm SDA660 (8-core Snapdragon 660, 2.2 GHz) with Adreno 512 GPU" },
          { label: "Memory/Storage", value: "4 GB LPDDR4X RAM, 64 GB Flash eMMC storage" },
        ],
      },
      {
        group: "Power",
        items: [
          { label: "Internal battery", value: "4530 mAh / 7.2V nominal, 32.6 Wh Li-Ion" },
          { label: "Optional removable pack", value: "34.85 Wh accessory battery" },
          { label: "Runtime", value: "Approx. 16-18 hours, workflow dependent" },
          { label: "Charging", value: "Full charge in 3.5 hours via USB-C, 5V/9V 3A" },
        ],
      },
      {
        group: "Connectivity",
        items: [
          { label: "GNSS", value: "Integrated Sierra Wireless EM7565 chipset; GPS/GLONASS/BeiDou/Galileo/QZSS" },
          { label: "Bluetooth", value: "Bluetooth 5 classic & BLE 5, Class 1" },
          { label: "Wi-Fi", value: "2.4 GHz 802.11 b/g/n/ac & 5 GHz 802.11a/n/ac" },
          { label: "Cellular", value: "Optional LTE 4G (worldwide, AT&T/Verizon certified)" },
          { label: "Ports", value: "USB Type-C (data + charging)" },
        ],
      },
      {
        group: "Ruggedness",
        items: [
          { label: "Ingress protection", value: "IPx5 water / IP6x dust" },
          { label: "Operating temperature", value: "-30°C to +60°C; storage to +70°C" },
          { label: "Drop rating", value: "26 drops from 1.22 m (4 ft) onto concrete at room temperature" },
          { label: "Military standard", value: "MIL-STD-810H certified" },
        ],
      },
    ],
  },
  {
    slug: "tsc5-tsc7-pole-clamp-with-adjustable-arm",
    name: "TSC5/TSC7 Pole Clamp\nWith Adjustable Arm",
    fullName: "TSC5/TSC7 Pole Clamp With Adjustable Arm",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/tsc5-tsc7-pole-clamp-with-adjustable-arm.png",
    category: "accessories",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Part number", value: "121951-01 (also listed as 121951-01-GEO)" },
          { label: "Storage form factor", value: "Pole-clamp portion fits inside a 10 cm (4 in) tube for transport" },
          { label: "Adjustability", value: "Adjustable arm attaches to controller bracket with 4 screws; snaps into quick-release pole clamp; multiple arm positions" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Fits", value: "Trimble TSC5, TSC510, TSC7; Spectra Precision Ranger 5, Ranger 7" },
        ],
      },
    ],
  },
  {
    slug: "ranger-5-tsc5-pole-mount-bracket",
    name: "Ranger 5 / TSC5\nPole Mount Bracket",
    fullName: "Ranger 5 / TSC5 Pole Mount Bracket",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/ranger-5-tsc5-pole-mount-bracket.png",
    category: "accessories",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Part number", value: "121952" },
          { label: "Material", value: "Corrosion-resistant aluminum alloy" },
          { label: "Pole clamp range", value: "30.6 mm to 43 mm (1.2 to 1.69 in) OD" },
          { label: "Angle adjustment", value: "12 mounting holes on the pole clip for angle adjustment" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Fits", value: "Trimble TSC5 / TSC510 and Spectra Precision Ranger 5 data collectors" },
        ],
      },
    ],
  },
  {
    slug: "spectra-precision-docking-station",
    name: "Spectra Precision\nDocking Station",
    fullName: "Spectra Precision Docking Station",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/spectra-precision-docking-station.png",
    category: "accessories",
    specs: [
      {
        group: "Function",
        items: [
          { label: "Part number", value: "84419-01 - Ranger 3 / TSC3 Docking Station, Charger" },
          { label: "Purpose", value: "Desk docking cradle for charging and data transfer" },
          { label: "Ports", value: "USB host, USB client, and 10/100 Mbps Ethernet connections" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Fits", value: "Spectra Precision Ranger 3 series data collector and Trimble TSC3 (shared hardware platform)" },
        ],
      },
    ],
  },
  {
    slug: "trimble-tsc3-batteries",
    name: "Trimble TSC3\nBatteries",
    fullName: "Trimble TSC3 Batteries",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/trimble-tsc3-batteries.png",
    category: "data-collectors",
    specs: [
      {
        group: "Power",
        items: [
          { label: "Battery chemistry", value: "Li-Ion rechargeable pack" },
          { label: "Rating", value: "11.1 V, 2600 mAh, 28.9 Wh" },
          { label: "Battery life", value: "Up to 34 hours (backlight on, no radios active, moderate temperature)" },
          { label: "Charge time", value: "Full charge in 3.0 hours" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "OEM part number", value: "82750-00 - Rechargeable Li-Ion Battery incl. Battery Door" },
          { label: "Included as standard", value: "Ships standard with every new TSC3 unit; also sold as spare/replacement" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Fits", value: "Trimble TSC3 data collector (and Spectra Precision Ranger 3 series)" },
        ],
      },
    ],
  },
  {
    slug: "trimble-gps-battery-r8s",
    name: "Trimble GPS\nBattery (R8S)",
    fullName: "Trimble GPS Battery (R8S)",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/trimble-gps-battery-r8s.png",
    category: "gnss-sensors",
    specs: [
      {
        group: "Power",
        items: [
          { label: "Voltage", value: "7.2V (current genuine replacement 192670-02); older OEM packs rated 7.4V" },
          { label: "Capacity", value: "3350 mAh (192670-02); earlier OEM packs (52030/29518/38403/46607) rated ~2600 mAh" },
          { label: "Chemistry", value: "Rechargeable Li-Ion" },
          { label: "OEM/Replacement Part Numbers", value: "192670-02 (current); 52030, 29518, 38403, 46607 (legacy)" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Receivers", value: "R8 (all models), R8s, R780, R580, R4, R4s, R6, and other Trimble 7.2V GPS/GNSS receivers" },
          { label: "Also compatible with", value: "SPS985, SPS986, SPS785, SPS780-SPS882, Spectra SP60/SP80/SP85; works with dual-bay charger 109000" },
        ],
      },
    ],
  },
  {
    slug: "rugged-pad",
    name: "Rugged Pad",
    fullName: "Rugged Pad",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/rugged-pad.png",
    category: "data-collectors",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Display", value: "7-inch multi-touch, sunlight-readable, Gorilla Glass, finger or stylus input" },
          { label: "Ingress Protection", value: "IP65 and IP68" },
          { label: "Ruggedness", value: "MIL-STD-810G rated for drops, vibration, immersion, and temperature extremes" },
        ],
      },
      {
        group: "Compute",
        items: [
          { label: "Processor", value: "Intel Apollo Lake (Pentium, quad-core, 64-bit)" },
          { label: "RAM / Storage", value: "8 GB / 128 GB" },
          { label: "Operating System", value: "Windows 10 Professional" },
        ],
      },
      {
        group: "Connectivity",
        items: [
          { label: "Wireless", value: "4G LTE and Wi-Fi" },
          { label: "Integrated GNSS", value: "u-blox NEO-M8N receiver; GPS/GLONASS/BeiDou (L1)" },
          { label: "Expansion", value: "Dual expansion slots for interchangeable Trimble Empower modules" },
        ],
      },
    ],
  },
  {
    slug: "tribrach-with-optical-plummet",
    name: "Tribrach With\nOptical Plummet",
    fullName: "Tribrach With Optical Plummet",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/tribrach-with-optical-plummet.png",
    category: "accessories",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Weight", value: "1.54-1.55 lbs (0.70 kg)" },
          { label: "Dimensions", value: "approx. 6.7 x 6.7 x 2.7 in (17 x 17 x 7 cm)" },
          { label: "Thread Mount", value: "5/8\"-11 UNC" },
          { label: "Circular Vial", value: "8-minute" },
        ],
      },
      {
        group: "Optical Plummet",
        items: [
          { label: "Magnification", value: "2X" },
          { label: "Focus Range", value: "0.3 m to 15 m (twist-focus)" },
          { label: "Centering Accuracy", value: "0.5 mm per 1.5 m" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Centering", value: "Forced-centering knob, secures instrument/prism directly over survey point" },
          { label: "Tripod Compatibility", value: "SECO aluminum and wooden tripods; standard three-prong tribrach mount" },
        ],
      },
    ],
  },
  {
    slug: "tribrach-with-adapter",
    name: "Tribrach With\nAdapter",
    fullName: "Tribrach With Adapter",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/tribrach-with-adapter.png",
    category: "accessories",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Weight", value: "1.70 lb (0.77 kg)" },
          { label: "Color", value: "Black" },
          { label: "Adjustable Height", value: "100-120 mm" },
        ],
      },
      {
        group: "Optical Plummet",
        items: [
          { label: "Magnification", value: "2.5X, twist-focus" },
          { label: "Centering Accuracy", value: "0.5 mm at 1.5 m" },
        ],
      },
      {
        group: "Adapter",
        items: [
          { label: "Vial", value: "60-second adjustable plate vial for fine leveling" },
          { label: "Rotation", value: "360°" },
          { label: "Prism Compatibility", value: "24.9 mm bayonet-base prisms" },
          { label: "Thread Mount", value: "Standard 5/8\" thread mount" },
        ],
      },
    ],
  },
  {
    slug: "tribrach-without-optical-plummet",
    name: "Tribrach Without\nOptical Plummet",
    fullName: "Tribrach Without Optical Plummet",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/tribrach-without-optical-plummet.png",
    category: "accessories",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Weight", value: "1.55 lb (0.70 kg)" },
          { label: "Thread Mount", value: "5/8\" x 11" },
          { label: "Circular Vial", value: "8-minute" },
          { label: "Color", value: "Grey (also available in black)" },
        ],
      },
      {
        group: "Centering",
        items: [
          { label: "Mechanism", value: "Locking forced-centering knob (no optical plummet)" },
          { label: "Angular Rating", value: "Suitable for TPS instruments rated greater than 3\" angular accuracy" },
        ],
      },
    ],
  },
  {
    slug: "tribrach-rotating-adapter",
    name: "Tribrach Rotating\nAdapter",
    fullName: "Tribrach Rotating Adapter",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/tribrach-rotating-adapter.png",
    category: "accessories",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Weight", value: "Approx. 1.75-1.9 lb (0.8-0.87 kg)" },
          { label: "Material", value: "Anodized black aluminum body with brass/removable center plug" },
          { label: "Color", value: "Black" },
          { label: "Thread Mount", value: "5/8\"-11" },
        ],
      },
      {
        group: "Function",
        items: [
          { label: "Rotation", value: "Removable/rotating center plug with side locking screw" },
          { label: "Compatibility", value: "Fits all standard three-prong tribrachs; mounts prisms, GNSS antennas, tripod-mounted targets" },
        ],
      },
    ],
  },
  {
    slug: "tribrach-rotating-adapter-2",
    name: "Tribrach Rotating\nAdapter",
    fullName: "Tribrach Rotating Adapter",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/tribrach-rotating-adapter-2.png",
    category: "accessories",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Thread Mount", value: "5/8\"-11" },
          { label: "Material", value: "Anodized aluminum body with brass/removable center plug" },
          { label: "Rotation", value: "Removable/rotating center plug with side locking screw" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Fits", value: "Standard three-prong tribrachs; commonly sold as compatible with Trimble, SECO, Topcon, Sokkia, Leica equipment" },
        ],
      },
    ],
  },
  {
    slug: "nikon-tribrach-adapter",
    name: "Nikon Tribrach\nAdapter",
    fullName: "Nikon Tribrach Adapter",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/nikon-tribrach-adapter.png",
    category: "accessories",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Thread Mount", value: "5/8\" x 11 (standard)" },
          { label: "Construction", value: "Aluminum alloy body; three-prong tribrach mount" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Nikon Instruments", value: "Nikon X-Series, Nivo C, Nivo M/M+, NPL-322/322+, Theodolite Mark III Series, NE-100/200, NE-10 Series, NE-20H/20S total stations" },
        ],
      },
    ],
  },
  {
    slug: "prism-adapter-leica-style",
    name: "Prism Adapter\nLeica Style",
    fullName: "Prism Adapter Leica Style",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/prism-adapter-leica-style.png",
    category: "accessories",
    specs: [
      {
        group: "Identification",
        items: [
          { label: "Manufacturer / Model", value: "SECO 2090-10 Quick Change Adapter for Leica GPH1" },
          { label: "Type", value: "Quick-change prism pole adapter for Leica-style (GPH1) prisms" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Target height achieved", value: "150 mm (86 mm Leica GPH1 target height + adapter offset)" },
          { label: "Adapter length", value: "50 mm" },
          { label: "Weight", value: "0.19 lb (0.09 kg)" },
        ],
      },
      {
        group: "Material & Compatibility",
        items: [
          { label: "Bottom thread", value: "5/8\" x 11\"" },
          { label: "Compatibility", value: "SECO Quick Change poles; Leica GPH1 prism targets" },
          { label: "Mechanism", value: "Quick-release coupling" },
        ],
      },
    ],
  },
  {
    slug: "prism-adapter-leica-style-2",
    name: "Prism Adapter\nLeica Style",
    fullName: "Prism Adapter Leica Style",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/prism-adapter-leica-style-2.png",
    category: "accessories",
    specs: [
      {
        group: "Identification",
        items: [
          { label: "Manufacturer / Model", value: "SECO 2080-SS Stainless Steel Leica Prism Pole Adapter" },
          { label: "Type", value: "Snap-on prism adapter, Leica-style mount" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Weight", value: "0.16 lb (0.07 kg)" },
          { label: "Finish", value: "Bare stainless steel (silver-metal finish)" },
        ],
      },
      {
        group: "Material & Compatibility",
        items: [
          { label: "Body material", value: "Stainless steel (corrosion-resistant)" },
          { label: "Thread/mount", value: "5/8\" x 11\" tribrach adapter or prism pole" },
          { label: "Compatibility", value: "Adapts Leica snap-on prisms to standard 5/8 x 11 poles/tribrachs" },
        ],
      },
    ],
  },
  {
    slug: "seco-adapter-ss-monument-11-2in-pipe",
    name: "SECO Adapter SS\nMonument 1-1/2\" Pipe",
    fullName: "SECO Adapter SS Monument 1-1/2\" Pipe",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/seco-adapter-ss-monument-11-2in-pipe.png",
    category: "accessories",
    specs: [
      {
        group: "Identification",
        items: [
          { label: "Manufacturer / Model", value: "SECO 2072-30 Adjustable Tilt Stainless Steel Monument Adapter" },
          { label: "Pipe fitting", value: "1-1/2\" pipe, MPT 1-1/2 x 11-1/2 TPI" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Overall diameter", value: "3.20 in (8.19 cm)" },
          { label: "Overall height", value: "3.036 in (7.71 cm)" },
        ],
      },
      {
        group: "Material & Adjustment",
        items: [
          { label: "Material", value: "303 stainless steel body" },
          { label: "Mounting stud", value: "Removable 5/8\" x 11\" brass stud with azimuth adjustment" },
          { label: "Leveling", value: "Three leveling screws, +/-7° tilt range" },
        ],
      },
    ],
  },
  {
    slug: "seco-masonry-adapter",
    name: "SECO Masonry\nAdapter",
    fullName: "SECO Masonry Adapter",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/seco-masonry-adapter.png",
    category: "accessories",
    specs: [
      {
        group: "Identification",
        items: [
          { label: "Manufacturer / Model", value: "SECO 2072-20 Masonry Mount Adapter" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Weight", value: "1.62 lb (0.73 kg)" },
          { label: "Mounting bolts", value: "3x 3/8\" x 2.5\" bolts" },
        ],
      },
      {
        group: "Material & Installation",
        items: [
          { label: "Material", value: "Anodized aluminum body and stainless steel hardware; brass rotating element" },
          { label: "Installation", value: "Drill three 5/8\" holes into masonry, fill with epoxy, secure adapter" },
          { label: "Adjustment", value: "Brass rotating stud, adjustable and lockable in azimuth" },
        ],
      },
    ],
  },
  {
    slug: "wooden-tripod",
    name: "Wooden Tripod",
    fullName: "Wooden Tripod",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/wooden-tripod.png",
    category: "tripods",
    specs: [
      {
        group: "Physical",
        items: [
          { label: "Extended height", value: "1760 mm (69.3 in)" },
          { label: "Retracted height", value: "1100 mm (43.3 in)" },
          { label: "Weight", value: "6.95 kg (~15.3 lb)" },
          { label: "Head type", value: "Flat head, 160 mm diameter" },
        ],
      },
      {
        group: "Material",
        items: [
          { label: "Leg material", value: "High-quality European hardwood with plastic coating (moisture/swelling resistant)" },
          { label: "Hardware", value: "Powder-coated metal hardware, brass hinge pins" },
          { label: "Feet", value: "Aluminum feet with replaceable steel points" },
        ],
      },
      {
        group: "Compatibility",
        items: [
          { label: "Instrument thread", value: "5/8\"-11 screw, compatible with standard total stations" },
          { label: "Lock mechanism", value: "Dual lock (twist lock + clamp) leg system" },
        ],
      },
    ],
  },
  {
    slug: "thumb-release-tripod",
    name: "Thumb Release\nTripod",
    fullName: "Thumb Release Tripod",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/thumb-release-tripod.png",
    category: "tripods",
    specs: [
      {
        group: "Identification",
        items: [
          { label: "Manufacturer / Model", value: "SECO 5218-02 Original Thumb Release Aluminum Survey Tripod" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Height range", value: "43 in (109 cm) collapsed to 72 in (1.8 m) extended" },
          { label: "Weight", value: "6.00 lb (2.60 kg)" },
        ],
      },
      {
        group: "Material & Mechanism",
        items: [
          { label: "Material", value: "Powder-coated aluminum" },
          { label: "Leg lock", value: "Thumb-release lock/tension mechanism (no disassembly required)" },
          { label: "Head/clamp", value: "Open top clamp, universal, fits poles 1\" to 1.5\" (25.4-38.1 mm) OD" },
        ],
      },
    ],
  },
  {
    slug: "trimble-aluminium-tripod",
    name: "Trimble Aluminium\nTripod",
    fullName: "Trimble Aluminium Tripod",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/trimble-aluminium-tripod.png",
    category: "tripods",
    specs: [
      {
        group: "Identification",
        items: [
          { label: "Manufacturer / Part number", value: "Trimble Navigation Limited, part 2161" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Height range", value: "Adjusts from 3'6\" to 6'1\" (approx. 107-185 cm)" },
        ],
      },
      {
        group: "Material & Mechanism",
        items: [
          { label: "Material", value: "Aluminum with powder-painted castings" },
          { label: "Head type", value: "Available with flat or dome head" },
          { label: "Clamp type", value: "Wing-nut style clamp with positive-locking quick release" },
        ],
      },
    ],
  },
  {
    slug: "mini-aluminium-tripod",
    name: "Mini Aluminium\nTripod",
    fullName: "Mini Aluminium Tripod",
    image: "https://f005.backblazeb2.com/file/Cad-Consult/products/mini-aluminium-tripod.png",
    category: "tripods",
    specs: [
      {
        group: "Identification",
        items: [
          { label: "Manufacturer / Model", value: "SitePro 01-ALW10-B Aluminum Heavy-Duty Mini Tripod" },
        ],
      },
      {
        group: "Physical",
        items: [
          { label: "Extended height", value: "28.5 in (73 cm)" },
          { label: "Collapsed height", value: "22 in (56 cm)" },
        ],
      },
      {
        group: "Material & Mechanism",
        items: [
          { label: "Material", value: "Heavy-duty aluminum legs, powder-coated aluminum castings" },
          { label: "Head type", value: "Flat head with 5/8\"-11 thread mounting bellhousing" },
          { label: "Clamp type", value: "Wing screw clamps" },
          { label: "Feet", value: "Replaceable steel shoe points" },
        ],
      },
    ],
  },
]
