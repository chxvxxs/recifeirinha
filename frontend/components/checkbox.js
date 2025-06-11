import { cn } from "@/lib/utils"

export function Checkbox({ className, ...props }) {
  return (
    <input
      type="checkbox"
      className={cn("h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500", className)}
      {...props}
    />
  )
}
