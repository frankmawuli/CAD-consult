import { Suspense } from "react"
import ServicesHero from "@/components/sales-and-support/services-hero"
import ServicesSearch from "@/components/sales-and-support/services-search"
import ProductSidebar from "@/components/sales-and-support/product-sidebar"
import ProductsGrid from "@/components/sales-and-support/products-grid"

export default function ServicesPage() {
  return (
    <main className="bg-[#f1f1f1]">
      <ServicesHero />
      <ServicesSearch />

      {/* Sidebar + Products */}
      <section className="px-[5%] pb-16 lg:pb-[5.6rem]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <Suspense>
            <ProductSidebar />
          </Suspense>
          <Suspense>
            <ProductsGrid />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
