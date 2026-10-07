"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Check, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { brandAssets } from "@/lib/brand-assets"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const filters = [
  { value: "all", label: "All gardens" },
  { value: "patios", label: "Patios & hardscaping" },
  { value: "family", label: "Family gardens" },
  { value: "small", label: "Small urban spaces" },
  { value: "outdoor", label: "Outdoor living & lighting" },
] as const

type FilterValue = (typeof filters)[number]["value"]

type GardenProject = {
  id: string
  title: string
  location: string
  detail: string
  description: string
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  filters: FilterValue[]
  highlights: string[]
}

const projects: GardenProject[] = [
  {
    id: "northampton-garden",
    title: "A Northampton garden, reimagined",
    location: "Northampton",
    detail: "Patio & lawn transformation",
    description:
      "A tired garden becomes an inviting outdoor room, with a warm sandstone patio, lavender borders, and space to enjoy the lawn.",
    beforeSrc: brandAssets.projects.northampton.before,
    afterSrc: brandAssets.projects.northampton.after,
    beforeAlt: "A Northampton garden before its landscaping transformation.",
    afterAlt: "A finished Northampton garden with a sandstone patio and lavender border.",
    filters: ["family", "outdoor", "patios"],
    highlights: ["Warm sandstone patio", "Lavender planting", "A more useful lawn"],
  },
  {
    id: "family-garden",
    title: "A family garden made to enjoy",
    location: "Northamptonshire",
    detail: "Family garden transformation",
    description:
      "A garden makeover brings a fresh sense of purpose to the outdoor space, with room for family time and relaxed afternoons outside.",
    beforeSrc: brandAssets.projects.family.before,
    afterSrc: brandAssets.projects.family.after,
    beforeAlt: "A family garden before its makeover.",
    afterAlt: "A completed family garden transformation in Northamptonshire.",
    filters: ["family", "outdoor"],
    highlights: ["A refreshed garden layout", "Room for family time", "An inviting outdoor space"],
  },
  {
    id: "stone-courtyard",
    title: "A courtyard with a warmer feel",
    location: "Northamptonshire",
    detail: "Courtyard garden makeover",
    description:
      "A neglected courtyard is reworked with warm sandstone and considered planting to create a calm, welcoming place to pause.",
    beforeSrc: brandAssets.projects.courtyard.before,
    afterSrc: brandAssets.projects.courtyard.after,
    beforeAlt: "A neglected courtyard before landscaping.",
    afterAlt: "A transformed courtyard with warm sandstone and garden planting.",
    filters: ["small", "patios"],
    highlights: ["Warm sandstone paving", "A calmer courtyard", "A considered planting scheme"],
  },
]

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all")
  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.filters.includes(activeFilter))

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-sage/55 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-terracotta">
              Real gardens, thoughtfully reworked
            </p>
            <h2 id="projects-title" className="text-4xl leading-[1.02] text-forest sm:text-5xl lg:text-6xl">
              Gardens, transformed.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-ink-soft sm:text-base">
            Slide through the before and after. Every garden starts with the space you have—and the way you hope to use it.
          </p>
        </Reveal>

        <Tabs
          aria-label="Filter garden transformations"
          value={activeFilter}
          onValueChange={(value) => setActiveFilter(String(value) as FilterValue)}
          className="mt-9 gap-7 sm:mt-12"
        >
          <TabsList
            variant="line"
            className="h-auto w-full flex-wrap justify-start gap-x-4 gap-y-1 overflow-visible rounded-none border-b border-forest/10 p-0 pb-2 sm:gap-x-7"
          >
            {filters.map((filter) => (
              <TabsTrigger
                key={filter.value}
                value={filter.value}
                className="h-auto shrink-0 rounded-none px-1 py-2 text-xs font-semibold text-ink-soft data-active:text-forest after:bottom-[-9px] after:bg-accent sm:text-sm"
              >
                {filter.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeFilter} className="mt-0 focus-visible:outline-none">
            <div className="grid gap-5 md:grid-cols-2">
              {visibleProjects.map((project, index) => (
                <Reveal
                  key={project.id}
                  delay={index * 0.04}
                  className={cn("h-full", index === 0 && "md:col-span-2")}
                >
                  <ProjectCard project={project} featured={index === 0} />
                </Reveal>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-forest/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-ink-soft">Have a space that needs a fresh start?</p>
          <Button variant="accent" size="lg" className="h-11 rounded-full px-5" onClick={() => (window.location.hash = "planner")}>
            Plan my garden transformation
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured = false }: { project: GardenProject; featured?: boolean }) {
  return (
    <Card
      className={cn(
        "h-full overflow-hidden rounded-lg border border-forest/10 bg-card p-0 shadow-none transition-colors hover:border-forest/25",
        featured && "md:grid md:grid-cols-[1.08fr_0.92fr]"
      )}
    >
      <BeforeAfterSlider
        beforeSrc={project.beforeSrc}
        afterSrc={project.afterSrc}
        beforeAlt={project.beforeAlt}
        afterAlt={project.afterAlt}
        priority={featured}
        className={cn(
          "aspect-[1.32] rounded-t-lg",
          featured && "aspect-[1.2] md:h-full md:min-h-[28rem] md:aspect-auto md:rounded-l-lg md:rounded-tr-none"
        )}
      />
      <div className={cn("flex min-w-0 flex-col p-5 sm:p-7", featured && "md:justify-center")}>
        <CardHeader className="gap-2 p-0">
          <p className="inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-terracotta">
            <MapPin aria-hidden="true" className="size-3.5" />
            {project.location}
          </p>
          <CardTitle className={cn("font-display text-xl leading-tight font-medium text-forest sm:text-2xl", featured && "sm:text-3xl")}>
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm leading-6 text-ink-soft">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0 pt-4 pb-0">
          <p className="text-xs font-semibold text-forest">{project.detail}</p>
        </CardContent>
        <CardFooter className={cn("mt-auto justify-between gap-2 border-t border-forest/10 bg-transparent p-0 pt-4", featured && "md:mt-8")}>
          <span className="text-xs font-medium text-ink-soft">Before &amp; after</span>
          <Dialog>
            <DialogTrigger className="inline-flex min-h-10 items-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold text-forest transition-colors hover:bg-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Project notes
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </DialogTrigger>
            <DialogContent className="max-h-[92dvh] max-w-5xl overflow-y-auto p-0">
              <div className="grid md:grid-cols-[1.03fr_0.97fr]">
                <div className="min-h-64 md:min-h-[34rem]">
                  <BeforeAfterSlider
                    beforeSrc={project.beforeSrc}
                    afterSrc={project.afterSrc}
                    beforeAlt={project.beforeAlt}
                    afterAlt={project.afterAlt}
                    className="h-full min-h-64 aspect-[1.1] md:aspect-auto"
                  />
                </div>
                <div className="flex flex-col gap-6 p-6 sm:p-8">
                  <DialogHeader className="gap-3">
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-terracotta">
                      Project notes · {project.location}
                    </span>
                    <DialogTitle className="max-w-sm pr-8 text-3xl text-forest sm:text-4xl">
                      {project.title}
                    </DialogTitle>
                    <DialogDescription>{project.description}</DialogDescription>
                  </DialogHeader>
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-forest">
                      The thoughtful details
                    </p>
                    <ul className="flex flex-col gap-3">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-sm leading-6 text-ink-soft">
                          <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-terracotta" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-auto rounded-lg bg-sage/70 p-4 text-xs leading-6 text-ink-soft">
                    {project.detail}. A considered plan, clear materials, and a garden made to be lived in.
                  </p>
                  <Link
                    href="#planner"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    Plan a garden like this
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </div>
    </Card>
  )
}
