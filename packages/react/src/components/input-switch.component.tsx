import { InputHTMLAttributes, useState } from 'react'
import { Switch } from '@headlessui/react'
import { Control, Controller } from 'react-hook-form'

export type InputSwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  name: string
  control: Control<any>
  password?: boolean
  label?: string
  containerClassName?: string
  inputClassName?: string
}

export function InputSwitch({ control, name }: InputSwitchProps) {
  const [enabled, setEnabled] = useState(false)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Switch
          checked={field.value}
          onChange={(checked) => {
            setEnabled(checked)
            field.onChange(checked)
          }}
          className={`${enabled ? 'rdoui-bg-teal-900' : 'rdoui-bg-teal-700'}
          rdoui-relative rdoui-inline-flex rdoui-h-[38px] rdoui-w-[74px] rdoui-shrink-0 rdoui-cursor-pointer rdoui-rounded-full rdoui-border-2 rdoui-border-transparent rdoui-transition-colors rdoui-duration-200 rdoui-ease-in-out focus:rdoui-outline-none focus-visible:rdoui-ring-2 focus-visible:rdoui-ring-white focus-visible:rdoui-ring-opacity-75`}
        >
          <span className="rdoui-sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${
              enabled ? 'rdoui-translate-x-9' : 'rdoui-translate-x-0'
            }
            rdoui-pointer-events-none rdoui-inline-block rdoui-h-[34px] rdoui-w-[34px] rdoui-transform rdoui-rounded-full rdoui-bg-white rdoui-shadow-lg rdoui-ring-0 rdoui-transition rdoui-duration-200 rdoui-ease-in-out`}
          />
        </Switch>
      )}
    />
  )
}
