import { InputHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName } from './icon'
import { UseFormRegister } from 'react-hook-form'

export type DialogRootProps = {
  children: ReactNode
}

function DialogRoot({ children }: DialogRootProps) {
  return (
    <div className="flex w-full items-center gap-12px rounded bg-gray-900 py-16px px-12px ring-gray-900 focus-within:ring-2">
      {children}
    </div>
  )
}

DialogRoot.displayName = 'Dialog.Root'

export type DialogIconProps = {
  name: IconName
}

function DialogIcon({ name }: DialogIconProps) {
  return <Icon name={name} />
}

DialogIcon.displayName = 'Dialog.Icon'

export type DialogInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  register: UseFormRegister<any>
}

function DialogInput({ name, register, ...inputProps }: DialogInputProps) {
  return (
    <input
      {...inputProps}
      {...register(name)}
      className="flex-1 bg-transparent text-16px text-gray-100 outline-none placeholder:text-gray-400"
    />
  )
}

DialogInput.displayName = 'Dialog.Input'

export const Dialog = {
  Root: DialogRoot,
  Input: DialogInput,
  Icon: DialogIcon,
}
