import { ReactNode } from 'react'
import { cva } from 'class-variance-authority'

const containerStyles = cva('')

export type CardProps = {
  children: ReactNode
  containerClassName?: string
}

export function Card({ children, containerClassName }: CardProps) {
  return (
    <div className={containerStyles({ className: containerClassName })}>
      {children}
    </div>
  )
}
