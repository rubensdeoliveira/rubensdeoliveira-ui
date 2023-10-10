import { cva } from 'class-variance-authority'
import Datepicker, { DatepickerType } from 'react-tailwindcss-datepicker'
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
}

const containerStyles = cva('rdoui-w-full rdoui-flex rdoui-flex-col')
const labelStyles = cva('')
const errorSpanStyles = cva('')

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
            asSingle={true}
            useRange={false}
            displayFormat={'DD/MM/YYYY'}
            containerClassName={inputContainerClassName}
            inputClassName={inputClassName}
            toggleClassName={toggleClassName}
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
