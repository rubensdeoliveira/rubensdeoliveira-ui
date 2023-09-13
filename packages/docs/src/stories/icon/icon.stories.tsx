import type { StoryObj, Meta } from '@storybook/react'
import { Icon, IconProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    name: 'AdjustmentsHorizontalIcon',
    className: 'text-white',
    size: 24,
    type: 'outline',
  },
} as Meta<IconProps>

export const Sample: StoryObj<IconProps> = {}
