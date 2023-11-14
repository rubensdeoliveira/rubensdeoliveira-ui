import { InputHTMLAttributes } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { cva } from 'class-variance-authority'

export type InputMaskedTextProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  name: string
  control: Control<any>
  label?: string
  containerClassName?: string
  inputClassName?: string
  labelClassName?: string
  mask: 'telefone' | 'cpf' | 'cnpj' | 'cep'
  errors?: FieldErrors<any>
  errorSpanClassName?: string
}

const containerStyles = cva('rdoui-w-full rdoui-flex rdoui-flex-col')
const inputStyles = cva('rdoui-w-full rdoui-outline-none rdoui-overflow-hidden')
const labelStyles = cva('')
const errorSpanStyles = cva('')

export function InputMaskedText({
  control,
  name,
  containerClassName,
  inputClassName,
  mask,
  labelClassName,
  label,
  errors,
  defaultValue = '',
  errorSpanClassName,
  ...rest
}: InputMaskedTextProps) {
  function renderMask() {
    switch (mask) {
      case 'telefone':
        return '(99) 99999-9999'
      case 'cep':
        return '99999-999'
      case 'cnpj':
        return '99.999.999/9999-99'
      case 'cpf':
        return '999.999.999-99'
      default:
        return ''
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div className={containerStyles({ className: containerClassName })}>
          {label && (
            <label
              htmlFor={name}
              className={labelStyles({
                className: labelClassName,
              })}
            >
              {label}
            </label>
          )}
          <InputMask
            {...field}
            {...rest}
            id={name}
            mask={renderMask()}
            maskPlaceholder={' '}
            type="text"
            className={inputStyles({ className: inputClassName })}
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
