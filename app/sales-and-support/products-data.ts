export type ProductSpec = {
  group: string
  items: { label: string; value: string }[]
}

export type Product = {
  slug: string
  name: string
  fullName: string
  image: string
  category: string
  specs?: ProductSpec[]
}



