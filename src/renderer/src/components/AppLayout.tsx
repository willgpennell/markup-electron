import { Children, ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

// component props essentially verifies that all props passed in are compatible with the main HTML element
export function RootLayout({ className, children, ...props }: ComponentProps<'main'>) {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export function Sidebar({ className, children, ...props }: ComponentProps<'aside'>) {
  return (
    <aside
      className={twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', className)}
      {...props}
    >
      {children}
    </aside>
  )
}

// Need to study this better, basically forwards reference of HTML div element and get all props of div element, also allows the div to have a reference prop
export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 h-full overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
