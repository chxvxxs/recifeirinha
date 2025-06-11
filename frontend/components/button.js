import { cn } from "@/lib/utils"

const buttonVariants = {
  default: "text-white bg-custom-blue hover:bg-orange-600",
  outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
  ghost: "text-gray-700 hover:bg-gray-100",
}

const buttonSizes = {
  sm: "px-3 py-2 text-sm",
  default: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
}

export function Button({ children, variant = "default", size = "default", className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5258] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
