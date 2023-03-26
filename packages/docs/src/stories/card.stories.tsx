import { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    children: <p>Card content</p>,
    className: 'bg-red-500',
    borderRadius: undefined,
    px: undefined,
    py: undefined,
  },
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {}

export const Rounded: StoryObj<CardProps> = {
  args: {
    borderRadius: '50%',
  },
}

export const WithBorder20: StoryObj<CardProps> = {
  args: {
    borderRadius: 20,
  },
}

export const WithPadding: StoryObj<CardProps> = {
  args: {
    px: 10,
    py: 10,
  },
}
