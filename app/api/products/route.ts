import { getProducts } from "@/lib/products"

export async function GET(req: Request) {
  try {
    const category = new URL(req.url).searchParams.get("category") ?? undefined
    const products = await getProducts(category)
    return Response.json({ products })
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
