import { ReactNode } from 'react'
import * as S from '../styles'

type TextWeightProps = 300 | 400 | 500 | 600 | 700

export type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  size?: number | number[]
  weight?: TextWeightProps | TextWeightProps[]
  lineHeight?: number
  className?: string
  mb?: number | number[]
  mt?: number | number[]
  children: ReactNode
}

export function Text({
  size,
  weight,
  as,
  lineHeight,
  className,
  children,
  mb,
  mt
}: TextProps) {
  switch (as) {
    case 'h1':
      return (
        <S.h1
          className={className}
          size={size}
          weight={weight}
          mb={mb}
          mt={mt}
          lineHeight={lineHeight}
        >
          {children}
        </S.h1>
      )
    case 'h2':
      return (
        <S.h2
          className={className}
          size={size}
          weight={weight}
          mb={mb}
          mt={mt}
          lineHeight={lineHeight}
        >
          {children}
        </S.h2>
      )
    case 'h3':
      return (
        <S.h3
          className={className}
          size={size}
          weight={weight}
          mb={mb}
          mt={mt}
          lineHeight={lineHeight}
        >
          {children}
        </S.h3>
      )
    case 'h4':
      return (
        <S.h4
          className={className}
          size={size}
          weight={weight}
          mb={mb}
          mt={mt}
          lineHeight={lineHeight}
        >
          {children}
        </S.h4>
      )
    case 'h5':
      return (
        <S.h5
          className={className}
          size={size}
          weight={weight}
          mb={mb}
          mt={mt}
          lineHeight={lineHeight}
        >
          {children}
        </S.h5>
      )
    case 'h6':
      return (
        <S.h6
          className={className}
          size={size}
          weight={weight}
          mb={mb}
          mt={mt}
          lineHeight={lineHeight}
        >
          {children}
        </S.h6>
      )
    case 'p':
      return (
        <S.p
          className={className}
          size={size}
          weight={weight}
          mb={mb}
          mt={mt}
          lineHeight={lineHeight}
        >
          {children}
        </S.p>
      )
    default:
      return (
        <S.span
          className={className}
          size={size}
          weight={weight}
          mb={mb}
          mt={mt}
          lineHeight={lineHeight}
        >
          {children}
        </S.span>
      )
  }
}
