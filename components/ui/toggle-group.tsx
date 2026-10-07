"use client"

import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"
import { cn } from "@/lib/utils"

function ToggleGroup({ className, ...props }: React.ComponentProps<typeof ToggleGroupPrimitive>) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      className={cn("flex flex-wrap gap-2", className)}
      {...props}
    />
  )
}

function ToggleGroupItem({ className, ...props }: React.ComponentProps<typeof TogglePrimitive>) {
  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card text-foreground transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-pressed:border-primary data-pressed:bg-primary data-pressed:text-primary-foreground disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

export { ToggleGroup, ToggleGroupItem }
