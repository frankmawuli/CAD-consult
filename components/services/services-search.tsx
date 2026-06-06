export default function ServicesSearch() {
  return (
    <section className="flex justify-end px-[5%] py-20">
      <div className="flex items-center border-[2px] border-[#0e3874] rounded-full w-full max-w-3xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-gray-500 shrink-0">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Describe what are you looking for?"
            className="flex-1 py-2.5 text-[clamp(0.7rem,0.8vw,0.85rem)] text-gray-600 placeholder:text-[#6a6a6a] bg-transparent focus:outline-none"
          />
        </div>
        <button className="bg-[#ffc425] text-[#0e3874] font-medium text-[clamp(0.7rem,0.88vw,1.05rem)] px-6 py-2.5 rounded-full m-1 hover:bg-[#e6b020] transition-colors whitespace-nowrap">
          Search
        </button>
      </div>
    </section>
  )
}
