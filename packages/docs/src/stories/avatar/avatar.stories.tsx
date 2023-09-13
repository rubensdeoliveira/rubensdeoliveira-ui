import { Avatar } from '@rubensdeoliveira-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Components/Avatar',
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Photo: Story = {
  args: {
    imageUrl: 'https://github.com/rubensdeoliveira.png',
    name: 'Rubens de Oliveira',
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
  args: { size: '96', name: 'Luana' },
}
