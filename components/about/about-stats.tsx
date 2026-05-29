const stats = [
  { value: "25+", label: "Years of Operation" },
  { value: "900+", label: "Km Of Roads Surveyed" },
  { value: "30+", label: "Road & Survey Projects" },
]

export function AboutStats() {
  return (
    <section className="bg-[#f1f1f1] px-[5%] py-16 lg:py-24">
      <div className="max-w-[1728px] mx-auto text-center">
        <p className="font-semibold text-[#0e3874] text-[clamp(1rem,1.5vw,2.4375rem)] mb-3 tracking-wide uppercase">
          IMPACT
        </p>
        <h2 className="font-semibold text-black text-[clamp(2rem,4vw,3.8125rem)] tracking-[-0.04em] mb-14 lg:mb-20">
          CAD Consult GH In Numbers
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-[#0e3874] rounded-[10px] flex flex-col items-center justify-center px-10 py-8 min-w-[260px] flex-1 max-w-[410px]"
            >
              <span className="text-white font-semibold text-[clamp(2.5rem,4vw,3.8125rem)] tracking-[-0.04em] leading-tight">
                {value}
              </span>
              <span className="text-[#ffc425] font-medium text-[clamp(0.875rem,1.3vw,1.3125rem)] mt-2">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
