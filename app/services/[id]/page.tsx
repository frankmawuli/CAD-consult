import Image from "next/image"
import Link from "next/link"

const specs = [
  {
    group: "Measurement",
    items: [
      { label: "Range with prism",     value: "5000m max" },
      { label: "Reflectorless range",  value: "1500 max"  },
    ],
  },
  {
    group: "Display",
    items: [
      { label: "Screen size",       value: '3.1"'       },
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
]

const relatedProducts = [
  { name: "CHCNAV iBase",                                image: "/images/products/chcnav-ibase.png"     },
  { name: "CHCNAV CGI-830",                              image: "/images/products/chcnav-cgi830.png"    },
  { name: "Autodesk Civil 3D:\nInfrastructure Design",   image: "/images/products/software-cgo2.png"    },
  { name: "CHCNAV ViLi i100",                            image: "/images/products/chcnav-vili-i100.png" },
  { name: "Delair-Tech UX5-HP\nAerial Imaging Drone",    image: "/images/products/drone-delair.jpg"     },
  { name: "CHCNAV APACHE 3",                             image: "/images/products/chcnav-apache3.png"   },
  { name: "CHCNAV P5",                                   image: "/images/products/chcnav-p5.png"        },
  { name: "CHCNAV i85",                                  image: "/images/products/chcnav-i85.png"       },
  { name: "AutoCAD Map 3D",                              image: "/images/products/software-cgo2.png"    },
  { name: "CHCNAV CTS-M100",                             image: "/images/products/chcnav-cts-m100.png"  },
  { name: "CHCNAV CTS-A100",                             image: "/images/products/chcnav-cts-a100.png"  },
  { name: "CHCNAV ViLi i100",                            image: "/images/products/chcnav-vili-i100.png" },
]

function RelatedProductCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="bg-white flex flex-col items-center p-5 gap-4">
      <div className="flex items-center justify-center h-[180px] w-full">
        <Image
          src={image}
          alt={name.replace("\n", " ")}
          width={180}
          height={180}
          className="max-h-[180px] w-auto object-contain"
        />
      </div>
      <p className="font-semibold text-black text-[clamp(0.8rem,0.9vw,1rem)] text-center whitespace-pre-line leading-snug min-h-[2.6em] flex items-center">
        {name}
      </p>
      <div className="flex gap-3 mt-auto w-full justify-center">
        <Link
          href="#"
          className="border border-[#0e3874] text-[#0e3874] font-medium text-[0.6875rem] px-3 py-2 rounded-[9px] hover:bg-[#0e3874] hover:text-white transition-colors whitespace-nowrap"
        >
          Product Details
        </Link>
        <Link
          href="#"
          className="bg-[#ffc425] text-white font-medium text-[0.6875rem] px-3 py-2 rounded-[9px] hover:bg-[#e6b020] transition-colors whitespace-nowrap"
        >
          Request Item
        </Link>
      </div>
    </div>
  )
}

export default function ProductDetailsPage() {
  return (
    <main className="bg-[#f1f1f1]">

      {/* ── Breadcrumb ── */}
      <div className="px-[5%] pt-8 pb-4 mt-[80px]">
        <div className="flex items-center gap-2 text-[clamp(0.8rem,0.9vw,1rem)] text-[#6a6a6a]">
          <Link href="/services" className="hover:text-[#0e3874] transition-colors">Products</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#0e3874] transition-colors">GNSS Sensors</Link>
          <span>/</span>
          <span className="text-[#0e3874] font-medium">CHCNAV CTS-A100</span>
        </div>
      </div>

      {/* ── Product Detail ── */}
      <section className="px-[5%] pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Left – product image card */}
          <div className="bg-white w-full lg:w-[420px] xl:w-[500px] flex-shrink-0 flex items-center justify-center p-10 lg:p-14 min-h-[380px] lg:min-h-[500px]">
            <Image
              src="/images/products/chcnav-cts-a100.png"
              alt="CHCNAV CTS-A100 Android-Powered Total Station"
              width={380}
              height={380}
              className="w-full max-w-[320px] lg:max-w-[380px] h-auto object-contain"
            />
          </div>

          {/* Right – title + specs */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="font-semibold text-black text-[clamp(1.5rem,2.8vw,2.8125rem)] leading-[1.15] tracking-[-0.02em]">
              CHCNAV CTS-A100 Android-Powered Total Station for Surveying and Engineering
            </h1>

            {/* Specifications card */}
            <div className="bg-white rounded-[16px] px-8 py-8 lg:py-10">
              <h2 className="font-semibold text-[#0e3874] text-[clamp(1.1rem,1.5vw,1.625rem)] mb-6">
                Detailed Specifications
              </h2>

              <div className="flex flex-col gap-6">
                {specs.map(({ group, items }) => (
                  <div key={group}>
                    <h3 className="font-semibold text-black text-[clamp(0.9rem,1.1vw,1.1875rem)] mb-3">
                      {group}
                    </h3>
                    <div className="space-y-2">
                      {items.map(({ label, value }) => (
                        <div key={label} className="flex items-baseline gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#ffc425] flex-shrink-0 mt-1" />
                          <span className="text-[#6a6a6a] text-[clamp(0.85rem,1vw,1.0625rem)]">
                            <span className="font-medium text-black">{label}:</span>{" "}{value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Request Item button */}
            <div>
              <button className="bg-[#ffc425] text-white font-semibold text-[clamp(1rem,1.3vw,1.3125rem)] w-full sm:w-[325px] h-[71px] rounded-[9px] hover:bg-[#e6b020] transition-colors">
                Request Item
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── You May Also Like ── */}
      <section className="px-[5%] pb-20 lg:pb-28">
        <h2 className="font-semibold text-black text-[clamp(1.5rem,2.5vw,2.5rem)] tracking-[-0.03em] mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {relatedProducts.map((product, i) => (
            <RelatedProductCard key={i} name={product.name} image={product.image} />
          ))}
        </div>
      </section>

    </main>
  )
}
