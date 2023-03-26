import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    className: '',
    lineHeight: 1,
    size: 16,
    mb: 0,
    mt: 0,
    weight: 400,
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Size32: StoryObj<TextProps> = {
  args: {
    size: 32,
  },
}

export const Bold: StoryObj<TextProps> = {
  args: {
    weight: 600,
  },
}

export const Heading: StoryObj<TextProps> = {
  args: {
    as: 'h1',
  },
}
