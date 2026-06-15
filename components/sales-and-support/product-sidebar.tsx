import Link from "next/link"

const categories = [
  { label: "All products", active: true },
  { label: "GNSS Sensors", active: false },
  { label: "Hydrographic survey equipment", active: false },
  { label: "Surveying Softwares", active: false },
  { label: "Manual guidance systems", active: false },
  { label: "Machine control services", active: false },
  { label: "Land levelling systems", active: false },
  { label: "New Arrivals", active: false, bold: true },
  { label: "Product Support", active: false, bold: true, href: "/support" },
  { label: "Laboratory Services", active: false, bold: true, href: "/lab-services" },
  { label: "Products For Hiring", active: false, bold: true },
  { label: "Products On Discount", active: false, bold: true },
]

export default function ProductSidebar() {
  return (
    <aside className="shrink-0 lg:sticky lg:top-24 lg:w-64 lg:self-start">
      <h2 className="mb-4 text-[clamp(0.96rem,1.2vw,1.44rem)] font-semibold whitespace-nowrap text-[#0e3874]">
        Product Categories
      </h2>
      <ul className="space-y-[14px]">
        {categories.map(({ label, active, bold, href }) => {
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
                <button className={className}>
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
    </aside>
  )
}
