import { cva } from 'class-variance-authority'
import { ReactNode } from 'react'

import { renderResponsizeProp } from '../helpers/render-responsive-prop'

const styles = cva('', {
  variants: {
    size: {
      8: 'text-8px',
      10: 'text-10px',
      12: 'text-12px',
      14: 'text-14px',
      16: 'text-16px',
      18: 'text-18px',
      20: 'text-20px',
      22: 'text-22px',
      24: 'text-24px',
      32: 'text-32px',
      64: 'text-64px',
    },
    sizeMd: {
      8: 'md:text-8px',
      10: 'md:text-10px',
      12: 'md:text-12px',
      14: 'md:text-14px',
      16: 'md:text-16px',
      18: 'md:text-18px',
      20: 'md:text-20px',
      22: 'md:text-22px',
      24: 'md:text-24px',
      32: 'md:text-32px',
      64: 'md:text-64px',
    },
    sizeLg: {
      8: 'lg:text-8px',
      10: 'lg:text-10px',
      12: 'lg:text-12px',
      14: 'lg:text-14px',
      16: 'lg:text-16px',
      18: 'lg:text-18px',
      20: 'lg:text-20px',
      22: 'lg:text-22px',
      24: 'lg:text-24px',
      32: 'lg:text-32px',
      64: 'lg:text-64px',
    },
    weight: {
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
    weightMd: {
      300: 'md:font-light',
      400: 'md:font-normal',
      500: 'md:font-medium',
      600: 'md:font-semibold',
      700: 'md:font-bold',
    },
    weightLg: {
      300: 'lg:font-light',
      400: 'lg:font-normal',
      500: 'lg:font-medium',
      600: 'lg:font-semibold',
      700: 'lg:font-bold',
    },
    lineHeight: {
      0.75: 'leading-0.75',
      1: 'leading-1',
      1.1: 'leading-1.1',
      1.2: 'leading-1.2',
      1.3: 'leading-1.3',
      1.4: 'leading-1.4',
      1.5: 'leading-1.5',
      1.6: 'leading-1.6',
      1.7: 'leading-1.7',
      1.8: 'leading-1.8',
      1.9: 'leading-1.9',
      2: 'leading-2',
    },
  },
  defaultVariants: {
    size: 16,
    sizeMd: 16,
    sizeLg: 16,
    weight: 400,
    weightMd: 400,
    weightLg: 400,
  },
})

type TextSizeProps = 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 32 | 64

type TextWeightProps = 300 | 400 | 500 | 600 | 700

export type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  size?: TextSizeProps | TextSizeProps[]
  weight?: TextWeightProps | TextWeightProps[]
  lineHeight?:
    | 0.75
    | 1
    | 1.1
    | 1.2
    | 1.3
    | 1.4
    | 1.5
    | 1.6
    | 1.7
    | 1.8
    | 1.9
    | 2
  className?: string
  children: ReactNode
}

export function Text({
  size,
  weight,
  as,
  lineHeight,
  className,
  children,
}: TextProps) {
  const style = styles({
    size: renderResponsizeProp(size),
    sizeMd: renderResponsizeProp(size, 'md'),
    sizeLg: renderResponsizeProp(size, 'lg'),
    weight: renderResponsizeProp(weight),
    weightMd: renderResponsizeProp(weight, 'md'),
    weightLg: renderResponsizeProp(weight, 'lg'),
    lineHeight,
    className,
  })

  switch (as) {
    case 'h1':
      return <h1 className={style}>{children}</h1>
    case 'h2':
      return <h2 className={style}>{children}</h2>
    case 'h3':
      return <h3 className={style}>{children}</h3>
    case 'h4':
      return <h4 className={style}>{children}</h4>
    case 'h5':
      return <h5 className={style}>{children}</h5>
    case 'h6':
      return <h6 className={style}>{children}</h6>
    case 'p':
      return <p className={style}>{children}</p>
    default:
      return <span className={style}>{children}</span>
  }
}
