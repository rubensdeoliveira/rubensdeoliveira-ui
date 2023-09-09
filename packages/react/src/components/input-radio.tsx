import { InputHTMLAttributes, ReactElement, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Control, Controller } from 'react-hook-form'
import { IconProps } from './icon'

type OptionProps = {
  value: string
  label: string
}

type RadioItemBodyProps = {
  checked: boolean
  active: boolean
}

export type InputRadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  name: string
  options: OptionProps[]
  renderRadioItemBody: (
    item: RadioItemBodyProps,
    option: OptionProps,
  ) => ReactElement
  control: Control<any>
  icon?: IconProps
  password?: boolean
  label?: string
  containerClassName?: string
  inputClassName?: string
}

export function InputRadio({
  options,
  control,
  name,
  renderRadioItemBody,
}: InputRadioProps) {
  const [selected, setSelected] = useState<OptionProps>({} as OptionProps)

  console.log(selected)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="rdoui-w-full">
          <div className="rdoui-w-full rdoui-max-w-md">
            <RadioGroup
              value={field.value}
              onChange={(option: OptionProps) => {
                field.onChange(option.value)
                setSelected(option)
              }}
            >
              <RadioGroup.Label className="rdoui-sr-only">
                Server size
              </RadioGroup.Label>
              <div className="rdoui-space-y-2">
                {options.map((option) => (
                  <RadioGroup.Option
                    key={option.value}
                    value={option}
                    className="rdoui-cursor-pointer"
                  >
                    {(item) =>
                      renderRadioItemBody(
                        {
                          active: item.active,
                          checked:
                            item.active || selected.value === option.value,
                        },
                        option,
                      )
                    }
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      )}
    />
  )
}
