import { Avatar } from '@rubensdeoliveira-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Components/Avatar',
  argTypes: {
    name: { name: 'name', description: 'string', type: { name: 'string' } },
    size: {
      name: 'size',
      description: 'string',
      type: { name: 'enum', value: [16, 24, 32, 48, 56, 72, 96, 192] },
    },
    imageUrl: {
      name: 'imageUrl',
      description: 'string',
      type: { name: 'string' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Photo: Story = {
  args: {
    imageUrl: 'https://github.com/rubensdeoliveira.png',
  },
}

export const Name: Story = {
  args: {
    name: 'rubens de oliveira',
  },
}

export const Empty: Story = {
  args: {},
}

export const Size: Story = {
  args: { size: 96 },
}
