import type { StoryObj, Meta } from '@storybook/react'
import { Navbar, NavbarProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  args: {
    logo: (
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500">
        <span className="text-2xl text-white font-bold tracking-tight">L</span>
      </div>
    ),
    cta: (
      <button className="bg-black text-white px-14 py-4 rounded-[8px]">
        action
      </button>
    ),
    wrapperClassName: 'py-[2.5rem]'
  }
} as Meta<NavbarProps>

export const ElementsWithEqualSpace: StoryObj<NavbarProps> = {
  args: {
    navigationItems: (
      <ul className="flex flex-col md:flex-row gap-2 mb-2 md:mb-0 md:gap-[5rem] flex-1 justify-center">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    )
  }
}

export const ElementsEnd: StoryObj<NavbarProps> = {
  args: {
    navigationItems: (
      <ul className="flex flex-col md:flex-row gap-2 md:gap-[5rem] flex-1 justify-end mr-0 md:mr-[3.625rem]">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    )
  }
}
