import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  [
    // Base
    "relative grid rounded-xl border border-border p-4 text-left arc-text-body-sm has-data-[slot=alert-action]:pr-18",
    // Position
    "has-data-[slot=alert-action]:relative has-[>svg]:grid-cols-[auto_1fr]",
    // Sizing
    "w-full gap-0.5 has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg:not([class*='size-'])]:size-4",
    // Other
    "group/alert *:[svg]:text-current",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-bg-surface text-text",
        destructive:
          "bg-bg-danger-tertiary border-border-danger *:[svg]:text-text-danger",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        // Position
        "group-has-[>svg]/alert:col-start-2",
        // Other
        "arc-text-body-md-strong [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-text",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        // Other
        "arc-text-body-md text-text-secondary text-balance md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn(
        // Base
        "absolute",
        // Position
        "top-2.5 right-3",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
