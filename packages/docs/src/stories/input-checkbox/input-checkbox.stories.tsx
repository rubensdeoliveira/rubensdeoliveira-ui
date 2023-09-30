import { Meta, StoryObj } from '@storybook/react'
import { InputCheckboxProps } from '@rubensdeoliveira-ui/react'
import { InputCheckboxHelper } from './input-checkbox.component.wrapper'

export default {
  title: 'Components/InputCheckbox',
  component: InputCheckboxHelper,
  args: {
    name: 'password',
    label: 'Nome',
    type: 'password',
    inputClassName: '',
  },
} as Meta<InputCheckboxProps>

export const Sample: StoryObj<InputCheckboxProps> = {}
