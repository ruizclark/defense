import { cn } from "@/lib/utils"

interface TriangleDecorationProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  size?: "sm" | "md" | "lg"
  variant?: "navy" | "royal" | "teal" | "light"
  className?: string
}

const positionStyles = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0 rotate-90",
  "bottom-left": "bottom-0 left-0 -rotate-90",
  "bottom-right": "bottom-0 right-0 rotate-180",
}

const sizeStyles = {
  sm: "w-16 h-16 md:w-24 md:h-24",
  md: "w-24 h-24 md:w-32 md:h-32",
  lg: "w-32 h-32 md:w-48 md:h-48",
}

const variantStyles = {
  navy: "text-navy",
  royal: "text-royal-blue",
  teal: "text-teal",
  light: "text-light-blue",
}

export function TriangleDecoration({
  position = "top-left",
  size = "md",
  variant = "navy",
  className,
}: TriangleDecorationProps) {
  return (
    <div
      className={cn(
        "absolute pointer-events-none opacity-10",
        positionStyles[position],
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className="w-full h-full"
      >
        <polygon points="0,0 100,0 0,100" />
      </svg>
    </div>
  )
}

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-16 md:h-24 overflow-hidden", className)}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex gap-4 opacity-20">
          <svg viewBox="0 0 40 40" className="w-4 h-4 text-navy">
            <polygon points="20,0 40,40 0,40" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 40 40" className="w-4 h-4 text-royal-blue">
            <polygon points="20,0 40,40 0,40" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 40 40" className="w-4 h-4 text-teal">
            <polygon points="20,0 40,40 0,40" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  )
}
