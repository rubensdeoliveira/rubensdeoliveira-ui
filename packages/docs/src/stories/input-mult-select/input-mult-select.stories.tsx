import { Meta, StoryObj } from '@storybook/react'
import { InputMultSelectProps } from '@rubensdeoliveira-ui/react'
import { InputMultSelectHelper } from './input-mult-select.component.wrapper'

export default {
  title: 'Components/InputMultSelect',
  component: InputMultSelectHelper,
  args: {
    name: 'field',
    label: 'Campo',
    options: [
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' },
    ],
  },
} as Meta<InputMultSelectProps>

export const Sample: StoryObj<InputMultSelectProps> = {}

export const Styled: StoryObj<InputMultSelectProps> = {
  args: {
    containerClassName: 'gap-[0.8125rem]',
    inputContainerClassName:
      'border-gray-500 py-[1.0625rem] px-6 border rounded-[12px] bg-white',
    labelClassName: 'leading-[1.5] font-semibold text-white',
    errorSpanClassName: 'text-red-500',
    optionsContainerClassName: 'bg-white rounded-[12px]',
    optionClassName: ({ active }) =>
      active ? 'bg-teal-600 text-white' : 'text-gray-900',
  },
}
