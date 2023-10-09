import { Meta, StoryObj } from '@storybook/react'
import { InputDateProps } from '@rubensdeoliveira-ui/react'
import { InputDateHelper } from './input-date.component.wrapper'

export default {
  title: 'Components/InputDate',
  component: InputDateHelper,
  args: {
    name: 'birthdate',
    inputContainerClassName: 'bg-white px-4',
    label: 'Data de Nascimento',
  },
} as Meta<InputDateProps>

export const Sample: StoryObj<InputDateProps> = {}
