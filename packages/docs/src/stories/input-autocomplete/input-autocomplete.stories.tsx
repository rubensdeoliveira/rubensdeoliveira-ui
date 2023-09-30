import { Meta, StoryObj } from '@storybook/react'
import { InputAutoCompleteProps } from '@rubensdeoliveira-ui/react'
import { InputAutoCompleteHelper } from './input-autocomplete.component.wrapper'

export default {
  title: 'Components/InputAutoComplete',
  component: InputAutoCompleteHelper,
  args: {
    name: 'field',
    label: 'Campo',
    options: [
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' },
    ],
  },
} as Meta<InputAutoCompleteProps>

export const Sample: StoryObj<InputAutoCompleteProps> = {}

export const Styled: StoryObj<InputAutoCompleteProps> = {
  args: {
    containerClassName: 'gap-[0.8125rem]',
    inputContainerClassName:
      'border-gray-500 py-[1.0625rem] px-6 border rounded-[12px] bg-white',
    labelClassName: 'leading-[1.5] font-semibold text-white',
    inputClassName: 'leading-[1.5] text-black',
    errorSpanClassName: 'text-red-500',
    optionsContainerClassName: 'bg-white rounded-[12px]',
    optionClassName: ({ active }) =>
      active ? 'bg-teal-600 text-white' : 'text-gray-900',
  },
}
