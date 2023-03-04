/* eslint-disable react/jsx-key */
import type { StoryObj, Meta } from '@storybook/react'
import { Navbar, NavbarRootProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Navbar',
  component: Navbar.Root,
  args: {
    children: [
      <Navbar.Main>
        <Navbar.Bar>
          <Navbar.BarLogo>
            <img
              alt="Logo"
              src="https://cdn-icons-png.flaticon.com/512/187/187830.png?w=1800&t=st=1677394510~exp=1677395110~hmac=cf12f61ad348fb9f8294a1a53d00a001b8d26286afe9c2f9c499c20ee26e2001"
              className="h-24px w-24px"
            />
            <span>Minha logo</span>
          </Navbar.BarLogo>
          <Navbar.BarMenuItems>
            <a>Home</a>
            <a>Serviços</a>
          </Navbar.BarMenuItems>
          <Navbar.BarAction>
            <button>Açāo</button>
          </Navbar.BarAction>
        </Navbar.Bar>
        <Navbar.Content>Olá mundo</Navbar.Content>
      </Navbar.Main>,
      <Navbar.Aside>
        <Navbar.AsideMenuItems>
          <a>Home</a>
          <a>Serviços</a>
        </Navbar.AsideMenuItems>
      </Navbar.Aside>,
    ],
  },
} as Meta<NavbarRootProps>

export const Default: StoryObj<NavbarRootProps> = {}
