import type { Meta, StoryObj } from '@storybook/react'
import { Separator, SeparatorProps } from '@rubensdeoliveira-ui/react'

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  args: {
    text: 'Texto',
    lineClassName: 'bg-black',
  },
} as Meta<SeparatorProps>

export default meta
type Story = StoryObj<typeof Separator>

export const Sample: Story = {
  args: {},
}
