import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function ActionButton({ className, children, ...props }: ComponentProps<'button'>) {
  return (
    <button
      className={twMerge(
        'px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
