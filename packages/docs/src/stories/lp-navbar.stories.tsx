import { Meta, StoryObj } from '@storybook/react'
import { LpNavbar, LpNavbarRootProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/LpNavbar',
  component: LpNavbar.Root,
  args: {
    children: (
      <>
        <LpNavbar.DrawerContent>
          <LpNavbar.DrawerContentNavbar className="bg-white h-[132px] p-0px">
            <LpNavbar.DrawerContentNavbarOpenIcon />
            <LpNavbar.DrawerContentNavbarLogo />
            <LpNavbar.DrawerContentNavbarItems>
              <ul className="flex items-center gap-[80px]">
                <li>Link 1</li>
                <li>Link 2</li>
              </ul>
            </LpNavbar.DrawerContentNavbarItems>
          </LpNavbar.DrawerContentNavbar>
          <LpNavbar.DrawerContentChildren>
            <p>conteudo</p>
          </LpNavbar.DrawerContentChildren>
        </LpNavbar.DrawerContent>
        <LpNavbar.DrawerSide>
          <ul className="flex flex-col bg-black w-[100%] max-w-[320px]">
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </LpNavbar.DrawerSide>
      </>
    ),
  },
} as Meta<LpNavbarRootProps>

export const Default: StoryObj<LpNavbarRootProps> = {}
