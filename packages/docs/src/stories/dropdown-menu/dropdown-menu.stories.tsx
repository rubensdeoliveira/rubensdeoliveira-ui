import type { Meta, StoryObj } from '@storybook/react'
import { DropdownMenu, DropdownMenuProps } from '@rubensdeoliveira-ui/react'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  args: {
    menuItems: [(item) => <p>teste</p>],
    openElement: <p>text</p>,
  },
} as Meta<DropdownMenuProps>

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Sample: Story = {
  args: {},
}
