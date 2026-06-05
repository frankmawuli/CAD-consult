const stats = [
  { value: "25+", label: "Years of Operation" },
  { value: "900+", label: "Km Of Roads Surveyed" },
  { value: "30+", label: "Road & Survey Projects" },
]

export function AboutStats() {
  return (
    <section className="bg-[#f1f1f1] px-[5%] py-12 lg:py-20">
      <div className="max-w-[1728px] mx-auto text-center">
        <p className="font-semibold text-[#0e3874] text-[clamp(0.8rem,1.2vw,1.95rem)] mb-2 tracking-wide uppercase">
          IMPACT
        </p>
        <h2 className="font-semibold text-black text-[clamp(1.6rem,3.2vw,3.05rem)] tracking-[-0.04em] mb-11 lg:mb-16">
          CAD Consult GH In Numbers
        </h2>

        <div className="flex flex-wrap justify-center gap-5 lg:gap-8">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-[#0e3874] rounded-[8px] flex flex-col items-center justify-center px-8 py-6 min-w-[208px] flex-1 max-w-[328px]"
            >
              <span className="text-white font-semibold text-[clamp(2rem,3.2vw,3.05rem)] tracking-[-0.04em] leading-tight">
                {value}
              </span>
              <span className="text-[#ffc425] font-medium text-[clamp(0.7rem,1.04vw,1.05rem)] mt-1.5">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
