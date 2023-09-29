import { Fragment, InputHTMLAttributes, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { cva } from 'class-variance-authority'
import { HiChevronUpDown, HiCheck } from 'react-icons/hi2'

type OptionProps = {
  value: string
  label: string
}

export type InputMultSelectProps = Omit<
  InputHTMLAttributes<HTMLSelectElement>,
  'className'
> & {
  name: string
  control: Control<any>
  options: OptionProps[]
  label?: string
  containerClassName?: string
  inputClassName?: string
  errorSpanClassName?: string
  errors?: FieldErrors<any>
  labelClassName?: string
  inputContainerClassName?: string
}

const containerStyles = cva('rdoui-w-full rdoui-flex rdoui-flex-col')

const inputContainerStyles = cva(
  'rdoui-flex rdoui-items-center rdoui-gap-3 rdoui-w-full rdoui-cursor-default rdoui-overflow-hidden rdoui-text-left focus:rdoui-outline-none',
)

const errorSpanStyles = cva('')

const labelStyles = cva('')

export function InputMultSelect({
  control,
  name,
  options,
  containerClassName,
  errorSpanClassName,
  errors,
  labelClassName,
  label,
  inputContainerClassName,
}: InputMultSelectProps) {
  const optionsWithoutLabel = options.map((optionItem) => optionItem.value)

  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  return (
    <Controller
      name={name}
      control={control}
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
          <div className="rdoui-w-full">
            <Listbox
              value={field.value}
              onChange={(option: string[]) => {
                field.onChange(option)
                setSelectedOptions(option)
              }}
              multiple
            >
              <div className="rdoui-relative">
                <Listbox.Button
                  className={inputContainerStyles({
                    className: inputContainerClassName,
                  })}
                >
                  <span className="rdoui-block rdoui-truncate flex-1">
                    {selectedOptions
                      .map(
                        (selectedOption) =>
                          options.find(
                            (optionItem) => optionItem.value === selectedOption,
                          )?.label,
                      )
                      .join(', ')}
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
                  <Listbox.Options className="rdoui-absolute rdoui-mt-1 rdoui-max-h-60 rdoui-w-full rdoui-overflow-auto rdoui-rounded-md  rdoui-py-1 rdoui-text-base rdoui-shadow-lg rdoui-ring-1 rdoui-ring-black rdoui-ring-opacity-5 focus:rdoui-outline-none sm:rdoui-text-sm">
                    {optionsWithoutLabel.map((option) => (
                      <Listbox.Option
                        key={option}
                        value={option}
                        className={({ active }) =>
                          `rdoui-relative rdoui-cursor-default rdoui-select-none rdoui-py-2 rdoui-pl-10 rdoui-pr-4 ${
                            active || selectedOptions.includes(option)
                              ? 'rdoui-bg-amber-100 rdoui-text-amber-900'
                              : 'rdoui-text-gray-900'
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`rdoui-block rdoui-truncate ${
                                selectedOptions.includes(option)
                                  ? 'rdoui-font-medium'
                                  : 'rdoui-font-normal'
                              }`}
                            >
                              {
                                options.find(
                                  (optionItem) => optionItem.value === option,
                                )?.label
                              }
                            </span>
                            {selectedOptions.includes(option) ? (
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
