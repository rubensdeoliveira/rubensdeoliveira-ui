import { InputHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName } from './icon'
import { UseFormRegister } from 'react-hook-form'

export type InputRadioRootProps = {
  children: ReactNode
}

function InputRadioRoot({ children }: InputRadioRootProps) {
  return (
    <div className="flex w-full items-center gap-12px rounded bg-gray-900 py-16px px-12px ring-gray-900 focus-within:ring-2">
      {children}
    </div>
  )
}

InputRadioRoot.displayName = 'InputRadio.Root'

export type InputRadioIconProps = {
  name: IconName
}

function InputRadioIcon({ name }: InputRadioIconProps) {
  return <Icon name={name} />
}

InputRadioIcon.displayName = 'InputRadio.Icon'

export type InputRadioInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  register: UseFormRegister<any>
}

function InputRadioInput({
  name,
  register,
  ...inputProps
}: InputRadioInputProps) {
  return (
    <input
      {...inputProps}
      {...register(name)}
      className="flex-1 bg-transparent text-16px text-gray-100 outline-none placeholder:text-gray-400"
    />
  )
}

InputRadioInput.displayName = 'InputRadio.Input'

export const InputRadio = {
  Root: InputRadioRoot,
  Input: InputRadioInput,
  Icon: InputRadioIcon,
}
