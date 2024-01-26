'use client'
import { cn } from "@/lib/utils"
import EmailIcon from "./icons/email-icon"
import PasswordIcon from "./icons/password-icon"
import { forwardRef, useState } from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: "email" | "password"
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, type, ...props }, ref) => {

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const icons = {
      email: <EmailIcon
        color={(isFocused || value !== '') ? "#293d71" : "#B7B7B7"}
      />,
      password: <PasswordIcon
        color={(isFocused || value !== '') ? isPasswordVisible ? "#f21a05" : "#293d71" : "#B7B7B7"}
        className="cursor-pointer"
      />,
    }

    const handlePasswordVisibility = () => {
      if (type === 'password') setIsPasswordVisible(!isPasswordVisible)
    }

    return (
      <div className="relative group">
        <input
          type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
          className={cn(
            "font-epilogue flex items-center h-[59px] w-full rounded-sm border-[0.70px] text-blue-500 font-bold text-sm tracking-tighter border-gray-400 bg-white px-[17px] py-6 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-xs placeholder:font-normal placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        />
        {icon && (
          <span
            className={"absolute right-[15px] top-2/4 -translate-y-2/4"}
            onClick={handlePasswordVisibility}
          >
            {icons[icon]}
          </span>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
