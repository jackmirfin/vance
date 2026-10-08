import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
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
        <Reveal className="flex w-full max-w-[42rem] flex-col items-start">
          <h1
            id="hero-title"
            className="text-[clamp(1.875rem,9.5vw,2.4rem)] leading-[0.98] text-linen sm:text-[clamp(2.625rem,6.15vw,5rem)]"
          >
            <span className="block whitespace-nowrap">Your favourite place.</span>
            <span className="block whitespace-nowrap font-normal italic">Just outside.</span>
          </h1>
          <p className="mt-5 max-w-[30rem] text-lg leading-7 text-linen/90">
            Garden design and landscaping in Northamptonshire. Beautiful planting, carefully built patios, and space to enjoy every day.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="#planner"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            >
              Plan your garden
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-linen transition-colors hover:bg-linen/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linen"
            >
              Explore our work
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <p className="mt-7 inline-flex items-center gap-2 border-t border-linen/30 pt-4 text-sm font-medium text-linen/90">
            <CheckCircle2 aria-hidden="true" className="size-4 text-linen" />
            Free initial site visit
          </p>
        </Reveal>
      </div>
    </section>
  )
}
