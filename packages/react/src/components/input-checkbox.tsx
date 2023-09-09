import { InputHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'
import { IconProps } from './icon'
import { cva } from 'class-variance-authority'

export type InputCheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  name: string
  control: Control<any>
  label: string
  icon?: IconProps
  labelClassName?: string
  inputClassName?: string
}

const labelStyles = cva(
  'rdoui-ml-2 rdoui-text-sm rdoui-font-medium rdoui-text-gray-900',
)

const inputStyles = cva(
  'rdoui-w-4 rdoui-h-4 rdoui-bg-gray-100 rdoui-border-gray-300 rdoui-roundedfocus:rdoui-ring-2',
)

export function InputCheckbox({
  control,
  name,
  label,
  inputClassName,
  labelClassName,
  ...rest
}: InputCheckboxProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="rdoui-flex rdoui-items-center">
          <input
            {...rest}
            checked={field.value}
            onChange={field.onChange}
            id={name}
            type="checkbox"
            className={inputStyles({ className: inputClassName })}
          />
          <label
            htmlFor={name}
            className={labelStyles({ className: labelClassName })}
          >
            {label}
          </label>
        </div>
      )}
    />
  )
}
