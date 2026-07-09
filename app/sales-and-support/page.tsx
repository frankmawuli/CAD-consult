import { Suspense } from "react"
import ServicesHero from "@/components/sales-and-support/services-hero"
import ServicesSearch from "@/components/sales-and-support/services-search"
import ProductSidebar from "@/components/sales-and-support/product-sidebar"
import ProductsGrid from "@/components/sales-and-support/products-grid"
import { getProducts } from "@/lib/products"

export default async function ServicesPage() {
  const products = await getProducts()

  return (
    <main className="bg-[#f1f1f1]">
      <ServicesHero />
      <ServicesSearch />

      {/* Sidebar + Products */}
      <section className="px-[5%] pb-16 lg:pb-[500px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 ">
          <Suspense>
            <ProductSidebar />
          </Suspense>
          <Suspense>
            <ProductsGrid products={products} />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
