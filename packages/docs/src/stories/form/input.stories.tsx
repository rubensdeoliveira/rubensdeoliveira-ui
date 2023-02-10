import type { StoryObj, Meta } from '@storybook/react'
import { Input, InputModel } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    label: 'E-mail',
    name: 'email',
  },
} as Meta<InputModel>

export const Primary: StoryObj<InputModel> = {}
