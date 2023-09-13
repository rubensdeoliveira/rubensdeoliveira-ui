import type { StoryObj, Meta } from '@storybook/react'
import { Form, FormProps } from '@rubensdeoliveira-ui/react'
import { FormWrapper } from './form.component.wrapper'

export default {
  title: 'Components/Form',
  component: Form,
  args: {
    children: <FormWrapper />,
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
