import { Meta, StoryObj } from '@storybook/react'
import { InputTextProps } from '@rubensdeoliveira-ui/react'
import { InputTextHelper } from './input-text.component.wrapper'

export default {
  title: 'Components/InputText',
  component: InputTextHelper,
  args: {
    name: 'password',
    inputContainerClassName: 'bg-white px-4',
    label: 'Nome',
    type: 'password',
  },
} as Meta<InputTextProps>

export const Sample: StoryObj<InputTextProps> = {}
