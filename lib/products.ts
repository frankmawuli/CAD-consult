import { prisma } from "@/lib/prisma"
import type { Product, ProductSpec } from "@/app/sales-and-support/products-data"

function toProduct(row: {
  slug: string
  name: string
  fullName: string
  image: string
  category: string
  specs: unknown
}): Product {
  return {
    slug: row.slug,
    name: row.name,
    fullName: row.fullName,
    image: row.image,
    category: row.category,
    specs: (row.specs as ProductSpec[] | null) ?? undefined,
  }
}

export async function getProducts(category?: string): Promise<Product[]> {
  const rows = await prisma.product.findMany({
    where: category ? { category } : undefined,
    orderBy: { slug: "asc" },
  })
  return rows.map(toProduct)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const row = await prisma.product.findUnique({ where: { slug } })
  return row ? toProduct(row) : null
}
