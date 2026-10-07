"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Flower2,
  House,
  Lightbulb,
  PanelsTopLeft,
  Sprout,
  Sun,
  Trees,
  Utensils,
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const gardenSizes = [
  {
    value: "compact",
    title: "Compact courtyard",
    detail: "A small footprint, full of possibility.",
    icon: PanelsTopLeft,
  },
  {
    value: "medium",
    title: "Medium family garden",
    detail: "Room to gather, play, and grow.",
    icon: House,
  },
  {
    value: "large",
    title: "Large plot",
    detail: "Space for a few distinct garden moments.",
    icon: Trees,
  },
]

const wishlistOptions = [
  { value: "porcelain-patio", label: "Porcelain patio", icon: PanelsTopLeft },
  { value: "sun-deck", label: "Sun deck", icon: Sun },
  { value: "planting", label: "Low-maintenance planting", icon: Flower2 },
  { value: "lighting", label: "Ambient lighting", icon: Lightbulb },
  { value: "kitchen", label: "Outdoor kitchen", icon: Utensils },
  { value: "lawn", label: "Turf / lawn", icon: Sprout },
]

const timelines = [
  { value: "soon", label: "As soon as possible" },
  { value: "this-season", label: "This season" },
  { value: "planning", label: "Just planning ahead" },
]

type ContactDetails = {
  name: string
  email: string
  phone: string
  notes: string
}

export function GardenPlanner() {
  const [step, setStep] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [timeline, setTimeline] = useState("")
  const [contact, setContact] = useState<ContactDetails>({ name: "", email: "", phone: "", notes: "" })
  const [submitted, setSubmitted] = useState(false)
  const reduceMotion = useReducedMotion()

  function updateContact(field: keyof ContactDetails, value: string) {
    setContact((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  function resetPlanner() {
    setStep(1)
    setSelectedSize("")
    setSelectedFeatures([])
    setTimeline("")
    setContact({ name: "", email: "", phone: "", notes: "" })
    setSubmitted(false)
  }

  return (
    <section
      id="planner"
      aria-labelledby="planner-title"
      className="overflow-hidden bg-sage/70 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-8">
        <Reveal className="flex flex-col items-start lg:sticky lg:top-28">
          <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-terracotta">
            Your garden, your starting point
          </p>
          <h2 id="planner-title" className="max-w-xl text-4xl leading-[1.02] text-forest sm:text-5xl lg:text-6xl">
            Let&apos;s make a little more room outside.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-ink-soft sm:text-base">
            Share a few first thoughts. We&apos;ll use them to make your free site visit feel useful from the very first conversation.
          </p>
          <ul className="mt-7 flex flex-col gap-3 text-sm text-forest">
            <li className="flex items-center gap-3">
              <span className="flex size-7 items-center justify-center rounded-full bg-linen text-forest">
                <Check aria-hidden="true" className="size-4" />
              </span>
              Friendly, no-pressure first visit
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-7 items-center justify-center rounded-full bg-linen text-forest">
                <Check aria-hidden="true" className="size-4" />
              </span>
              A clear visual plan and fixed-price estimate
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-7 items-center justify-center rounded-full bg-linen text-forest">
                <Check aria-hidden="true" className="size-4" />
              </span>
              Fully insured, with a 5-year structural guarantee
            </li>
          </ul>
          <Link
            href="#process"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-terracotta"
          >
            See how the process works
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="rounded-3xl border border-forest/10 bg-background p-0 shadow-[0_22px_64px_-42px_rgba(36,40,37,0.55)]">
            <CardHeader className="gap-5 px-5 pb-5 pt-5 sm:px-8 sm:pt-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.17em] text-terracotta">
                    Garden project planner
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">A few notes are all you need to begin.</p>
                </div>
                {!submitted && (
                  <span className="self-start rounded-full bg-sage px-3 py-1.5 text-[0.65rem] font-semibold text-forest sm:self-auto">
                    Step {String(step).padStart(2, "0")} of 03
                  </span>
                )}
              </div>
              {!submitted && (
                <div
                  role="progressbar"
                  aria-label="Consultation planner progress"
                  aria-valuemin={1}
                  aria-valuemax={3}
                  aria-valuenow={step}
                  className="grid grid-cols-3 gap-2"
                >
                  {[1, 2, 3].map((item) => (
                    <span
                      key={item}
                      aria-hidden="true"
                      className={`h-1 rounded-full transition-colors ${item <= step ? "bg-accent" : "bg-forest/10"}`}
                    />
                  ))}
                </div>
              )}
            </CardHeader>

            <CardContent className="px-5 pb-5 sm:px-8 sm:pb-8">
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait" initial={false}>
                  {submitted ? (
                    <motion.div
                      key="complete"
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.22 }}
                      role="status"
                      className="flex min-h-80 flex-col items-start justify-center py-8"
                    >
                      <span className="flex size-14 items-center justify-center rounded-full bg-sage text-forest">
                        <CheckCircle2 aria-hidden="true" className="size-7" />
                      </span>
                      <h3 className="mt-5 text-3xl text-forest sm:text-4xl">Your garden brief is ready.</h3>
                      <p className="mt-3 max-w-lg text-sm leading-7 text-ink-soft">
                        Thanks for sharing your ideas. This preview doesn&apos;t send or store booking requests yet; connect a live booking inbox to receive enquiries.
                      </p>
                      <Button type="button" variant="outline" className="mt-6 rounded-full" onClick={resetPlanner}>
                        Plan another garden
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`step-${step}`}
                      initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -14 }}
                      transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
                    >
                      {step === 1 && (
                        <FieldSet>
                          <FieldLegend>First, what size is your garden?</FieldLegend>
                          <FieldDescription>
                            Choose the closest fit. We can fine-tune the details together.
                          </FieldDescription>
                          <ToggleGroup
                            aria-label="Choose your garden size"
                            value={selectedSize ? [selectedSize] : []}
                            onValueChange={(value) => setSelectedSize(String(value[0] ?? ""))}
                            className="grid grid-cols-1 gap-3 sm:grid-cols-3"
                          >
                            {gardenSizes.map((size) => {
                              const Icon = size.icon
                              return (
                                <ToggleGroupItem
                                  key={size.value}
                                  value={size.value}
                                  className="min-h-32 flex-col items-start justify-between rounded-2xl p-4 text-left data-pressed:border-forest data-pressed:bg-forest data-pressed:text-linen sm:p-4"
                                >
                                  <Icon aria-hidden="true" className="size-5 text-terracotta group-data-pressed:text-linen" />
                                  <span className="flex flex-col gap-1">
                                    <span className="text-sm font-semibold leading-snug">{size.title}</span>
                                    <span className="text-[0.68rem] font-normal leading-5 opacity-75">{size.detail}</span>
                                  </span>
                                </ToggleGroupItem>
                              )
                            })}
                          </ToggleGroup>
                        </FieldSet>
                      )}

                      {step === 2 && (
                        <FieldSet>
                          <FieldLegend>What would you love to include?</FieldLegend>
                          <FieldDescription>
                            Pick any ideas that are already on your mind.
                          </FieldDescription>
                          <ToggleGroup
                            aria-label="Select garden features for your wishlist"
                            multiple
                            value={selectedFeatures}
                            onValueChange={(value) => setSelectedFeatures(value.map(String))}
                            className="grid grid-cols-1 gap-2 sm:grid-cols-2"
                          >
                            {wishlistOptions.map((option) => {
                              const Icon = option.icon
                              return (
                                <ToggleGroupItem
                                  key={option.value}
                                  value={option.value}
                                  className="min-h-14 justify-start rounded-xl px-4 py-3 text-left text-xs font-semibold data-pressed:border-forest data-pressed:bg-forest data-pressed:text-linen sm:text-sm"
                                >
                                  <Icon aria-hidden="true" className="size-4 shrink-0 text-terracotta group-data-pressed:text-linen" />
                                  <span>{option.label}</span>
                                </ToggleGroupItem>
                              )
                            })}
                          </ToggleGroup>
                        </FieldSet>
                      )}

                      {step === 3 && (
                        <div className="flex flex-col gap-6">
                          <FieldSet>
                            <FieldLegend>When are you hoping to get started?</FieldLegend>
                            <ToggleGroup
                              aria-label="Choose your project timeline"
                              value={timeline ? [timeline] : []}
                              onValueChange={(value) => setTimeline(String(value[0] ?? ""))}
                              className="flex flex-wrap gap-2"
                            >
                              {timelines.map((option) => (
                                <ToggleGroupItem
                                  key={option.value}
                                  value={option.value}
                                  className="rounded-full px-4 py-2.5 text-xs font-semibold data-pressed:border-forest data-pressed:bg-forest data-pressed:text-linen"
                                >
                                  {option.label}
                                </ToggleGroupItem>
                              ))}
                            </ToggleGroup>
                          </FieldSet>

                          <FieldSet>
                            <FieldLegend variant="label">A little about you</FieldLegend>
                            <FieldGroup className="grid gap-4 sm:grid-cols-2">
                              <Field>
                                <FieldLabel htmlFor="planner-name">Your name</FieldLabel>
                                <Input
                                  id="planner-name"
                                  name="name"
                                  autoComplete="name"
                                  placeholder="Jane Smith"
                                  value={contact.name}
                                  onChange={(event) => updateContact("name", event.target.value)}
                                  className="h-11 rounded-xl border-forest/15 bg-linen/55 px-3"
                                  required
                                />
                              </Field>
                              <Field>
                                <FieldLabel htmlFor="planner-email">Email address</FieldLabel>
                                <Input
                                  id="planner-email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  placeholder="jane@example.com"
                                  value={contact.email}
                                  onChange={(event) => updateContact("email", event.target.value)}
                                  className="h-11 rounded-xl border-forest/15 bg-linen/55 px-3"
                                  required
                                />
                              </Field>
                              <Field className="sm:col-span-2">
                                <FieldLabel htmlFor="planner-phone">Phone number <span className="font-normal text-ink-soft">(optional)</span></FieldLabel>
                                <Input
                                  id="planner-phone"
                                  name="phone"
                                  type="tel"
                                  autoComplete="tel"
                                  placeholder="(973) 555-0123"
                                  value={contact.phone}
                                  onChange={(event) => updateContact("phone", event.target.value)}
                                  className="h-11 rounded-xl border-forest/15 bg-linen/55 px-3"
                                />
                              </Field>
                              <Field className="sm:col-span-2">
                                <FieldLabel htmlFor="planner-notes">Anything else you&apos;d like us to know?</FieldLabel>
                                <Textarea
                                  id="planner-notes"
                                  name="notes"
                                  placeholder="A patio that needs a rethink, more room for dinner, a spot for the kids..."
                                  value={contact.notes}
                                  onChange={(event) => updateContact("notes", event.target.value)}
                                  className="min-h-24 rounded-xl border-forest/15 bg-linen/55 px-3 py-3"
                                />
                              </Field>
                            </FieldGroup>
                          </FieldSet>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {!submitted && (
                  <CardFooter className="mt-7 flex-wrap justify-between gap-3 border-t border-forest/10 bg-transparent px-0 pb-0 pt-5">
                    {step > 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        className="h-11 rounded-full border-forest/15 px-4"
                        onClick={() => setStep((current) => Math.max(1, current - 1))}
                      >
                        <ArrowLeft data-icon="inline-start" />
                        Back
                      </Button>
                    ) : (
                      <span className="text-xs text-ink-soft">No pressure—just a helpful first step.</span>
                    )}

                    {step < 3 ? (
                      <Button
                        type="button"
                        variant="accent"
                        className="h-11 rounded-full px-5"
                        disabled={step === 1 && !selectedSize}
                        onClick={() => setStep((current) => Math.min(3, current + 1))}
                      >
                        Continue
                        <ArrowRight data-icon="inline-end" />
                      </Button>
                    ) : (
                      <Button type="submit" variant="accent" className="h-11 rounded-full px-5">
                        Request my site visit
                        <ArrowRight data-icon="inline-end" />
                      </Button>
                    )}
                  </CardFooter>
                )}
              </form>
            </CardContent>
            {!submitted && (
              <div className="border-t border-forest/10 px-5 py-4 sm:px-8">
                <p className="text-[0.68rem] leading-5 text-ink-soft">
                  Preview only: your details are not sent or stored until a live booking destination is connected.
                </p>
              </div>
            )}
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
