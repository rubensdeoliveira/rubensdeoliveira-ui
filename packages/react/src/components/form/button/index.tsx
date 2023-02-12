import { ButtonHTMLAttributes, useMemo } from 'react'
import { Icon, IconName } from '../../icon'

export type ButtonModel = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  variant?: 'primary' | 'secondary' | 'link' | 'ghost'
  iconLeft?: IconName
  iconRight?: IconName
  isLoading?: boolean
}

export function Button({
  label,
  variant = 'primary',
  iconLeft,
  iconRight,
  type = 'submit',
  isLoading = false,
  ...rest
}: ButtonModel) {
  const renderIconLeft = useMemo(
    () => iconLeft && <Icon name={iconLeft} size={24} />,
    [iconLeft],
  )

  const renderIconRight = useMemo(
    () => iconRight && <Icon name={iconRight} size={24} />,
    [iconRight],
  )

  const renderButtonContent = useMemo(
    () => (
      <>
        {renderIconLeft}
        {label}
        {renderIconRight}
      </>
    ),
    [renderIconLeft, renderIconRight, label],
  )

  const sharedClassName = `btn gap-2 normal-case ${isLoading ? 'loading' : ''}`

  switch (variant) {
    case 'secondary':
      return (
        <button {...rest} className={`${sharedClassName} btn-outline`}>
          {renderButtonContent}
        </button>
      )
    case 'link':
      return (
        <button
          {...rest}
          className={`${sharedClassName} btn-link no-underline`}
        >
          {renderButtonContent}
        </button>
      )
    case 'ghost':
      return (
        <button {...rest} className={`${sharedClassName} btn-ghost`}>
          {renderButtonContent}
        </button>
      )
    default:
      return (
        <button {...rest} className={sharedClassName}>
          {renderButtonContent}
        </button>
      )
  }
}
