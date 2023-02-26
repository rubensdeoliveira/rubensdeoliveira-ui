import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export type TextProps = {
  size?: '12' | '14' | '16' | '18' | '20'
  asChild?: boolean
  children: ReactNode
}

export function Text({ size = '16', asChild, children }: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx('text-red-500', {
        'text-12': size === '12',
        'text-14': size === '14',
        'text-16': size === '16',
        'text-18': size === '18',
        'text-20': size === '20',
      })}
    >
      {children}
    </Comp>
  )
}
