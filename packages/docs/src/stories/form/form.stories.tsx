import type { StoryObj, Meta } from '@storybook/react'
import { Form, FormModel } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Form/Form',
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
} as Meta<FormModel>

export const Primary: StoryObj<FormModel> = {}
