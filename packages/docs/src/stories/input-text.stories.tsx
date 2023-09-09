import { Meta, StoryObj } from '@storybook/react'
import { InputText, InputTextProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/InputText',
  component: InputText,
  args: {
    name: 'password',
    icon: { name: 'AcademicCapIcon' },
  },
} as Meta<InputTextProps>

export const Default: StoryObj<InputTextProps> = {}
