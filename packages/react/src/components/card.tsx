import { ReactNode } from 'react'

export type CardProps = {
  borderRadius?: number | number[]
  px?: number | number[]
  py?: number | number[]
  className?: string
  children: ReactNode
}

export function Card({ borderRadius, px, py, className, children }: CardProps) {
  return <div className={className}>{children}</div>
}
