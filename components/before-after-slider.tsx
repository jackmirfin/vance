"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeftRight } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

type BeforeAfterSliderProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  className?: string
  initialSplit?: number
  priority?: boolean
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
  initialSplit = 50,
  priority = false,
}: BeforeAfterSliderProps) {
  const [split, setSplit] = useState(initialSplit)

  function handleValueChange(nextValue: number | readonly number[]) {
    const nextSplit = Array.isArray(nextValue) ? nextValue[0] : nextValue
    if (typeof nextSplit === "number") setSplit(nextSplit)
  }

  return (
    <div className={cn("group/before-after relative isolate overflow-hidden bg-sage", className)}>
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes="(min-width: 1024px) 52vw, 100vw"
        className="select-none object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${split}%)` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="select-none object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-4 top-4 z-10 flex items-center justify-between sm:inset-x-5 sm:top-5">
        <span className="rounded-full border border-white/40 bg-ink/45 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
          Before
        </span>
        <span className="rounded-full border border-white/40 bg-ink/45 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
          After
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90 shadow-[0_0_16px_rgb(36_40_37_/_35%)]"
        style={{ left: `${split}%` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 z-10 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-linen text-forest shadow-lg transition-transform group-hover/before-after:scale-105"
        style={{ left: `${split}%` }}
      >
        <ArrowLeftRight className="size-4" />
      </div>

      <Slider
        className="comparison-range absolute inset-0 z-20 h-full w-full"
        value={[split]}
        min={5}
        max={95}
        step={1}
        onValueChange={handleValueChange}
        thumbProps={{
          "aria-label": "Drag to compare the garden before and after",
          "aria-valuetext": `${split}% of the original garden is visible`,
        }}
      />
      <span className="sr-only" aria-live="polite">
        Before and after comparison at {split} percent.
      </span>
    </div>
  )
}
