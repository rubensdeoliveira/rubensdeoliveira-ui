import { cva } from 'class-variance-authority'
import Datepicker from 'react-tailwindcss-datepicker'
import { Control, Controller, FieldErrors } from 'react-hook-form'

export type InputDateProps = {
  name: string
  control: Control<any>
  label?: string
  containerClassName?: string
  inputClassName?: string
  labelClassName?: string
  errors?: FieldErrors<any>
  errorSpanClassName?: string
  defaultValue?: string
  inputContainerClassName?: string
  toggleClassName?: string
  primaryColor?:
    | 'blue'
    | 'orange'
    | 'yellow'
    | 'red'
    | 'purple'
    | 'amber'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'indigo'
    | 'violet'
    | 'fuchsia'
    | 'pink'
    | 'rose'
}

const containerStyles = cva('rdoui-w-full rdoui-flex rdoui-flex-col')
const labelStyles = cva('')
const errorSpanStyles = cva('')
const inputContainerStyles = cva('relative outline-none')
const inputStyles = cva(
  'relative transition-all duration-300 pr-14 w-full outline-none',
)
const toggleStyles = cva(
  'absolute right-0 h-full focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed',
)

export function InputDate({
  control,
  name,
  containerClassName,
  inputClassName,
  labelClassName,
  label,
  errors,
  defaultValue = '',
  errorSpanClassName,
  inputContainerClassName,
  toggleClassName,
  primaryColor,
  ...rest
}: InputDateProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
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
          <Datepicker
            {...rest}
            {...field}
            primaryColor={primaryColor}
            asSingle={true}
            useRange={false}
            displayFormat={'DD/MM/YYYY'}
            containerClassName={inputContainerStyles({
              className: inputContainerClassName,
            })}
            inputClassName={inputStyles({ className: inputClassName })}
            toggleClassName={toggleStyles({ className: toggleClassName })}
          />
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
