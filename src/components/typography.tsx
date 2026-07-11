import React from "react"
import { cn } from "@/lib/utils"

export function TypographyH1() {
  return (
    <h1 className="scroll-m-20 text-3xl font-bold text-Neutral-900 dark:text-Neutral-0">
      Extensions List
    </h1>
  )
}

interface TypographyH2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

export function TypographyH2({
  children,
  className,
  ...props
}: TypographyH2Props) {
  return (
    <h2
      className={cn(
        "text-base font-bold text-Neutral-900 dark:text-Neutral-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

interface TypographyPProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

export function TypographyP({
  children,
  className,
  ...props
}: TypographyPProps) {
  return (
    <p className={cn("text-sm", className)} {...props}>
      {children}
    </p>
  )
}
