import Image from "next/image"

const countries = [
  { name: "Burkina Faso", flag: "/images/about/flag-burkina-faso.png" },
  { name: "Sierra Leone", flag: "/images/about/flag-sierra-leone.png" },
  { name: "Nigeria",      flag: "/images/about/flag-nigeria.png"      },
  { name: "Guinea",       flag: "/images/about/flag-guinea.png"       },
  { name: "Benin",        flag: "/images/about/flag-benin.png"        },
    { name: "Benin",        flag: "/images/about/flag-benin.png"        },
  { name: "Benin",        flag: "/images/about/flag-benin.png"        },

]

export function AboutMap() {
  return (
    <section className=" px-[5%] py-16 lg:py-24">
      <div className="max-w-[1728px] mx-auto">
        <h2 className="font-semibold text-black text-[clamp(2rem,4vw,3.8125rem)] tracking-[-0.04em] text-center mb-12 lg:mb-16">
          Projects We've Work On
        </h2>

        {/* West Africa Map */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <Image
            src="/images/about/west-africa-map.png"
            alt="West Africa map showing CAD Consult GH operation countries"
            width={1246}
            height={901}
            className="w-full max-w-4xl h-auto"
          />
        </div>

        {/* Country flags */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
        
          {countries.map(({ name, flag }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <Image
                src={flag}
                alt={`Flag of ${name}`}
                width={103}
                height={69}
                className="h-14 w-auto object-cover shadow-sm"
              />
              <span className="font-semibold text-[#0e3874] text-[clamp(0.875rem,1.1vw,1.1875rem)]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
