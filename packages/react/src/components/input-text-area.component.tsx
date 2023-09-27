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

const containerStyles = cva(
  'rdoui-flex rdoui-gap-3 rdoui-items-center rdoui-w-full ',
)

const inputStyles = cva(
  'rdoui-flex-1 rdoui-bg-[transparent] rdoui-outline-none',
)

const labelStyles = cva(
  'rdoui-flex-1 rdoui-bg-[transparent] rdoui-outline-none',
)

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
  errors,
  ...rest
}: InputTextAreaProps) {
  return (
    <Controller
      name={name}
      control={control}
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
