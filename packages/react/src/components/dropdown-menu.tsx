import { InputHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName } from './icon'
import { UseFormRegister } from 'react-hook-form'

export type DropdownMenuRootProps = {
  children: ReactNode
}

function DropdownMenuRoot({ children }: DropdownMenuRootProps) {
  return (
    <div className="flex w-full items-center gap-12px rounded bg-gray-900 py-16px px-12px ring-gray-900 focus-within:ring-2">
      {children}
    </div>
  )
}

DropdownMenuRoot.displayName = 'DropdownMenu.Root'

export type DropdownMenuIconProps = {
  name: IconName
}

function DropdownMenuIcon({ name }: DropdownMenuIconProps) {
  return <Icon name={name} />
}

DropdownMenuIcon.displayName = 'DropdownMenu.Icon'

export type DropdownMenuInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  register: UseFormRegister<any>
}

function DropdownMenuInput({
  name,
  register,
  ...inputProps
}: DropdownMenuInputProps) {
  return (
    <input
      {...inputProps}
      {...register(name)}
      className="flex-1 bg-transparent text-16px text-gray-100 outline-none placeholder:text-gray-400"
    />
  )
}

DropdownMenuInput.displayName = 'DropdownMenu.Input'

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Input: DropdownMenuInput,
  Icon: DropdownMenuIcon,
}
