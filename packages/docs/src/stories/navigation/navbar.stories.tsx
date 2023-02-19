import type { StoryObj, Meta } from '@storybook/react'
import { Navbar, NavbarModel } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
  args: {
    logo: <p>logo</p>,
    navigationItems: [{ liChildren: <a>Home</a> }],
    ctaButton: <p>Button</p>,
    style: { bar: 'bg-red-500', container: 'py-6', mobileMenu: 'bg-blue-500' },
  },
} as Meta<NavbarModel>

export const Primary: StoryObj<NavbarModel> = {}
