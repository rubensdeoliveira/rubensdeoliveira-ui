import { VariantProps, cva } from 'class-variance-authority'

const containerStyles = cva('rdoui-flex rdoui-items-center rdoui-w-full', {
  variants: {
    space: {
      2: 'rdoui-gap-[2px]',
      4: 'rdoui-gap-[4px]',
      6: 'rdoui-gap-[6px]',
      8: 'rdoui-gap-[8px]',
      10: 'rdoui-gap-[10px]',
      12: 'rdoui-gap-[12px]',
      14: 'rdoui-gap-[14px]',
      16: 'rdoui-gap-[16px]',
      18: 'rdoui-gap-[18px]',
      20: 'rdoui-gap-[20px]',
      24: 'rdoui-gap-[24px]',
      28: 'rdoui-gap-[28px]',
      32: 'rdoui-gap-[32px]',
    },
  },
  defaultVariants: {
    space: 18,
  },
})

const lineStyles = cva('rdoui-flex-1', {
  variants: {
    lineSize: {
      1: 'rdoui-h-[1px]',
      2: 'rdoui-h-[2px]',
      3: 'rdoui-h-[3px]',
      4: 'rdoui-h-[4px]',
      5: 'rdoui-h-[5px]',
      6: 'rdoui-h-[6px]',
      7: 'rdoui-h-[7px]',
      8: 'rdoui-h-[8px]',
    },
  },
  defaultVariants: {
    lineSize: 1,
  },
})

const textStyles = cva('')

export type SeparatorProps = VariantProps<typeof lineStyles> &
  VariantProps<typeof containerStyles> & {
    text: string
    textClassName?: string
    lineClassName?: string
    containerClassName?: string
  }

export function Separator({
  lineClassName,
  textClassName,
  containerClassName,
  text,
  lineSize,
  space,
}: SeparatorProps) {
  return (
    <div className={containerStyles({ className: containerClassName, space })}>
      <div className={lineStyles({ className: lineClassName, lineSize })}></div>
      <span className={textStyles({ className: textClassName })}>{text}</span>
      <div className={lineStyles({ className: lineClassName, lineSize })}></div>
    </div>
  )
}
