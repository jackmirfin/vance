import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { brandAssets } from "@/lib/brand-assets"

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[34rem] overflow-hidden bg-forest text-linen sm:min-h-[40rem]"
    >
      <Image
        src={brandAssets.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_58%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/46 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest/32 via-transparent to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-7xl items-center px-4 py-16 sm:min-h-[40rem] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal className="flex max-w-3xl flex-col items-start">
          <h1
            id="hero-title"
            className="max-w-3xl text-[clamp(3.25rem,7.5vw,6.25rem)] leading-[0.96] text-linen"
          >
            A garden that feels <span className="font-normal italic">like yours.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-linen/90 sm:text-lg sm:leading-8">
            We design and build thoughtful gardens across Northamptonshire—from warm patios to planting plans made for everyday life.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="#planner"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            >
              Book Your Site Consultation
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-linen transition-colors hover:bg-linen/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linen"
            >
              View local transformations
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-linen/30 pt-5 sm:flex-row sm:items-center sm:gap-6">
            <p className="inline-flex items-center gap-2 text-xs font-medium text-linen/90">
              <MapPin aria-hidden="true" className="size-4 text-linen" />
              Working across Northamptonshire
            </p>
            <span aria-hidden="true" className="hidden h-5 w-px bg-linen/35 sm:block" />
            <p className="inline-flex items-center gap-2 text-xs font-medium text-linen/90">
              <CheckCircle2 aria-hidden="true" className="size-4 text-linen" />
              Free first site visit
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
