import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { ReactNode } from 'react'
import { renderResponsizeProp } from '../helpers/render-responsive-prop'

const textStyles = cva('', {
  variants: {
    size: {
      12: 'text-12',
      14: 'text-14',
      16: 'text-16',
      18: 'text-18',
      20: 'text-20',
    },
    sizeMd: {
      12: 'md:text-12',
      14: 'md:text-14',
      16: 'md:text-16',
      18: 'md:text-18',
      20: 'md:text-20',
    },
    sizeLg: {
      12: 'lg:text-12',
      14: 'lg:text-14',
      16: 'lg:text-16',
      18: 'lg:text-18',
      20: 'lg:text-20',
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

type TextSizeProps = 12 | 14 | 16 | 18 | 20

type TextWeightProps = 300 | 400 | 500 | 600 | 700

export type TextProps = {
  asChild?: boolean
  size?: TextSizeProps | TextSizeProps[]
  weight?: TextWeightProps | TextWeightProps[]
  className?: string
  children: ReactNode
}

export function Text({
  size,
  weight,
  asChild,
  className,
  children,
}: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={textStyles({
        size: renderResponsizeProp(size),
        sizeMd: renderResponsizeProp(size, 'md'),
        sizeLg: renderResponsizeProp(size, 'lg'),
        weight: renderResponsizeProp(weight),
        weightMd: renderResponsizeProp(weight, 'md'),
        weightLg: renderResponsizeProp(weight, 'lg'),
        className,
      })}
    >
      {children}
    </Comp>
  )
}
