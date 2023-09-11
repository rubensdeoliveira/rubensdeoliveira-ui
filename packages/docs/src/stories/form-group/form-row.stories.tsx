import type { StoryObj, Meta } from '@storybook/react'
import { FormRow, FormRowProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/FormRow',
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
} as Meta<FormRowProps>

export const Primary: StoryObj<FormRowProps> = {}
