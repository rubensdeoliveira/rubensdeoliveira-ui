import { Meta, StoryObj } from '@storybook/react'
import { InputCheckboxProps } from '@rubensdeoliveira-ui/react'
import { InputCheckboxHelper } from './input-checkbox.component.wrapper'

export default {
  title: 'Components/InputCheckbox',
  component: InputCheckboxHelper,
  args: {
    name: 'field',
    label: 'Campo',
  },
} as Meta<InputCheckboxProps>

export const Sample: StoryObj<InputCheckboxProps> = {}

export const Styled: StoryObj<InputCheckboxProps> = {
  args: {
    containerClassName: 'gap-[0.8125rem]',
    iconClassName: 'text-yellow-500',
    inputClassName:
      'border-white border bg-transparent w-[19px] h-[19px] focus:ring-2',
    labelClassName: '',
    errorSpanClassName: '',
  },
}
