import { ReactNode } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { renderResponsizeProp } from '../helpers/render-responsive-prop'

const textStyles = cva('', {
  variants: {
    fontSize: {
      0: 'rdoui-text-[0rem]',
      1: 'rdoui-text-[0.0625rem]',
      2: 'rdoui-text-[0.125rem]',
      3: 'rdoui-text-[0.1875rem]',
      4: 'rdoui-text-[0.25rem]',
      5: 'rdoui-text-[0.3125rem]',
      6: 'rdoui-text-[0.375rem]',
      7: 'rdoui-text-[0.4375rem]',
      8: 'rdoui-text-[0.5rem]',
      9: 'rdoui-text-[0.5625rem]',
      10: 'rdoui-text-[0.625rem]',
      11: 'rdoui-text-[0.6875rem]',
      12: 'rdoui-text-[0.75rem]',
      13: 'rdoui-text-[0.8125rem]',
      14: 'rdoui-text-[0.875rem]',
      15: 'rdoui-text-[0.9375rem]',
      16: 'rdoui-text-[1rem]',
      17: 'rdoui-text-[1.0625rem]',
      18: 'rdoui-text-[1.125rem]',
      19: 'rdoui-text-[1.1875rem]',
      20: 'rdoui-text-[1.25rem]',
      21: 'rdoui-text-[1.3125rem]',
      22: 'rdoui-text-[1.375rem]',
      23: 'rdoui-text-[1.4375rem]',
      24: 'rdoui-text-[1.5rem]',
      25: 'rdoui-text-[1.5625rem]',
      26: 'rdoui-text-[1.625rem]',
      27: 'rdoui-text-[1.6875rem]',
      28: 'rdoui-text-[1.75rem]',
      29: 'rdoui-text-[1.8125rem]',
      30: 'rdoui-text-[1.875rem]',
      31: 'rdoui-text-[1.9375rem]',
      32: 'rdoui-text-[2rem]',
      33: 'rdoui-text-[2.0625rem]',
      34: 'rdoui-text-[2.125rem]',
      35: 'rdoui-text-[2.1875rem]',
      36: 'rdoui-text-[2.25rem]',
      37: 'rdoui-text-[2.3125rem]',
      38: 'rdoui-text-[2.375rem]',
      39: 'rdoui-text-[2.4375rem]',
      40: 'rdoui-text-[2.5rem]',
      41: 'rdoui-text-[2.5625rem]',
      42: 'rdoui-text-[2.625rem]',
      43: 'rdoui-text-[2.6875rem]',
      44: 'rdoui-text-[2.75rem]',
      45: 'rdoui-text-[2.8125rem]',
      46: 'rdoui-text-[2.875rem]',
      47: 'rdoui-text-[2.9375rem]',
      48: 'rdoui-text-[3rem]',
      49: 'rdoui-text-[3.0625rem]',
      50: 'rdoui-text-[3.125rem]',
      51: 'rdoui-text-[3.1875rem]',
      52: 'rdoui-text-[3.25rem]',
      53: 'rdoui-text-[3.3125rem]',
      54: 'rdoui-text-[3.375rem]',
      55: 'rdoui-text-[3.4375rem]',
      56: 'rdoui-text-[3.5rem]',
      57: 'rdoui-text-[3.5625rem]',
      58: 'rdoui-text-[3.625rem]',
      59: 'rdoui-text-[3.6875rem]',
      60: 'rdoui-text-[3.75rem]',
      61: 'rdoui-text-[3.8125rem]',
      62: 'rdoui-text-[3.875rem]',
      63: 'rdoui-text-[3.9375rem]',
      64: 'rdoui-text-[4rem]',
      65: 'rdoui-text-[4.0625rem]',
      66: 'rdoui-text-[4.125rem]',
      67: 'rdoui-text-[4.1875rem]',
      68: 'rdoui-text-[4.25rem]',
      69: 'rdoui-text-[4.3125rem]',
      70: 'rdoui-text-[4.375rem]',
      71: 'rdoui-text-[4.4375rem]',
      72: 'rdoui-text-[4.5rem]',
      73: 'rdoui-text-[4.5625rem]',
      74: 'rdoui-text-[4.625rem]',
      75: 'rdoui-text-[4.6875rem]',
      76: 'rdoui-text-[4.75rem]',
      77: 'rdoui-text-[4.8125rem]',
      78: 'rdoui-text-[4.875rem]',
      79: 'rdoui-text-[4.9375rem]',
      80: 'rdoui-text-[5rem]',
      81: 'rdoui-text-[5.0625rem]',
      82: 'rdoui-text-[5.125rem]',
      83: 'rdoui-text-[5.1875rem]',
      84: 'rdoui-text-[5.25rem]',
      85: 'rdoui-text-[5.3125rem]',
      86: 'rdoui-text-[5.375rem]',
      87: 'rdoui-text-[5.4375rem]',
      88: 'rdoui-text-[5.5rem]',
      89: 'rdoui-text-[5.5625rem]',
      90: 'rdoui-text-[5.625rem]',
      91: 'rdoui-text-[5.6875rem]',
      92: 'rdoui-text-[5.75rem]',
      93: 'rdoui-text-[5.8125rem]',
      94: 'rdoui-text-[5.875rem]',
      95: 'rdoui-text-[5.9375rem]',
      96: 'rdoui-text-[6rem]',
    },
    fontSizeMd: {
      0: 'md:rdoui-text-[0rem]',
      1: 'md:rdoui-text-[0.0625rem]',
      2: 'md:rdoui-text-[0.125rem]',
      3: 'md:rdoui-text-[0.1875rem]',
      4: 'md:rdoui-text-[0.25rem]',
      5: 'md:rdoui-text-[0.3125rem]',
      6: 'md:rdoui-text-[0.375rem]',
      7: 'md:rdoui-text-[0.4375rem]',
      8: 'md:rdoui-text-[0.5rem]',
      9: 'md:rdoui-text-[0.5625rem]',
      10: 'md:rdoui-text-[0.625rem]',
      11: 'md:rdoui-text-[0.6875rem]',
      12: 'md:rdoui-text-[0.75rem]',
      13: 'md:rdoui-text-[0.8125rem]',
      14: 'md:rdoui-text-[0.875rem]',
      15: 'md:rdoui-text-[0.9375rem]',
      16: 'md:rdoui-text-[1rem]',
      17: 'md:rdoui-text-[1.0625rem]',
      18: 'md:rdoui-text-[1.125rem]',
      19: 'md:rdoui-text-[1.1875rem]',
      20: 'md:rdoui-text-[1.25rem]',
      21: 'md:rdoui-text-[1.3125rem]',
      22: 'md:rdoui-text-[1.375rem]',
      23: 'md:rdoui-text-[1.4375rem]',
      24: 'md:rdoui-text-[1.5rem]',
      25: 'md:rdoui-text-[1.5625rem]',
      26: 'md:rdoui-text-[1.625rem]',
      27: 'md:rdoui-text-[1.6875rem]',
      28: 'md:rdoui-text-[1.75rem]',
      29: 'md:rdoui-text-[1.8125rem]',
      30: 'md:rdoui-text-[1.875rem]',
      31: 'md:rdoui-text-[1.9375rem]',
      32: 'md:rdoui-text-[2rem]',
      33: 'md:rdoui-text-[2.0625rem]',
      34: 'md:rdoui-text-[2.125rem]',
      35: 'md:rdoui-text-[2.1875rem]',
      36: 'md:rdoui-text-[2.25rem]',
      37: 'md:rdoui-text-[2.3125rem]',
      38: 'md:rdoui-text-[2.375rem]',
      39: 'md:rdoui-text-[2.4375rem]',
      40: 'md:rdoui-text-[2.5rem]',
      41: 'md:rdoui-text-[2.5625rem]',
      42: 'md:rdoui-text-[2.625rem]',
      43: 'md:rdoui-text-[2.6875rem]',
      44: 'md:rdoui-text-[2.75rem]',
      45: 'md:rdoui-text-[2.8125rem]',
      46: 'md:rdoui-text-[2.875rem]',
      47: 'md:rdoui-text-[2.9375rem]',
      48: 'md:rdoui-text-[3rem]',
      49: 'md:rdoui-text-[3.0625rem]',
      50: 'md:rdoui-text-[3.125rem]',
      51: 'md:rdoui-text-[3.1875rem]',
      52: 'md:rdoui-text-[3.25rem]',
      53: 'md:rdoui-text-[3.3125rem]',
      54: 'md:rdoui-text-[3.375rem]',
      55: 'md:rdoui-text-[3.4375rem]',
      56: 'md:rdoui-text-[3.5rem]',
      57: 'md:rdoui-text-[3.5625rem]',
      58: 'md:rdoui-text-[3.625rem]',
      59: 'md:rdoui-text-[3.6875rem]',
      60: 'md:rdoui-text-[3.75rem]',
      61: 'md:rdoui-text-[3.8125rem]',
      62: 'md:rdoui-text-[3.875rem]',
      63: 'md:rdoui-text-[3.9375rem]',
      64: 'md:rdoui-text-[4rem]',
      65: 'md:rdoui-text-[4.0625rem]',
      66: 'md:rdoui-text-[4.125rem]',
      67: 'md:rdoui-text-[4.1875rem]',
      68: 'md:rdoui-text-[4.25rem]',
      69: 'md:rdoui-text-[4.3125rem]',
      70: 'md:rdoui-text-[4.375rem]',
      71: 'md:rdoui-text-[4.4375rem]',
      72: 'md:rdoui-text-[4.5rem]',
      73: 'md:rdoui-text-[4.5625rem]',
      74: 'md:rdoui-text-[4.625rem]',
      75: 'md:rdoui-text-[4.6875rem]',
      76: 'md:rdoui-text-[4.75rem]',
      77: 'md:rdoui-text-[4.8125rem]',
      78: 'md:rdoui-text-[4.875rem]',
      79: 'md:rdoui-text-[4.9375rem]',
      80: 'md:rdoui-text-[5rem]',
      81: 'md:rdoui-text-[5.0625rem]',
      82: 'md:rdoui-text-[5.125rem]',
      83: 'md:rdoui-text-[5.1875rem]',
      84: 'md:rdoui-text-[5.25rem]',
      85: 'md:rdoui-text-[5.3125rem]',
      86: 'md:rdoui-text-[5.375rem]',
      87: 'md:rdoui-text-[5.4375rem]',
      88: 'md:rdoui-text-[5.5rem]',
      89: 'md:rdoui-text-[5.5625rem]',
      90: 'md:rdoui-text-[5.625rem]',
      91: 'md:rdoui-text-[5.6875rem]',
      92: 'md:rdoui-text-[5.75rem]',
      93: 'md:rdoui-text-[5.8125rem]',
      94: 'md:rdoui-text-[5.875rem]',
      95: 'md:rdoui-text-[5.9375rem]',
      96: 'md:rdoui-text-[6rem]',
    },
    fontSizeLg: {
      0: 'lg:rdoui-text-[0rem]',
      1: 'lg:rdoui-text-[0.0625rem]',
      2: 'lg:rdoui-text-[0.125rem]',
      3: 'lg:rdoui-text-[0.1875rem]',
      4: 'lg:rdoui-text-[0.25rem]',
      5: 'lg:rdoui-text-[0.3125rem]',
      6: 'lg:rdoui-text-[0.375rem]',
      7: 'lg:rdoui-text-[0.4375rem]',
      8: 'lg:rdoui-text-[0.5rem]',
      9: 'lg:rdoui-text-[0.5625rem]',
      10: 'lg:rdoui-text-[0.625rem]',
      11: 'lg:rdoui-text-[0.6875rem]',
      12: 'lg:rdoui-text-[0.75rem]',
      13: 'lg:rdoui-text-[0.8125rem]',
      14: 'lg:rdoui-text-[0.875rem]',
      15: 'lg:rdoui-text-[0.9375rem]',
      16: 'lg:rdoui-text-[1rem]',
      17: 'lg:rdoui-text-[1.0625rem]',
      18: 'lg:rdoui-text-[1.125rem]',
      19: 'lg:rdoui-text-[1.1875rem]',
      20: 'lg:rdoui-text-[1.25rem]',
      21: 'lg:rdoui-text-[1.3125rem]',
      22: 'lg:rdoui-text-[1.375rem]',
      23: 'lg:rdoui-text-[1.4375rem]',
      24: 'lg:rdoui-text-[1.5rem]',
      25: 'lg:rdoui-text-[1.5625rem]',
      26: 'lg:rdoui-text-[1.625rem]',
      27: 'lg:rdoui-text-[1.6875rem]',
      28: 'lg:rdoui-text-[1.75rem]',
      29: 'lg:rdoui-text-[1.8125rem]',
      30: 'lg:rdoui-text-[1.875rem]',
      31: 'lg:rdoui-text-[1.9375rem]',
      32: 'lg:rdoui-text-[2rem]',
      33: 'lg:rdoui-text-[2.0625rem]',
      34: 'lg:rdoui-text-[2.125rem]',
      35: 'lg:rdoui-text-[2.1875rem]',
      36: 'lg:rdoui-text-[2.25rem]',
      37: 'lg:rdoui-text-[2.3125rem]',
      38: 'lg:rdoui-text-[2.375rem]',
      39: 'lg:rdoui-text-[2.4375rem]',
      40: 'lg:rdoui-text-[2.5rem]',
      41: 'lg:rdoui-text-[2.5625rem]',
      42: 'lg:rdoui-text-[2.625rem]',
      43: 'lg:rdoui-text-[2.6875rem]',
      44: 'lg:rdoui-text-[2.75rem]',
      45: 'lg:rdoui-text-[2.8125rem]',
      46: 'lg:rdoui-text-[2.875rem]',
      47: 'lg:rdoui-text-[2.9375rem]',
      48: 'lg:rdoui-text-[3rem]',
      49: 'lg:rdoui-text-[3.0625rem]',
      50: 'lg:rdoui-text-[3.125rem]',
      51: 'lg:rdoui-text-[3.1875rem]',
      52: 'lg:rdoui-text-[3.25rem]',
      53: 'lg:rdoui-text-[3.3125rem]',
      54: 'lg:rdoui-text-[3.375rem]',
      55: 'lg:rdoui-text-[3.4375rem]',
      56: 'lg:rdoui-text-[3.5rem]',
      57: 'lg:rdoui-text-[3.5625rem]',
      58: 'lg:rdoui-text-[3.625rem]',
      59: 'lg:rdoui-text-[3.6875rem]',
      60: 'lg:rdoui-text-[3.75rem]',
      61: 'lg:rdoui-text-[3.8125rem]',
      62: 'lg:rdoui-text-[3.875rem]',
      63: 'lg:rdoui-text-[3.9375rem]',
      64: 'lg:rdoui-text-[4rem]',
      65: 'lg:rdoui-text-[4.0625rem]',
      66: 'lg:rdoui-text-[4.125rem]',
      67: 'lg:rdoui-text-[4.1875rem]',
      68: 'lg:rdoui-text-[4.25rem]',
      69: 'lg:rdoui-text-[4.3125rem]',
      70: 'lg:rdoui-text-[4.375rem]',
      71: 'lg:rdoui-text-[4.4375rem]',
      72: 'lg:rdoui-text-[4.5rem]',
      73: 'lg:rdoui-text-[4.5625rem]',
      74: 'lg:rdoui-text-[4.625rem]',
      75: 'lg:rdoui-text-[4.6875rem]',
      76: 'lg:rdoui-text-[4.75rem]',
      77: 'lg:rdoui-text-[4.8125rem]',
      78: 'lg:rdoui-text-[4.875rem]',
      79: 'lg:rdoui-text-[4.9375rem]',
      80: 'lg:rdoui-text-[5rem]',
      81: 'lg:rdoui-text-[5.0625rem]',
      82: 'lg:rdoui-text-[5.125rem]',
      83: 'lg:rdoui-text-[5.1875rem]',
      84: 'lg:rdoui-text-[5.25rem]',
      85: 'lg:rdoui-text-[5.3125rem]',
      86: 'lg:rdoui-text-[5.375rem]',
      87: 'lg:rdoui-text-[5.4375rem]',
      88: 'lg:rdoui-text-[5.5rem]',
      89: 'lg:rdoui-text-[5.5625rem]',
      90: 'lg:rdoui-text-[5.625rem]',
      91: 'lg:rdoui-text-[5.6875rem]',
      92: 'lg:rdoui-text-[5.75rem]',
      93: 'lg:rdoui-text-[5.8125rem]',
      94: 'lg:rdoui-text-[5.875rem]',
      95: 'lg:rdoui-text-[5.9375rem]',
      96: 'lg:rdoui-text-[6rem]',
    },
    fontWeight: {
      300: 'rdoui-font-[300]',
      400: 'rdoui-font-[400]',
      500: 'rdoui-font-[500]',
      600: 'rdoui-font-[600]',
      700: 'rdoui-font-[700]',
      800: 'rdoui-font-[800]',
      900: 'rdoui-font-[900]',
    },
    fontWeightMd: {
      300: 'md:rdoui-font-[300]',
      400: 'md:rdoui-font-[400]',
      500: 'md:rdoui-font-[500]',
      600: 'md:rdoui-font-[600]',
      700: 'md:rdoui-font-[700]',
      800: 'md:rdoui-font-[800]',
      900: 'md:rdoui-font-[900]',
    },
    fontWeightLg: {
      300: 'lg:rdoui-font-[300]',
      400: 'lg:rdoui-font-[400]',
      500: 'lg:rdoui-font-[500]',
      600: 'lg:rdoui-font-[600]',
      700: 'lg:rdoui-font-[700]',
      800: 'lg:rdoui-font-[800]',
      900: 'lg:rdoui-font-[900]',
    },
    lineHeight: {
      0: 'rdoui-leading-[0]',
      1: 'rdoui-leading-[1]',
      2: 'rdoui-leading-[2]',
      3: 'rdoui-leading-[3]',
      0.1: 'rdoui-leading-[0.1]',
      0.2: 'rdoui-leading-[0.2]',
      0.3: 'rdoui-leading-[0.3]',
      0.4: 'rdoui-leading-[0.4]',
      0.5: 'rdoui-leading-[0.5]',
      0.6: 'rdoui-leading-[0.6]',
      0.7: 'rdoui-leading-[0.7]',
      0.8: 'rdoui-leading-[0.8]',
      0.9: 'rdoui-leading-[0.9]',
      1.1: 'rdoui-leading-[1.1]',
      1.2: 'rdoui-leading-[1.2]',
      1.3: 'rdoui-leading-[1.3]',
      1.4: 'rdoui-leading-[1.4]',
      1.5: 'rdoui-leading-[1.5]',
      1.6: 'rdoui-leading-[1.6]',
      1.7: 'rdoui-leading-[1.7]',
      1.8: 'rdoui-leading-[1.8]',
      1.9: 'rdoui-leading-[1.9]',
      2.1: 'rdoui-leading-[2.1]',
      2.2: 'rdoui-leading-[2.2]',
      2.3: 'rdoui-leading-[2.3]',
      2.4: 'rdoui-leading-[2.4]',
      2.5: 'rdoui-leading-[2.5]',
      2.6: 'rdoui-leading-[2.6]',
      2.7: 'rdoui-leading-[2.7]',
      2.8: 'rdoui-leading-[2.8]',
      2.9: 'rdoui-leading-[2.9]',
    },
  },
})

export type TextProps = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
  fontSize?:
    | VariantProps<typeof textStyles>['fontSize']
    | VariantProps<typeof textStyles>['fontSize'][]
  fontWeight?:
    | VariantProps<typeof textStyles>['fontWeight']
    | VariantProps<typeof textStyles>['fontWeight'][]
  lineHeight?: VariantProps<typeof textStyles>['lineHeight']
}

export function Text({
  fontSize,
  fontWeight,
  as,
  className,
  children,
  lineHeight,
}: TextProps) {
  switch (as) {
    case 'h1':
      return (
        <h1
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            lineHeight,
            className,
          })}
        >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            lineHeight,
            className,
          })}
        >
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            lineHeight,
            className,
          })}
        >
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            lineHeight,
            className,
          })}
        >
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            lineHeight,
            className,
          })}
        >
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            lineHeight,
            className,
          })}
        >
          {children}
        </h6>
      )
    case 'p':
      return (
        <p
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            lineHeight,
            className,
          })}
        >
          {children}
        </p>
      )
    default:
      return (
        <span
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            lineHeight,
            className,
          })}
        >
          {children}
        </span>
      )
  }
}
