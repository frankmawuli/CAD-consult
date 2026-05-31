import Image from "next/image"
import Link from "next/link"

const categories = [
  { label: "All products",                  active: true  },
  { label: "GNSS Sensors",                  active: false },
  { label: "Hydrographic survey equipment", active: false },
  { label: "Surveying Softwares",           active: false },
  { label: "Manual guidance systems",       active: false },
  { label: "Machine control services",      active: false },
  { label: "Land levelling systems",        active: false },
  { label: "New Arrivals",                  active: false, bold: true },
  { label: "Products For Hiring",           active: false, bold: true },
  { label: "Products On Discount",          active: false, bold: true },
]

const products = [
  {
    name: "Delair-Tech UX5-HP\nAerial Imaging Drone",
    image: "/images/products/drone-delair.jpg",
    href: "#",
  },
  {
    name: "CHCNAV i85",
    image: "/images/products/chcnav-i85.png",
    href: "#",
  },
  {
    name: "CHCNAV ViLi i100",
    image: "/images/products/chcnav-vili-i100.png",
    href: "#",
  },
  {
    name: "CHCNAV i85",
    image: "/images/products/chcnav-ibase.png",
    href: "#",
  },
  {
    name: "CHCNAV CGI-830",
    image: "/images/products/chcnav-cgi830.png",
    href: "#",
  },
  {
    name: "Autodesk Civil 3D:\nInfrastructure Design Software",
    image: "/images/products/software-cgo2.png",
    href: "#",
  },
  {
    name: "CHCNAV ViLi i100",
    image: "/images/products/chcnav-vili-i100.png",
    href: "#",
  },
  {
    name: "AutoCAD Map 3D",
    image: "/images/products/software-cgo2.png",
    href: "#",
  },
  {
    name: "Delair-Tech UX5-HP\nAerial Imaging Drone",
    image: "/images/products/drone-delair.jpg",
    href: "#",
  },
  {
    name: "CHCNAV APACHE 3",
    image: "/images/products/chcnav-apache3.png",
    href: "#",
  },
  {
    name: "CHCNAV CTS-A100",
    image: "/images/products/chcnav-cts-a100.png",
    href: "/services/chcnav-cts-a100",
  },
  {
    name: "CHCNAV CTS-M100",
    image: "/images/products/chcnav-cts-m100.png",
    href: "#",
  },
]

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="bg-white flex flex-col items-center p-6 gap-4">
      <div className="flex items-center justify-center h-[220px] w-full">
        <Image
          src={product.image}
          alt={product.name.replace("\n", " ")}
          width={240}
          height={220}
          className="max-h-[220px] w-auto object-contain"
        />
      </div>
      <p className="font-semibold text-black text-[clamp(0.875rem,1vw,1.25rem)] text-center whitespace-pre-line leading-snug min-h-[2.8em] flex items-center">
        {product.name}
      </p>
      <div className="flex gap-3 mt-auto w-full justify-center">
        <Link
          href={product.href}
          className="border border-[#0e3874] text-[#0e3874] font-medium text-[0.6875rem] px-3 py-2 rounded-[9px] hover:bg-[#0e3874] hover:text-white transition-colors whitespace-nowrap"
        >
          Product Details
        </Link>
        <Link
          href={product.href}
          className="bg-[#ffc425] text-white font-medium text-[0.6875rem] px-3 py-2 rounded-[9px] hover:bg-[#e6b020] transition-colors whitespace-nowrap"
        >
          Request Item
        </Link>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="bg-[#f1f1f1]">

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-5">
        <Image
          src="/images/products/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/[0.67]" />
        <div className="relative z-10 pt-[80px] pb-16">
          <h1 className="text-white font-semibold text-[clamp(3rem,10vw,10.3rem)] leading-[1.1] tracking-[-0.04em]">
            SALES
          </h1>
          <p className="text-white text-[clamp(0.875rem,1.15vw,1.25rem)] max-w-4xl mt-6 leading-relaxed mx-auto">
            Our team of professional engineers, technicians, and support staff brings deep expertise
            and hands-on experience both locally and internationally. We have proudly served clients
            including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
            of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
          </p>
        </div>
      </section>

      {/* ── Search Bar ── */}
      <section className="flex justify-center px-[5%] py-10">
        <div className="flex items-center border-[3px] border-[#0e3874] rounded-full w-full max-w-3xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-gray-500 flex-shrink-0">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Describe what are you looking for?"
              className="flex-1 py-3 text-[clamp(0.875rem,1vw,1.0625rem)] text-gray-600 placeholder:text-[#6a6a6a] bg-transparent focus:outline-none"
            />
          </div>
          <button className="bg-[#ffc425] text-[#0e3874] font-medium text-[clamp(0.875rem,1.1vw,1.3125rem)] px-8 py-3 rounded-full m-1 hover:bg-[#e6b020] transition-colors whitespace-nowrap">
            Search
          </button>
        </div>
      </section>

      {/* ── Sidebar + Products ── */}
      <section className="px-[5%] pb-20 lg:pb-28">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

          {/* Sidebar */}
          <aside className="lg:w-52 flex-shrink-0">
            <h2 className="text-[#0e3874] font-semibold text-[clamp(1.2rem,1.8vw,2rem)] mb-5">
              Product Categories
            </h2>
            <ul className="space-y-[18px]">
              {categories.map(({ label, active, bold }) => (
                <li key={label} className="flex items-center gap-3">
                  {active && (
                    <span className="w-1 h-4 bg-[#ffc425] rounded-full flex-shrink-0" />
                  )}
                  <button
                    className={`text-left text-[clamp(0.8125rem,0.95vw,1.0625rem)] leading-snug transition-colors ${
                      active
                        ? "font-semibold text-white bg-[#0e3874] px-3 py-1 rounded"
                        : bold
                        ? "font-semibold text-[#6a6a6a] hover:text-[#0e3874]"
                        : "font-medium text-[#6a6a6a] hover:text-[#0e3874]"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
