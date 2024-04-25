'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      className={cn('h-4 w-4 stroke-foreground', className)}
      {...props}
    >
      <defs>
        <style>{`.cls-1{fill:none;stroke:inherit;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}</style>
      </defs>
      <path className="cls-1" d="M16.67,30h13.33" />
      <path className="cls-1" d="M5,36.67h30" />
      <path
        className="cls-1"
        d="M18.33,13.33h-1.67c-6.44,0-11.67,5.22-11.67,11.67s5.22,11.67,11.67,11.67"
      />
      <path className="cls-1" d="M21.67,23.33h3.33" />
      <path
        className="cls-1"
        d="M21.67,20c-1.84,0-3.33-1.49-3.33-3.33v-6.67h10v6.67c0,1.84-1.49,3.33-3.33,3.33h-3.33Z"
      />
      <path
        className="cls-1"
        d="M26.67,10v-5c0-.92-.75-1.67-1.67-1.67h-3.33c-.92,0-1.67.75-1.67,1.67v5"
      />
    </svg>
  )
}

export { IconLogo }
