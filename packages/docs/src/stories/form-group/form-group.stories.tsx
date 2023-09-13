import type { StoryObj, Meta } from '@storybook/react'
import { FormGroup, FormGroupProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/FormGroup',
  component: FormGroup,
  args: {
    children: <span>Testando o elemento FormGroup</span>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<FormGroupProps>

export const Sample: StoryObj<FormGroupProps> = {}
