import { InputHTMLAttributes, useState } from 'react'
import { Icon, IconProps } from './icon.component'
import { Control, Controller } from 'react-hook-form'
import { cva } from 'class-variance-authority'
import { Button } from './button.component'

export type InputTextProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  name: string
  control: Control<any>
  icon?: IconProps
  label?: string
  containerClassName?: string
  inputClassName?: string
  defaultValue?: string
  type?: 'password' | 'text'
}

const containerStyles = cva(
  'rdoui-flex rdoui-gap-3 rdoui-items-center rdoui-w-full',
)

const inputStyles = cva(
  'rdoui-flex-1 !rdoui-bg-[transparent] rdoui-outline-none',
)

export function InputText({
  name,
  icon,
  control,
  label,
  containerClassName,
  inputClassName,
  defaultValue = '',
  type = 'text',
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
          <label htmlFor={name}>{label}</label>
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
          {icon && !password && <Icon {...icon} />}
          {password && (
            <Button
              type="button"
              buttonType="ghosted"
              iconLeft={{
                name: password && !showPassword ? 'EyeIcon' : 'EyeSlashIcon',
              }}
              onClick={() => setShowPassword((oldValue) => !oldValue)}
            />
          )}
        </div>
      )}
    />
  )
}
