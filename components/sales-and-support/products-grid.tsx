"use client"

import { useSearchParams } from "next/navigation"
import { products } from "@/app/sales-and-support/products-data"
import ProductCard from "./product-card"

export default function ProductsGrid() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category") ?? ""

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {filtered.length > 0 ? (
        filtered.map((product, i) => <ProductCard key={i} product={product} />)
      ) : (
        <p className="col-span-full text-center text-[#6a6a6a] py-12">
          No products found in this category.
        </p>
      )}
    </div>
  )
}
