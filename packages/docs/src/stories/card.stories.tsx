import { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    children: <p>Card content</p>,
    className: 'bg-red-500',
  },
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {
  args: {},
}
