"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Menu, Sprout, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Our transformations", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "How we work", href: "#process" },
  { label: "Reviews", href: "#reviews" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 border-b border-forest/10 bg-linen/95 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link
          href="#top"
          aria-label="Vance and Co. Garden Design home"
          className="group inline-flex min-w-0 items-center gap-3"
          onClick={closeMenu}
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest text-linen transition-transform duration-300 group-hover:rotate-[-8deg]">
            <Sprout aria-hidden="true" className="size-5" />
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-forest sm:text-2xl">
              Vance <span className="font-normal italic">&amp; Co.</span>
            </span>
            <span className="mt-1.5 hidden text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-ink-soft sm:block">
              Garden Design &amp; Landscaping
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.78rem] font-semibold text-ink-soft transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="#planner"
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-linen sm:inline-flex"
          >
            Book site visit
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="size-11 rounded-full border-forest/15 bg-linen text-forest lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X data-icon="inline-start" /> : <Menu data-icon="inline-start" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-forest/10 bg-linen lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-sage hover:text-forest"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#planner"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-between rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
              >
                Book Your Site Consultation
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
