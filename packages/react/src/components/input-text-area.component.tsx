import { TextareaHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'
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
}

const containerStyles = cva(
  'rdoui-flex rdoui-gap-3 rdoui-items-center rdoui-w-full ',
)

const inputStyles = cva(
  'rdoui-flex-1 rdoui-bg-[transparent] rdoui-outline-none',
)

export function InputTextArea({
  name,
  control,
  password = false,
  label,
  containerClassName,
  inputClassName,
  ...rest
}: InputTextAreaProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <label htmlFor={name}>{label}</label>
          <textarea
            {...rest}
            {...field}
            id={name}
            className="rdoui-w-full"
          ></textarea>
        </>
      )}
    />
  )
}
