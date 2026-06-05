import Image from "next/image"

const countries = [
  { name: "Burkina Faso", flag: "/images/about/flag-burkina-faso.png" },
  { name: "Sierra Leone", flag: "/images/about/flag-sierra-leone.png" },
  { name: "Nigeria",      flag: "/images/about/flag-nigeria.png"      },
  { name: "Guinea",       flag: "/images/about/flag-guinea.png"       },
  { name: "Benin",        flag: "/images/about/flag-benin.png"        },
  { name: "Gambia",       flag: "/images/about/gambia-flag.png"       },
  { name: "Gabon",        flag: "/images/about/gabon-flag.png"        },
]

export function AboutMap() {
  return (
    <section className="px-[5%] py-12 lg:py-24">
      <div className="max-w-[1728px] mx-auto">
        <h2 className="font-semibold text-black text-[clamp(1.6rem,3.2vw,3.05rem)] tracking-[-0.04em] text-center mb-10 lg:mb-12">
          Projects We've Work On
        </h2>

        {/* West Africa Map */}
        <div className="flex justify-center mb-10 lg:mb-12">
          <Image
            src="/images/about/globe.svg"
            alt="West Africa map showing CAD Consult GH operation countries"
            width={1246}
            height={901}
            className="w-full max-w-4xl h-auto"
          />
        </div>

        {/* Country flags */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {countries.map(({ name, flag }) => (
            <div key={name} className="flex flex-col items-center gap-2.5">
              <Image
                src={flag}
                alt={`Flag of ${name}`}
                width={103}
                height={69}
                className="h-11 w-auto object-cover shadow-sm"
              />
              <span className="font-semibold text-[#0e3874] text-[clamp(0.7rem,0.88vw,0.95rem)]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
