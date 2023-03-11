import { cva } from 'class-variance-authority'
import { ReactNode } from 'react'
import { renderResponsizeProp } from '../helpers/render-responsive-prop'

type BorderRadius = number | 'full'

export type CardProps = {
  borderRadius?: BorderRadius | BorderRadius[]
  paddingHorizontal?: number | number[]
  paddingVertical?: number | number[]
  className?: string
  children: ReactNode
}

const cardStyles = cva('', {
  variants: {
    borderRadius: {
      0: 'rounded-[0px]',
      2: 'rounded-[2px]',
      4: 'rounded-[4px]',
      6: 'rounded-[6px]',
      8: 'rounded-[8px]',
      10: 'rounded-[10px]',
      12: 'rounded-[12px]',
      14: 'rounded-[14px]',
      16: 'rounded-[16px]',
      full: 'rounded-[9999px]',
    },
    borderRadiusMd: {
      0: 'md:rounded-[0px]',
      2: 'md:rounded-[2px]',
      4: 'md:rounded-[4px]',
      6: 'md:rounded-[6px]',
      8: 'md:rounded-[8px]',
      10: 'md:rounded-[10px]',
      12: 'md:rounded-[12px]',
      14: 'md:rounded-[14px]',
      16: 'md:rounded-[16px]',
      full: 'md:rounded-[9999px]',
    },
    borderRadiusLg: {
      0: 'lg:rounded-[0px]',
      2: 'lg:rounded-[2px]',
      4: 'lg:rounded-[4px]',
      6: 'lg:rounded-[6px]',
      8: 'lg:rounded-[8px]',
      10: 'lg:rounded-[10px]',
      12: 'lg:rounded-[12px]',
      14: 'lg:rounded-[14px]',
      16: 'lg:rounded-[16px]',
      full: 'lg:rounded-[9999px]',
    },
    paddingHorizontal: {
      0: 'px-0px',
      2: 'px-2px',
      4: 'px-4px',
      6: 'px-6px',
      8: 'px-8px',
      10: 'px-10px',
      12: 'px-12px',
      14: 'px-14px',
      16: 'px-16px',
      18: 'px-18px',
      20: 'px-20px',
      22: 'px-22px',
      24: 'px-24px',
      26: 'px-26px',
      28: 'px-28px',
      30: 'px-30px',
      32: 'px-32px',
      34: 'px-34px',
      36: 'px-36px',
      38: 'px-38px',
      40: 'px-40px',
      42: 'px-42px',
      44: 'px-44px',
      46: 'px-46px',
      48: 'px-48px',
      50: 'px-50px',
      52: 'px-52px',
      54: 'px-54px',
      56: 'px-56px',
      58: 'px-58px',
      60: 'px-60px',
      62: 'px-62px',
      64: 'px-64px',
    },
    paddingHorizontalMd: {
      0: 'md:px-0px',
      2: 'md:px-2px',
      4: 'md:px-4px',
      6: 'md:px-6px',
      8: 'md:px-8px',
      10: 'md:px-10px',
      12: 'md:px-12px',
      14: 'md:px-14px',
      16: 'md:px-16px',
      18: 'md:px-18px',
      20: 'md:px-20px',
      22: 'md:px-22px',
      24: 'md:px-24px',
      26: 'md:px-26px',
      28: 'md:px-28px',
      30: 'md:px-30px',
      32: 'md:px-32px',
      34: 'md:px-34px',
      36: 'md:px-36px',
      38: 'md:px-38px',
      40: 'md:px-40px',
      42: 'md:px-42px',
      44: 'md:px-44px',
      46: 'md:px-46px',
      48: 'md:px-48px',
      50: 'md:px-50px',
      52: 'md:px-52px',
      54: 'md:px-54px',
      56: 'md:px-56px',
      58: 'md:px-58px',
      60: 'md:px-60px',
      62: 'md:px-62px',
      64: 'md:px-64px',
    },
    paddingHorizontalLg: {
      0: 'lg:px-0px',
      2: 'lg:px-2px',
      4: 'lg:px-4px',
      6: 'lg:px-6px',
      8: 'lg:px-8px',
      10: 'lg:px-10px',
      12: 'lg:px-12px',
      14: 'lg:px-14px',
      16: 'lg:px-16px',
      18: 'lg:px-18px',
      20: 'lg:px-20px',
      22: 'lg:px-22px',
      24: 'lg:px-24px',
      26: 'lg:px-26px',
      28: 'lg:px-28px',
      30: 'lg:px-30px',
      32: 'lg:px-32px',
      34: 'lg:px-34px',
      36: 'lg:px-36px',
      38: 'lg:px-38px',
      40: 'lg:px-40px',
      42: 'lg:px-42px',
      44: 'lg:px-44px',
      46: 'lg:px-46px',
      48: 'lg:px-48px',
      50: 'lg:px-50px',
      52: 'lg:px-52px',
      54: 'lg:px-54px',
      56: 'lg:px-56px',
      58: 'lg:px-58px',
      60: 'lg:px-60px',
      62: 'lg:px-62px',
      64: 'lg:px-64px',
    },
    paddingVertical: {
      0: 'py-0px',
      2: 'py-2px',
      4: 'py-4px',
      6: 'py-6px',
      8: 'py-8px',
      10: 'py-10px',
      12: 'py-12px',
      14: 'py-14px',
      16: 'py-16px',
      18: 'py-18px',
      20: 'py-20px',
      22: 'py-22px',
      24: 'py-24px',
      26: 'py-26px',
      28: 'py-28px',
      30: 'py-30px',
      32: 'py-32px',
      34: 'py-34px',
      36: 'py-36px',
      38: 'py-38px',
      40: 'py-40px',
      42: 'py-42px',
      44: 'py-44px',
      46: 'py-46px',
      48: 'py-48px',
      50: 'py-50px',
      52: 'py-52px',
      54: 'py-54px',
      56: 'py-56px',
      58: 'py-58px',
      60: 'py-60px',
      62: 'py-62px',
      64: 'py-64px',
    },
    paddingVerticalMd: {
      0: 'md:py-0px',
      2: 'md:py-2px',
      4: 'md:py-4px',
      6: 'md:py-6px',
      8: 'md:py-8px',
      10: 'md:py-10px',
      12: 'md:py-12px',
      14: 'md:py-14px',
      16: 'md:py-16px',
      18: 'md:py-18px',
      20: 'md:py-20px',
      22: 'md:py-22px',
      24: 'md:py-24px',
      26: 'md:py-26px',
      28: 'md:py-28px',
      30: 'md:py-30px',
      32: 'md:py-32px',
      34: 'md:py-34px',
      36: 'md:py-36px',
      38: 'md:py-38px',
      40: 'md:py-40px',
      42: 'md:py-42px',
      44: 'md:py-44px',
      46: 'md:py-46px',
      48: 'md:py-48px',
      50: 'md:py-50px',
      52: 'md:py-52px',
      54: 'md:py-54px',
      56: 'md:py-56px',
      58: 'md:py-58px',
      60: 'md:py-60px',
      62: 'md:py-62px',
      64: 'md:py-64px',
    },
    paddingVerticalLg: {
      0: 'lg:py-0px',
      2: 'lg:py-2px',
      4: 'lg:py-4px',
      6: 'lg:py-6px',
      8: 'lg:py-8px',
      10: 'lg:py-10px',
      12: 'lg:py-12px',
      14: 'lg:py-14px',
      16: 'lg:py-16px',
      18: 'lg:py-18px',
      20: 'lg:py-20px',
      22: 'lg:py-22px',
      24: 'lg:py-24px',
      26: 'lg:py-26px',
      28: 'lg:py-28px',
      30: 'lg:py-30px',
      32: 'lg:py-32px',
      34: 'lg:py-34px',
      36: 'lg:py-36px',
      38: 'lg:py-38px',
      40: 'lg:py-40px',
      42: 'lg:py-42px',
      44: 'lg:py-44px',
      46: 'lg:py-46px',
      48: 'lg:py-48px',
      50: 'lg:py-50px',
      52: 'lg:py-52px',
      54: 'lg:py-54px',
      56: 'lg:py-56px',
      58: 'lg:py-58px',
      60: 'lg:py-60px',
      62: 'lg:py-62px',
      64: 'lg:py-64px',
    },
  },
  defaultVariants: {
    borderRadius: 8,
    borderRadiusMd: 8,
    borderRadiusLg: 8,
    paddingHorizontal: 16,
    paddingHorizontalMd: 16,
    paddingHorizontalLg: 16,
    paddingVertical: 16,
    paddingVerticalMd: 16,
    paddingVerticalLg: 16,
  },
})

export function Card({
  borderRadius,
  paddingHorizontal,
  paddingVertical,
  className,
  children,
}: CardProps) {
  const style = cardStyles({
    borderRadius: renderResponsizeProp(borderRadius),
    borderRadiusMd: renderResponsizeProp(borderRadius, 'md'),
    borderRadiusLg: renderResponsizeProp(borderRadius, 'lg'),
    paddingHorizontal: renderResponsizeProp(paddingHorizontal),
    paddingHorizontalMd: renderResponsizeProp(paddingHorizontal, 'md'),
    paddingHorizontalLg: renderResponsizeProp(paddingHorizontal, 'lg'),
    paddingVertical: renderResponsizeProp(paddingVertical),
    paddingVerticalMd: renderResponsizeProp(paddingVertical, 'md'),
    paddingVerticalLg: renderResponsizeProp(paddingVertical, 'lg'),
    className,
  })

  return <div className={style}>{children}</div>
}
