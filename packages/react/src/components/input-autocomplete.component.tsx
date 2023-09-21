import { Fragment, InputHTMLAttributes, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { Control, Controller } from 'react-hook-form'
import { cva } from 'class-variance-authority'
import { HiChevronUpDown, HiCheck } from 'react-icons/hi2'

type OptionProps = {
  value: string
  label: string
}

export type InputAutoCompleteProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
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
  'rdoui-flex rdoui-items-center rdoui-gap-3 rdoui-w-full rdoui-cursor-default rdoui-overflow-hidden rdoui-bg-white rdoui-text-left rdoui-shadow-md focus:rdoui-outline-none sm:rdoui-text-sm',
)

const inputStyles = cva(
  'rdoui-w-full rdoui-border-none rdoui-outline-none rdoui-text-sm rdoui-text-gray-900',
)

export function InputAutoComplete({
  control,
  name,
  options,
  containerClassName,
  inputClassName,
}: InputAutoCompleteProps) {
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? options
      : options.filter((option) =>
          option.value
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="rdoui-w-full">
          <Combobox
            value={field.value}
            onChange={(option: OptionProps) => {
              field.onChange(option.value)
              setSelectedOption(option)
            }}
          >
            <div className="rdoui-relative">
              <div
                className={containerStyles({ className: containerClassName })}
              >
                <Combobox.Input
                  className={inputStyles({ className: inputClassName })}
                  displayValue={(option: string) => option}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="rdoui-flex rdoui-items-center">
                  <HiChevronUpDown
                    className="rdoui-h-5 rdoui-w-5 rdoui-text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="rdoui-absolute rdoui-mt-1 rdoui-max-h-60 rdoui-w-full rdoui-overflow-auto rdoui-rounded-md rdoui-bg-white rdoui-py-1 rdoui-text-base rdoui-shadow-lg focus:rdoui-outline-none sm:rdoui-text-sm">
                  {filteredPeople.length === 0 && query !== '' ? (
                    <div className="rdoui-relative rdoui-cursor-default rdoui-select-none rdoui-py-2 rdoui-px-4 rdoui-text-gray-700">
                      Nenhum resultado encontrado para a pesquisa.
                    </div>
                  ) : (
                    filteredPeople.map((option) => (
                      <Combobox.Option
                        key={option.value}
                        className={({ active }) =>
                          `rdoui-relative rdoui-cursor-default rdoui-select-none rdoui-py-2 rdoui-pl-10 rdoui-pr-4 ${
                            active
                              ? 'rdoui-bg-teal-600 rdoui-text-white'
                              : 'rdoui-text-gray-900'
                          }`
                        }
                        value={option}
                      >
                        {({ selected, active }) => (
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
                              <span
                                className={`rdoui-absolute rdoui-inset-y-0 rdoui-left-0 rdoui-flex rdoui-items-center rdoui-pl-3 ${
                                  active
                                    ? 'rdoui-text-white'
                                    : 'rdoui-text-teal-600'
                                }`}
                              >
                                <HiCheck
                                  className="rdoui-h-5 rdoui-w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
      )}
    />
  )
}
