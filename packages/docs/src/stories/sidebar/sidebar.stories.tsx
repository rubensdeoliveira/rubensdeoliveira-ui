import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar, SidebarProps } from '@rubensdeoliveira-ui/react'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta<SidebarProps>

export default meta
type Story = StoryObj<typeof Sidebar>

export const Sample: Story = {
  args: {},
}
