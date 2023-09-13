import { Meta, StoryObj } from '@storybook/react'
import { InputTextProps } from '@rubensdeoliveira-ui/react'
import { InputTextHelper } from './input-text.component.wrapper'

export default {
  title: 'Components/InputText',
  component: InputTextHelper,
  args: {
    name: 'password',
    containerClassName: 'bg-white',
  },
} as Meta<InputTextProps>

export const Sample: StoryObj<InputTextProps> = {}
