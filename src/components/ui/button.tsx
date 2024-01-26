import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import LoginAltIcon from "./icons/login-alt-icon"
import { epilogue } from "@/app/layout"

const buttonVariants = cva(
  "group inline-flex items-center justify-center whitespace-nowrap rounded-xl text-md font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-800",
      },
      size: {
        default: "h-[59px] px-4 py-2 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className={cn("flex items-center gap-[9px] font-epilogue", epilogue.variable)}>
          {props.children}
          <LoginAltIcon className="group-hover:translate-x-2 transition-transform duration-300" />
          </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
