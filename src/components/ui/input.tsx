import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "font-epilogue flex items-center h-[59px] w-full rounded-sm border-[0.70px] text-blue-500 font-bold text-sm tracking-tighter border-gray-400 bg-white px-[17px] py-6 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-xs placeholder:font-normal placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <span className="absolute right-[15px] top-2/4 -translate-y-2/4 z-50">
            {icon}
          </span>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
