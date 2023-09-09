import { InputHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName } from './icon'
import { UseFormRegister } from 'react-hook-form'

export type ModalRootProps = {
  children: ReactNode
}

function ModalRoot({ children }: ModalRootProps) {
  return (
    <div className="flex w-full items-center gap-12px rounded bg-gray-900 py-16px px-12px ring-gray-900 focus-within:ring-2">
      {children}
    </div>
  )
}

ModalRoot.displayName = 'Modal.Root'

export type ModalIconProps = {
  name: IconName
}

function ModalIcon({ name }: ModalIconProps) {
  return <Icon name={name} />
}

ModalIcon.displayName = 'Modal.Icon'

export type ModalInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  register: UseFormRegister<any>
}

function ModalInput({ name, register, ...inputProps }: ModalInputProps) {
  return (
    <input
      {...inputProps}
      {...register(name)}
      className="flex-1 bg-transparent text-16px text-gray-100 outline-none placeholder:text-gray-400"
    />
  )
}

ModalInput.displayName = 'Modal.Input'

export const Modal = {
  Root: ModalRoot,
  Input: ModalInput,
  Icon: ModalIcon,
}
