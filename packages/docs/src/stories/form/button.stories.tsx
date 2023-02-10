import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonModel } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    label: 'string',
    buttonType: 'dashboard',
  },
} as Meta<ButtonModel>

export const Primary: StoryObj<ButtonModel> = {}
