import { Meta, StoryObj } from '@storybook/react'
import { InputTextProps } from '@rubensdeoliveira-ui/react'
import { InputTextWithForm } from './input-text-with-form.component'

export default {
  title: 'Components/InputText',
  component: InputTextWithForm,
  args: {
    name: 'password',
    containerClassName: 'bg-white',
  },
} as Meta<InputTextProps>

export const Sample: StoryObj<InputTextProps> = {}
