import { ComponentType, InputHTMLAttributes, useState } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { cva } from 'class-variance-authority'
import { Button } from './button.component'
import { IconBaseProps } from 'react-icons'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export type InputTextProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  name: string
  control: Control<any>
  icon?: ComponentType<IconBaseProps>
  label?: string
  containerClassName?: string
  inputContainerClassName?: string
  labelClassName?: string
  iconClassName?: string
  inputClassName?: string
  defaultValue?: string
  errorSpanClassName?: string
  type?: 'password' | 'text'
  errors?: FieldErrors<any>
}

const containerStyles = cva('rdoui-w-full rdoui-flex rdoui-flex-col')

const labelStyles = cva('')

const inputContainerStyles = cva(
  'rdoui-flex rdoui-gap-3 rdoui-items-center rdoui-w-full',
)

const inputStyles = cva(
  'rdoui-flex-1 !rdoui-bg-[transparent] rdoui-outline-none',
)

const iconStyles = cva('')

const errorSpanStyles = cva('')

export function InputText({
  name,
  icon: Icon,
  control,
  label,
  containerClassName,
  inputContainerClassName,
  labelClassName,
  inputClassName,
  defaultValue = '',
  type = 'text',
  iconClassName,
  errorSpanClassName,
  errors,
  ...rest
}: InputTextProps) {
  const password = type === 'password'
  const [showPassword, setShowPassword] = useState<boolean>(!password)
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field }) => (
        <div className={containerStyles({ className: containerClassName })}>
          <label
            htmlFor={name}
            className={labelStyles({
              className: labelClassName,
            })}
          >
            {label}
          </label>
          <div
            className={inputContainerStyles({
              className: inputContainerClassName,
            })}
          >
            <input
              {...rest}
              value={field.value}
              onChange={(value) => {
                if (value) {
                  field.onChange(value)
                }
              }}
              id={name}
              className={inputStyles({ className: inputClassName })}
              type={password && !showPassword ? 'password' : 'text'}
            />
            {Icon && !password && (
              <Icon className={iconStyles({ className: iconClassName })} />
            )}
            {password && (
              <Button
                iconClassName={iconClassName}
                type="button"
                buttonType="ghosted"
                iconLeft={password && !showPassword ? FiEye : FiEyeOff}
                onClick={() => setShowPassword((oldValue) => !oldValue)}
              />
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
