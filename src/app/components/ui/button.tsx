import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ReactNode } from "react"

interface ButtonProps {
  children?: ReactNode
  variant?: "primary" | "secondary" | "destructive" | "outline" | "link"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const buttonVariants = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90",
  outline: "border border-primary text-primary hover:bg-primary/10",
  link: "text-primary hover:underline",
}

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

const Button = ({ children, variant = "primary", size = "md", className, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        clsx(
          buttonVariants[variant],
          buttonSizes[size],
          "rounded-md disabled:opacity-50 disabled:cursor-not-allowed",
          className,
        ),
      )}
    >
      {children}
    </button>
  )
}

export { Button, buttonVariants }

