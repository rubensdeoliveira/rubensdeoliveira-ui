import { InputHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName } from './icon'
import { UseFormRegister } from 'react-hook-form'

export type SkeletonRootProps = {
  children: ReactNode
}

function SkeletonRoot({ children }: SkeletonRootProps) {
  return (
    <div className="flex w-full items-center gap-12px rounded bg-gray-900 py-16px px-12px ring-gray-900 focus-within:ring-2">
      {children}
    </div>
  )
}

SkeletonRoot.displayName = 'Skeleton.Root'

export type SkeletonIconProps = {
  name: IconName
}

function SkeletonIcon({ name }: SkeletonIconProps) {
  return <Icon name={name} />
}

SkeletonIcon.displayName = 'Skeleton.Icon'

export type SkeletonInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  register: UseFormRegister<any>
}

function SkeletonInput({ name, register, ...inputProps }: SkeletonInputProps) {
  return (
    <input
      {...inputProps}
      {...register(name)}
      className="flex-1 bg-transparent text-16px text-gray-100 outline-none placeholder:text-gray-400"
    />
  )
}

SkeletonInput.displayName = 'Skeleton.Input'

export const Skeleton = {
  Root: SkeletonRoot,
  Input: SkeletonInput,
  Icon: SkeletonIcon,
}
