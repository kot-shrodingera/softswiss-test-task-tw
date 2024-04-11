import { type AnchorHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

function Link({
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        'cursor-pointer text-sm font-extrabold text-yellow no-underline hover:text-yellow/60 md:text-base lg:text-xl',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
export default Link
