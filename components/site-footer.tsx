import Link from "next/link"
import { ArrowUpRight, Leaf, MapPin } from "lucide-react"

const footerLinks = [
  { label: "Our transformations", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "How we work", href: "#process" },
  { label: "Reviews & local trust", href: "#reviews" },
]

const serviceAreas = ["Maplewood", "South Orange", "Millburn", "Montclair", "West Orange", "Livingston"]

export function SiteFooter() {
  return (
    <footer className="bg-forest text-linen">
      <div className="mx-auto max-w-7xl px-4 pb-7 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-10 border-b border-linen/15 pb-10 lg:grid-cols-[1.1fr_0.7fr_0.9fr] lg:gap-16 lg:pb-14">
          <div className="max-w-md">
            <Link href="#top" className="inline-flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-linen/10 text-linen">
                <Leaf aria-hidden="true" className="size-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl font-semibold tracking-tight">
                  Vance <span className="font-normal italic">&amp; Co.</span>
                </span>
                <span className="mt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-linen/60">
                  Garden Design &amp; Landscaping
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-linen/65">
              Gardens made for real life—thoughtful design, careful craft, and a little more room to be outside.
            </p>
            <Link
              href="#planner"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linen"
            >
              Book Your Site Consultation
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-linen/50">Explore</p>
            <nav aria-label="Footer navigation" className="mt-4 flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-linen/75 transition-colors hover:text-linen"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-linen/50">Close to home</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-linen">
              <MapPin aria-hidden="true" className="size-4 text-[#D9A17B]" />
              Maplewood &amp; Essex County
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-linen/65">
              {serviceAreas.map((area) => <li key={area}>{area}</li>)}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[0.68rem] text-linen/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vance &amp; Co. Garden Design</p>
          <p>Thoughtfully designed in Maplewood, New Jersey.</p>
        </div>
      </div>
    </footer>
  )
}
