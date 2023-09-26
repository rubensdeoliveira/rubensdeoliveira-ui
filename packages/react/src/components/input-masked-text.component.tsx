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
}

const containerStyles = cva('rdoui-flex rdoui-gap-3 rdoui-w-full')

const inputStyles = cva(
  'rdoui-flex-1 rdoui-bg-[transparent] rdoui-outline-none rdoui-w-full',
)

const labelStyles = cva('')

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
          <label
            htmlFor={name}
            className={labelStyles({
              className: labelClassName,
            })}
          >
            {label}
          </label>
          <InputMask
            {...rest}
            {...field}
            mask={renderMask()}
            maskPlaceholder={' '}
            type="text"
            className={inputStyles({ className: inputClassName })}
          />
          {errors && errors[name]?.message && (
            <span className="text-red-500">
              {errors[name]?.message?.toString()}
            </span>
          )}
        </div>
      )}
    />
  )
}
