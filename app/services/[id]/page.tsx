import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products, getProductBySlug, type Product } from "../products-data"

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col items-center gap-4 bg-white p-6">
      <div className="flex h-[220px] w-full items-center justify-center">
        <Image
          src={product.image}
          alt={product.name.replace("\n", " ")}
          width={240}
          height={220}
          className="max-h-[220px] w-auto object-contain"
        />
      </div>
      <p className="flex min-h-[2.8em] items-center text-center text-[clamp(0.875rem,1vw,1.25rem)] leading-snug font-semibold whitespace-pre-line text-black">
        {product.name}
      </p>
      <div className="mt-auto flex w-full justify-center gap-3">
        <Link
          href={`/services/${product.slug}`}
          className="rounded-[9px] border border-[#0e3874] px-3 py-2 text-[0.6875rem] font-medium whitespace-nowrap text-[#0e3874] transition-colors hover:bg-[#0e3874] hover:text-white"
        >
          Product Details
        </Link>
        <Link
          href="/services/request"
          className="rounded-[9px] bg-[#ffc425] px-3 py-2 text-[0.6875rem] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e6b020]"
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
      <section className="lg-py-52 bg-[#f1f1f1] px-[5%] py-16">
        <div className="mx-auto max-w-7xl flex items-center gap-16 py-32">
          {/* Product Image */}
          <div className="w-[45%] shrink-0 flex items-center justify-center border border-gray-200 bg-white p-8 aspect-square">
            <Image
              src={product.image}
              alt={product.fullName}
              width={700}
              height={500}
              priority
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col">
            <h1 className="mb-8 max-w-3xl text-[clamp(1.5rem,2vw,2rem)] leading-tight font-bold text-black">
              {product.fullName}
            </h1>

            <h2 className="mb-8 text-lg font-semibold text-[#0e3874]">
              Detailed Specifications
            </h2>

            {/* Spec Grid */}
            <div className="grid gap-x-16 gap-y-8 md:grid-cols-2">
              {product.specs?.map((group) => (
                <div key={group.group}>
                  <h3 className="mb-3 font-semibold text-[#0e3874]">
                    {group.group}
                  </h3>

                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-start gap-2 text-sm text-[#555]"
                      >
                        <span className="mt-[2px] text-[#ffc425]">•</span>

                        <span>
                          <span className="font-medium">{item.label}</span>{" "}
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
                  className="rounded-md bg-[#ffc425] px-10 py-3 font-semibold text-black transition hover:bg-[#e8b321]"
                >
                  Request Item
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── More Products ── */}
      <section className="px-[5%] py-16 lg:px-52">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {otherProducts.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </section>
    </main>
  )
}
