const projects = [
  { title: "Project", location: "Location" },
  { title: "Project", location: "Location" },
  { title: "Project", location: "Location" },
  { title: "Project", location: "Location" },
  { title: "Project", location: "Location" },
  { title: "Project", location: "Location" },
]

export function AboutProjects() {
  return (
    <section className="bg-[#f1f1f1] px-[5%] py-12 lg:py-20">
      <div className="max-w-[1728px] mx-auto">
        <h2 className="font-semibold text-black text-[clamp(1.6rem,3.2vw,3.15rem)] tracking-[-0.03em] text-center mb-11 lg:mb-16">
          Projects We&apos;ve Work On
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white aspect-[9/11] flex flex-col items-center justify-end p-5 shadow-sm"
            >
              <p className="font-semibold text-[#0e3874] text-[0.9rem]">{project.title}</p>
              <p className="text-gray-500 text-xs mt-1">{project.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
