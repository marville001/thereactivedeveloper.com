import type React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/80",
        variant === "outline" && "border border-input hover:bg-accent hover:text-accent-foreground",
        className,
      )}
      {...props}
    />
  )
}

