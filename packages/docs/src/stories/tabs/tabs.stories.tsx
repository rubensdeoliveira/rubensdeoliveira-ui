import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsProps } from '@rubensdeoliveira-ui/react'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    tabContents: [
      { children: <p>Tab 1</p>, tabTitle: 'Tab 1' },
      { children: <p>Tab 2</p>, tabTitle: 'Tab 2' },
      { children: <p>Tab 3</p>, tabTitle: 'Tab 3' },
    ],
  },
} as Meta<TabsProps>

export default meta
type Story = StoryObj<typeof Tabs>

export const Sample: Story = {}
