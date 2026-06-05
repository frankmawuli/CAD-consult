import { HeroSection } from "@/components/hero-section"
import IconSlider from "@/components/icon-slide"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"

export default function Page() {
  return (
    <main className="lg:pb-40">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IconSlider />
      <ProjectsSection />
    </main>
  )
}
