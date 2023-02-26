import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
  },
  argTypes: {
    size: {
      options: ['12', '14', '16', '18', '20'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
  args: {
    size: '16',
  },
}
export const Size12: StoryObj<TextProps> = {
  args: {
    size: '12',
  },
}

export const Size20: StoryObj<TextProps> = {
  args: {
    size: '20',
  },
}

export const Heading: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <h1>Heading</h1>,
  },
}
