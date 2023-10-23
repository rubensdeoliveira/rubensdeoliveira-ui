import { InputHTMLAttributes } from 'react'
import CurrencyInput from 'react-currency-input-field'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { cva } from 'class-variance-authority'

export type InputCurrencyProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  name: string
  control: Control<any>
  country?: 'br'
  errors?: FieldErrors<any>
  label?: string
  containerClassName?: string
  labelClassName?: string
  errorSpanClassName?: string
  inputClassName?: string
}

const containerStyles = cva('rdoui-w-full rdoui-flex rdoui-flex-col')
const labelStyles = cva('')
const inputStyles = cva()
const errorSpanStyles = cva('')

export function InputCurrency({
  country = 'br',
  name,
  control,
  errors,
  label,
  containerClassName,
  labelClassName,
  errorSpanClassName,
  inputClassName,
}: InputCurrencyProps) {
  const currencySettings = {
    symbol: '',
    precision: 2,
    thousandSeparator: ',',
    decimalSeparator: '.',
    symbolOnError: '',
  }

  if (country === 'br') {
    currencySettings.symbol = 'R$'
    currencySettings.thousandSeparator = '.'
    currencySettings.decimalSeparator = ','
  }

  return (
    <Controller
      name={name}
      control={control}
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
          <CurrencyInput
            className={inputStyles({ className: inputClassName })}
            value={field.value}
            onValueChange={(value, name) => {
              field.onChange(value, name)
            }}
            {...currencySettings}
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
