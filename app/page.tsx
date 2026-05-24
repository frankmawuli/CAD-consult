import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IconSlider } from "@/components/icon-slide"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IconSlider />
      <ProjectsSection />
    </main>
  )
}
