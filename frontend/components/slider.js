"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function Slider({ defaultValue = [0], max = 100, step = 1, className, ...props }) {
  const [value, setValue] = useState(defaultValue[0])

  return (
    <div className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
      <input
        type="range"
        min="0"
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
    </div>
  )
}
