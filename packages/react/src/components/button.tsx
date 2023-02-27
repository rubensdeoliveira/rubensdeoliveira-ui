import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName } from './icon'

export type ButtonRootProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

function ButtonRoot({ children, ...rest }: ButtonRootProps) {
  return (
    <button
      {...rest}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {children}
    </button>
  )
}

ButtonRoot.displayName = 'Button.Root'

export type ButtonIconProps = {
  name: IconName
}

function ButtonIcon({ name }: ButtonIconProps) {
  return <Icon name={name} />
}

ButtonIcon.displayName = 'Button.Icon'

export type ButtonInputProps = InputHTMLAttributes<HTMLInputElement> & {}

function ButtonInput({ ...inputProps }: ButtonInputProps) {
  return (
    <input
      {...inputProps}
      className="text-gray-100 placeholder:text-gray-400 flex-1 bg-transparent text-16 outline-none"
    />
  )
}

ButtonInput.displayName = 'Button.Input'

export const Button = {
  Root: ButtonRoot,
  Input: ButtonInput,
  Icon: ButtonIcon,
}
