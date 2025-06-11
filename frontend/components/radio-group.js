"use client"

import { createContext, useContext } from "react"
import { cn } from "@/lib/utils"

const RadioGroupContext = createContext()

export function RadioGroup({ value, onValueChange, children, className, ...props }) {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div className={cn("grid gap-2", className)} {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

export function RadioGroupItem({ value, id, className, ...props }) {
  const context = useContext(RadioGroupContext)

  return (
    <input
      type="radio"
      id={id}
      value={value}
      checked={context?.value === value}
      onChange={() => context?.onValueChange?.(value)}
      className={cn("h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-500", className)}
      {...props}
    />
  )
}
