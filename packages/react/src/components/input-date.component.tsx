import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { cva } from 'class-variance-authority'
import { Button } from './button.component'
import { Control, Controller } from 'react-hook-form'
import { FiCalendar } from 'react-icons/fi'

const containerStyles = cva(
  'rdoui-flex rdoui-gap-3 rdoui-items-center rdoui-w-full  [&>div]:rdoui-w-full',
)

const inputStyles = cva(
  '[&>div>input]:rdoui-flex-1 [&>div>input]:rdoui-bg-[transparent] [&>div>input]:rdoui-outline-none [&>div>input]:rdoui-w-full',
)

export type InputDateProps = Omit<
  ReactDatePickerProps,
  'className' | 'onChange'
> & {
  name: string
  control: Control<any>
  containerClassName?: string
  inputClassName?: string
}

export function InputDate({
  name,
  control,
  containerClassName,
  inputClassName,
  ...rest
}: InputDateProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={containerStyles({ className: containerClassName })}>
          <DatePicker
            {...rest}
            {...field}
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            dateFormat="dd/MM/yyyy"
            wrapperClassName={inputStyles({ className: inputClassName })}
          />
          <Button
            type="button"
            buttonType="ghosted"
            iconLeft={FiCalendar}
            iconClassName="w-6 h-6"
            onClick={() => {
              const input = document.querySelector<HTMLInputElement>(
                '.react-datepicker__input-container input',
              )
              if (input) {
                input.click()
              }
            }}
          />
        </div>
      )}
    />
  )
}
