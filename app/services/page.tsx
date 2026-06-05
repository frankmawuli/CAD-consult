import Image from "next/image"
import Link from "next/link"
import { products, type Product } from "./products-data"

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

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white flex flex-col items-center p-5 gap-3">
      <div className="flex items-center justify-center h-[176px] w-full">
        <Image
          src={product.image}
          alt={product.name.replace("\n", " ")}
          width={240}
          height={220}
          className="max-h-[176px] w-auto object-contain"
        />
      </div>
      <p className="font-semibold text-black text-[clamp(0.875rem,1vw,1.25rem)] text-center whitespace-pre-line leading-snug min-h-[2.8em] flex items-center">
        {product.name}
      </p>
      <div className="flex gap-2.5 mt-auto w-full justify-center">
        <Link
          href={`/services/${product.slug}`}
          className="border border-[#0e3874] text-[#0e3874] font-medium text-[0.6875rem] px-3 py-2 rounded-[9px] hover:bg-[#0e3874] hover:text-white transition-colors whitespace-nowrap"
        >
          Product Details
        </Link>
        <Link
          href="/services/request"
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
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <Image
          src="/images/products/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/67" />
        <div className="relative z-10 pt-16 pb-12">
          <h1 className="text-white font-semibold text-[clamp(2.4rem,8vw,8.24rem)] leading-[1.1] tracking-[-0.04em]">
            SALES
          </h1>
          <p className="text-white text-[clamp(0.7rem,0.92vw,1rem)] max-w-6xl mt-5 leading-relaxed mx-auto">
            Our team of professional engineers, technicians, and support staff brings deep expertise
            and hands-on experience both locally and internationally. We have proudly served clients
            including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
            of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
          </p>
        </div>
      </section>

      {/* ── Search Bar ── */}
      <section className="flex justify-end px-[5%] py-20">
        <div className="flex items-center border-[2px] border-[#0e3874] rounded-full w-full max-w-3xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-gray-500 shrink-0">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Describe what are you looking for?"
              className="flex-1 py-2.5 text-[clamp(0.7rem,0.8vw,0.85rem)] text-gray-600 placeholder:text-[#6a6a6a] bg-transparent focus:outline-none"
            />
          </div>
          <button className="bg-[#ffc425] text-[#0e3874] font-medium text-[clamp(0.7rem,0.88vw,1.05rem)] px-6 py-2.5 rounded-full m-1 hover:bg-[#e6b020] transition-colors whitespace-nowrap">
            Search
          </button>
        </div>
      </section>

      {/* ── Sidebar + Products ── */}
      <section className="px-[5%] pb-16 lg:pb-[5.6rem]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-[#0e3874] font-semibold text-[clamp(0.96rem,1.2vw,1.44rem)] mb-4 whitespace-nowrap">
              Product Categories
            </h2>
            <ul className="space-y-[14px]">
              {categories.map(({ label, active, bold }) => (
                <li key={label}>
                  <button
                    className={`text-left text-[clamp(0.65rem,0.76vw,0.85rem)] leading-snug transition-colors ${
                      active
                        ? "inline-flex items-center gap-2 font-semibold text-white bg-[#0e3874] px-3 py-1 rounded"
                        : bold
                        ? "font-semibold text-[#6a6a6a] hover:text-[#0e3874]"
                        : "font-medium text-[#6a6a6a] hover:text-[#0e3874]"
                    }`}
                  >
                    {active && (
                      <span className="w-1 h-4 bg-[#ffc425] rounded-full shrink-0" />
                    )}
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
