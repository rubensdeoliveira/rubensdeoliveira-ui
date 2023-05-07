import { InputHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName } from './icon'
import { UseFormRegister } from 'react-hook-form'

export type TextInputRootProps = {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex w-full items-center gap-12px rounded bg-gray-900 py-16px px-12px ring-gray-900 focus-within:ring-2">
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export type TextInputIconProps = {
  name: IconName
}

function TextInputIcon({ name }: TextInputIconProps) {
  return <Icon name={name} />
}

TextInputIcon.displayName = 'TextInput.Icon'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  register: UseFormRegister<any>
}

function TextInputInput({
  name,
  register,
  ...inputProps
}: TextInputInputProps) {
  return (
    <input
      {...inputProps}
      {...register(name)}
      className="flex-1 bg-transparent text-16px text-gray-100 outline-none placeholder:text-gray-400"
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
