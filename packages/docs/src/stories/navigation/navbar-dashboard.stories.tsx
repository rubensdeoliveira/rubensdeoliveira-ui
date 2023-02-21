import type { StoryObj, Meta } from '@storybook/react'
import {
  NavbarDashboard,
  NavbarDashboardModel,
} from '@rubensdeoliveira-ui/react'

export default {
  title: 'Navigation/NavbarDashboard',
  component: NavbarDashboard,
  args: {
    logo: <p>logo</p>,
    navigationItems: [{ liChildren: <a>Home</a> }],
    ctaButton: <p>Button</p>,
    style: { bar: 'bg-red-500', container: 'py-6', mobileMenu: 'bg-blue-500' },
  },
} as Meta<NavbarDashboardModel>

export const Primary: StoryObj<NavbarDashboardModel> = {}
