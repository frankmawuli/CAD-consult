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
    <section className="bg-[#f1f1f1] px-[5%] py-16 lg:py-24">
      <div className="max-w-[1728px] mx-auto">
        <h2 className="font-semibold text-black text-[clamp(2rem,4vw,3.9375rem)] tracking-[-0.03em] text-center mb-14 lg:mb-20">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white aspect-[9/11] flex flex-col items-center justify-end p-6 shadow-sm"
            >
              <p className="font-semibold text-[#0e3874] text-lg">{member.name}</p>
              <p className="text-gray-500 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
