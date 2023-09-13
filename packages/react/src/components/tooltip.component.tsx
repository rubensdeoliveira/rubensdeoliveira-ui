import { InputHTMLAttributes, ReactNode } from 'react'
import { Icon, IconName } from './icon.component'
import { UseFormRegister } from 'react-hook-form'

export type TooltipRootProps = {
  children: ReactNode
}

function TooltipRoot({ children }: TooltipRootProps) {
  return (
    <div className="flex w-full items-center gap-12px rounded bg-gray-900 py-16px px-12px ring-gray-900 focus-within:ring-2">
      {children}
    </div>
  )
}

TooltipRoot.displayName = 'Tooltip.Root'

export type TooltipIconProps = {
  name: IconName
}

function TooltipIcon({ name }: TooltipIconProps) {
  return <Icon name={name} />
}

TooltipIcon.displayName = 'Tooltip.Icon'

export type TooltipInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  register: UseFormRegister<any>
}

function TooltipInput({ name, register, ...inputProps }: TooltipInputProps) {
  return (
    <input
      {...inputProps}
      {...register(name)}
      className="flex-1 bg-transparent text-16px text-gray-100 outline-none placeholder:text-gray-400"
    />
  )
}

TooltipInput.displayName = 'Tooltip.Input'

export const Tooltip = {
  Root: TooltipRoot,
  Input: TooltipInput,
  Icon: TooltipIcon,
}
