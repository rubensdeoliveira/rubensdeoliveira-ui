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
  errorSpanClassName?: string
  errors?: FieldErrors<any>
  labelClassName?: string
  inputContainerClassName?: string
  optionClassName?: ({ active }: { active: boolean }) => string
  optionsContainerClassName?: string
  defaultValue?: string[]
}

const containerStyles = cva('rdoui-w-full rdoui-flex rdoui-flex-col')
const inputContainerStyles = cva(
  'rdoui-flex rdoui-gap-3 rdoui-items-center rdoui-w-full rdoui-text-left',
)
const labelStyles = cva('')
const errorSpanStyles = cva('')
const optionsContainerStyles = cva(
  'rdoui-absolute rdoui-z-10 rdoui-mt-1 rdoui-max-h-60 rdoui-w-full rdoui-overflow-auto rdoui-py-1 focus:rdoui-outline-none',
)

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
  optionsContainerClassName,
  optionClassName,
  defaultValue,
  ...rest
}: InputMultSelectProps) {
  const optionsWithoutLabel = options.map((optionItem) => optionItem.value)

  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    defaultValue ?? [],
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
                    {field.value
                      ? options
                          .filter((option) =>
                            field.value.includes(option.value),
                          )
                          .map((option) => option.label)
                          .join(', ')
                      : selectedOptions
                          .map(
                            (selectedOption) =>
                              options.find(
                                (optionItem) =>
                                  optionItem.value === selectedOption,
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
                  <Listbox.Options
                    className={optionsContainerStyles({
                      className: optionsContainerClassName,
                    })}
                  >
                    {optionsWithoutLabel.map((option) => (
                      <Listbox.Option
                        key={option}
                        value={option}
                        className={({ active }) =>
                          `rdoui-relative rdoui-cursor-default rdoui-select-none rdoui-py-2 rdoui-pl-10 rdoui-pr-4 ${
                            optionClassName && optionClassName({ active })
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`rdoui-block rdoui-truncate ${
                                field.value.includes(option) ||
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
                            {field.value.includes(option) ||
                            selectedOptions.includes(option) ? (
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
