import { Meta, StoryObj } from '@storybook/react'
import { InputCheckboxUncontrolledProps } from '@rubensdeoliveira-ui/react'
import { InputCheckboxUncontrolledHelper } from './input-checkbox-uncontrolled.component.wrapper'

export default {
  title: 'Components/InputCheckboxUncontrolled',
  component: InputCheckboxUncontrolledHelper,
  args: {
    name: 'field',
    label: 'Campo',
  },
} as Meta<InputCheckboxUncontrolledProps>

export const Sample: StoryObj<InputCheckboxUncontrolledProps> = {}

export const Styled: StoryObj<InputCheckboxUncontrolledProps> = {
  args: {
    containerClassName: 'gap-[0.8125rem]',
    iconClassName: 'text-yellow-500',
    inputClassName:
      'border-white border bg-transparent w-[19px] h-[19px] focus:ring-2',
    labelClassName: '',
  },
}
