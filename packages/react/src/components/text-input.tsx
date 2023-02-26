import { InputHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName } from './icon'

export type TextInputRootProps = {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex w-full items-center gap-3 rounded bg-gray-900 py-4 px-3 ring-gray-900 focus-within:ring-2">
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

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement> & {}

function TextInputInput({ ...inputProps }: TextInputInputProps) {
  return (
    <input
      {...inputProps}
      className="text-gray-100 placeholder:text-gray-400 flex-1 bg-transparent text-16 outline-none"
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
