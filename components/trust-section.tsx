import Link from "next/link"
import { ArrowUpRight, MapPin, ShieldCheck, Star } from "lucide-react"
import { Reveal } from "@/components/reveal"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


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
              Good work is worth talking about.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-ink-soft sm:text-base lg:justify-self-end">
            From the first site visit to the final walkthrough, we keep the work personal, clear, and rooted in the neighborhood.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="h-full">
            <Card className="h-full rounded-3xl border-0 bg-forest p-0 text-linen shadow-sm">
              <CardHeader className="gap-4 px-6 pb-3 pt-6 sm:px-8 sm:pt-8">
                <div aria-label="5 out of 5 stars" className="flex gap-1 text-[#E5B278]">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} aria-hidden="true" className="size-4 fill-current" />
                  ))}
                </div>
                <CardTitle className="font-display text-6xl font-medium tracking-tight text-linen sm:text-7xl">
                  4.9<span className="text-3xl text-linen/70">/5</span>
                </CardTitle>
                <CardDescription className="max-w-xs text-sm leading-6 text-linen/70">
                  Average rating across 120+ local garden projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
                <div className="mt-3 flex items-center gap-2 border-t border-linen/15 pt-4 text-xs font-medium text-linen/80">
                  <MapPin aria-hidden="true" className="size-4 text-[#E5B278]" />
                  Proudly serving Northamptonshire
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.06} className="h-full">
              <Card className="h-full rounded-3xl border border-forest/10 bg-card p-0 shadow-sm">
                <CardHeader className="gap-4 px-5 pb-3 pt-5 sm:px-6 sm:pt-6">
                  <span className="flex size-11 items-center justify-center rounded-full bg-linen text-forest">
                    <ShieldCheck aria-hidden="true" className="size-5" />
                  </span>
                  <CardTitle className="text-xl font-semibold text-forest">Fully insured</CardTitle>
                  <CardDescription className="text-sm leading-6 text-ink-soft">
                    A thoughtful, professional team—covered from the first visit through the final detail.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <span className="inline-flex rounded-full border border-forest/10 bg-linen px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-forest">
                    Confidence in every step
                  </span>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.12} className="h-full">
              <Card className="h-full rounded-3xl border border-forest/10 bg-card p-0 shadow-sm">
                <CardHeader className="gap-4 px-5 pb-3 pt-5 sm:px-6 sm:pt-6">
                  <span className="flex size-11 items-center justify-center rounded-full bg-linen text-forest">
                    <Star aria-hidden="true" className="size-5" />
                  </span>
                  <CardTitle className="text-xl font-semibold text-forest">5-year guarantee</CardTitle>
                  <CardDescription className="text-sm leading-6 text-ink-soft">
                    Structural work is backed by a five-year guarantee, so the foundations feel as considered as the finish.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <span className="inline-flex rounded-full border border-forest/10 bg-linen px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-forest">
                    Built to last
                  </span>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-5 border-t border-forest/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-terracotta">
              Our local service area
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              Northampton and surrounding Northamptonshire communities.
            </p>
          </div>
          <Link
            href="#planner"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
          >
            Book Your Site Consultation
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
