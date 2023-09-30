import { InputHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'
import { cva } from 'class-variance-authority'

export type InputCheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  name: string
  control: Control<any>
  label: string
  labelClassName?: string
  inputClassName?: string
  containerClassName?: string
}

const labelStyles = cva('rdoui-ml-2')

const inputStyles = cva(
  'rdoui-w-4 rdoui-h-4 rdoui-text-red-600 rdoui-bg-gray-100 rdoui-border-gray-300 rdoui-rounded focus:rdoui-ring-red-500 focus:rdoui-ring-2',
)

const containerStyles = cva('rdoui-flex rdoui-items-center rdoui-mr-4')

export function InputCheckbox({
  control,
  name,
  label,
  inputClassName,
  labelClassName,
  containerClassName,
  ...rest
}: InputCheckboxProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={containerStyles({ className: containerClassName })}>
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
