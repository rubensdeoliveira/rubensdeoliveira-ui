import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta

export const Primary: StoryObj = {}
