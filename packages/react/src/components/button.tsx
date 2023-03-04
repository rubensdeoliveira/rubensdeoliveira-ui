import { cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { renderResponsizeProp } from '../helpers/render-responsive-prop'
import { Icon, IconName } from './icon'

const buttonStyles = cva(
  'flex items-center gap-10px focus:ring-4 font-medium rounded-lg focus:outline-none text-center',
  {
    variants: {
      size: {
        smaller: 'p-2.5',
        small: 'text-14px px-20px py-2.5',
        default: 'px-20px py-12px text-16px',
        big: ' text-16px px-24px py-3.5',
      },
      sizeMd: {
        smaller: 'p-2.5',
        small: 'text-14px px-20px py-2.5',
        default: 'px-20px py-12px text-16px',
        big: ' text-16px px-24px py-3.5',
      },
      sizeLg: {
        smaller: 'p-2.5',
        small: 'text-14px px-20px py-2.5',
        default: 'px-20px py-12px text-16px',
        big: ' text-16px px-24px py-3.5',
      },
    },
    defaultVariants: {
      size: 'default',
      sizeMd: 'default',
      sizeLg: 'default',
    },
  },
)

type ButtonSizeProps = 'default' | 'small' | 'big' | 'smaller'

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
