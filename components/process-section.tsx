import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    number: "01",
    title: "Free site visit & chat",
    description:
      "We meet in your garden to hear what you have in mind, understand the space, and talk through priorities and budget.",
  },
  {
    number: "02",
    title: "Concept & 3D design",
    description:
      "See a clear visual plan and a transparent fixed-price estimate before the first stone is moved.",
  },
  {
    number: "03",
    title: "Expert build & planting",
    description:
      "Our local team takes care of the details, from paving and carpentry to the final planting.",
  },
  {
    number: "04",
    title: "Aftercare & enjoyment",
    description:
      "We walk the finished garden with you, share practical care guidance, and include a 5-year structural guarantee.",
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="overflow-hidden bg-forest py-16 text-linen sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#D9A17B]">
              A process with room to breathe
            </p>
            <h2 id="process-title" className="max-w-xl text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
              From first visit to finished garden.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-linen/80 sm:text-base lg:justify-self-end">
            Good projects feel clear from the start. Here is what happens between the first conversation and the last finishing touch.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.04} className="h-full">
              <article className="relative flex h-full flex-col border-t border-linen/20 pt-5 lg:min-h-64">
                <span className="mb-7 font-display text-3xl italic text-[#D9A17B]">{step.number}</span>
                <h3 className="max-w-56 text-2xl leading-tight">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-linen/78">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-linen/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-linen/80">A thoughtful plan. A transparent price. Care in every detail.</p>
          <Link
            href="#planner"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-linen transition-colors hover:text-[#D9A17B] sm:self-auto"
          >
            Start with a site visit
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
