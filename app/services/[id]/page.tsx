import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products, getProductBySlug, type Product } from "../products-data"

function ProductCard({ product }: { product: Product }) {
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

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProductBySlug(id)
  if (!product) notFound()

  const otherProducts = products.filter((p) => p.slug !== product.slug)

  return (
    <main className="bg-[#f1f1f1]">

      {/* ── Detail Panel ── */}
  {/* ── Detail Panel ── */}
<section className="bg-[#f1f1f1] px-[5%] pt-[calc(80px+2.5rem)] pb-16">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-[420px_1fr] gap-10 items-start">

    {/* Product Image */}
    <div className="border-[1px]  bg-white p-8 flex items-center justify-center min-h-[400px]">
      <Image
        src={product.image}
        alt={product.fullName}
        width={350}
        height={350}
        priority
        className="object-contain h-[390px] w-auto"
      />
    </div>

    {/* Product Info */}
    <div className="flex flex-col">
      <h1 className="text-black font-bold text-[clamp(1.5rem,2vw,2rem)] leading-tight mb-8 max-w-3xl">
        {product.fullName}
      </h1>

      <h2 className="text-[#0e3874] font-semibold text-lg mb-8">
        Detailed Specifications
      </h2>

      {/* Spec Grid */}
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">

        {product.specs?.map((group) => (
          <div key={group.group}>
            <h3 className="font-semibold text-[#0e3874] mb-3">
              {group.group}
            </h3>

            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-2 text-sm text-[#555]"
                >
                  <span className="text-[#ffc425] mt-[2px]">•</span>

                  <span>
                    <span className="font-medium">
                      {item.label}
                    </span>{" "}
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Button occupies the next grid cell (right col, last row) */}
        <div className="flex items-end">
          <Link
            href="/services/request"
            className="bg-[#ffc425] text-black font-semibold px-10 py-3 rounded-md hover:bg-[#e8b321] transition"
          >
            Request Item
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ── More Products ── */}
      <section className="px-[5%] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {otherProducts.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </section>

    </main>
  )
}
