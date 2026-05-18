"use client"

import { useState } from "react"

// ─── Product data ────────────────────────────────────────────────────────────
// The Figma shows 9 placeholder cards all named "Perimeter 8 Drone".
// Replace `name`, `image`, and `slug` with real catalogue data when available.

const ALL_PRODUCTS = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: "Perimeter 8 Drone",
  image: "/images/product-drone.jpg",
  slug: `perimeter-8-drone-${i + 1}`,
}))

// ─── Search icon ─────────────────────────────────────────────────────────────
function SearchIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0e3874"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

// ─── Product card ─────────────────────────────────────────────────────────────
function ProductCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="bg-[#e7e7e7] w-full aspect-[422/432] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" draggable={false} />
      </div>

      {/* Name */}
      <p className="font-semibold text-black text-[1.1rem] text-center mt-3 mb-4">{name}</p>

      {/* Action buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button className="flex-1 h-[38px] sm:h-[42px] border border-[#0e3874] rounded-[11px] text-[#0e3874] font-medium text-[0.82rem] sm:text-[0.95rem] hover:bg-[#0e3874] hover:text-white transition-colors">
          Product Details
        </button>
        <button className="flex-1 h-[38px] sm:h-[42px] bg-[#ffc425] rounded-[11px] text-white font-medium text-[0.82rem] sm:text-[0.95rem] hover:bg-[#e6b020] transition-colors">
          Request Item
        </button>
      </div>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")

  const products = ALL_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearch = () => setSearch(query)

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-[55vh] sm:min-h-[70vh]">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/[0.67]" />
        <div className="relative z-10 text-center px-5 sm:px-8 pt-[68px] lg:pt-[90px] pb-14 sm:pb-24">
          <h1 className="text-white font-semibold text-[clamp(3rem,10vw,10.3rem)] tracking-[-0.04em] leading-[1.05]">
            SALES
          </h1>
          <p className="text-white text-[clamp(0.875rem,1.15vw,1.25rem)] max-w-4xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            Our team of professional engineers, technicians, and support staff brings deep expertise
            and hands-on experience both locally and internationally. We have proudly served clients
            including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
            of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among
            many others.
          </p>
        </div>
      </section>

      {/* ── Toolbar: heading + search ──────────────────────────────────────── */}
      <section className="bg-white px-5 sm:px-10 lg:px-16 pt-10 lg:pt-12 pb-6 lg:pb-8">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-5 lg:gap-6">
          {/* Heading */}
          <h2 className="font-semibold text-[#0e3874] text-[1.5rem] sm:text-[1.75rem] lg:text-[2.1rem] whitespace-nowrap">
            Our Core Services
          </h2>

          {/* Search bar — pill with embedded button */}
          <div className="flex items-center border-[3px] border-[#0e3874] rounded-full overflow-hidden flex-1 max-w-[760px] h-[52px] lg:h-[64px] pl-4 lg:pl-5">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search products…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 bg-transparent outline-none text-[#0e3874] placeholder:text-[#0e3874]/50 text-[0.9rem] lg:text-[1rem] px-2 lg:px-3"
            />
            <button
              onClick={handleSearch}
              className="h-full px-5 lg:px-8 bg-[#ffc425] text-[#0e3874] font-semibold text-[0.95rem] lg:text-[1.1rem] rounded-full hover:bg-[#e6b020] transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ── Product grid ──────────────────────────────────────────────────── */}
      <section className="bg-white px-5 sm:px-10 lg:px-16 pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-10 lg:gap-y-14">
              {products.map((product) => (
                <ProductCard key={product.id} name={product.name} image={product.image} />
              ))}
            </div>
          ) : (
            <p className="text-center text-[#0e3874] text-xl py-20">
              No products match &ldquo;{search}&rdquo;
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
