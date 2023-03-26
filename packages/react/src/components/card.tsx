import { ReactNode } from 'react'
import * as S from '../styles'

export type CardProps = {
  borderRadius?: S.BorderRadius | S.BorderRadius[]
  px?: number | number[]
  py?: number | number[]
  className?: string
  children: ReactNode
}

export function Card({ borderRadius, px, py, className, children }: CardProps) {
  return (
    <S.card className={className} borderRadius={borderRadius} px={px} py={py}>
      {children}
    </S.card>
  )
}
