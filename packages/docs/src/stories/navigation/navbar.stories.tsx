import type { StoryObj, Meta } from '@storybook/react'
import { Navbar, NavbarModel } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
  args: {
    elementsLeft: <p>logo</p>,
    navigationItems: <a>Home</a>,
    elementsRight: <p>Button</p>,
    paddingY: 16,
  },
} as Meta<NavbarModel>

export const Primary: StoryObj<NavbarModel> = {}
