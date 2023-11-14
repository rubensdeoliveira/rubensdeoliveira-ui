import { Fragment, InputHTMLAttributes, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { cva } from 'class-variance-authority'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { HiChevronUpDown, HiCheck } from 'react-icons/hi2'

type OptionProps = {
  value: string
  label: string
}

export type InputSelectProps = Omit<
  InputHTMLAttributes<HTMLSelectElement>,
  'className'
> & {
  name: string
  control: Control<any>
  options: OptionProps[]
  label?: string
  containerClassName?: string
  inputContainerClassName?: string
  errorSpanClassName?: string
  labelClassName?: string
  errors?: FieldErrors<any>
  optionClassName?: ({ active }: { active: boolean }) => string
  optionsContainerClassName?: string
}

const containerStyles = cva('rdoui-w-full rdoui-flex rdoui-flex-col')
const inputContainerStyles = cva(
  'rdoui-flex rdoui-gap-3 rdoui-items-center rdoui-w-full rdoui-text-left rdoui-overflow-hidden',
)
const labelStyles = cva('')
const errorSpanStyles = cva('')
const optionsContainerStyles = cva(
  'rdoui-absolute rdoui-z-10 rdoui-mt-1 rdoui-max-h-60 rdoui-w-full rdoui-overflow-auto rdoui-py-1 focus:rdoui-outline-none',
)

export function InputSelect({
  containerClassName,
  name,
  control,
  options,
  inputContainerClassName,
  labelClassName,
  errors,
  label,
  errorSpanClassName,
  optionClassName,
  optionsContainerClassName,
  defaultValue,
  placeholder,
  ...rest
}: InputSelectProps) {
  const [selectedOption, setSelectedOption] = useState<OptionProps | null>(
    options.length > 0
      ? options.find((option) => option.value === defaultValue) || {
          label: placeholder ?? '',
          value: '',
        }
      : { label: placeholder ?? '', value: '' },
  )

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
          <div className="rdoui-w-full">
            <Listbox
              {...rest}
              value={selectedOption}
              onChange={(option: OptionProps) => {
                field.onChange(option.value)
                setSelectedOption(option)
              }}
            >
              <div className="rdoui-relative">
                <Listbox.Button
                  className={inputContainerStyles({
                    className: inputContainerClassName,
                  })}
                >
                  <span className="rdoui-block rdoui-truncate flex-1">
                    {selectedOption?.label ?? placeholder}
                  </span>
                  <span className="rdoui-pointer-events-none rdoui-flex rdoui-items-center">
                    <HiChevronUpDown
                      className="rdoui-h-5 rdoui-w-5 rdoui-text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    className={optionsContainerStyles({
                      className: optionsContainerClassName,
                    })}
                  >
                    {options.map((option, optionIdx) => (
                      <Listbox.Option
                        key={optionIdx}
                        className={({ active }) =>
                          `rdoui-relative rdoui-cursor-default rdoui-select-none rdoui-py-2 rdoui-pl-10 rdoui-pr-4 ${
                            optionClassName && optionClassName({ active })
                          }`
                        }
                        value={option}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`rdoui-block rdoui-truncate ${
                                selectedOption?.value === option.value
                                  ? 'rdoui-font-medium'
                                  : 'rdoui-font-normal'
                              }`}
                            >
                              {option.label}
                            </span>
                            {selectedOption?.value === option.value ? (
                              <span className="rdoui-absolute rdoui-inset-y-0 rdoui-left-0 rdoui-flex rdoui-items-center rdoui-pl-3 rdoui-text-amber-600">
                                <HiCheck
                                  className="rdoui-h-5 rdoui-w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
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
