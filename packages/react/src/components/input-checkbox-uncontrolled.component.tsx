import { cva } from 'class-variance-authority'
import * as Checkbox from '@radix-ui/react-checkbox'
import { FaCheck } from 'react-icons/fa'

export type InputCheckboxUncontrolledProps = Omit<
  Checkbox.CheckboxProps,
  'className'
> & {
  label?: string
  labelClassName?: string
  inputClassName?: string
  containerClassName?: string
  iconClassName?: string
}

const containerStyles = cva('rdoui-flex rdoui-items-center rdoui-gap-2')
const labelStyles = cva('')
const inputStyles = cva(
  'rdoui-flex rdoui-appearance-none rdoui-items-center rdoui-justify-center rdoui-rounded-[4px] rdoui-outline-none',
)
const iconStyles = cva('')

export function InputCheckboxUncontrolled({
  label,
  inputClassName,
  labelClassName,
  containerClassName,
  iconClassName,
  id,
  ...rest
}: InputCheckboxUncontrolledProps) {
  return (
    <div className={containerStyles({ className: containerClassName })}>
      <div className="rdoui-flex rdoui-items-center rdoui-gap-2">
        <Checkbox.Root
          {...rest}
          className={inputStyles({ className: inputClassName })}
          id={id}
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
            htmlFor={id}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  )
}
