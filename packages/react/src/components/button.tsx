import { cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { renderResponsizeProp } from '../helpers/render-responsive-prop'
import { Icon, IconName } from './icon'

const buttonStyles = cva('btn normal-case gap-8px', {
  variants: {
    size: {
      circle: 'btn-circle',
      smaller: 'btn-xs',
      small: 'btn-sm',
      default: 'btn-md',
      big: 'btn-lg',
    },
    sizeMd: {
      circle: 'md:btn-circle',
      smaller: 'md:btn-xs',
      small: 'md:btn-sm',
      default: 'md:btn-md',
      big: 'md:btn-lg',
    },
    sizeLg: {
      circle: 'lg:btn-circle',
      smaller: 'lg:btn-xs',
      small: 'lg:btn-sm',
      default: 'lg:btn-md',
      big: 'lg:btn-lg',
    },
    buttonType: {
      outline: 'btn-outline',
      default: '',
    },
  },
  defaultVariants: {
    size: 'default',
    sizeMd: 'default',
    sizeLg: 'default',
    buttonType: 'default',
  },
})

type ButtonSizeProps = 'default' | 'small' | 'big' | 'smaller' | 'circle'

export type ButtonRootProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  size?: ButtonSizeProps | ButtonSizeProps[]
  className?: string
  buttonType?: 'outline' | 'default' | 'ghost'
}

function ButtonRoot({
  children,
  size,
  className,
  buttonType,
  ...rest
}: ButtonRootProps) {
  function getCorrectClass() {
    switch (buttonType) {
      case 'ghost':
        return 'flex items-center gap-8px border-0'
      default:
        return buttonStyles({
          size: renderResponsizeProp(size),
          sizeMd: renderResponsizeProp(size, 'md'),
          sizeLg: renderResponsizeProp(size, 'lg'),
          buttonType,
          className,
        })
    }
  }

  return (
    <button {...rest} className={getCorrectClass()}>
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
