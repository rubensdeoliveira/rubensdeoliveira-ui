import { ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'

export type IconProps = {
  name: ComponentType<IconBaseProps>
  size?: number
  className?: string
}

export function Icon({ name: IconName, size = 24, className }: IconProps) {
  return <IconName className={className} size={size} />
}
