import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon, IconProps } from './icon'
import { TextProps, Text } from './text'
import * as S from '../styles'

// Button Root
export type ButtonRootProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  w?: number | number[] | 'full'
  h?: number | number[]
  px?: number | number[]
  py?: number | number[]
  isLoading?: boolean
  className?: string
  alignContent?: 'start' | 'center'
  children: ReactNode
}
function ButtonRoot({
  w,
  h,
  px,
  py,
  isLoading,
  children,
  className,
  disabled,
  alignContent = 'center',
  ...rest
}: ButtonRootProps) {
  return (
    <S.button
      {...rest}
      w={w}
      h={h}
      px={px}
      py={py}
      className={className}
      disabled={isLoading || disabled}
      alignContent={alignContent}
    >
      {isLoading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        children
      )}
    </S.button>
  )
}

ButtonRoot.displayName = 'Button.Root'

// Button Icon
export type ButtonIconProps = IconProps
function ButtonIcon({ ...iconProps }: ButtonIconProps) {
  return <Icon {...iconProps} />
}
ButtonIcon.displayName = 'Button.Icon'

// Button Text
export type ButtonTextProps = TextProps
function ButtonText({ ...textProps }: ButtonTextProps) {
  return <Text {...textProps} />
}
ButtonText.displayName = 'Button.Text'

// Export components
export const Button = {
  Root: ButtonRoot,
  Text: ButtonText,
  Icon: ButtonIcon
}
