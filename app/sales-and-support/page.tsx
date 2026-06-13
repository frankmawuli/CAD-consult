import { products } from "./products-data"
import ServicesHero from "@/components/sales-and-support/services-hero"
import ServicesSearch from "@/components/sales-and-support/services-search"
import ProductSidebar from "@/components/sales-and-support/product-sidebar"
import ProductCard from "@/components/sales-and-support/product-card"

export default function ServicesPage() {
  return (
    <main className="bg-[#f1f1f1]">
      <ServicesHero />
      <ServicesSearch />

      {/* Sidebar + Products */}
      <section className="px-[5%] pb-16 lg:pb-[5.6rem]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <ProductSidebar />
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
