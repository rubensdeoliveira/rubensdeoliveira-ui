import { cva, VariantProps } from 'class-variance-authority'
import { Icon } from './icon'
import { containerStyles } from './avatar.component.styles'
import { keys } from 'ts-transformer-keys'

/* eslint-disable @next/next/no-img-element */
export type AvatarProps = {
  name?: string
  imageUrl?: string
  size?: VariantProps<typeof containerStyles>['size']
}

export function Avatar({ name = '', imageUrl, size = '48' }: AvatarProps) {
  function getFirstInitial(
    name: string,
  ): VariantProps<typeof containerStyles>['background'] {
    return name.toUpperCase().charAt(0) as VariantProps<
      typeof containerStyles
    >['background']
  }
  function getNameInitials(name: string) {
    const splittedName = name.split(' ')
    if (splittedName.length === 1) {
      return name.charAt(0).toUpperCase()
    }
    if (splittedName.length > 1) {
      return `${splittedName[0].charAt(0)}.${splittedName[
        splittedName.length - 1
      ].charAt(0)}`.toUpperCase()
    }
    return ''
  }
  const initials = getNameInitials(name)
  const keysOfProps = keys<AvatarProps>()

  return (
    <div
      className={containerStyles({
        background: getFirstInitial(name),
        size,
      })}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="rdoui-rounded-full" />
      ) : (
        <>
          {name ? (
            <div className="rdoui-rounded-full rdoui-leading-none">
              {initials}
            </div>
          ) : (
            <div className="rdoui-p-3 rdoui-rounded-full">
              <Icon name="UserIcon" size={Number(size) / 2} />
            </div>
          )}
        </>
      )}
    </div>
  )
}
