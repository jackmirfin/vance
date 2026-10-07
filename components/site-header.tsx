"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brandAssets } from "@/lib/brand-assets"

const navItems = [
  { label: "Our transformations", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "How we work", href: "#process" },
  { label: "Reviews", href: "#reviews" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    let previousScrollY = window.scrollY

    function handleScroll() {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - previousScrollY

      if (currentScrollY < 96) {
        setHeaderHidden(false)
      } else if (scrollDelta > 3) {
        setHeaderHidden(true)
        setMenuOpen(false)
      } else if (scrollDelta < -3) {
        setHeaderHidden(false)
      }

      previousScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <motion.header
      initial={false}
      animate={{ y: headerHidden ? "-105%" : "0%" }}
      transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeInOut" }}
      inert={headerHidden}
      className="sticky top-0 z-50 border-b border-forest/10 bg-linen shadow-none"
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link
          href="#top"
          aria-label="Advance Gardens home"
          className="inline-flex min-w-0 shrink-0 items-center"
          onClick={closeMenu}
        >
          <Image
            src={brandAssets.logo}
            alt="Advance Gardens"
            width={1954}
            height={417}
            priority
            sizes="(min-width: 640px) 248px, 196px"
            className="h-[42px] w-[196px] object-contain object-left sm:h-[52px] sm:w-[248px]"
          />
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
    </motion.header>
  )
}
