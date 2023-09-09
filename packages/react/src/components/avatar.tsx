import { InputHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName } from './icon'
import { UseFormRegister } from 'react-hook-form'

export type AvatarRootProps = {
  children: ReactNode
}

function AvatarRoot({ children }: AvatarRootProps) {
  return (
    <div className="flex w-full items-center gap-12px rounded bg-gray-900 py-16px px-12px ring-gray-900 focus-within:ring-2">
      {children}
    </div>
  )
}

AvatarRoot.displayName = 'Avatar.Root'

export type AvatarIconProps = {
  name: IconName
}

function AvatarIcon({ name }: AvatarIconProps) {
  return <Icon name={name} />
}

AvatarIcon.displayName = 'Avatar.Icon'

export type AvatarInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  register: UseFormRegister<any>
}

function AvatarInput({ name, register, ...inputProps }: AvatarInputProps) {
  return (
    <input
      {...inputProps}
      {...register(name)}
      className="flex-1 bg-transparent text-16px text-gray-100 outline-none placeholder:text-gray-400"
    />
  )
}

AvatarInput.displayName = 'Avatar.Input'

export const Avatar = {
  Root: AvatarRoot,
  Input: AvatarInput,
  Icon: AvatarIcon,
}
