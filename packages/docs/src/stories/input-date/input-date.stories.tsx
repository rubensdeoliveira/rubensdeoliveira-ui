import { Meta, StoryObj } from '@storybook/react'
import { InputDateProps } from '@rubensdeoliveira-ui/react-datepicker'
import { InputDateHelper } from './input-date.component.wrapper'

export default {
  title: 'Components/InputDate',
  component: InputDateHelper,
  args: {
    name: 'birthdate',
  },
} as Meta<InputDateProps>

export const Sample: StoryObj<InputDateProps> = {}
