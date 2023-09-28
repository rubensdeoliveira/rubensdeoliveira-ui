import { TextareaHTMLAttributes } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { cva } from 'class-variance-authority'

export type InputTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'className'
> & {
  name: string
  control: Control<any>
  password?: boolean
  label?: string
  containerClassName?: string
  inputClassName?: string
  errors?: FieldErrors<any>
  labelClassName?: string
  errorSpanClassName?: string
}

const containerStyles = cva('rdoui-w-full rdoui-flex rdoui-flex-col')

const inputStyles = cva('')

const labelStyles = cva('')

const errorSpanStyles = cva('')

export function InputTextArea({
  name,
  control,
  password = false,
  label,
  containerClassName,
  inputClassName,
  labelClassName,
  errorSpanClassName,
  defaultValue = '',
  errors,
  ...rest
}: InputTextAreaProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div className={containerStyles({ className: containerClassName })}>
          <label
            htmlFor={name}
            className={labelStyles({ className: labelClassName })}
          >
            {label}
          </label>
          <textarea
            {...rest}
            {...field}
            id={name}
            className={inputStyles({ className: inputClassName })}
          ></textarea>
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
