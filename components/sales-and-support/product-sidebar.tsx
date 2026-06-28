"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { SlidersHorizontal } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const categories = [
  { label: "All products", slug: "" },
  { label: "GNSS Sensors", slug: "gnss-sensors" },
  { label: "Hydrographic survey equipment", slug: "hydrographic" },
  { label: "Surveying Softwares", slug: "surveying-software" },
  { label: "Manual guidance systems", slug: "manual-guidance" },
  { label: "Machine control services", slug: "machine-control" },
  { label: "Land levelling systems", slug: "land-levelling" },
  { label: "New Arrivals", slug: "new-arrivals", bold: true },
  { label: "Product Support", bold: true, href: "/support" },
  { label: "Laboratory Services", bold: true, href: "/lab-services" },
  { label: "Products For Hiring", slug: "for-hiring", bold: true },
  { label: "Products On Discount", slug: "on-discount", bold: true },
]

function CategoryList({
  activeCategory,
  onSelect,
}: {
  activeCategory: string
  onSelect: (slug: string) => void
}) {
  return (
    <ul className="space-y-3.5">
      {categories.map(({ label, slug, bold, href }) => {
        const active = slug !== undefined && slug === activeCategory
        const className = `text-left text-[clamp(0.65rem,0.76vw,0.85rem)] leading-snug transition-colors ${
          active
            ? "inline-flex items-center gap-2 rounded bg-[#0e3874] px-3 py-1 font-semibold text-white"
            : bold
              ? "font-semibold text-[#6a6a6a] hover:text-[#0e3874]"
              : "font-medium text-[#6a6a6a] hover:text-[#0e3874]"
        }`
        return (
          <li key={label}>
            {href ? (
              <Link href={href} className={className}>
                {label}
              </Link>
            ) : (
              <button className={className} onClick={() => onSelect(slug ?? "")}>
                {active && (
                  <span className="h-4 w-1 shrink-0 rounded-full bg-[#ffc425]" />
                )}
                {label}
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default function ProductSidebar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get("category") ?? ""
  const [open, setOpen] = useState(false)

  function select(slug: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (slug) {
      params.set("category", slug)
    } else {
      params.delete("category")
    }
    const query = params.toString()
    router.replace(`/sales-and-support${query ? `?${query}` : ""}`, { scroll: false })
    setOpen(false)
  }

  return (
    <>
      {/* Mobile: Filter button + sheet drawer */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[#0e3874] text-[#0e3874] text-sm font-medium hover:bg-[#0e3874] hover:text-white transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
              {activeCategory && (
                <span className="h-2 w-2 rounded-full bg-[#ffc425]" />
              )}
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-6">
            <SheetHeader className="p-0 mb-5">
              <SheetTitle className="text-[#0e3874] text-base font-semibold">
                Product Categories
              </SheetTitle>
            </SheetHeader>
            <CategoryList activeCategory={activeCategory} onSelect={select} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block shrink-0 lg:sticky lg:top-24 lg:w-64 lg:self-start">
        <h2 className="mb-4 text-[clamp(0.96rem,1.2vw,1.44rem)] font-semibold whitespace-nowrap text-[#0e3874]">
          Product Categories
        </h2>
        <CategoryList activeCategory={activeCategory} onSelect={select} />
      </aside>
    </>
  )
}
