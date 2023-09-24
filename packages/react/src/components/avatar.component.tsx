/* eslint-disable @next/next/no-img-element */

import { cva, VariantProps } from 'class-variance-authority'
import { Icon } from './icon.component'
import { FaUser } from 'react-icons/fa'

export type AvatarProps = {
  name?: string
  imageUrl?: string
  size?: VariantProps<typeof containerStyles>['size']
  borderRadius?: VariantProps<typeof containerStyles>['borderRadius']
  containerClassName?: string
  imageClassName?: string
  textClassName?: string
  iconClassName?: string
}

const containerStyles = cva(
  `rdoui-flex rdoui-items-center rdoui-justify-center`,
  {
    variants: {
      borderRadius: {
        4: `rdoui-rounded-[4px]`,
        6: `rdoui-rounded-[6px]`,
        8: `rdoui-rounded-[8px]`,
        10: `rdoui-rounded-[10px]`,
        12: `rdoui-rounded-[12px]`,
        14: `rdoui-rounded-[14px]`,
        16: `rdoui-rounded-[16px]`,
        full: `rdoui-rounded-full`,
      },
      size: {
        16: `rdoui-w-4 rdoui-h-4 rdoui-text-[0.375rem]`,
        24: `rdoui-w-6 rdoui-h-6 rdoui-text-[0.5rem]`,
        32: `rdoui-w-8 rdoui-h-8 rdoui-text-[0.75rem]`,
        48: `rdoui-w-12 rdoui-h-12 rdoui-text-[1.125rem]`,
        56: `rdoui-w-14 rdoui-h-14 rdoui-text-[1.25rem]`,
        72: `rdoui-w-[6rem] rdoui-h-[6rem] rdoui-text-[1.75rem]`,
        96: `rdoui-w-24 rdoui-h-24 rdoui-text-[2rem]`,
        192: `rdoui-w-48 rdoui-h-48 rdoui-text-[4rem]`,
      },
      background: {
        A: 'rdoui-bg-red-200 rdoui-text-red-600',
        B: 'rdoui-bg-orange-200 rdoui-text-orange-600',
        C: 'rdoui-bg-amber-200 rdoui-text-amber-600',
        D: 'rdoui-bg-yellow-200 rdoui-text-yellow-600',
        E: 'rdoui-bg-lime-200 rdoui-text-lime-600',
        F: 'rdoui-bg-green-200 rdoui-text-green-600',
        G: 'rdoui-bg-emerald-200 rdoui-text-emerald-600',
        H: 'rdoui-bg-teal-200 rdoui-text-teal-600',
        I: 'rdoui-bg-cyan-200 rdoui-text-cyan-600',
        J: 'rdoui-bg-sky-200 rdoui-text-sky-600',
        K: 'rdoui-bg-blue-200 rdoui-text-blue-600',
        L: 'rdoui-bg-indigo-200 rdoui-text-indigo-600',
        M: 'rdoui-bg-violet-200 rdoui-text-violet-600',
        N: 'rdoui-bg-purple-200 rdoui-text-purple-600',
        O: 'rdoui-bg-fuchsia-200 rdoui-text-fuchsia-600',
        P: 'rdoui-bg-pink-200 rdoui-text-pink-600',
        Q: 'rdoui-bg-rose-200 rdoui-text-rose-600',
        R: 'rdoui-bg-red-200 rdoui-text-red-600',
        S: 'rdoui-bg-orange-200 rdoui-text-orange-600',
        T: 'rdoui-bg-amber-200 rdoui-text-amber-600',
        U: 'rdoui-bg-yellow-200 rdoui-text-yellow-600',
        V: 'rdoui-bg-lime-200 rdoui-text-lime-600',
        W: 'rdoui-bg-green-200 rdoui-text-green-600',
        X: 'rdoui-bg-emerald-200 rdoui-text-emerald-600',
        Y: 'rdoui-bg-teal-200 rdoui-text-teal-600',
        Z: 'rdoui-bg-cyan-200 rdoui-text-cyan-600',
        '': 'rdoui-bg-[#E5E5E5] rdoui-text-[#867E7E]',
      },
    },
    defaultVariants: {
      background: '',
      borderRadius: 'full',
    },
  },
)

const imageStyles = cva(`rdoui-rounded-full`)

const textStyles = cva(`rdoui-rounded-full rdoui-leading-none`)

const iconStyles = cva(`rdoui-p-3 rdoui-rounded-full`)

export function Avatar({
  name = '',
  imageUrl,
  size = 48,
  containerClassName,
  textClassName,
  iconClassName,
  imageClassName,
  borderRadius,
}: AvatarProps) {
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

  return (
    <div
      className={containerStyles({
        background: getFirstInitial(name),
        size,
        className: containerClassName,
        borderRadius,
      })}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name ?? 'Avatar'}
          className={imageStyles({ className: imageClassName })}
        />
      ) : (
        <>
          {name ? (
            <div className={textStyles({ className: textClassName })}>
              {initials}
            </div>
          ) : (
            <div className={iconStyles({ className: iconClassName })}>
              <Icon name={FaUser} size={Number(size) / 2} />
            </div>
          )}
        </>
      )}
    </div>
  )
}
