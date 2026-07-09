"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import type { Product } from "@/app/sales-and-support/products-data"
import ProductCard from "./product-card"

const ITEMS_PER_PAGE = 9

export default function ProductsGrid({ products }: { products: Product[] }) {
  const searchParams = useSearchParams()
  const category = searchParams.get("category") ?? ""
  const query = searchParams.get("q") ?? ""
  const [page, setPage] = useState(1)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPage(1)
  }, [category, query])

  function changePage(next: number) {
    setPage(next)
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const normalizedQuery = query.trim().toLowerCase()

  const filtered = products
    .filter((p) => !category || p.category === category)
    .filter(
      (p) =>
        !normalizedQuery ||
        p.name.toLowerCase().includes(normalizedQuery) ||
        p.fullName.toLowerCase().includes(normalizedQuery) ||
        p.category.toLowerCase().includes(normalizedQuery)
    )

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  return (
    <div ref={gridRef} className="flex-1 flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {paginated.length > 0 ? (
          paginated.map((product, i) => <ProductCard key={i} product={product} />)
        ) : (
          <p className="col-span-full text-center text-[#6a6a6a] py-12">
            {normalizedQuery
              ? `No products found for "${query}".`
              : "No products found in this category."}
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-2 py-24 ">
          <button
            onClick={() => changePage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-[8px] border border-[#0e3874] text-[#0e3874] text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0e3874] hover:text-white transition-colors"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => changePage(p)}
              className={`w-9 h-9 rounded-[8px] text-sm font-medium transition-colors ${
                p === page
                  ? "bg-[#0e3874] text-white"
                  : "border border-[#0e3874] text-[#0e3874] hover:bg-[#0e3874] hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => changePage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-[8px] border border-[#0e3874] text-[#0e3874] text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0e3874] hover:text-white transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
