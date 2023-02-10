import type { StoryObj, Meta } from '@storybook/react'
import { FormRow, FormRowModel } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Form/FormRow',
  component: FormRow,
  args: {
    children: <span>Testando o elemento FormRow</span>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<FormRowModel>

export const Primary: StoryObj<FormRowModel> = {}
