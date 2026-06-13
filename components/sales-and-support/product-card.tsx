import Image from "next/image"
import Link from "next/link"
import { type Product } from "@/app/sales-and-support/products-data"

export default function ProductCard({ product }: { product: Product }) {
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
          href={`/sales-and-support/${product.slug}`}
          className="border border-[#0e3874] text-[#0e3874] font-medium text-[0.6875rem] px-3 py-2 rounded-[9px] hover:bg-[#0e3874] hover:text-white transition-colors whitespace-nowrap"
        >
          Product Details
        </Link>
        <Link
          href="/sales-and-support/request"
          className="bg-[#ffc425] text-white font-medium text-[0.6875rem] px-3 py-2 rounded-[9px] hover:bg-[#e6b020] transition-colors whitespace-nowrap"
        >
          Request Item
        </Link>
      </div>
    </div>
  )
}
