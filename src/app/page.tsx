import CustomCursor from '@/components/CustomCursor'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MarqueeBanner from '@/components/MarqueeBanner'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingWidgets from '@/components/FloatingWidgets'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ThemeSwitcher />
      <FloatingWidgets />
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollReveal />
    </>
  )
}
