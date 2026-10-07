import Link from "next/link"
import { ArrowRight, ArrowUpRight, ShieldCheck, Star } from "lucide-react"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { Reveal } from "@/components/reveal"

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-linen"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-20">
        <Reveal className="relative z-10 flex flex-col items-start">
          <p className="mb-6 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-terracotta">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            Garden design &amp; landscaping · Maplewood, NJ
          </p>
          <h1
            id="hero-title"
            className="max-w-2xl text-[clamp(3.35rem,7vw,6.25rem)] leading-[0.96] text-forest"
          >
            Bespoke garden design <span className="font-normal italic">for real life.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
            We turn neglected yards and worn patios into soulful, low-maintenance outdoor spaces—thoughtfully designed for your family and the way you live.
          </p>
          <p className="mt-3 max-w-lg text-sm leading-6 text-ink-soft">
            From Maplewood to the surrounding Essex County towns, every garden begins with a friendly conversation on site.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="#planner"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
            >
              Book Your Site Consultation
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-forest transition-colors hover:bg-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View local transformations
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-forest/12 pt-5 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-3">
              <div aria-label="4.9 out of 5 stars" className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} aria-hidden="true" className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-semibold text-ink">
                <span className="text-sm">4.9/5</span> from 120+ local projects
              </p>
            </div>
            <span aria-hidden="true" className="hidden h-5 w-px bg-forest/15 sm:block" />
            <p className="inline-flex items-center gap-2 text-xs font-medium text-ink-soft">
              <ShieldCheck aria-hidden="true" className="size-4 text-forest" />
              Fully insured &amp; guaranteed
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative mx-auto w-full max-w-2xl lg:max-w-none">
          <figure className="relative overflow-hidden rounded-[1.75rem] border border-forest/10 bg-sage shadow-[0_24px_70px_-36px_rgba(36,40,37,0.42)] sm:rounded-[2rem]">
            <BeforeAfterSlider
              beforeSrc="/gardens/maplewood-before.png"
              afterSrc="/gardens/maplewood-after.png"
              beforeAlt="A worn Maplewood backyard with a cracked concrete patio and overgrown planting."
              afterAlt="A finished Maplewood garden with a stone patio, curved planting beds, and a quiet seating area."
              className="aspect-[1.22] sm:aspect-[1.36] lg:aspect-[1.1]"
              initialSplit={47}
              priority
            />
            <figcaption className="absolute inset-x-3 bottom-3 z-10 flex items-end justify-between gap-3 rounded-2xl border border-white/45 bg-linen/90 p-4 shadow-lg backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-5">
              <div>
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-terracotta">
                  A garden, reimagined
                </p>
                <p className="mt-1 font-display text-lg leading-tight text-forest sm:text-2xl">
                  Maplewood backyard retreat
                </p>
              </div>
              <span className="hidden shrink-0 rounded-full bg-forest px-3 py-2 text-[0.65rem] font-semibold text-linen sm:inline-flex">
                Built in 3 weeks
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
