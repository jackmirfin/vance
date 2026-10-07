import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ShieldCheck, Star } from "lucide-react"
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
        className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/65 to-forest/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-forest/10"
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
            Advance Gardens creates thoughtful outdoor spaces—designed around your home, your family, and how you want to spend time outside.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-linen/80">
            From Northampton to the surrounding Northamptonshire communities, every garden begins with a friendly conversation on site.
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
            <div className="flex items-center gap-3">
              <div aria-label="4.9 out of 5 stars" className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} aria-hidden="true" className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-semibold text-linen">
                <span className="text-sm">4.9/5</span> from 120+ local projects
              </p>
            </div>
            <span aria-hidden="true" className="hidden h-5 w-px bg-linen/35 sm:block" />
            <p className="inline-flex items-center gap-2 text-xs font-medium text-linen/85">
              <ShieldCheck aria-hidden="true" className="size-4 text-linen" />
              Fully insured &amp; guaranteed
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
