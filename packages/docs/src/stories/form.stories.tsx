import type { StoryObj, Meta } from '@storybook/react'
import { Form, FormProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Form',
  component: Form,
  args: {
    children: <span>Testando o elemento Form</span>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<FormProps>

export const Primary: StoryObj<FormProps> = {}
