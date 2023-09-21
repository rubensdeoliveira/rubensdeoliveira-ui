import { Fragment, InputHTMLAttributes, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { cva } from 'class-variance-authority'
import { Control, Controller } from 'react-hook-form'
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
  inputClassName?: string
}

const containerStyles = cva(
  'rdoui-flex rdoui-gap-3 rdoui-items-center rdoui-w-full rdoui-cursor-default rdoui-bg-white rdoui-py-[1.125rem] rdoui-pl-3 rdoui-pr-10 rdoui-text-left focus:rdoui-outline-none sm:rdoui-text-sm',
)

export function InputSelect({
  containerClassName,
  name,
  control,
  options,
}: InputSelectProps) {
  const [selectedOption, setSelectedOption] = useState(options[0])

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="rdoui-w-full">
          <Listbox
            value={field.value}
            onChange={(option: OptionProps) => {
              field.onChange(option.value)
              setSelectedOption(option)
            }}
          >
            <div className="rdoui-relative">
              <Listbox.Button
                className={containerStyles({ className: containerClassName })}
              >
                <span className="rdoui-block rdoui-truncate flex-1">
                  {selectedOption.label}
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
                <Listbox.Options className="rdoui-absolute rdoui-mt-1 rdoui-max-h-60 rdoui-w-full rdoui-overflow-auto rdoui-rounded-md rdoui-bg-white rdoui-py-1 rdoui-text-base rdoui-shadow-lg rdoui-ring-1 rdoui-ring-black rdoui-ring-opacity-5 focus:rdoui-outline-none sm:rdoui-text-sm">
                  {options.map((option, optionIdx) => (
                    <Listbox.Option
                      key={optionIdx}
                      className={({ active }) =>
                        `rdoui-relative rdoui-cursor-default rdoui-select-none rdoui-py-2 rdoui-pl-10 rdoui-pr-4 ${
                          active || selectedOption.value === option.value
                            ? 'rdoui-bg-amber-100 rdoui-text-amber-900'
                            : 'rdoui-text-gray-900'
                        }`
                      }
                      value={option}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`rdoui-block rdoui-truncate ${
                              selectedOption.value === option.value
                                ? 'rdoui-font-medium'
                                : 'rdoui-font-normal'
                            }`}
                          >
                            {option.label}
                          </span>
                          {selectedOption.value === option.value ? (
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
      )}
    />
  )
}
