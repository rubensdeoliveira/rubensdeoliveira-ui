import type { Meta, StoryObj } from '@storybook/react'
import { DropdownMenu, DropdownMenuProps } from '@rubensdeoliveira-ui/react'
import { FaUser } from 'react-icons/fa'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  args: {
    triggerElement: <p>open</p>,
    primaryMenuItems: [{ label: 'Item 1' }, { label: 'Item 2' }],
  },
} as Meta<DropdownMenuProps>

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Sample: Story = {}

export const Styled: Story = {
  args: {
    menuItemsClassName: 'bg-white',
    primaryMenuItems: [
      {
        label: 'Item 1',
        buttonClassName: 'text-white gap-4',
        buttonActiveClassName: 'text-black bg-red-500',
        icon: FaUser,
      },
    ],
    secondaryMenuItems: [
      {
        label: 'Item 2',
        buttonClassName: 'text-white gap-4',
        buttonActiveClassName: 'text-black',
        icon: FaUser,
      },
    ],
  },
}
