const categories = [
  { label: "All products",                  active: true  },
  { label: "GNSS Sensors",                  active: false },
  { label: "Hydrographic survey equipment", active: false },
  { label: "Surveying Softwares",           active: false },
  { label: "Manual guidance systems",       active: false },
  { label: "Machine control services",      active: false },
  { label: "Land levelling systems",        active: false },
  { label: "New Arrivals",                  active: false, bold: true },
  { label: "Products For Hiring",           active: false, bold: true },
  { label: "Products On Discount",          active: false, bold: true },
]

export default function ProductSidebar() {
  return (
    <aside className="lg:w-64 shrink-0 lg:sticky lg:top-24 lg:self-start">
      <h2 className="text-[#0e3874] font-semibold text-[clamp(0.96rem,1.2vw,1.44rem)] mb-4 whitespace-nowrap">
        Product Categories
      </h2>
      <ul className="space-y-[14px]">
        {categories.map(({ label, active, bold }) => (
          <li key={label}>
            <button
              className={`text-left text-[clamp(0.65rem,0.76vw,0.85rem)] leading-snug transition-colors ${
                active
                  ? "inline-flex items-center gap-2 font-semibold text-white bg-[#0e3874] px-3 py-1 rounded"
                  : bold
                  ? "font-semibold text-[#6a6a6a] hover:text-[#0e3874]"
                  : "font-medium text-[#6a6a6a] hover:text-[#0e3874]"
              }`}
            >
              {active && (
                <span className="w-1 h-4 bg-[#ffc425] rounded-full shrink-0" />
              )}
              {label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
