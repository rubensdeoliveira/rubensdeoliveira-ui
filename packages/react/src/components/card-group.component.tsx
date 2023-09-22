import { ReactNode } from 'react'
import { cva } from 'class-variance-authority'

const containerStyles = cva('')

export type CardGroupProps = {
  children: ReactNode
  containerClassName?: string
}

export function CardGroup({ children, containerClassName }: CardGroupProps) {
  return (
    <div className={containerStyles({ className: containerClassName })}>
      {children}
    </div>
  )
}
