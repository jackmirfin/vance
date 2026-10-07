"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, MapPin } from "lucide-react"
import { BeforeAfterSlider } from "@/components/before-after-slider"
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
    id: "maplewood-retreat",
    title: "A backyard made for lingering",
    location: "Maplewood, NJ",
    detail: "Full garden overhaul · 3 weeks",
    description:
      "A once-overlooked yard becomes a calm outdoor room, with a generous stone patio, layered planting, and an easy path back to the house.",
    beforeSrc: "/gardens/maplewood-before.png",
    afterSrc: "/gardens/maplewood-after.png",
    beforeAlt: "Before: cracked concrete and overgrown shrubs in a Maplewood backyard.",
    afterAlt: "After: a welcoming garden with a stone terrace, curved beds, and mature trees.",
    filters: ["family", "outdoor"],
    highlights: ["Curved planting beds", "Natural stone terrace", "A quieter, more useful layout"],
  },
  {
    id: "patio-and-planting",
    title: "A terrace with room to gather",
    location: "Essex County, NJ",
    detail: "Patio & perennial border",
    description:
      "Clear lines, a welcoming table, and generous planting turn a worn patio into an outdoor dining spot that feels connected to the garden.",
    beforeSrc: "/gardens/patio-before.png",
    afterSrc: "/gardens/patio-after.png",
    beforeAlt: "Before: a simple lawn and aging patio with little definition or seating.",
    afterAlt: "After: a warm paved terrace surrounded by layered flowering plants and garden seating.",
    filters: ["patios", "outdoor"],
    highlights: ["Paved dining terrace", "Soft, layered borders", "A clearer garden path"],
  },
  {
    id: "city-courtyard",
    title: "A pocket-sized place to pause",
    location: "Essex County, NJ",
    detail: "Small courtyard transformation",
    description:
      "A compact footprint finds its rhythm with built-in seating, raised beds, and a simple stone palette that makes every corner count.",
    beforeSrc: "/gardens/courtyard-before.png",
    afterSrc: "/gardens/courtyard-after.png",
    beforeAlt: "Before: a bare enclosed courtyard with a plain paved floor and minimal planting.",
    afterAlt: "After: a refined courtyard with built-in timber seating, raised planting, and a compact café table.",
    filters: ["small"],
    highlights: ["Built-in timber bench", "Raised planting beds", "Space-saving layout"],
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
              See what a little more outside can do.
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
            className="w-full justify-start gap-4 overflow-x-auto rounded-none border-b border-forest/10 px-0 pb-2 sm:gap-7"
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
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.07} className="h-full">
                  <ProjectCard project={project} />
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

function ProjectCard({ project }: { project: GardenProject }) {
  return (
    <Card className="h-full rounded-3xl border border-forest/10 bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-30px_rgba(36,40,37,0.55)]">
      <BeforeAfterSlider
        beforeSrc={project.beforeSrc}
        afterSrc={project.afterSrc}
        beforeAlt={project.beforeAlt}
        afterAlt={project.afterAlt}
        className="aspect-[1.32] rounded-t-3xl"
      />
      <CardHeader className="gap-2 px-5 pt-5 sm:px-6 sm:pt-6">
        <p className="inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-terracotta">
          <MapPin aria-hidden="true" className="size-3.5" />
          {project.location}
        </p>
        <CardTitle className="font-display text-2xl leading-tight font-medium text-forest sm:text-[1.7rem]">
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm leading-6 text-ink-soft">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-forest/10 bg-linen px-3 py-1.5 text-[0.65rem] font-medium text-forest">
            {project.detail}
          </span>
          {project.highlights.slice(0, 1).map((highlight) => (
            <span key={highlight} className="inline-flex items-center gap-1.5 rounded-full bg-forest/7 px-3 py-1.5 text-[0.65rem] font-medium text-forest">
              <Check aria-hidden="true" className="size-3.5" />
              {highlight}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t border-forest/10 bg-transparent px-5 py-4 sm:px-6">
        <span className="text-xs font-medium text-ink-soft">Before &amp; after</span>
        <Dialog>
          <DialogTrigger className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-forest transition-colors hover:bg-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
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
                <p className="mt-auto rounded-2xl bg-sage/70 p-4 text-xs leading-6 text-ink-soft">
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
    </Card>
  )
}
