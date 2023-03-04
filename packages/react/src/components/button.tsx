import { cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { renderResponsizeProp } from '../helpers/render-responsive-prop'
import { Icon, IconName } from './icon'

const buttonStyles = cva(
  'flex items-center gap-[0.625rem] focus:ring-4 font-medium rounded-lg focus:outline-none text-center',
  {
    variants: {
      size: {
        small: 'text-sm px-5 py-2.5',
        default: 'px-5 py-3 text-base',
        big: ' text-base px-6 py-3.5',
      },
      sizeMd: {
        small: 'text-sm px-5 py-2.5',
        default: 'px-5 py-3 text-base',
        big: ' text-base px-6 py-3.5',
      },
      sizeLg: {
        small: 'text-sm px-5 py-2.5',
        default: 'px-5 py-3 text-base',
        big: ' text-base px-6 py-3.5',
      },
    },
    defaultVariants: {
      size: 'default',
      sizeMd: 'default',
      sizeLg: 'default',
    },
  },
)

type ButtonSizeProps = 'default' | 'small' | 'big'

export type ButtonRootProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  size?: ButtonSizeProps | ButtonSizeProps[]
  className?: string
}

function ButtonRoot({ children, size, className, ...rest }: ButtonRootProps) {
  return (
    <button
      {...rest}
      className={buttonStyles({
        size: renderResponsizeProp(size),
        sizeMd: renderResponsizeProp(size, 'md'),
        sizeLg: renderResponsizeProp(size, 'lg'),
        className,
      })}
    >
      {children}
    </button>
  )
}

ButtonRoot.displayName = 'Button.Root'

export type ButtonIconProps = {
  name: IconName
}

function ButtonIcon({ name }: ButtonIconProps) {
  return <Icon name={name} />
}

ButtonIcon.displayName = 'Button.Icon'

export type ButtonTextProps = {
  children: string
}

function ButtonText({ children }: ButtonTextProps) {
  return <>{children}</>
}

ButtonText.displayName = 'Button.Text'

export const Button = {
  Root: ButtonRoot,
  Text: ButtonText,
  Icon: ButtonIcon,
}
