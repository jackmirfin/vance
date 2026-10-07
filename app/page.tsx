import { GardenPlanner } from '@/components/garden-planner'
import { HeroSection } from '@/components/hero-section'
import { ProcessSection } from '@/components/process-section'
import { ProjectGallery } from '@/components/project-gallery'
import { ServicesSection } from '@/components/services-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TrustSection } from '@/components/trust-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ProjectGallery />
        <ProcessSection />
        <ServicesSection />
        <GardenPlanner />
        <TrustSection />
      </main>
      <SiteFooter />
    </>
  )
}

