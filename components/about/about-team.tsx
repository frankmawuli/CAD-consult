const teamMembers = [
  { name: "Team Member", role: "Position" },
  { name: "Team Member", role: "Position" },
  { name: "Team Member", role: "Position" },
  { name: "Team Member", role: "Position" },
  { name: "Team Member", role: "Position" },
  { name: "Team Member", role: "Position" },
]

export function AboutTeam() {
  return (
    <section className="bg-[#f1f1f1] px-[5%] py-12 lg:py-20">
      <div className="max-w-[1728px] mx-auto">
        <h2 className="font-semibold text-black text-[clamp(1.6rem,3.2vw,3.15rem)] tracking-[-0.03em] text-center mb-11 lg:mb-16">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white aspect-[9/11] flex flex-col items-center justify-end p-5 shadow-sm"
            >
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
