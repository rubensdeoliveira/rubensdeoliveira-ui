import { Meta, StoryObj } from '@storybook/react'
import { InputTextUncontrolledProps } from '@rubensdeoliveira-ui/react'
import { InputTextUncontrolledHelper } from './input-text-uncontrolled.component.wrapper'

export default {
  title: 'Components/InputTextUncontrolled',
  component: InputTextUncontrolledHelper,
  args: {
    name: 'password',
    inputContainerClassName: 'bg-white px-4',
    label: 'Nome',
    type: 'password',
  },
} as Meta<InputTextUncontrolledProps>

export const Sample: StoryObj<InputTextUncontrolledProps> = {}
