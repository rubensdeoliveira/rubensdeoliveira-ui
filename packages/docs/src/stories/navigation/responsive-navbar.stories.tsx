import type { StoryObj, Meta } from '@storybook/react'
import {
  ResponsiveNavbar,
  ResponsiveNavbarModel,
} from '@rubensdeoliveira-ui/react'

export default {
  title: 'Navigation/ResponsiveNavbar',
  component: ResponsiveNavbar,
  args: {
    children: <span>Conteudo da navbar</span>,
    navbarMenuItems: [
      {
        liChildren: <a>Home</a>,
        isActive: true,
      },
    ],
    navbarFixedItems: [
      {
        liChildren: <a>Fixed</a>,
      },
    ],
    navbarLogo: <a>Logo</a>,
    className: 'bg-blue-500',
  },
} as Meta<ResponsiveNavbarModel>

export const Primary: StoryObj<ResponsiveNavbarModel> = {}
