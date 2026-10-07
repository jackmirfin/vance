import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { brandAssets } from "@/lib/brand-assets"

const reassurances = [
  {
    title: "Fully insured",
    description: "Professional cover from the first visit through the final detail.",
    icon: ShieldCheck,
  },
  {
    title: "5-year structural guarantee",
    description: "A little extra confidence in the work built to last.",
    icon: ShieldCheck,
  },
  {
    title: "Rooted in Northamptonshire",
    description: "A local team, working in gardens across the county.",
    icon: MapPin,
  },
]

export function TrustSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="trust-title"
      className="bg-linen py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-terracotta">
              Local by nature
            </p>
            <h2 id="trust-title" className="max-w-xl text-4xl leading-[1.02] text-forest sm:text-5xl lg:text-6xl">
              Local gardens, made personal.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-ink-soft sm:text-base lg:justify-self-end">
            Every garden starts with a conversation about the space, the light, and what you would love to do outside.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <Reveal className="relative min-h-[25rem] overflow-hidden rounded-lg bg-sage sm:min-h-[32rem]">
            <Image
              src={brandAssets.supporting}
              alt="A Northamptonshire garden naturally transformed with considered planting."
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-linen sm:p-8">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.17em] text-linen/80">
                Garden spotlight · Northamptonshire
              </p>
              <h3 className="mt-3 max-w-lg text-3xl leading-tight sm:text-4xl">
                A garden, naturally transformed.
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-linen/85">
                Considered planting brings a softer, more welcoming rhythm to everyday time outdoors.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.04} className="flex flex-col items-start justify-center py-2 lg:py-6">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.17em] text-terracotta">
              The way we work
            </p>
            <h3 className="mt-3 max-w-md text-3xl leading-[1.08] text-forest sm:text-4xl">
              Thoughtful design. Careful craft.
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-ink-soft sm:text-base">
              From the first site visit to the final walkthrough, we keep the process clear and the details considered—so the finished garden feels like it belongs to you.
            </p>
            <Link
              href="#planner"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
            >
              Book Your Site Consultation
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-9 grid gap-4 border-y border-forest/10 py-5 sm:grid-cols-3 sm:divide-x sm:divide-forest/10 sm:gap-0">
          {reassurances.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.title} className="flex items-start gap-3 sm:px-5 first:sm:pl-0 last:sm:pr-0">
                <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-terracotta" />
                <div>
                  <p className="text-sm font-semibold text-forest">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-ink-soft">{item.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
