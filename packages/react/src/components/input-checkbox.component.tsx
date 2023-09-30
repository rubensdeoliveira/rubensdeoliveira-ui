import { Control, Controller, FieldErrors } from 'react-hook-form'
import { cva } from 'class-variance-authority'
import * as Checkbox from '@radix-ui/react-checkbox'
import { FaCheck } from 'react-icons/fa'

export type InputCheckboxProps = Omit<Checkbox.CheckboxProps, 'className'> & {
  name: string
  control: Control<any>
  label?: string
  labelClassName?: string
  inputClassName?: string
  containerClassName?: string
  errorSpanClassName?: string
  iconClassName?: string
  errors?: FieldErrors<any>
}

const containerStyles = cva('rdoui-flex rdoui-items-center rdoui-gap-2')
const labelStyles = cva('')
const inputStyles = cva(
  'rdoui-flex rdoui-appearance-none rdoui-items-center rdoui-justify-center rdoui-rounded-[4px] rdoui-outline-none',
)
const iconStyles = cva('')
const errorSpanStyles = cva('')

export function InputCheckbox({
  control,
  name,
  label,
  inputClassName,
  labelClassName,
  containerClassName,
  errorSpanClassName,
  iconClassName,
  errors,
  ...rest
}: InputCheckboxProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={containerStyles({ className: containerClassName })}>
          <div className="rdoui-flex rdoui-items-center rdoui-gap-2">
            <Checkbox.Root
              {...rest}
              checked={field.value}
              onCheckedChange={field.onChange}
              className={inputStyles({ className: inputClassName })}
              id={name}
            >
              <Checkbox.Indicator
                className={iconStyles({ className: iconClassName })}
              >
                <FaCheck />
              </Checkbox.Indicator>
            </Checkbox.Root>
            {label && (
              <label
                className={labelStyles({ className: labelClassName })}
                htmlFor={name}
              >
                {label}
              </label>
            )}
          </div>
          {errors && errors[name]?.message && (
            <span
              className={errorSpanStyles({ className: errorSpanClassName })}
            >
              {errors[name]?.message?.toString()}
            </span>
          )}
        </div>
      )}
    />
  )
}
