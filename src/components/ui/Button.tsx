import { type VariantProps, cva } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full border-2 px-[38px] py-[5px] text-base font-bold transition-colors md:py-3 md:text-1.5xl',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-yellow text-black hover:bg-yellow/60',
        outline: 'bg-transparent text-yellow hover:text-yellow/60',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type ButtonProps = {
  asChild?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, ...props },
  ref,
) {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  )
})

export { Button, buttonVariants }
