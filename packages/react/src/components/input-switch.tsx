import { InputHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName } from './icon'
import { UseFormRegister } from 'react-hook-form'

export type InputSwitchRootProps = {
  children: ReactNode
}

function InputSwitchRoot({ children }: InputSwitchRootProps) {
  return (
    <div className="flex w-full items-center gap-12px rounded bg-gray-900 py-16px px-12px ring-gray-900 focus-within:ring-2">
      {children}
    </div>
  )
}

InputSwitchRoot.displayName = 'InputSwitch.Root'

export type InputSwitchIconProps = {
  name: IconName
}

function InputSwitchIcon({ name }: InputSwitchIconProps) {
  return <Icon name={name} />
}

InputSwitchIcon.displayName = 'InputSwitch.Icon'

export type InputSwitchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  register: UseFormRegister<any>
}

function InputSwitchInput({
  name,
  register,
  ...inputProps
}: InputSwitchInputProps) {
  return (
    <input
      {...inputProps}
      {...register(name)}
      className="flex-1 bg-transparent text-16px text-gray-100 outline-none placeholder:text-gray-400"
    />
  )
}

InputSwitchInput.displayName = 'InputSwitch.Input'

export const InputSwitch = {
  Root: InputSwitchRoot,
  Input: InputSwitchInput,
  Icon: InputSwitchIcon,
}
