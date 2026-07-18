"use client"

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
import { CategoryList } from "@/components/sales-and-support/product-sidebar"

export default function MobileFilterButton() {
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Filter products"
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2px] border-[#0e3874] text-[#0e3874] transition-colors hover:bg-[#0e3874] hover:text-white"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {activeCategory && (
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#ffc425]" />
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
  )
}
