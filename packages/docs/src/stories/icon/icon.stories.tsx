import type { StoryObj, Meta } from '@storybook/react'
import { Icon, IconModel } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Icon/Icon',
  component: Icon,
  args: {
    name: 'AdjustmentsHorizontalIcon',
    className: 'text-white',
    size: 24,
    type: 'outline',
  },
} as Meta<IconModel>

export const Primary: StoryObj<IconModel> = {}
