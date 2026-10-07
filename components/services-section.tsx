"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, Flower2, Layers3, Lightbulb, Waves } from "lucide-react"
import { Reveal } from "@/components/reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const services = [
  {
    value: "patios",
    label: "Patios & hardscaping",
    icon: Layers3,
    title: "Grounded in good materials.",
    description:
      "Create a natural extension of your home with considered paving, clear transitions, and the right places to sit, gather, and move through the garden.",
    image: "/gardens/patio-after.png",
    imageAlt: "A warm stone patio connected to a lush garden with flowering borders.",
    benefits: ["Porcelain and natural stone options", "Paths, steps, and retaining edges", "A layout designed around everyday use"],
  },
  {
    value: "planting",
    label: "Garden design & planting",
    icon: Flower2,
    title: "A little more life in every season.",
    description:
      "Thoughtful planting brings texture, color, and a sense of privacy—chosen for your light, soil, and the time you want to spend caring for it.",
    image: "/gardens/maplewood-after.png",
    imageAlt: "A layered garden border with hydrangeas, ornamental grasses, and a mature tree.",
    benefits: ["Planting plans with year-round interest", "Low-maintenance selections", "A thoughtful balance of lawn and beds"],
  },
  {
    value: "decks",
    label: "Timber decks & pergolas",
    icon: Layers3,
    title: "A little shade, a lot more outside.",
    description:
      "Warm timber and simple structures can add definition, shade, and an inviting place to spend long afternoons outdoors.",
    image: "/gardens/courtyard-after.png",
    imageAlt: "Timber garden seating integrated into a compact planted courtyard.",
    benefits: ["Timber decks and built-in seating", "Pergolas that frame outdoor rooms", "Details designed to sit naturally in the garden"],
  },
  {
    value: "water-lighting",
    label: "Water features & lighting",
    icon: Lightbulb,
    title: "Let the garden carry into evening.",
    description:
      "Soft lighting and the quiet movement of water add another layer to the garden—subtle by day, welcoming after sunset.",
    image: "/gardens/courtyard-after.png",
    imageAlt: "A softly lit courtyard with layered greenery and a calm outdoor seating area.",
    benefits: ["Ambient, low-glare lighting", "Water features sized to the space", "A considered plan for evening use"],
  },
]

const careTips = [
  {
    value: "watering",
    question: "How should I care for new planting?",
    answer:
      "New plants need a steady start. Water deeply at the root zone while they establish, especially during dry spells, and follow the care notes prepared for your planting plan.",
  },
  {
    value: "seasonal",
    question: "What changes with the seasons?",
    answer:
      "A simple seasonal check-in helps: clear tired growth in spring, keep paths tidy through summer, and protect tender plants before the first cold snap. The right timing depends on the plants in your garden.",
  },
  {
    value: "low-maintenance",
    question: "What makes a garden easier to look after?",
    answer:
      "Start with the conditions already in your garden—light, drainage, and soil—then choose durable plants and materials that suit them. A well-planned layout can also reduce awkward edges and unnecessary upkeep.",
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].value)
  const selectedService = services.find((service) => service.value === activeService) ?? services[0]
  const ServiceIcon = selectedService.icon

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-linen py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-terracotta">
            Everything outside, considered
          </p>
          <h2 id="services-title" className="text-4xl leading-[1.02] text-forest sm:text-5xl lg:text-6xl">
            The right pieces for your kind of garden.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-ink-soft sm:text-base">
            A complete transformation or one thoughtful improvement—we bring the same care to every part of the plan.
          </p>
        </Reveal>

        <Tabs
          aria-label="Explore garden design services"
          value={activeService}
          onValueChange={(value) => setActiveService(String(value))}
          className="mt-9 gap-7 sm:mt-12"
        >
          <TabsList
            variant="line"
            className="w-full justify-start gap-4 overflow-x-auto rounded-none border-b border-forest/10 px-0 pb-2 sm:gap-7"
          >
            {services.map((service) => (
              <TabsTrigger
                key={service.value}
                value={service.value}
                className="h-auto shrink-0 rounded-none px-1 py-2 text-xs font-semibold text-ink-soft data-active:text-forest after:bottom-[-9px] after:bg-accent sm:text-sm"
              >
                {service.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeService} className="mt-0 focus-visible:outline-none">
            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="relative overflow-hidden rounded-3xl border border-forest/10 bg-sage shadow-sm">
                <div className="relative aspect-[1.35] sm:aspect-[1.55]">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-white/50 bg-linen/90 px-4 py-3 shadow-sm backdrop-blur-md sm:bottom-5 sm:left-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-forest text-linen">
                    <ServiceIcon aria-hidden="true" className="size-4" />
                  </span>
                  <span className="text-xs font-semibold text-forest">Made for the way you live</span>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.17em] text-terracotta">
                  {selectedService.label}
                </p>
                <h3 className="mt-3 max-w-lg text-3xl leading-[1.08] text-forest sm:text-4xl">
                  {selectedService.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft sm:text-base">
                  {selectedService.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {selectedService.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-ink">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-sage text-forest">
                        <Check aria-hidden="true" className="size-3" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#planner"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-linen transition-colors hover:bg-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Talk through your project
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 grid gap-8 border-t border-forest/10 pt-12 lg:mt-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:pt-16">
          <Reveal className="max-w-md">
            <p className="mb-4 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-terracotta">
              <Waves aria-hidden="true" className="size-4" />
              Care that keeps the good going
            </p>
            <h3 className="text-3xl leading-tight text-forest sm:text-4xl">
              Maintenance &amp; seasonal care tips.
            </h3>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Small, timely habits help a new garden settle in beautifully. Open a note for a few practical starting points.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="rounded-3xl border border-forest/10 bg-card p-0 shadow-sm">
              <CardHeader className="px-5 pb-4 pt-5 sm:px-7 sm:pt-7">
                <CardTitle className="text-lg font-semibold text-forest">A little guidance, season by season</CardTitle>
                <CardDescription className="text-sm leading-6 text-ink-soft">
                  Helpful basics for a garden that is just getting established.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pb-5 sm:px-7 sm:pb-7">
                <Accordion multiple defaultValue={["watering"]} className="border-t border-forest/10">
                  {careTips.map((tip) => (
                    <AccordionItem key={tip.value} value={tip.value} className="border-b border-forest/10">
                      <AccordionTrigger className="py-4 text-left text-sm font-semibold text-forest hover:no-underline">
                        {tip.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-6 text-ink-soft">
                        {tip.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
