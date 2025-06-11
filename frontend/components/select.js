"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Select({ children, value, onValueChange, ...props }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || "")

  const handleSelect = (newValue) => {
    setSelectedValue(newValue)
    if (onValueChange) onValueChange(newValue)
    setIsOpen(false)
  }

  return (
    <div className="relative" {...props}>
      {typeof children === "function"
        ? children({ isOpen, selectedValue, handleSelect, setIsOpen })
        : null}
    </div>
  )
}

export function SelectTrigger({ children, className, isOpen, setIsOpen }) {
  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
        className,
      )}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  )
}

export function SelectValue({ placeholder, selectedValue }) {
  return <span>{selectedValue || placeholder}</span>
}

export function SelectContent({ children, isOpen }) {
  if (!isOpen) return null

  return (
    <div className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
      {children}
    </div>
  )
}

export function SelectItem({ children, value, handleSelect }) {
  return (
    <button
      type="button"
      onClick={() => handleSelect(value)}
      className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
    >
      {children}
    </button>
  )
}
