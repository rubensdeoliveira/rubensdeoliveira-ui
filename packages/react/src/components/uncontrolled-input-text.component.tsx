import { ComponentType, InputHTMLAttributes, useState } from 'react'
import { cva } from 'class-variance-authority'
import { Button } from './button.component'
import { IconBaseProps } from 'react-icons'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export type UncontrolledInputTextProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  name: string
  icon?: ComponentType<IconBaseProps>
  label?: string
  containerClassName?: string
  inputContainerClassName?: string
  labelClassName?: string
  iconClassName?: string
  inputClassName?: string
  type?: 'password' | 'text'
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

export function UncontrolledInputText({
  name,
  icon: Icon,
  label,
  containerClassName,
  inputContainerClassName,
  labelClassName,
  inputClassName,
  type = 'text',
  iconClassName,
  ...rest
}: UncontrolledInputTextProps) {
  const password = type === 'password'
  const [showPassword, setShowPassword] = useState<boolean>(!password)
  return (
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
    </div>
  )
}
