import * as SolidIcon from '@heroicons/react/24/solid'
import * as OutlineIcon from '@heroicons/react/24/outline'

export type IconName = keyof typeof SolidIcon

export type IconProps = {
  name: IconName
  size?: number
  type?: 'solid' | 'outline'
  className?: string
}

export function Icon({
  name,
  size = 24,
  type = 'solid',
  className
}: IconProps) {
  const { ...solidIcons } = SolidIcon
  const { ...outlineIcons } = OutlineIcon
  const TheIcon = type === 'solid' ? solidIcons[name] : outlineIcons[name]
  return TheIcon ? (
    <TheIcon
      data-cy={`icon-${name}`}
      style={{ width: size, height: size }}
      className={className}
    />
  ) : null
}
