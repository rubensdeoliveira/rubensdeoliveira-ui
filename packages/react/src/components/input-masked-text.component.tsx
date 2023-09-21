import { InputHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { cva } from 'class-variance-authority'

export type InputMaskedTextProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  name: string
  control: Control<any>
  password?: boolean
  label?: string
  containerClassName?: string
  inputClassName?: string
  mask: 'telefone' | 'cpf' | 'cnpj' | 'cep'
}

const containerStyles = cva(
  'rdoui-flex rdoui-gap-3 rdoui-items-center rdoui-w-full rdoui-bg-white',
)

const inputStyles = cva(
  'rdoui-flex-1 rdoui-bg-[transparent] rdoui-outline-none',
)

export function InputMaskedText({
  control,
  name,
  containerClassName,
  inputClassName,
  mask,
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
      render={({ field }) => (
        <div className={containerStyles({ className: containerClassName })}>
          <InputMask
            {...rest}
            {...field}
            mask={renderMask()}
            maskChar=" "
            type="text"
            className={inputStyles({ className: inputClassName })}
          />
        </div>
      )}
    />
  )
}
