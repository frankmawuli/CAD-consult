"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, type FormEvent } from "react"

export default function ServicesSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") ?? "")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    const trimmed = query.trim()
    if (trimmed) {
      params.set("q", trimmed)
    } else {
      params.delete("q")
    }
    const qs = params.toString()
    router.replace(`/sales-and-support${qs ? `?${qs}` : ""}`, { scroll: false })
  }

  return (
    <section className="flex justify-end px-[5%] py-20">
      <form
        onSubmit={handleSubmit}
        className="flex items-center border-[2px] border-[#0e3874] rounded-full w-full max-w-3xl overflow-hidden"
      >
        <div className="flex items-center gap-1.5 px-4 flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-gray-500 shrink-0">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe what are you looking for?"
            className="flex-1 py-2.5 text-[clamp(0.7rem,0.8vw,0.85rem)] text-gray-600 placeholder:text-[#6a6a6a] bg-transparent focus:outline-none"
          />
        </div>
        <button type="submit" className="bg-[#ffc425] text-[#0e3874] font-medium text-[clamp(0.7rem,0.88vw,1.05rem)] px-6 py-2.5 rounded-full m-1 hover:bg-[#e6b020] transition-colors whitespace-nowrap">
          Search
        </button>
      </form>
    </section>
  )
}
