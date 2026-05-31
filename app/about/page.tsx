import { AboutHero }       from "@/components/about/about-hero"
import { AboutCompany }    from "@/components/about/about-company"
import { AboutCoreValues } from "@/components/about/about-core-values"
import { AboutTeam }       from "@/components/about/about-team"
import { AboutProjects }   from "@/components/about/about-projects"
import { AboutMap }        from "@/components/about/about-map"
import { AboutStats }      from "@/components/about/about-stats"

export default function AboutPage() {
  return (
    <main className="bg-[#f1f1f1] pb-52">
      <AboutHero />
      <AboutCompany />
      <AboutCoreValues />
      <AboutTeam />
      <AboutMap />
      <AboutStats />
    </main>
  )
}
