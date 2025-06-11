import { cn } from "@/lib/utils"

export function Badge({ children, className, ...props }) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", className)}
      {...props}
    >
      {children}
    </span>
  )
}
